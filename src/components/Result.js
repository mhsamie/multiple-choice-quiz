const Result = ({ userScore, all, resetButton }) => {
  const calculatePersent = (userScore / all) * 100;

  return (
    <div>
      <span>
        {userScore} of {all}
      </span>
      <br />
      <span>{calculatePersent}%</span>
      <button onClick={resetButton}>Reset</button>
    </div>
  );
};

export default Result;
