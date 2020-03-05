import React from 'react';

const EmirpShip = (props) => {
    console.log(props)
    return (
        <tr className="keyValue">
        <th className="keyHead"> 
          <span className="a-Size-Base a-Text-Normal a-Color-Secondary">
            Emirp Shipping
          </span> 
        </th>
        {props.shipping.map((product)=> {
          return  <td className="keyHead"> {product.EmirpShip} </td>
        })}
        {/* <td>✓</td>
        <td>✓</td>
        <td>✓</td>
        <td>✓</td>
        <td>✓</td>
        <td></td> */}
      </tr>
    )
}
// const Emirpship = (props) => (
//     console.log(props)
//     return (
//       <th> hello </th>
//   )
// )



export default EmirpShip;