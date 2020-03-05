import React from 'react';

const Madeinusa = (props) => {
  return (
    <tr className="keyValue">
    <th className="keyHead"> 
      <span className="a-Size-Base a-Text-Normal a-Color-Secondary">
        Made In USA
      </span> 
    </th>
    {props.madeInUsa.map((origin)=> {
      return  <td className="keyHead"> {origin.MadeInUsa} </td>
    })}
  </tr>
  )
}

export default Madeinusa;