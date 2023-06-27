import logo from './logo.svg';
import './App.css';
import './UrlFetch';
import UrlFetch from './UrlFetch';

function App() {
  const [data] = UrlFetch("https://fakestoreapi.com/products");
  return (
    <>
    <h1>Welcome TO shopping Mart</h1>
    {data &&
        data.map((item) => {
          return <p key={item.id}>{`id- ${item.id}, price-${item.price}`}
          <img className='image' src={item.image}/>
          </p>;
          console.log(data);
        })}
    </>
  );
}

export default App;
