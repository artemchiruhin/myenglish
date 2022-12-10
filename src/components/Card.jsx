import React from 'react'

function Card({ item }) {
  return (
    <div key={item.id} className="card">
        <img style={{ width: "200px" }} src="https://img.championat.com/s/1350x900/news/big/a/s/populyarnogo-strimera-sng-papicha-obvinili-v-sovraschenii-shkolnicy_16424288921469594749.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{item.word}</h5>
            <p className="card-text">{item.translation}</p>
        </div>
    </div>
  )
}

export default Card