import Question from "./Question";

const CardViewer = ({ goback, goforward, card, index, all, onAnswer }) => {
  return (
    <div>
      <span>
        {index + 1} of {all}
      </span>
      <Question card={card} onAnswer={onAnswer} />
      <div className="btn-ctrl">
        <button onClick={goback}>prev</button>
        <button onClick={goforward}>
          {index >= all - 1 ? "see result" : "next"}
        </button>
      </div>
    </div>
  );
};

export default CardViewer;
