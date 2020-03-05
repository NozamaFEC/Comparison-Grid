import React from 'react';

const Url = (props) => {
    return (
        <tr className="table-ImgRows">
        <th className="blank"></th>
        {props.img.map((pic, key)=> {
          return  <th className="tModImg" key={key}><img src={pic.PicUrl } style={{maxHeight:121.66, maxWidth:243.31}} /></th>
        })}
      </tr>
    )
} 

export default Url;