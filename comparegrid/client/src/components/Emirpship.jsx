import React from 'react';



const EmirpShip = (props) => {
    // console.log(props)
    return (
        <tr className="keyValue">
        <th className="keyHead"> 
          <span className="a-Size-Base a-Text-Normal a-Color-Secondary">
            Emirp Shipping
          </span> 
        </th>
        {props.shipping.map((fastship)=> {
          return  <td className="keyHead"> {fastship.EmirpShip} </td>
        })}
        
      </tr>
    )
}
{/* <td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td></td> */}
// const Emirpship = (props) => (
//     console.log(props)
//     return (
//       <th> hello </th>
//   )
// )



export default EmirpShip;