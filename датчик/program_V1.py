import numpy as np
import cv2
import dlib
import pyrealsense2 as rs

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=FastAPI,
    allow_methods=["*"],
    allow_headers=["*"]
)
val = 0
@app.get("/r")
async def monitoring():
    q = val()
    print(q)
    return q

#localhost:8000/r
def initialize_camera():
    context = rs.context()
    devices = context.query_devices()
    dev = devices[0]
    config = rs.config()
    config.enable_stream(rs.stream.color, 640, 480, rs.format.rgb8, 15)
    config.enable_stream(rs.stream.depth, 640, 480, rs.format.z16, 15)
    pipeline = rs.pipeline()
    pipeline.start(config)

    detector = dlib.get_frontal_face_detector()
    predictor = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")
    depth_sensor = dev.first_depth_sensor()
    #time.sleep(0.5)
    depth_scale = 100

    return pipeline, detector, predictor, depth_scale

def average_depth_for_face(depth_frame_data, face, depth_scale):
    x, y, w, h = face.left(), face.top(), face.width(), face.height()
    center_x = x + w // 2
    center_y = y + h // 2
    face_depths = []

    region_size = 20

    for i in range(max(center_x - region_size, 0), min(center_x + region_size + 1, depth_frame_data.width)):
        for j in range(max(center_y - region_size, 0), min(center_y + region_size + 1, depth_frame_data.height)):
            if x <= i < x + w and y <= j < y + h:
                depth_point = depth_frame_data.get_distance(i, j)
                if depth_point != 0:
                    face_depths.append(depth_point)

    non_zero_face_depths = [depth for depth in face_depths if depth != 0]
    if non_zero_face_depths:
        average_face_depth = sum(non_zero_face_depths) / len(non_zero_face_depths)
        depth_in_centimeters = average_face_depth * depth_scale
        return depth_in_centimeters
    else:
        return 0

def average_depth_for_eye(landmarks, depth_frame, eye_indices,color_image):
    depth_eyes = []

    for i, n in enumerate(eye_indices, 1):
        x_eye, y_eye = landmarks.part(n).x, landmarks.part(n).y
        cv2.circle(color_image, (x_eye, y_eye), 2, (255, 0, 0), -1)

        depth_eye = depth_frame.get_distance(int(x_eye), int(y_eye))
        if depth_eye == 0:
            x_eye_alt, y_eye_alt = landmarks.part(n + 1).x, landmarks.part(n + 1).y
            depth_eye = depth_frame.get_distance(int(x_eye_alt), int(y_eye_alt))
        depth_eyes.append(depth_eye)

    non_zero_depth_eyes = [depth for depth in depth_eyes if depth != 0]
    if non_zero_depth_eyes:
        average_depth_eye = sum(non_zero_depth_eyes) / len(non_zero_depth_eyes)
        depth_in_centimeters = average_depth_eye * depth_scale
        return depth_in_centimeters
    else:
        return 0

if __name__ == "__main__":
    uvicorn.run("program_V1:app", host="0.0.0.0", port=8000, log_level="info")

pipeline, detector, predictor, depth_scale = initialize_camera()

def val():

    frames = pipeline.wait_for_frames()
    color_frame = frames.get_color_frame()
    color_image = np.asanyarray(color_frame.get_data())

    depth_frame_data = frames.get_depth_frame()

    gray = cv2.cvtColor(color_image, cv2.COLOR_BGR2GRAY)
    faces = detector(gray)

    depth_in_centimeters_face = -1
    depth_in_centimeters_eye1 = -1
    depth_in_centimeters_eye2 = -1


    for face in faces:
        x, y, w, h = face.left(), face.top(), face.width(), face.height()
        cv2.rectangle(color_image, (x, y), (x + w, y + h), (0, 255, 0), 2)
        depth_in_centimeters_face = average_depth_for_face(depth_frame_data, face, depth_scale)
        landmarks = predictor(gray, face)

        eye_indices_left = range(36, 42)
        depth_in_centimeters_eye1 = average_depth_for_eye(landmarks, depth_frame_data, eye_indices_left, color_image)

        eye_indices_right = range(42, 48)
        depth_in_centimeters_eye2 = average_depth_for_eye(landmarks, depth_frame_data, eye_indices_right, color_image)

    return str(round(depth_in_centimeters_face, 2)) + ' ' + str(round(depth_in_centimeters_eye1, 2)) + ' ' + str(round(depth_in_centimeters_eye2, 2))