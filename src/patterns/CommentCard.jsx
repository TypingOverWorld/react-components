import formatDate from '../utils/formatDate'

import UserInfo from './UserInfo';

function CommentCard(props) {
  return (
    <div className="comment-card">
        <UserInfo user={props.user} />
        <div className="comment-text">
          {props.text}
        </div>
        <div className="comment-date">
          {formatDate(props.date)}
        </div>
    </div>
  );
}

export default CommentCard;