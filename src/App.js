import './App.css';

import CurrentTime from "./components/CurrentTime";
import CommentCard from "./patterns/CommentCard";
import AlertButton from "./components/buttons/AlertButton";
import ToggleState from "./components/ToggleState";

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
      <CurrentTime />
      <CommentCard
        date={comment.date}
        text={comment.text}
        user={comment.user}
      />
      <AlertButton />
      <ToggleState />
    </div>
  );
}

export default App;
