const Result = ({ all, reset, score }) => {
  const calculatePersent = score ? Math.round((score / all) * 100) : 0;
  const userPlace = () => {
    if (score === 0) {
      return "not detected";
    } else if (score <= 7) {
      return "A1";
    } else if (score <= 14) {
      return "A2";
    } else if (score <= 21) {
      return "B1";
    } else if (score <= 28) {
      return "B2";
    } else if (score <= 35) {
      return "C1";
    } else if (score <= 42) {
      return "C2";
    }
  };
  return (
    <div className="flex-col m-1">
      <div>{score} of 42</div>

      <div>{calculatePersent}%</div>
      <div className="font-bold m-2">
        Your level of english is {userPlace(score)}
      </div>
      <hr />
      <button
        className="bg-white m-2 w-32 p-1 rounded-lg shadow-lg "
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default Result;
