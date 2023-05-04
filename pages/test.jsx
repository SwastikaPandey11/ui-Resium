import React from "react";

export default function test() {
  return (
    <div className="bg-black flex flex-col mx-auto my-auto  h-screen w-full justify-center">
      <div className="w-48 h-96">
        <h1 className="text-2xl text-white font-bold">Test Page</h1>
        <button className="text-black px-5 bg-white mx-auto w-auto h-auto border-b-2 border-white rounded-full">
          Upload Button
        </button>
      </div>
    </div>
  );
}
