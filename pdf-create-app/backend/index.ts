import puppeteer from 'puppeteer';
import express, { Request, Response } from 'express'
import cors from 'cors'
const app = express();


app.use(express.json())
app.use(cors())
app.post('/generate-pdf', async (req: Request, res: Response):Promise<void> => {
  const { text, filename } = req.body;


  if (!text){
     res.status(400).json({
      message:"text required "
    })
  }

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // Replace with basic HTML for testing
    // const content = `
    //   <html>
    //     <head>
    //       <title>Test PDF</title>
    //       <style>
    //         body { font-size: 20px; }
    //         h1 { color: blue; }
    //       </style>
    //     </head>
    //     <body>
    //       <h1>This is a test PDF</h1>
    //       <p>${text}</p>
    //     </body>
    //   </html>
    // `;
    // Optional: Add debugging
    console.log('Setting content for PDF generation.');
    // Set the page content with provided text
    await page.setContent(text, {
      waitUntil: 'networkidle0',
    });



    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px',
      },
      
    });

  await browser.close();
  
  res.set({
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment; filename="generated.pdf"',
  });
  
  res.send(Buffer.from(pdfBuffer) );
  } catch (error) {
    console.log(error);

     res.status(500).json({
      success:false,
      message:"error in generate app"
    })
    
  }
  
});

const PORT= 2929;
app.listen(PORT ,() =>{
  console.log('server running successfully ',PORT);
  
})