import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the /public/images directory
app.use('/images', express.static(path.join(process.cwd(), '/public/images')));

let imageCount = 0; // Initialize image count
let changeCounter = 0; // Initialize change counter

app.get('/api/latestImage', (req, res) => {
  const directoryPath = path.join(process.cwd(), '/public/images/');
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.status(500).send('Unable to read directory');
    } else {
      const currentImageCount = files.length;
      if (currentImageCount > imageCount) {
        changeCounter++;
      }
      imageCount = currentImageCount;

      const latestFile = files.sort((a, b) => fs.statSync(path.join(directoryPath, b)).birthtimeMs - fs.statSync(path.join(directoryPath, a)).birthtimeMs)[0];
      res.json({ latestFile, changeCounter });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});