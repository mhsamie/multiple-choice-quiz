const Question = ({ card, onAnswer }) => {
  const onchangeHandler = (e) => {
    const value = e.target.value;
    onAnswer(value);
  };

  return (
    <div>
      <p className="italic">{card.question}</p>
      <p className="font-bold ">{card.text}</p>

      {card.options.map((option) => (
        <div key={option.id}>
          <label class="inline-flex items-center justify-center align-center  ">
            <input
              className="text-red-300 m-2 bg-white checked:border-none focus:border-none focus:ring-offset-0 text-center focus:outline-none focus:ring-0 transition duration-200  "
              type="radio"
              name="answer"
              value={option.id}
              onChange={onchangeHandler}
              checked={card.answer === option.id}
            />
            <span className="block w-32 p-1">{option.text}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Question;
