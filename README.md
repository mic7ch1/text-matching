# Manchu OCR Text Paring Tool

This is a fully client-side web application for processing images of Manchu text to assist in the creation of OCR datasets. It allows a user to upload an image, and then guides them through a series of steps to detect words, group them into columns, and pair them with transcriptions.

This project is a reimplementation of a previous Python + Flask backend and a separate frontend. This version runs entirely in the browser using React, TypeScript, and OpenCV.js, with no server-side components. This means it can be hosted as a simple static website on services like GitHub Pages.

## Core Features

- **Image Preprocessing:** Adjust settings like adaptive thresholding and morphological operations to clean up the source image.
- **Text Detection:** Automatically identifies potential word bounding boxes using connected components analysis.
- **Column Detection:** Uses k-means clustering to automatically group detected words into vertical columns.
- **Manual Fine-Tuning:** Allows users to manually adjust, merge, or delete bounding boxes.
- **Text Pairing:** Provides an interface to enter transcribed text for each detected word.
- **Data Export:** Packages the original image, cropped word images, and a JSON file with coordinates and transcriptions into a downloadable ZIP file.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (which includes `npm`)

### Installation & Running Locally

1.  Clone the repository or download the source code.
2.  Navigate to the `text_pairing` directory:
    ```bash
    cd text_pairing
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
5.  Open your browser and navigate to the local URL provided (usually `http://localhost:5173`).

## Deployment

Since this is a static application, you can easily deploy it.

1.  Build the application:
    ```bash
    npm run build
    ```
2.  This will create a `dist` directory in the `text_pairing` folder.
3.  Deploy the contents of the `dist` directory to any static web hosting service (e.g., GitHub Pages, Netlify, Vercel).
