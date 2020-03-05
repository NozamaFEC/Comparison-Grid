import React from 'react';

const Size = (props) => {
    return (
        <tr className="keyValue">
        <th className="keyHead"> 
        <span className="a-Size-Base a-Text-Normal a-Color-Secondary">
          Size
        </span> 
        </th> 
        {props.size.map((size)=> {
          return  <td className="keyHead"> {size.Size} </td>
        })}
      </tr>
    )
}

export default Size;

{/* <td className="keyHead">Small</td>                    
        <td>Small</td>                    
        <td>Small</td>                    
        <td>Small</td>                    
        <td>Small</td>                    
        <td>Small</td>                    
                            */}