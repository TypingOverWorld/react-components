// Based on a component from React Docs https://reactjs.org/docs/lists-and-keys.html

// Would pass in something like const numbers = [1, 2, 3, 4, 5];
// Would return an unordered list of the passed values
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
      // this key is just for example. best to do a unique id
      <li key={number.toString()}>
        {number}
      </li>
      )}
    </ul>
  );
}

export default NumberList;