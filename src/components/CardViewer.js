import Question from "./Question";

const CardViewer = ({ goback, goforward, card, index, all, onAnswer }) => {
  return (
    <div>
      <span className="inline-block border-slate-300 text-sm rounded-2xl w-auto bg-gray-200 pr-3 pl-3 m-2">
        {index + 1} / {all}
      </span>
      <Question card={card} onAnswer={onAnswer} />
      <div className="border-t-2 border-t-solid border-t-gray-600 text-lg flex justify-center justify-items-center  items-center text-center w-44 p-2 m-auto mt-5">
        <button
          className="bg-slate-100 mr-1 w-32 p-1 rounded-lg shadow-lg hover:bg-red-100"
          onClick={goback}
        >
          prev
        </button>
        <button
          className="bg-slate-100 ml-1 w-32 p-1 rounded-lg shadow-lg hover:bg-green-100"
          onClick={goforward}
        >
          {index >= all - 1 ? "Results" : "next"}
        </button>
      </div>
    </div>
  );
};

export default CardViewer;
