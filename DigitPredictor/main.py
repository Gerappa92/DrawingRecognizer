from typing import Union

from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware

from digit_predictor_helper import predict;
from img_prediction import generate_caption;


app = FastAPI()

# Add the CORS middleware to allow communication from your UI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allows your front-end to access the API
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers
)

@app.post("/predict-digit")
async def predict_digit(file: UploadFile):
    digit_prediction = predict(file.file)
    return {"digit": digit_prediction}

@app.post("/predict-img")
async def predict_img(file: UploadFile):
    caption = generate_caption(file.file)
    return {"caption": caption}