"use client";
import Header from "../components/Layout/Header";
import ProcessDrawBoard from "../components/DrawBoard/ProcessDrawBoard";
import Digit from "./Digit";
import BoxSection from "../components/Layout/BoxSection";
import Loader from "../components/Layout/Loader";

import { base64ToBlob } from "../utils/imgUtils";
import useFetch from "../hooks/useFetch";
import Panel from "../components/Layout/Panel";

export default function DigitRecognizer() {
  const [predictDigit, data, loading] = useFetch("http://127.0.0.1:8000/predict-digit", {
    method: "POST",
    headers: {
      "Accept": "application/json",
    },
  });

  const handleOnPredict = async (imageData) => {
    // Assuming imageData is a base64 string.
    const blob = base64ToBlob(imageData, "image/png");
    const formData = new FormData();
    formData.append("file", blob, "image.png");

    await predictDigit(formData);
  };

  return (
    <>
      <Header
        title="Digit Recognizer"
        subtitle="Draw a number and let the AI Agent guess what it is"
      />
      <BoxSection margin="20px 400px" padding="40px 0">
        <ProcessDrawBoard name="Predict Digit" width={240} height={240} lineWidth={12} onProcessImage={handleOnPredict} />
      </BoxSection>
      {loading && <Loader />}
      {data && !loading && <Digit digit={data.digit} />}

      <Panel title="What is going on here?">Here goes some long explanation.</Panel>
    </>
  );
}