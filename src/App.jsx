import Chatbox from "./Components/Chatbox";
import SideBar from './Components/Sidebar';
import React, { useEffect, useState } from "react";

function App() {
  const [output, setOutput] = useState("");
  const [ans, setAns] = useState("");
  const [ques, setQues] = useState("");


  const handleQuestion = (q) =>{
    setQues(q);
  }


  // Function to make API call to Hugging Face
  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/google/gemma-2-2b-it",
      {
        headers: {
          Authorization: "Bearer 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",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }

  useEffect(() => {
    // Calling the query function with input data
    query({ "inputs": `${ques}` })
      .then((response) => {
        console.log("response is", response.generated_text);
        const responseText = JSON.stringify(response[0].generated_text);
        console.log(responseText); // Log the response to the console

        // Regex pattern to match the answer
        const answerPattern = /\*\*Answer:\*\* ([^\n]+)/;
        // Regex pattern to match the explanation
        const explanationPattern = /\*\*Explanation:\*\*([\s\S]*?)(?=\n\s*\n|$)/;

        // Extract the answer
        const answerMatch = responseText.match(answerPattern);
        const answer = answerMatch ? answerMatch[1].trim().replace(/\*/g, '').replace(/\n/g, '') : responseText;

        // Extract the explanation
        const explanationMatch = responseText.match(explanationPattern) || "";
        const explanation = explanationMatch ? explanationMatch[1].trim().replace(/\*/g, '').replace(/\n/g, '') : null;

        // Remove the explanation from the answer if it exists
        const cleanedAnswer = explanation ? answer.replace(explanation, '').trim() : answer;
        const newcleanedAnswer = explanation ? cleanedAnswer.replace("Explanation:", '').trim() : answer;

        console.log('Answer:', newcleanedAnswer); // Output: "New Delhi"
        console.log('Explanation:', explanation); // Output: "New Delhi is the capital city of India."

        setOutput(JSON.stringify(responseText)); // Update the output state with response
        setAns(JSON.stringify(newcleanedAnswer)); // Update the
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [ques]);

  return (
    <div className="flex w-full h-full">
      <SideBar />
      <Chatbox content={output} ques={ques} ans={ans} handleQuestion={handleQuestion} /> {/* Pass the response as content to Chatbox */}
    </div>
  );
}

export default App;
