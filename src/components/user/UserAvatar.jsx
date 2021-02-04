// Based on component from React Docs https://reactjs.org/docs/components-and-props.html

function UserAvatar(props) {
  return (
    <img className="user-avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

export default UserAvatar;