import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        value: "",
        products: "",
        isSubmitted: false,
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
  this.setState({isSubmitted: true})
  event.preventDefault()
  axios.get('/products')
  .then((response)=> {
    //console.log(response)
    this.setState({products: response.data.map((stuff) => {
      console.log(stuff)
      this.setState({
        productName: stuff.ProductName, 
        madeInUsa: stuff.MadeInUsa,
        size: stuff.Size,
        Price: stuff.Price,
        ItemDESCRIPTION: stuff.ItemDESCRIPTION,
        emirpship: stuff.emirpship,
        Agerating: stuff.Agerating,
        stars: stuff.stars,
        Vendor: stuff.Vendor,
        img: stuff.picurl
      })
    })})
    //response.data[0].name
  })
  .catch((error) => {
    console.error(error);
  })
  }

    render() {
      if (!this.state.isSubmitted) {
        return (
          <div>
            <div>hello moto </div>
            <button onClick={this.handleSubmit}>hello</button>
          </div>
        )
      } else {
        return (
          <div>
        <table style={{width:100}}>
          <thead>
          <tr>
            <th>Product Name</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td> <img src={this.state.img }></img> </td>
            <td>{this.state.productName}</td>
            <td>{this.state.Vendor}</td>
            <td>{this.state.emirpship}</td>
            <td>{this.state.madeInUsa}</td>
            <td>{this.state.size}</td>
            <td>{this.state.value}</td>
            <td>{this.state.stars}</td>
            <td>{this.state.emirpship}</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
          </thead>
        </table>

          </div>
        )
      }
    }
  }