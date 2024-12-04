"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Layout/Header";
import BoxSection from "../components/Layout/BoxSection";
import ProcessDrawBoard from "../components/DrawBoard/ProcessDrawBoard";
import Select from "../components/Layout/Select";
import styles from "./page.module.css"
import Container from "../components/Layout/Container";

export default function Redraw() {
  const [generatedImage, setGeneratedImage] = useState(null);
  const [genStyle, setGenStyle] = useState(null);
  const [genStyleLabel, setGenStyleLabel] = useState(null);

  const canvasWidth = 640;
  const canvasHeight = 640;

  const handleRedraw = (image) => {
    console.log(`Redraw an image in ${genStyle}`);
    setGeneratedImage(image);
  }

  const handleGenPropmtChange = (option) => {
    setGeneratedImage(null);
    setGenStyle(option);
    var label = styleLabel(option);
    setGenStyleLabel(label);

  }

  const styleLabel = (option) => {
    var propmt = genPromptsOptions.find(x => x.value == option)
    if(propmt){
      return propmt.label
    }
    return "";
  }

  return (
    <>
      <Header
        title="Redraw your sketch"
        subtitle="In progress"
      />

      <BoxSection margin="20px 200px" padding="40px">
        <Container>
          <Select options={genPromptsOptions} onChange={handleGenPropmtChange} />
          <ProcessDrawBoard name="Redraw" width={canvasWidth} height={canvasHeight} lineWidth={25} onProcessImage={handleRedraw} />
        </Container>
      </BoxSection>

      {generatedImage && (
        <BoxSection margin="20px 200px" padding="40px">
          <Container>
            <h3 className={styles.redrawHeader}>Redraw in {genStyleLabel} style:</h3>
            <Image
              src={generatedImage}
              alt="Generated"
              className={styles.redrawImage}
              width={canvasWidth}
              height={canvasHeight}
            />
          </Container>
        </BoxSection>
      )}
    </>

  );
}

const genPromptsOptions = [
  { label: '3D Render', value: '3d_render' },
  { label: 'Pencil Drawing', value: 'pencil_drawing' },
  { label: 'Oil Painting', value: 'oil_painting' },
  { label: 'Watercolor Painting', value: 'watercolor_painting' },
  { label: 'Digital Art', value: 'digital_art' },
  { label: 'Charcoal Sketch', value: 'charcoal_sketch' },
  { label: 'Pop Art', value: 'pop_art' },
  { label: 'Fantasy Illustration', value: 'fantasy_illustration' },
  { label: 'Line Art', value: 'line_art' },
  { label: 'Pixel Art', value: 'pixel_art' },
  { label: 'Anime Style', value: 'anime_style' },
  { label: 'Comic Book Style', value: 'comic_book' },
  { label: 'Surrealist Painting', value: 'surrealist_painting' },
  { label: 'Impressionist Style', value: 'impressionist' },
  { label: 'Minimalist Art', value: 'minimalist_art' },
  { label: 'Graffiti Art', value: 'graffiti_art' },
  { label: 'Low Poly 3D', value: 'low_poly_3d' },
  { label: 'Realistic Portrait', value: 'realistic_portrait' },
  { label: 'Isometric Art', value: 'isometric_art' },
  { label: 'Steampunk Design', value: 'steampunk_design' },
];