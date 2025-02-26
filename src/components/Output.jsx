import { useState } from "react";
import { executeCode } from "../api";
import toast from "react-hot-toast";

function Output({ editorRef, language }) {
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();

    if (!sourceCode) {
      toast.info("Please write some code to run!");
      return;
    }

    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output);
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.error(error);
      toast.error(`An error occurred! ${error.response.data.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full md:flex-1/2">
      <h1 className="mb-2 text-lg">Output</h1>
      <button onClick={runCode} className="btn btn-soft btn-success mb-4">
        {isLoading ? "Running..." : "Run Code"}
      </button>
      <div
        className={`h-[50vh] md:h-[84vh] p-2 border rounded-sm ${
          isError ? "border-red-500" : "border-[#333]"
        }`}
      >
        {output ? (
          <pre
            className={`${
              isError ? "text-red-400" : "text-gray-200"
            } text-wrap`}
          >
            {output}
          </pre>
        ) : (
          <p>Click &quot;Run Code&quot; to see the output here</p>
        )}
      </div>
    </div>
  );
}

export default Output;
