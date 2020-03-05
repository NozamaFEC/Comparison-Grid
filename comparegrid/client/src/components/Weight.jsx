import React from 'react';

const Weight = (props) => {
    return (
        <tr>
        <th className="keyHead"> 
          <span className="a-Size-Base a-Text-Normal a-Color-Secondary">
            Wieght
          </span> 
        </th>
        {props.weight.map((weight)=> {
          return  <td className="keyHead"> {weight.Weight} </td>
        })}
      </tr>
    )
}

export default Weight;

// {/* <td>6.8 ounces</td>
//         <td>3.48 ounces</td>
//         <td>3.26 ounces</td>
//         <td>3.8 ounces</td>
//         <td>3.8 ounces</td>
//         <td>4.8 ounces</td> */}