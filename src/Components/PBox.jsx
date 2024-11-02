

function PBox({ handleQuestion,pr }) {
    const handleClick = () => {
        handleQuestion(pr);
    }
    return ( 
        <div onClick={handleClick} className="p-3 border border-gray-400 hover:bg-sky-100 hover:border-0 hover:shadow-lg transition-all duration-100  rounded-lg" >
            <h1 className="font-semibold flex px-4 gap-2 justify-between items-cente " > <p>{pr}</p> <p>+</p></h1>
        </div>
    );
}

export default PBox;
