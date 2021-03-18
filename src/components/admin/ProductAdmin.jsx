import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//loader
import Loader from 'react-loader-spinner'
import { MdDeleteForever, MdModeEdit } from 'react-icons/md';


//API-call 
import { getAllProducts } from '../helpers/apicall'

const imagepath = "http://localhost:5033/images/"


const ProductAdmin = () => {

    //HOOKS
    const [products, setProducts] = useState()

    //kald api'et når component er loadet/rendered

    useEffect(() => {

        getAllProducts().then(res => {

            // hvis respone ikke er "error" så set state
            if (res !== "error") setProducts(res)

        })

    }, [])

    let productList = <tr><td colSpan="4"> <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} /> </td></tr>//3 secs

    //Hvis der er data i state produkter
    if (products) {

        productList = products.map(p => { // bruger "p", men kan være hvad som helst

            return (

                <tr key={p._id}>
                    <th scope="row">{p._id}</th>
                    <td>{p.teaser}</td>
                    <td>  <img class="adminimg img-fluid" src={imagepath + p.image} alt="Product Cover" /> </td>
                    <td>
                        <Link to={ `ProductDelete/${p._id}`} >  <MdDeleteForever />  </Link>
                        <Link to={`ProductEdit/${p._id}`} > <MdModeEdit />  </Link>
                    </td>

                </tr>

            )

        })
    }


    return (
        <div>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">ProductImage</th>
                        <th scope="col">Edit</th>
                    </tr>
                    <tr>
                        <th colSpan="3"></th>
                        <th >
                            <Link to="/admin/ProductCreate" className="btn btn-dark">OPRET NY</Link>
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {productList}
                </tbody>
            </table>

        </div>
    )
}

export default ProductAdmin
