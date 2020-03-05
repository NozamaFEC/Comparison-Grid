import React from 'react';
import axios from 'axios';
import EmirpShip from './Emirpship.jsx'
// import '../../dist/styles.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        value: "",
        products: [],
        //isSubmitted: false,
        productName: "",
        madeInUsa: "",
        size: "",
        Price: "",
        ItemDESCRIPTION: "",
        emirpship: "",
        Agerating: "",
        stars: "",
        Vendor: "",
        img: ""
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
                <tr className="table-ImgRows">
                  <th className="blank"></th>
                  {console.log(this.state.products)}
                  {/* {this.setState({img: this.state.products.map(() => {})})} */}
                  {this.state.products.map((product, key)=> {
                    return  <th className="tModImg" key={key}><img src={product.PicUrl } style={{maxHeight:121.66, maxWidth:243.31}} /></th>
                  })}
                  {/* <th className="tModImg"> <img alt="gokuNoodlesImg" src={this.state.img } style={{maxHeight:121.66, maxWidth:243.31}} /> </th>
                  <th> <img alt="mrMimeImg" src="https://images-na.ssl-images-amazon.com/images/I/51vhsPiPwHL._AC_SL1300_.jpg" style={{maxHeight:121.66, maxWidth:243.31}}></img> </th>
                  <th> <img alt="pikachuImg" src="https://images-na.ssl-images-amazon.com/images/I/31dQTRb3vHL._AC_.jpg" style={{maxHeight:121.66, maxWidth:243.31}}></img> </th>
                  <th> <img alt="dekuImg" src="https://images-na.ssl-images-amazon.com/images/I/61iJvRVqNrL._AC_SL1234_.jpg" style={{maxHeight:121.66, maxWidth:243.31}}></img> </th>
                  <th> <img alt="friezaImg" src="https://images-na.ssl-images-amazon.com/images/I/51YODJQpywL._AC_SL1000_.jpg" style={{maxHeight:121.66, maxWidth:243.31}}></img> </th>
                  <th> <img alt="lunaImg" src="https://images-na.ssl-images-amazon.com/images/I/51L0ERSzJYL._AC_.jpg" style={{maxHeight:121.66, maxWidth:243.31}}></img> </th> */}
                </tr>
                  {/*  sample <img alt="Img" src="" style={{maxHeight:121.66, maxWidth:243.31}}></img> */}
                <tr>
                  <th className="blank" ></th>
                  {/* href below should re-route to oage for that product */}
                  {this.state.products.map((product, key)=> {
                    return  <th key={key}> <a href="">{product.ProductName }</a> </th>
                  })}
                  {/* <th> <a href="https://images-na.ssl-images-amazon.com/images/I/61SabM4R5fL._AC_SL1300_.jpg"> {this.state.productName} </a> </th>
                  <th> <a>Funko Pop! Games: Pokemon - Mr. Mime</a> </th>
                  <th> <a>Funko Pop! Pokemon - Pikachu (Waving)</a> </th>
                  <th> <a>Funko POP! Animation: My Hero Academia - Deku Collectible Figure, Multicolor</a> </th>
                  <th> <a>Funko POP! Anime: Dragonball Z Final Form Frieza Action Figure</a> </th>
                  <th> <a>Funko POP Anime: Sailor Moon with Luna Action Figure</a> </th> */}
                </tr>
                <tr className="keyValue">
                  <th className="keyHead"> 
                  <span className="a-Size-Base a-Text-Normal a-Color-Secondary">
                    Size
                  </span> 
                  </th> 
                  {this.state.products.map((product)=> {
                    return  <td className="keyHead"> {product.Size} </td>
                  })}
                  {/* <td className="keyHead">Small</td>                    
                  <td>Small</td>                    
                  <td>Small</td>                    
                  <td>Small</td>                    
                  <td>Small</td>                    
                  <td>Small</td>                    
                                      */}
                </tr>
                <tr className="keyValue">
                  <th className="keyHead"> 
                    <span className="a-Size-Base a-Text-Normal a-Color-Secondary">
                      Price
                    </span>
                  </th>
                  {this.state.products.map((product)=> {
                    return  <td className="keyHead"> {product.Price} </td>
                  })}
                    {/* <td>$12.99</td> 
                    <td>$10.99</td> 
                    <td>$10.23</td> 
                    <td>$10.99</td> 
                    <td>$9.99</td> 
                    <td>$41.79</td>  */}
                </tr>
                <tr className="keyValue">
                  <th className="keyHead"> 
                    <span className="a-Size-Base a-Text-Normal a-Color-Secondary">
                      Age Rating
                    </span> 
                  </th>
                  {this.state.products.map((product)=> {
                    return  <td className="keyHead"> {product.Agerating} </td>
                  })}
                  {/* <td>E</td>
                  <td>E</td>
                  <td>E</td>
                  <td>E</td>
                  <td>E</td>
                  <td>E</td> */}
                </tr>
                <tr className="keyValue">
                  <th className="keyHead"> 
                    <span className="a-Size-Base a-Text-Normal a-Color-Secondary">
                      Made In USA
                    </span> 
                  </th>
                  {this.state.products.map((product)=> {
                    return  <td className="keyHead"> {product.MadeInUsa} </td>
                  })}
                </tr>
                <tr>
                  <th className="keyHead"> 
                    <span className="a-Size-Base a-Text-Normal a-Color-Secondary">
                      Wieght
                    </span> 
                  </th>
                  {this.state.products.map((product)=> {
                    return  <td className="keyHead"> {product.Weight} </td>
                  })}
                  {/* <td>6.8 ounces</td>
                  <td>3.48 ounces</td>
                  <td>3.26 ounces</td>
                  <td>3.8 ounces</td>
                  <td>3.8 ounces</td>
                  <td>4.8 ounces</td> */}
                </tr>
                <tr className="keyValue">
                  <th className="keyHead"> 
                    <span className="a-Size-Base a-Text-Normal a-Color-Secondary">
                      Emirp Shipping
                    </span> 
                  </th>
                  {/* {this.state.products.map((product)=> {
                    return  <td className="keyHead"> {product.EmirpShip} </td>
                  })} */}
                  
                  <EmirpShip shipping={this.state.products}/>
                </tr>
                <tr className="keyValue">
                  <th className="keyHead"> 
                    <span className="a-Size-Base a-Text-Normal a-Color-Secondary">
                      Ratings
                    </span> 
                  </th>
                  {this.state.products.map((product)=> {
                    return  <td className="keyHead"> {product.Stars} </td>
                  })}
                  {/* <td>5/5</td>
                  <td>5/5</td>
                  <td>5/5</td>
                  <td>5/5</td>
                  <td>5/5</td>
                  <td>5/5</td> */}
                </tr>
                <tr className="keyValue">
                  <th className="keyHead"> 
                    <span className="a-Size-Base a-Text-Normal a-Color-Secondary">
                      Vendor
                    </span> 
                  </th>
                  {this.state.products.map((product)=> {
                    return  <td className="keyHead"> {product.Vendor} </td>
                  })}
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    }
  }
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
          // }
                                       // handleSubmit(event) {
                                       // this.setState({isSubmitted: true})
                                       // event.preventDefault()
                                       // axios.get('/products')
                                       // .then((response)=> {
                                       //   //console.log(response)
                                       //   this.setState({products: response.data.map((toys) => {
                                       //     //console.log(toys)
                                       //     this.setState({
                                       //       productName: toys.ProductName, 
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