// Based on component from React Docs https://reactjs.org/docs/components-and-props.html

function UserName(props) {
  return (
    <div className="user-name">
      {props.user.name}
    </div>
  );
}

export default UserName;