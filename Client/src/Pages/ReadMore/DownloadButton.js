
import React from 'react';


const DownloadButton = ({ fileLink }) => {
    const handleDownload = () => {
      window.open(fileLink, '_blank');
    };

    return (
        <button
            onClick={handleDownload}
            className="mt-16 h-10 mx-14 border-2 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-black transition-all hover:bg-primary-600 active:bg-primary-700">
            Download 
        </button>
    );
};

export default DownloadButton;
