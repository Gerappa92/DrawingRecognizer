"use client";

import { useState } from "react";
import Canvas from "./Canvas";
import Image from "next/image";

export default function Draw() {
  const [generatedImage, setGeneratedImage] = useState(null);

  const canvasWidth = 640;
  const canvasHeight = 640;

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


  return (
    <div style={styles.container}>
      <Canvas 
        width={canvasWidth}
        height={canvasHeight}
        genPromptsOptions = {genPromptsOptions}
        onGenerateImage={(img) => setGeneratedImage(img)} />

      {generatedImage && (
        <div style={styles.generatedContainer}>
          <h3 style={styles.heading}>Generated Image:</h3>
          <Image
            src={generatedImage}
            alt="Generated"
            style={styles.generatedImage}
            width={canvasWidth}
            height={canvasHeight}
          />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column", // Stack items vertically
    justifyContent: "center",
    alignItems: "center",
  },
  generatedContainer: {
    marginTop: "20px",
    textAlign: "center",
  },
  generatedImage: {
    border: "2px solid #6A0DAD",
    marginTop: "10px",
    maxWidth: "90%",
  },
};
