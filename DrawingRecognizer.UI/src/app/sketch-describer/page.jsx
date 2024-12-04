"use client"
import { useState } from "react";
import ProcessDrawBoard from "../components/DrawBoard/ProcessDrawBoard";
import BoxSection from "../components/Layout/BoxSection";
import Header from "../components/Layout/Header";
import Container from "../components/Layout/Container";

import { base64ToBlob } from "../utils/imgUtils";
import useFetch from "../hooks/useFetch";

export default function SketchDescriber() {
    const [guess, setGuess] = useState(null);

    const [ predictImg, data ] = useFetch("http://127.0.0.1:8000/predict-img", {
        method: "POST",
        headers: {
            "Accept": "application/json",
        },
    });

    const canvasWidth = 640;
    const canvasHeight = 640;

    const handleGuess = async (imageData) => {
        // Assuming imageData is a base64 string.
        const blob = base64ToBlob(imageData, "image/png");
        const formData = new FormData();
        formData.append("file", blob, "image.png");
        await predictImg(formData);
    }

    return (
        <>
            <Header
                title="Sketch Describer"
                subtitle="Let me guess what you draw"
            />
            <BoxSection margin="20px 200px" padding="40px">
                <Container>
                    <ProcessDrawBoard
                        name="Guess"
                        width={canvasWidth}
                        height={canvasHeight}
                        lineWidth={25}
                        onProcessImage={handleGuess} />
                </Container>
            </BoxSection>
            {data &&
            <BoxSection margin="20px 200px" padding="40px">
                <Container>
                     <p>{data.caption}</p>
                </Container>
            </BoxSection>}
        </>
    )
}