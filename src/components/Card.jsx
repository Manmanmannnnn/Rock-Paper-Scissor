const Card = ({ name, image, type, index, handlePlayerChoice }) => {
  return (
    <div
      key={type}
      className="flex h-52 w-52 flex-col items-center justify-center rounded-lg border-2 border-gray-900 p-2 hover:bg-gray-300"
    >
      <p className="text-[1rem]">
        {name} <span className="text-[0.7rem] italic">type:{type}</span>
      </p>
      <img
        onClick={() => handlePlayerChoice(index)}
        src={image}
        className={`${type} w-3/6 hover:scale-110`}
        alt=""
      />
    </div>
  );
};

export default Card;
