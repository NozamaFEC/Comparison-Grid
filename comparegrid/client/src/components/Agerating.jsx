import React from 'react';

const Agerating = (props) => {
    return (
        <tr className="keyValue">
        <th className="keyHead"> 
          <span className="a-Size-Base a-Text-Normal a-Color-Secondary">
            Age Rating
          </span> 
        </th>
        {props.ageRating.map((age)=> {
          return  <td className="keyHead"> {age.Agerating} </td>
        })}
      </tr>
    )
}

export default Agerating;

// {/* <td>E</td>
//         <td>E</td>
//         <td>E</td>
//         <td>E</td>
//         <td>E</td>
//         <td>E</td> */}