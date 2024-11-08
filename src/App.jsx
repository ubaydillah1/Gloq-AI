/* eslint-disable no-undef */
import { useState } from "react";
import "./App.css";
import { requestToGroqAI } from "./utils/groq";
import { Light } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

function App() {
  const [data, setData] = useState("");

  const handleSubmit = async () => {
    const ai = await requestToGroqAI(content.value);
    setData(ai);
  };

  return (
    <main className="flex flex-col min-h-[80vh] justify-center items-center overflow-hidden">
      <h1 className="text-4xl text-indigo-500">React Groq</h1>
      <form className="flex flex-col gap-4 py-4">
        <input
          type="text"
          className="py-2 px-4 text-md rounded-md"
          placeholder="ketik_permintaan..."
          id="content"
        />
        <button
          className="bg-indigo-500 py-2 px-4 font-bold text-white rounded-md w-full"
          onClick={handleSubmit}
          type="button"
        >
          Kirim
        </button>
      </form>

      <div className="mx-auto w-full">
        <Light
          language="swift"
          style={darcula}
          showLineNumbers={true}
          wrapLongLines={true}
        >
          {data}
        </Light>
      </div>
    </main>
  );
}

export default App;
// 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
