import './App.css';

import BoilingCalculator from './components/BoilingCalculator';

// const comment = {
//   date: new Date(),
//   text: 'Welcome to my comment',
//   user: {
//     name: 'Name McNamerson',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };

// const posts = [
//   { id: 1, title: 'Title One', content: 'An example content description.' },
//   { id: 2, title: 'Second Title', content: 'This blog has content too.' }
// ];

function App() {
  return (
    <div className="App">
      <BoilingCalculator />
    </div>
  );
}

export default App;
