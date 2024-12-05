"use client"
import { useState } from "react";
import ProcessDrawBoard from "../components/DrawBoard/ProcessDrawBoard";
import BoxSection from "../components/Layout/BoxSection";
import Header from "../components/Layout/Header";
import Container from "../components/Layout/Container";

import { base64ToBlob } from "../utils/imgUtils";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Layout/Loader";
import Panel from "../components/Layout/Panel";

export default function SketchDescriber() {
    const [predictImg, data, loading] = useFetch("http://127.0.0.1:8000/predict-img", {
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
            {loading && <Loader />}
            {data && !loading &&
                <BoxSection margin="20px 200px" padding="40px">
                    <Container>
                        <h1>Is it</h1>
                        <p>{data.caption}?</p>
                    </Container>
                </BoxSection>}

                <Panel title="What is going on here?">Here goes some long explanation.</Panel>
        </>
    )
}