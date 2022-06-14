import React, { Component } from 'react';
import Order from './Order';

import orders from './orderData'; 

class OrdereList extends Component {
  render() {
    // console.log(orders);
    return (
      <>
        <h2>OrderList</h2>
        <div>
          <h3> Orders recently created </h3>
          {
            orders.map((order) => {
              return <Order key={order.id} order={order} />
            })
          }
        </div>
      </>
    );
  }
}

export default OrdereList;
