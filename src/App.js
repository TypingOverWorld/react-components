import './App.css';

import LoginControl from './components/auth/LoginControl';

// const comment = {
//   date: new Date(),
//   text: 'Welcome to my comment',
//   user: {
//     name: 'Name McNamerson',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };

function App() {
  return (
    <div className="App">
      <LoginControl />
    </div>
  );
}

export default App;
