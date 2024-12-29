function ListGroup() {
  const items = ["Newyork", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  return (
    <>
      <h1>Hello Sadik</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
