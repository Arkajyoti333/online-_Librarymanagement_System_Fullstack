import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { pdfjs } from "react-pdf";
// import PdfComp from "./PdfCompo.js";


pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;

const ReadMore = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  const [clicked,setclicked]=useState(false);
   


const handleClick=()=>{
  setclicked(true);
}

  const getPdf = async () => {
      
    setPdfUrl('https://makautexam.net/aicte_details/Syllabus/CSE/AllSem23.pdf');
          
    // setclicked(true);
    try {
      const response = await axios.get(`http://localhost:8000/books/readMore/${id}`, {
        responseType: 'blob'
      });
      console.log("response", response);
      const file = new Blob([response.data], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      setPdfUrl(fileURL);
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBook = async (bookId) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/books/${bookId}`
        );
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchBook(id);
    getPdf();
  }, [id]);

  if (!book) {
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl text-white">
        Loading.......
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center bg-white max-w-full min-h-screen gap-10 mt-[80px] px-5 py-12">
      <div className="border shadow-md rounded-sm max-w-[40%] h-[70%] p-5 md:col-span-2 pr-16 text-primary-950">
        <h2 className="mb-5 text-5xl font-bold leading-[1.1]">
          {book.bookname}
        </h2>
        <span className="font-semibold">by {book.authorname}</span>
        <p className="mt-5 text-lg leading-8">
          {book.type} by {book.authorname}
        </p>
        <button
          onClick={getPdf}
          className="mt-16 h-10 mx-14 border-2 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-black transition-all hover:bg-primary-600 active:bg-primary-700"
        >
          Read More
        </button>
      </div>
      <div className="flex justify-end overflow-hidden" onClick={handleClick}>
        <img
          src={book.bookImage}
          alt={book.type}
          className="rounded-md border"
          style={{ maxHeight: "350px", maxWidth: "100%", objectFit: "cover" }}
        />
      </div>
      {clicked && <div className="w-full min-h-[100%] flex justify-center items-center mb-32 mt-10 overflow-hidden">
      
      {pdfUrl && <iframe src={pdfUrl} width="100%" height="800px"></iframe>}
    </div>
  }
    </div>
  );
};

export default ReadMore;
