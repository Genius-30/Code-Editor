import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

function CodeEditor() {
  const editorRef = useRef(null);

  const [value, setValue] = useState(`
    // Welcome to the Genius Code Editor
    // Write your code here
  
    console.log("Hello, World!");
    `);
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor, monaco) => {
    editorRef.current = editor;
    editorRef.current.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <div>
      <div className="flex items-start gap-x-6">
        <div className="flex-1/2">
          <LanguageSelector onSelect={onSelect} />
          <Editor
            height="84vh"
            theme="vs-dark"
            language={language}
            defaultValue="// some comment"
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </div>
        <Output editorRef={editorRef} language={language} />
      </div>
    </div>
  );
}

export default CodeEditor;
