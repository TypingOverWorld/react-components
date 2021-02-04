// Based on component from React Docs https://reactjs.org/docs/handling-events.html

function AlertButton(props) {
  function handleClick(e) {
    e.preventDefault();
    alert('You clicked the button!');
  } 
  return(
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default AlertButton;