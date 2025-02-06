const Card = ({ name, image, type, index, handlePlayerChoice }) => {
  return (
    <div
      key={type}
      className="h-70 flex w-80 flex-col items-center justify-center rounded-lg border-2 border-gray-900 p-2 hover:bg-gray-300"
    >
      <p className="text-2xl">
        {name} <span className="text-[1.2rem] italic">type:{type}</span>
      </p>
      <img
        onClick={() => handlePlayerChoice(index)}
        src={image}
        className={`${type} w-4/6 hover:scale-110`}
        alt=""
      />
    </div>
  );
};

export default Card;
