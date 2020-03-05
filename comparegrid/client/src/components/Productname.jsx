import React from 'react';

const Productname = (props) => {
    return (
      <tr>
        <th className="blank" ></th>
        {/* href below should re-route to oage for that product */}
        {props.name.map((desc, key)=> {
          return  <th key={key}> <a href="">{desc.ProductName }</a> </th>
        })}
      </tr>
    )
}
export default Productname;