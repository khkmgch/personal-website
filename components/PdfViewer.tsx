import React, {
  FC,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Loading } from './ui/Loading';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  '../node_modules/pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

type Props = {
  pdf: string;
};
export const PdfViewer: FC<Props> = ({ pdf }) => {
  const [url, setUrl] = useState<string>(
    `/pdfs/${pdf}`
  );

  const [numPages, setNumPages] = useState<number>(0);
  // const [pageNum, setPageNum] = useState<number>(1);

  const [width, setWidth] = useState<number>();

  const [rendered, setRendered] = useState<boolean>(false);

  const onDocumentLoadSuccess = ({
    numPages,
  }: {
    numPages: number;
  }) => {
    setNumPages(numPages);
    // setPageNum(1);
  };

  const onPageRenderSuccess = () => {
    setRendered(true);
  };

  // const changePage = (offset: number) => {
  //   setPageNum((prev) => prev + offset);
  // };

  // const changePageBack = () => changePage(-1);

  // const changePageNext = () => changePage(1);

  const handleSize = () => {
    if (window.innerWidth * 0.9 > 1024) {
      setWidth(1024);
    } else {
      setWidth(window.innerWidth * 0.9);
    }
  };

  const resize = () => {
    setRendered(false);
    handleSize();
  };

  useEffect(() => {
    handleSize();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
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
        <div id='wrapper'>
          {!rendered && <Loading color='black' />}

          <Document
            className={`${rendered ? 'block' : 'hidden'}`}
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<Loading color='black' />}
          >
            {Array.from(
              new Array(numPages),
              (ele, index: number) => (
                <Page
                  width={width}
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  onRenderSuccess={onPageRenderSuccess}
                />
              )
            )}
          </Document>
        </div>
      </center>
    </>
  );
};
