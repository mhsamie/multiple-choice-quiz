const Question = ({ card, onAnswer }) => {
  const onchangeHandler = (e) => {
    const value = e.target.value;
    onAnswer(value);
  };

  return (
    <div>
      <p>{card.text}</p>
      {card.options.map((option) => (
        <div key={option.id}>
          <input
            type="radio"
            name="answer"
            value={option.id}
            onChange={onchangeHandler}
            checked={card.answer === option.id}
          />
          {option.text}
        </div>
      ))}
    </div>
  );
};

export default Question;
