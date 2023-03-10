import React, { Component } from 'react'
import Card from './Card'
import Loading from './Loading'
export default class Continents extends Component {
    constructor()
    {
        super()
        this.state = {
          continent:"asia",
          fetched_data:[],
          loading:false
        }
    }
    async componentDidMount()
    {
      let url = `https://restcountries.com/v2/region/${this.state.continent}`
      let fetch_data = await fetch(url);
      this.setState({loading:true})
      let parsed_data = await fetch_data.json();
      this.setState({
        fetched_data:parsed_data,
        loading:false
      })
    }
    changeHandler = async(event) => {
      let url = `https://restcountries.com/v2/region/${event.target.value}`
      let fetch_data = await fetch(url);
      this.setState({
        loading:true
      })
      let parsed_data = await fetch_data.json();
      
      this.setState(
        {
          continent:event.target.value,
          fetched_data:parsed_data,
          loading:false
        }

      )
    }
    
  render() {
    return (
      <div className='container ' style={{marginTop:"auto"}}>
        <label htmlFor="continentForm">Select your Continent to Get All the Results</label>
        <select name="" id="continentForm" onChange={this.changeHandler} className='form-select'>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>
        {/* <button className="btn btn-primary my-2" onClick={this.buttonCLick}>Test</button> */}
        {this.state.loading?<Loading/>: <div className="container">
          <div className="row">
          {this.state.fetched_data.map((element,index)=><div className="col-md-4 col-sm-12" key={index}>
        <Card country = {element.name} flag = {element.flag}  nativeName = {element.nativeName} capital = {element.capital} currency = {element.currencies[0].name} currencySymbol = {element.currencies[0].symbol} officialLanguage = {element.languages[0].nativeName} population = {element.population} Language = {element.languages[0].name} callingCode = {element.callingCodes[0]}/>
          </div>)}
          </div>
        </div>}
       
       
      </div>
    )
  }
}
