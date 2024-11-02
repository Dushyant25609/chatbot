import Box from "./Box";
import Text from "./Text";

function Chatbox({ content, ques, ans, exp, handleQuestion }) {
    // Prepare the answer string to include <br /> tags
    let a = ans.split("\\n").join("<br />");
    a = a.split("\\").join(" ");
    a = a.split("*").join(" ");
    a = a.split('"').join("");

    console.log(a);
    return (
        <div className="shadow-xl w-full border flex flex-col justify-evenly items-center bg-white p-6 rounded-md">
            <Box handleQuestion={handleQuestion} />
            { ques && <div className="flex w-2/3 overflow-auto my-4 p-4 justify-end bg-gray-100 rounded-lg border border-gray-200">
                {content ? (
                    <div className="text-gray-800">
                        {/* Use dangerouslySetInnerHTML to render the modified answer string */}
                        <div dangerouslySetInnerHTML={{ __html: a }} />
                    </div>
                ) : (
                    <p className="text-gray-400">Waiting for response...</p>
                )}
            </div>}
            <Text handleQuestion={handleQuestion} />
        </div>
    );
}

export default Chatbox;
