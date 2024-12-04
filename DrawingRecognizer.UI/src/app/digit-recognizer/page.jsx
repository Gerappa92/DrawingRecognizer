"use client";
import Header from "../components/Header";
import DrawBoard from "../components/DrawBoard/DrawBoard";
import ProcessDrawBoard from "../components/DrawBoard/ProcessDrawBoard";
import { useState } from "react";
import Digit from "./Digit";

export default function DigitRecognizer() {
  const [digit, setDigit] = useState(null)

  const handleOnPredict = async  (imageData) => {
        // Assuming imageData is a base64 string.
        const blob = base64ToBlob(imageData, "image/png");
        const formData = new FormData();
        formData.append("file", blob, "image.png");
        try {
            const response = await fetch("http://127.0.0.1:8000/predict-digit", {
              method: "POST",
              body: formData,
              headers: {
                "Accept": "application/json",
              },
            });
      
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
      
            const data = await response.json();
            setDigit(data.digit);
          } catch (error) {
            console.error("There has been a problem with your fetch operation:", error);
          }
  };

  return (
    <>
      <Header
        title="Digit Recognizer"
        subtitle="Draw a number and let the AI Agent guess what it is"
      />
      <ProcessDrawBoard name="Predict Digit" width={240} height={240} lineWidth={12} onProcessImage={handleOnPredict} />
      {digit && <Digit digit={digit} />}
    </>
  );
}

function base64ToBlob(base64, contentType) {
    const byteCharacters = atob(base64.split(",")[1]);
    const byteNumbers = new Array(byteCharacters.length);
  
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
  
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
  }