import { Toaster } from "react-hot-toast";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <div className="min-h-screen bg-[#0f0a19] text-gray-500 px-1.5 py-2">
      <CodeEditor />
      <Toaster />
    </div>
  );
}

export default App;
