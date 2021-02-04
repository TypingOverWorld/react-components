function UserAvatar(props) {
  return (
    <img className="user-avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

export default UserAvatar;