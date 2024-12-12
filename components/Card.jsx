const Card = ({ children, col = 3 }) => {
  return (
    <div className={`col-span-12 lg:col-span-4 2xl:col-span-${col}`}>
      <div className="card">{children}</div>
    </div>
  );
};

export default Card;
