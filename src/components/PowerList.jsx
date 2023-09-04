const PowerList = ({ list }) => {
  const arrOfList = Object.keys(list);
  return (
    <ul style={{ listStyle: "none" }}>
      {arrOfList.map((power) => (
        <li key={power}>{list[power]}</li>
      ))}
    </ul>
  );
};

export default PowerList;
