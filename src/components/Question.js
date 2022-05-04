const Question = ({ card, onAnswer }) => {
  const onchangeHandler = (e) => {
    const value = e.target.value;
    onAnswer(value);
  };
  return (
    <div>
      <p>{card.text}</p>
      {card.options.map((option) => (
        <>
          <input
            key={option.id}
            type="radio"
            name="answer"
            value={option.id}
            onChange={onchangeHandler}
            checked={card.answer == option.id}
          />
          {option.text}
        </>
      ))}
    </div>
  );
};

export default Question;
