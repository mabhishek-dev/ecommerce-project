import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
// import { products } from "../products"; -> we are fetching from backet so no need of this.
import "./HomePage.css";
import { ProductGrid } from "./ProductGrid";
export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]); //Initially empty.
  /*
    
    //Data fetching = Get data from the backend (Here, using our code).
    //We cannot store fetch in a variable as it's retrieving data from a back end. It may take time and it may retrieve the data in the future, like afterwards.
    //We can use a promise as fetch() returns a promise and promise lets us wait for asynchronous code to finish.
    
    fetch("http://localhost:3000/api/products") //also we can just have: "/api/products", by using a proxy in vite.config.js
      .then((response) => {
        //using .then as its asynchronous
        return response.json(); //response.json has the product's data, but again this is also asynchronous, so we use .then()
      })
      .then((data) => {
        //this .then() can be used with response.json().then() itself, but instead of .then() within another .then(), we can actually return the response.json(), then add this .this() after that, which is the same as that.
        console.log(data);
      });
  */
  //The above way is kind of messy, better way is by using axios(install via npm), it's a cleaner way to make requests to the backend.
  /*
  useEffect(() => {
    //We don't want the products to be loaded every time the home page is loaded. So we use useEffect(), it lets us control when some code runs (using dependency array). By default, any time a component gets updated, it runs the code.
    axios("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []); //This dependency array, [] = run only once.
  */
  //Although the above way was better, a evem better way is to to use Async Await, this let's us write asynchronous code like normal code.

  /*
 To use await we need to be inside an async function but using async with useEffect cannot be done as inner function of useEffect should not return a promise, so another internal function is created and async is used.
 We can actually store the result by using Aync Await in a variable.
  */
  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getHomeData();
  });
  return (
    <>
      <Header cart={cart} />
      <title>Ecommerce Project</title>
      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
