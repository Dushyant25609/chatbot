import PBox from "./PBox";

const Box = ({handleQuestion}) => {
  return (
    <div>
        <h1 className="text-5xl font-bold ">Welcome to Xercise AI</h1>
        <div className="grid grid-cols-2 gap-2 mt-6" >
            <PBox handleQuestion={handleQuestion}  pr={"7 days Workout split"} />
            <PBox handleQuestion={handleQuestion} pr={"Bulking Workout plan"} />
            <PBox handleQuestion={handleQuestion} pr={"Cutting Workout plan"} />
            <PBox handleQuestion={handleQuestion} pr={"Push Pull Legs Workout"} />
        </div>
    </div>
  )
}

export default Box;
