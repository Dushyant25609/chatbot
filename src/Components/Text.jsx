import React, { useState } from 'react';

function Text({ handleQuestion }) {
    const [question, setQuestion] = useState('');

    const handleChange = (event) => {
        setQuestion(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        handleQuestion(question); // Pass the question to the handler
        setQuestion(''); // Optionally reset the textarea
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSubmit(event); // Call the submit handler
        }
    };

    return (
        <form className="w-2/3" onSubmit={onSubmit}>
            <textarea
                value={question}
                onChange={handleChange}
                onKeyDown={handleKeyDown} // Add key down handler
                placeholder="Write the text here"
                className="border border-gray-400 rounded-xl w-full p-2 flex-wrap"
            />
        </form>
    );
}

export default Text;
