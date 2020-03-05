import React from 'react';

const Vendor = (props) => {
    return (
        <tr className="keyValue">
        <th className="keyHead"> 
          <span className="a-Size-Base a-Text-Normal a-Color-Secondary">
            Vendor
          </span> 
        </th>
        {props.vendor.map((distributor)=> {
          return  <td className="keyHead"> {distributor.Vendor} </td>
        })}
      </tr>
    )
}

export default Vendor;