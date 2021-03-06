import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';



(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  app.get( "/", async ( req: Request, res: Response ) => {
    res.status(404).send("try GET /filteredimage?image_url={{}}")
  } );
  
  const convertedImagesURL:any[] = [];

  /**
   * GET ./filteredimage/?=image_url={}
   */
  app.get("/filteredimage", async(req: Request, res: Response) => {
    const { image_url } = req.query;
    if(!image_url) {
      return res.status(500).send({
        error: true,
        message: "image url should not empty."
      });
    }

    var imageRegExp = new RegExp("https?:\/\/.*\.(?:png|jpg|jpeg)");
    if(!imageRegExp.test(image_url)) {
      return res.status(400).send({
        error: true,
        message: "Image should be png, jpg and jpeg."
      });
    }

    try {
      const filteredImage = await filterImageFromURL(image_url);
      convertedImagesURL.push(filteredImage);
      res.status(200).sendFile(filteredImage);
      res.on("finish", () => {
        deleteLocalFiles(convertedImagesURL);
        convertedImagesURL.pop();
      })
    } 
    catch (e) {
      res.status(422).send({
        error: true,
        message: "Given URL image not found."
      });
    }
  })

  app.get("**", (req: Request, res: Response) => {
    res.status(404).send("try GET /filteredimage?image_url={{}}");
  })

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();



