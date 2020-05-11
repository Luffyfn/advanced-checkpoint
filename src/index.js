import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';
              
                //Construction de l'objet

const products = [
  { name: "Macbook", category : "Electronics", price: "2000 TND" },
  { name: "iPhone", category : "Electronics", price: "2500 TND" },
  { name: "X-box", category : "Electronics", price: "1000 TND" },
  { name: "Cap", category : "Clothes", price: "80 TND" },
  { name: "Jeans", category : "Clothes", price: "150 TND" },
  { name: "Shoe", category : "Clothes", price: "250 TND" },
];  

const ProductTable = (props) => {
    const table = props.object;
    const productsMap = table.map((props) => { 
      return(
        <tr style = {{fontStyle: "italic", fontSize: 20, textAlign: "center"}}>
          <td style = {{backgroundColor: "green", width: 200}}>{props.name} </td>
          <td style = {{backgroundColor: "yellow", width: 200}}>{props.category}</td>
          <td style = {{backgroundColor: "orange", width: 200}}>{props.price}</td>  
        </tr>
      );
    });
    return(
      <div>
        <h1 style = {{textAlign: "center", color: "red", fontSize: 50}}>OBJECTS ARRAY</h1>
        <table style = {{paddingLeft: "25%"}}>
          <tr style = {{backgroundColor: "red"}}>
            <th>NAME</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
          </tr>
          {productsMap}
        </table>  
      </div>
      
    );
}

ProductTable.propTypes = {
  products: PropTypes.array,
  name: PropTypes.string,
  price: PropTypes.string,
  category : PropTypes.oneOf(["Electronics", "Clothes"])
};

ReactDOM.render(
  <React.StrictMode>
    <ProductTable object = {products}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
