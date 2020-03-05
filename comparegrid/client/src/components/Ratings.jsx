import React from 'react';

const Ratings = (props) => {
    return (
        <tr className="keyValue">
        <th className="keyHead"> 
          <span className="a-Size-Base a-Text-Normal a-Color-Secondary">
            Ratings
          </span> 
        </th>
        {props.ratings.map((rating)=> {
          return  <td className="keyHead"> {rating.Stars} </td>
        })}
      </tr>
    )
}

export default Ratings;


// {/* <td>5/5</td>
// <td>5/5</td>
// <td>5/5</td>
// <td>5/5</td>
// <td>5/5</td>
// <td>5/5</td> */}