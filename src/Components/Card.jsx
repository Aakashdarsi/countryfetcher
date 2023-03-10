import React from 'react'

export default function Card(props) {
    return (
        <div className='container d-flex flex-row justify-content-center'>
            <div className="card my-2 shadow d-flex flex-column justify-content-center" style={{ width: "18rem" }}>
                <img src={`${props.flag}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className='card-text'>{props.country} -- {props.nativeName}</h5>
                    <p className="card-text">Capital -- {props.capital}</p>
                    
                    <p className="card-text">Currency - {props.currency} - {props.currencySymbol}</p>
                    <p className="card-text">Official Language - {props.officialLanguage}</p>
                    <p className="card-text">Population - {props.population}</p>
                    <p className="card-text">Location <span><a href={`https://www.google.co.in/maps/place/${props.country}`} target='_blank' rel='noreferrer'>See on Map</a></span></p>
                </div>
            </div>
        </div>
    )
}
