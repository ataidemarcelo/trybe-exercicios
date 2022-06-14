import React, { Component } from "react";

class ShoppingList extends Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item, index) => {
      // console.log("item: ", item);
      return (
        <li key={index}>{ item }</li>
      );
    });

    return (
      <div>
        <h2>Lista de compras</h2>
        <ul style={{ listStyle: 'none' }}>
          { items }
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
