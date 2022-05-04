const Result = ({ all, reset, score }) => {
  const calculatePersent = score ? (score / all) * 100 : 0;

  return (
    <div>
      <span>
        {score} of {all}
      </span>
      <br />
      <span>{calculatePersent}%</span>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Result;
