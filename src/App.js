import logo from './logo.svg';
import './App.css';

function App(pros) {
  const products=[{name:"laptop",price:75000},
                  {name:"mobile",price:50000},
                {name:"TV",price:40000}]
  return (
    <div className="App">
     {products.map(product=><Product name={product.name} price={product.price}></Product>)}
    </div>
  );
}
function Product(pros){
  return (
    <div className='product-style'>
      <h1>Product:{pros.name}</h1>
      <h2>Price:{pros.price}</h2>   
    </div>
  )
}

export default App;
