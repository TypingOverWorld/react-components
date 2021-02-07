import './App.css';

import FilterableProductTable from './patterns/FilterableProductTable';

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

const products = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

function App() {
  return (
    <div id="App">
      <FilterableProductTable products={products} />
    </div>
  );
}

export default App;
