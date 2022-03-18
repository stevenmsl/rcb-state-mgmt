import "./App.css";
import { useContext, useState } from "react";
import { Provider, Context } from "./contexts/ProductContext";
import ProductItem from "./components/ProductItem";

const App = () => {
  /*TA-05 */
  const context = useContext(Context);
  const [name, setName] = useState("");
  if (context === null) return <p>Oops context is null</p>;

  const { state: products, addProduct } = context;

  const renderProdItems = () => {
    return (
      <div>
        {products.map((prod) => (
          <ProductItem key={prod.id} item={prod} />
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Simple state management approach using React built-in hooks</p>
        <p>
          <button
            onClick={() => {
              addProduct(name);
            }}
          >
            Add Product
          </button>
          <input value={name} onChange={(e) => setName(e.target.value)}></input>
        </p>
        {renderProdItems()}
      </header>
    </div>
  );
};

const AppWithDataContext = () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

export default AppWithDataContext;
