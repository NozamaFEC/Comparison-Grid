import React from 'react';
import axios from 'axios';
import EmirpShip from './Emirpship.jsx';
import Madeinusa from './Madeinusa.jsx';
import Price from './Price.jsx';
import Ratings from './Ratings.jsx';
import Size from './Size.jsx';
import Url from './Url.jsx';
import Agerating from './Agerating.jsx';
import Productname from './Productname.jsx';
import Vendor from './Vendor.jsx'
import Weight from './Weight.jsx';

// import '../../dist/styles.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        value: "",
        products: [],
    }
  }
  componentDidMount() {
    //this.setState({isSubmitted: true})
    axios.get('/products')
    .then((response)=> {
      //console.log(response)
      this.setState({products: response.data})
      //response.data[0].name
    })
    .catch((error) => {
      console.error(error);
    })
  }
  
render() {
  return (
    <div className="mr-Wrapper">
      <div className="mr-sSpacing">
        <div className="tableModule">
          <table className="tModTable" cellPadding="0" cellSpacing="0">
            <tbody>
              <Url img={this.state.products}/>
              <Productname name={this.state.products}/>
              <Size size={this.state.products}/>
              <Price price={this.state.products}/>                
              <Agerating ageRating={this.state.products}/>                
              <Madeinusa madeInUsa={this.state.products}/>
              <Weight weight={this.state.products}/>                  
              <EmirpShip shipping={this.state.products}/>                
              <Ratings ratings={this.state.products}/>
              <Vendor vendor={this.state.products}/>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
}
// BlenderBall Inside
// Wide Mouth
// Oz and ml Markings
// Fits in Most Cup Holders
// BPA- and Phthalate-Free (Report No: GZAFF160504039M.1, Jun 01 2016)
// Carry Loop / Handle
// Materials
// Dishwasher Safe
//isSubmitted: false,
// productName: "",
// madeInUsa: "",
// size: "",
// Price: "",
// ItemDESCRIPTION: "",
// emirpship: "",
// Agerating: "",
// stars: "",
// Vendor: "",
// img: ""
//  {/*  sample <img alt="Img" src="" style={{maxHeight:121.66, maxWidth:243.31}}></img> */}
// {/* <th className="tModImg"> <img alt="gokuNoodlesImg" src={this.state.img } style={{maxHeight:121.66, maxWidth:243.31}} /> </th>
// <th> <img alt="mrMimeImg" src="https://images-na.ssl-images-amazon.com/images/I/51vhsPiPwHL._AC_SL1300_.jpg" style={{maxHeight:121.66, maxWidth:243.31}}></img> </th>
// <th> <img alt="pikachuImg" src="https://images-na.ssl-images-amazon.com/images/I/31dQTRb3vHL._AC_.jpg" style={{maxHeight:121.66, maxWidth:243.31}}></img> </th>
// <th> <img alt="dekuImg" src="https://images-na.ssl-images-amazon.com/images/I/61iJvRVqNrL._AC_SL1234_.jpg" style={{maxHeight:121.66, maxWidth:243.31}}></img> </th>
// <th> <img alt="friezaImg" src="https://images-na.ssl-images-amazon.com/images/I/51YODJQpywL._AC_SL1000_.jpg" style={{maxHeight:121.66, maxWidth:243.31}}></img> </th>
// <th> <img alt="lunaImg" src="https://images-na.ssl-images-amazon.com/images/I/51L0ERSzJYL._AC_.jpg" style={{maxHeight:121.66, maxWidth:243.31}}></img> </th> */}
//{/* <th> <a href="https://images-na.ssl-images-amazon.com/images/I/61SabM4R5fL._AC_SL1300_.jpg"> {this.state.productName} </a> </th>
//<th> <a>Funko Pop! Games: Pokemon - Mr. Mime</a> </th>
//<th> <a>Funko Pop! Pokemon - Pikachu (Waving)</a> </th>
//<th> <a>Funko POP! Animation: My Hero Academia - Deku Collectible Figure, Multicolor</a> </th>
//<th> <a>Funko POP! Anime: Dragonball Z Final Form Frieza Action Figure</a> </th>
//<th> <a>Funko POP Anime: Sailor Moon with Luna Action Figure</a> </th> */}
  // {/* <tr className="keyValue"> */}
  //   {/* <th className="keyHead"> 
  //     <span className="a-Size-Base a-Text-Normal a-Color-Secondary">
  //       Emirp Shipping
  //     </span> 
  //   </th> */}
  //   {/* {this.state.products.map((product)=> {
  //     return  <td className="keyHead"> {product.EmirpShip} </td>
  //   })} */}
  //   {/* </tr> */}
  //   {/* <tr>
// <td>{this.state.Vendor}</td>
// <td>{this.state.emirpship}</td>
// <td>{this.state.madeInUsa}</td>
// <td>{this.state.size}</td>
// <td>{this.state.value}</td>
// <td>{this.state.stars}</td>
// <td>{this.state.emirpship}</td>
// </tr> */}
//this.handleSubmit = this.handleSubmit.bind(this);
// if (!this.state.isSubmitted) {
//   return (
//     <div>
//       <div>hello moto </div>
//       <button onClick={this.handleSubmit}>hello</button>
//     </div>
//   )
// } else {
// }// handleSubmit(event) {// this.setState({isSubmitted: true})// event.preventDefault()// axios.get('/products')// .then((response)=> {//   //console.log(response)//   this.setState({products: response.data.map((toys) => {//     //console.log(toys)//     this.setState({//       productName: toys.ProductName, 
//       madeInUsa: toys.MadeInUsa,
//       size: toys.Size,
//       Price: toys.Price,
//       ItemDESCRIPTION: toys.ItemDESCRIPTION,
//       emirpship: toys.emirpship,
//       Agerating: toys.Agerating,
//       stars: toys.stars,
//       Vendor: toys.Vendor,
//       img: toys.picurl
//     })
//   })})
//   //response.data[0].name
// })
// .catch((error) => {
//   console.error(error);
// })
// }