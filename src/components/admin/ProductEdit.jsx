import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Loader from 'react-loader-spinner'

import ImageUploader from 'react-images-upload';


//api call
import { getProduct, editProduct } from '../helpers/apicall'
import AdminIngredienser from './AdminIngredienser';

const ProductEdit = (props) => {

    // component loader og har id med
    // find produktet som skal rettes -> hentes fra api -> _id er nødvendig
    // Der rettes i produktets data - og klik på RET knappen derefter
    //Send den rettede data til api'ets PUT metode
    //Hvis det gik godt/hvis det gik skidt

    const [product, setProduct] = useState()
    const history = useHistory()

    const productID = props.match.params.id

    useEffect(() => {

        console.log("useeffect her", productID)
        getProduct(productID).then(res => {

            if (res !== "error") setProduct(res)

        })

    }, [])

    const handleSubmit = e => {

        console.log("handlesubmit")

        e.preventDefault();
        console.log(e.target)

        editProduct(e.target, productID).then(res => {

            if (res !== "error") {
                console.log(res)
                history.push("/Admin/Products")
            } else {
                //håndter fejl 
                console.log(res)
            }

        })

    }


    return (

        <div className="container">

            {
                !product ? <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={30000} />
                    :

                    <>
                    <form onSubmit={handleSubmit}>

                        <p>Title:</p>
                        <input name="overskrift" type="text" placeholder="Produktet titel" defaultValue={product.titel} required />

                        <br />
                        <br />

                        <p>Description:</p>
                        <input name="beskrivelse" type="text" placeholder="Produktet beskrivelse" defaultValue={product.teaser} required />

                        <br />

                        <label className="mt-5">Vælg Billede
                < ImageUploader
                                name="billede"
                                withIcon={true}
                                buttonText="Upload Billede"
                                withLabel={true}
                                imgExtension={['.jpg', '.gif', '.jpeg', '.png']}
                                singleImage={true}
                                withPreview={true}
                                required={true}
                                defaultImages={['http://localhost:5033/images/' + product.image]}
                            />

                            <br /> <br />

                        </label>

                        <div>

                            <button className="btn btn-success mx-3" onClick={() => { history.push("/Admin/products") }} > FORTRYD </button>
                            <button className="btn btn-danger" type="submit"> GEM ÆNDRINGER </button>

                        </div>

                    </form>

                    {/* Ingredienser */}
                    <div>

                        <AdminIngredienser produktet={product} />

                    </div>

                    </>
            }

        </div>

    )
}

export default ProductEdit
