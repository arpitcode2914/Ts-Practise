import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import ReactQuill, { Quill } from "react-quill";



// Add custom fonts to the font dropdown
const fonts = ["Arial", "Courier", "Georgia", "Times New Roman", "Verdana"];
const fontSizes = ["small", false, "large", "huge"]; // Small, default, large, huge


// const fontStyle = Quill.import("formats/font");
// fontStyle.whitelist= fonts
// Quill.register(fontStyle,true)
const Home = () => {
  const [text, setText] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenPdf = async () => {
    setLoading(true);
    try {
      await axios
        .post(
          "http://localhost:2929/generate-pdf",
          { text, title },
          {
            responseType: "blob",
          }
        )

        .then((response) => {
          if (response.status === 200) {
            console.log(response);
            console.log(response.data);
            toast.success("download successfully");

            const blob = new Blob([response.data], { type: "application/pdf" });

            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = "generated.pdf";
            link.click();
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("pls try again");
        });
    } catch (err) {
      console.log(err);
      toast.error("something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>pdf generator</h1>
      {/* Title Input */}
      {/* <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
        /> */}
      {/* <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text for PDF"
      /> */}

      <ReactQuill
      className="quill_container"
        value={text}
           onChange={(value) => setText(value)}
        // onChange={setText}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ font: fonts}], // Font types
            [{ size: fontSizes }], // Font size dropdown
            [{ color: [] }, { background: [] }], // Font and background color
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
            [{ align: [] }], // Text alignment 
          ],
          // imageDrop: true, // Enable image drop
        }}
      />

      {/* <button onClick={handleGenPdf}>Generate PDF</button> */}
      <button className={`btn btn-primary ${loading ? "disabled" :""}`}type="button" onClick={handleGenPdf} >
        {
            loading ? (
                <>
                <span className="spinner-border spinner-border-sm" aria-hidden="true" />
                <span role="status">Loading...</span>

                </>
            ) : (

                <span role="status">Generate PDF</span>
            )
        }
      </button>
    </div>
  );
};

export default Home;
