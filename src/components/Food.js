const Food = ({ food }) => (
  <ul>
    {food.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default Food;
