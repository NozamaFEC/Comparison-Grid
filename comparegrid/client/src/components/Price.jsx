import React from 'react';

const Price = (props) => {
    return (
        <tr className="keyValue">
        <th className="keyHead"> 
          <span className="a-Size-Base a-Text-Normal a-Color-Secondary">
            Price
          </span>
        </th>
        {props.price.map((cost)=> {
          return  <td className="keyHead"> {cost.Price} </td>
        })}
      </tr>
    )
}

export default Price;


// {/* <td>$12.99</td> 
// <td>$10.99</td> 
// <td>$10.23</td> 
// <td>$10.99</td> 
// <td>$9.99</td> 
// <td>$41.79</td>  */}