import { useState } from "react";
import { marked } from "marked";

function App() {
  const [inputText, setInputText] = useState(`
  # H1
  ## H2
  * List item 1
  title](https://www.example.com)
  \`code\`
  \`\`\`
  {
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
  }
  \`\`\`
  > blockquote
  ![alt text](image.jpg)
  **bold text**
  `);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className=" flex min-h-dvh flex-col items-center px-16 md:px-36">
      <textarea
        id="editor"
        value={inputText}
        className=" mb-4 w-full rounded-lg border-none bg-blue-100 p-5 shadow-md"
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>

      <div
        id="preview"
        className="w-full rounded-lg   bg-gray-100 p-5 shadow-md"
        dangerouslySetInnerHTML={{
          __html: marked(inputText),
        }}
      ></div>
    </div>
  );
}

export default App;
