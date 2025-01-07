import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import ReactQuill from 'react-quill';

// toast.configure();

const fonts = ['Arial', 'Courier', 'Georgia', 'Times New Roman', 'Verdana'];
const fontSizes = ['small', false, 'large', 'huge'];

const Home: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [title, setTitle] = useState<string>('generated.pdf');
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenPdf = async () => {
    if (!text.trim()) {
      toast.error('Please enter text to generate the PDF.');
      return;
    }
  
    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:2929/generate-pdf',
        { text, filename: title },
        { responseType: 'blob' } // Important: Set responseType to blob
      );
  
      if (response.status === 200) {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = title || 'generated.pdf';
        link.click();
        toast.success('PDF downloaded successfully!');
      }
    } catch (err) {
      console.error('Error generating PDF:', err);
      toast.error('Failed to generate PDF. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>PDF Generator</h1>

      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="title">File Name:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter file name"
          style={{ width: '100%', padding: '8px', margin: '10px 0' }}
        />
      </div>

      <ReactQuill
        className="quill-container"
        value={text}
        onChange={setText}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ font: fonts }],
            [{ size: fontSizes }],
            [{ color: [] }, { background: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            [{ align: [] }],
            ['clean'],
          ],
        }}
      />

      <button
        onClick={handleGenPdf}
        disabled={loading}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? 'Generating PDF...' : 'Generate PDF'}
      </button>
    </div>
  );
};

export default Home;
