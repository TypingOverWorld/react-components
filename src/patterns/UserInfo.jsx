import UserAvatar from '../components/user/UserAvatar';
import UserName from '../components/user/UserName';

function UserInfo(props) {
  return (
    <div className="user-info">
      <UserAvatar user={props.user} />
      <UserName user={props.user} /> 
    </div>
  );
}

export default UserInfo;