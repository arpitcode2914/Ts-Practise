import axios from "axios";
import React, { HtmlHTMLAttributes, useState } from "react";
import { toast } from "react-toastify";
// import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css'; // include styles

interface MailType {
  email: string;
  text: string;
  subject: string;
}

// interface OtpType {
//   otp: number;
// }
// interface VerifyOtpType {
//   verifyOtp: number;
// }

const Home = () => {
  //otp gen
  const [otp, setOtp] = useState<string>(
    `${Math.floor(100000 + Math.random() * 900000).toString()}`
  );
  // console.log(otp);

  const [mail, setMail] = useState<MailType>({
    email: "democode2914@gmail.com",
    text: otp,
    subject: "OTP",
  });

  const [veryfyOtp, setVeryfyOtp] = useState<string>("");

  const [loading, setLoading] = useState(false);

  const handleSendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios
        .post("http://localhost:5000/send-mail", {
          to: mail.email, // Receiver email
          subject: mail.subject, // You can change this as needed
          text: mail.text, // Message content from textarea
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success("Mail send successfully");
            // alert('email send successfully')
            console.log(response.data);
            console.log(response);
            setMail({
              ...mail,
              text: "",
              subject: "hare krishna ",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
      toast.error("Failed to send mail ,please try again");
    } finally {
      setLoading(false);
    }
  };

  // handleVerifyOtp
  const handleVerifyOtp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (otp === veryfyOtp) {
      toast.success("otp verify success");
    } else {
      toast.error("wrong otp pls enter valid otp");
    }
  };
  return (
    <>
      <div>
        <form action="" onSubmit={handleSendMail}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              To
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={mail.email}
              disabled
              required
            />
          </div>

          {/* <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Subject
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="subject..."
          value={mail.subject}
          disabled
          required
          onChange={(e) => setMail({ ...mail, subject: e.target.value })} //adding type
        />
      </div> */}

          {/* <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Message
        </label>

        <ReactQuill
        className="teaxtarea"
         value={mail.text}
        //  onChange={(e) => setMail({ ...mail, text: e.target.value })} //adding type
        onChange={(value) =>setMail({...mail,text:value})}
         modules={{
           toolbar: [
             [{ 'header': [1, 2, false] }],
             ['bold', 'italic', 'underline', 'strike'],
             [{ 'list': 'ordered'}, { 'list': 'bullet' }],
             ['link', 'image'],
             ['clean'],
             [{ 'align': [] }], // Text alignment
           ],
         }}
        />
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          
          defaultValue={""}
          placeholder="Type..."
         
        />
      </div> */}

          <div>
            {/* <button className="btn btn-primary" onClick={handleSendMail}>
          Send
        </button> */}
            <button
              className={`btn btn-primary ${loading ? "disabled" : " "}`}
              type="submit"
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  />
                  <span role="status" className="px-2">
                    Loading...
                  </span>
                </>
              ) : (
                <span role="status">Send</span>
              )}
            </button>
          </div>
        </form>
      </div>

      <div className="otp_container">
        <input
          type="number"
          // style={{ WebkitAppearance: "none", MozAppearance: "textfield" }} // Inline CSS
          className="otp_input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setVeryfyOtp(e.target.value)
          }
        />
        <button
          type="button"
          onClick={handleVerifyOtp}
          className="otp_verify_btn"
        >
          Verify otp
        </button>
      </div>
    </>
  );
};

export default Home;
