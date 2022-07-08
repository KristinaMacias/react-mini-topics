import logo from './logo.svg';
import './App.css';
import Product from './components/firstComponent';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Product  name="Amazon Echo" description="Your AI assistant" price={59.99} />
      <Product name="Fire Tv" description="Television streaming device" price={25.99} />
      <Product name="Kindle Paperwhite" decription="e-reader" price={79.99} />

    </div>
  );
}

export default App;
