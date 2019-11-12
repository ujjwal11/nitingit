import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../App";
import Home from "../app/home/home.component"
import "isomorphic-fetch";
import { StaticRouter } from "react-router-dom";

const app = express();

app.use(express.static("public"));

app.get("/api/news", (req, res) => {
  res.json([
    {
      heroBanner:{
          imageSource : "http://localhost:3000/assets/img/hero-banner.PNG",
          imageAlt : "",
          designPattern : "minimal designs",
          desc : "Exclusive Styles At Unbelievable prices",
          discount : "up to 70",
          arrivals : "15000"
      },
      livingSpaces:{
          imageSource : "http://localhost:3000/assets/img/hero1.PNG",
          imageAlt : "",
          designPattern : "minimal designs",
          desc : "Exclusive Styles At Unbelievable prices",
          descS : "A relaxing retreat with timeless pallete",
      },
      groupImages:[
          {
              sourcePath : "http://localhost:3000/assets/img/hero2.PNG",
              alternativePath : "hero image 2"
          },
          {
              sourcePath : "http://localhost:3000/assets/img/hero3.PNG",
              alternativePath : "hero image 3"
          }
      ],
      bestSeller:[
          {
              sourceImage : "http://localhost:3000/assets/img/best-seller-image.PNG",
              altImage : "Best Seller Image 1",
              t_shirtType : "Cowl Neck Tweed Pullover",
              discountedPrice : "159.00",
              finalPrice : "110.99"
          },
          { 
              sourceImage : "http://localhost:3000/assets/img/best-seller-image.PNG",
              altImage : "Best Seller Image 2",
              t_shirtType : "Scoop Neck Knit Top",
              discountedPrice : "159.00",
              finalPrice : "110.99"
          },
          {
              sourceImage : "http://localhost:3000/assets/img/best-seller-image.PNG",
              altImage : "Best Seller Image 3",
              t_shirtType : "Scoop Neck Knit Top Full Sleeve", 
              discountedPrice : "159.00",
              finalPrice : "110.99"
          },
          {
              sourceImage : "http://localhost:3000/assets/img/best-seller-image.PNG",
              altImage : "Best Seller Image 4",
              t_shirtType : "Long Sleeve Raglan Button", 
              discountedPrice : "159.00",
              finalPrice : "110.99"
          },
          { 
              sourceImage : "http://localhost:3000/assets/img/best-seller-image.PNG",
              altImage : "Best Seller Image 5",
              t_shirtType : "Quilted Jacket", 
              discountedPrice : "159.00",
              finalPrice : "110.99"
          }
      ],
      pictureThis:{
          tagLine : "Our Clothing looks a lot better in your home. Click a pic and share to get featured",
          business : "clothing",
      }
  }
  ])
})

app.get("*", (req, res, next) => {
  Home.requestInitialData()
  .then(initialData => {
    console.log("initialData",initialData)
    const context = {initialData}
    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App  />
      </StaticRouter>
    )
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>Universal Reacl</title>
        <link rel="stylesheet" href="/css/main.css">
        <script src="/bundle.js" defer></script>
        <script>window.__initialData__= ${JSON.stringify(initialData)}</script>
      </head>
      <body>
        <div id="root">${markup}</div>
      </body>
    </html>
  `);
  })
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});