import React, { useState, useEffect } from 'react'

import Loader from 'react-loader-spinner'

import { useHistory } from 'react-router-dom'


//api call
import { getProduct, deleteProduct } from '../helpers/apicall'

const ProductDelete = (props) => {

    const [product, setProduct] = useState()

    const history = useHistory()

    const productID = props.match.params.id

    const imagepath = "http://localhost:5033/images/"

    useEffect(() => {

        getProduct(productID).then(res => {

            if (res !== "error") setProduct(res)
            else console.log("Produktet findes ikke")
        })

    }, [])

    const handleDelete = e => {

        e.preventDefault()

        deleteProduct(productID).then(res => {

            if(res !== "error"){
                console.log(res)
                history.push("/Admin/Products")
            } else {
                //håndter fejl 
                console.log(res)
            }


        })

    }


    return (
        <div>

            {
                !product ? <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={30000} />
                    :
                    <div className="container">
                        <h2>Are you sure you want to delete this?</h2>
                        
                        <div class="card my-3 mx-3 carddelete mx-auto">
          <div class="card-body">
            <h4 class="card-title producttitle">{product.teaser}</h4>
          </div>
          <img class="card-img-top" src={imagepath + product.image} alt="Product Cover" />

        </div>

                        <button className="btn btn-success mx-3" onClick={() => { history.push("/Admin/products")}} > BACK </button>
                        <button className="btn btn-danger" onClick={handleDelete}> DELETE </button>
                        
                        
                    </div>

                  

            }
        </div>

    )
}

export default ProductDelete
