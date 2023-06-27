import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  '../node_modules/pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

export const PdfViewer = () => {
  const [url, setUrl] = useState<string>('');

  const [numPages, setNumPages] = useState<number>(0);
  const [pageNum, setPageNum] = useState<number>(1);

  const onDocumentLoadSuccess = ({
    numPages,
  }: {
    numPages: number;
  }) => {
    setNumPages(numPages);
    setPageNum(1);
  };

  const changePage = (offset: number) => {
    setPageNum((prev) => prev + offset);
  };

  const changePageBack = () => changePage(-1);

  const changePageNext = () => changePage(1);

  useEffect(() => {
    setUrl('/pdfs/architecture-portfolio.pdf');
  }, []);

  return (
    <>
      {/* <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          width={1024}
          height={600}
          pageNumber={pageNum}
        />
        <p>
          page {pageNum} of {numPages}
        </p>
        {pageNum > 1 && (
          <button onClick={changePageBack}>
            Previous Page
          </button>
        )}
        {pageNum < numPages && (
          <button onClick={changePageNext}>
            Next Page
          </button>
        )}
      </Document> */}
      <center>
        <div>
          <Document
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(
              new Array(numPages),
              (ele, index: number) => (
                <Page
                  width={1024}
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                />
              )
            )}
          </Document>
        </div>
      </center>
    </>
  );
};
