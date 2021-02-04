import './App.css';

import CommentCard from "./patterns/CommentCard";

const comment = {
  date: new Date(),
  text: 'Welcome to my comment',
  user: {
    name: 'Name McNamerson',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

function App() {
  return (
    <div className="App">
      <CommentCard
        date={comment.date}
        text={comment.text}
        user={comment.user}
      />
    </div>
  );
}

export default App;
