import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const MyProducts = () => {

  const [products, setProducts] = useState([]);

  const imagepath = "http://localhost:5033/images/"

  useEffect(() => {
    const apiUrl = "http://localhost:5033/produkter/antal/8";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);

      });
  }, []);

  const productmap = products.map(product => {

    return (

      <section key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 my-1 ml-md-0">

        <div class="card my-3 mx-3">
          <div className="imgcontainer" style={{
            backgroundImage: `url(${imagepath + product.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '200px',
            height: '200px'
          }}>
          </div>
          <div class="card-body">
            <h4 class="card-title producttitle">{product.titel}</h4>
            <p class="card-text lorem">{product.teaser}</p>
          </div>
          <div class="card-body">
            <Link to={"/Produkt/" + (product._id)}> <button type="button" className="btn btn-product">SE MERE</button> </Link>
          </div>
        </div>

      </section>

    )

  })


  return (

    <div className="container">
      <div className="row justify-content-center">
      <div class="card-deck">
        {productmap}
      </div>
      </div>
    </div>


  )
}

export default MyProducts
