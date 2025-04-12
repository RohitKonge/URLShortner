# URL Shortener Favicon

This project includes an SVG favicon (`favicon.svg`) that modern browsers can use directly. For better cross-browser compatibility, you should convert it to traditional favicon formats.

## Using the SVG Favicon (Already Implemented)

The SVG favicon is already set up in the project and will work in modern browsers.

## Converting to Traditional Favicon Formats

For better compatibility with older browsers and platforms, follow these steps:

### Method 1: Using an Online Generator

1. Visit [RealFaviconGenerator.net](https://realfavicongenerator.net/) or [Favicon.io](https://favicon.io/)
2. Upload the `favicon.svg` file
3. Configure options as needed
4. Download the generated favicon package
5. Extract the files to the `public` directory
6. Update `app/layout.tsx` with the appropriate links

### Method 2: Using Node.js (Sharp)

1. Install the Sharp package:

   ```
   npm install sharp
   ```

2. Create a script file `scripts/generate-favicon.js`:

   ```javascript
   const fs = require("fs");
   const sharp = require("sharp");

   // Read the SVG file
   const svgBuffer = fs.readFileSync("./public/favicon.svg");

   // Generate favicon images in different sizes
   Promise.all([
     sharp(svgBuffer).resize(16, 16).toFile("./public/favicon-16x16.png"),
     sharp(svgBuffer).resize(32, 32).toFile("./public/favicon-32x32.png"),
     sharp(svgBuffer).resize(48, 48).toFile("./public/favicon-48x48.png"),
     sharp(svgBuffer).resize(180, 180).toFile("./public/apple-touch-icon.png"),
   ])
     .then(() => {
       console.log("Generated favicon PNG files");
     })
     .catch((err) => {
       console.error("Error generating favicon:", err);
     });
   ```

3. Run the script:

   ```
   node scripts/generate-favicon.js
   ```

4. Convert the PNG files to .ico format using an online converter like [Convertio](https://convertio.co/png-ico/) or a tool like ImageMagick.

5. Update `app/layout.tsx` with proper favicon links:
   ```jsx
   <head>
     <link rel="icon" href="/favicon.ico" sizes="any" />
     <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
     <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
   </head>
   ```

## Logo Design

The logo is designed to represent link shortening with a stylized "S" shape in the form of two connected chain links on a blue-to-purple gradient background.
