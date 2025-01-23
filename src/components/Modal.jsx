import React from "react";

function Modal() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-lg">
        <div className="flex justify-center items-center">
          <div className="animate-spin border-t-4 border-blue-500 rounded-full w-12 h-12"></div>
        </div>
        <p className="mt-4 text-center text-gray-700 font-medium">Processing Payment...</p>
      </div>
    </div>
  );
}

export default Modal;
