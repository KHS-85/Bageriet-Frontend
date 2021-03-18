import React, { useEffect, useState } from 'react';
import { createGlobalState } from 'react-hooks-global-state';
import { Link } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([]);
    const initialState = { sorteret: 'Morgenbrød' };
    const { useGlobalState } = createGlobalState(initialState);


    const imagepath = "http://localhost:5033/images/"

    useEffect(() => {
        const apiUrl = "http://localhost:5033/produkter/";
        fetch(apiUrl)
            .then((res) => res.json())
            .then((products) => {
                setProducts(products);
            });
    }, []);

    const [sorteret, setSorteret] = useGlobalState('sorteret');

    const productmap = products.filter(product => product.kategori.titel.includes(sorteret)).map(product => {

        return (

            <section key={product._id} className="col-12 col-sm-12 col-md-6 col-lg-4 my-1 ml-md-0">

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

            <div className="row">

                <div className="col-12">
                    <h2 className="LobsterText pb-2 mt-5">Vores elskede bagværk</h2>
                </div>

                <div className="col-12 lorem pb-5 mb-3">
                    <p>Der er mange forskellige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har
                    tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud
                    </p>
                </div>

            </div>

            <div className="row">
                    <div className="col">
                        <h2 className="LobsterText pb-2 mt-5">{sorteret}</h2>
                    </div>
                </div>

            <div className="row justify-content-center">

                <div>
                    <ul className="col text-right sidenavlist">
                        <li> <button className="KategoriKnap" onClick={() => setSorteret('Morgenbrød')}>Morgenbrød</button> </li>
                        <li> <button className="KategoriKnap" onClick={() => setSorteret('Rugbrød')}>Rugbrød</button> </li>
                        <li> <button className="KategoriKnap" onClick={() => setSorteret('Grovbrød')}>Grovbrød</button> </li>
                        <li> <button className="KategoriKnap" onClick={() => setSorteret('Madbrød')}>Madbrød</button> </li>
                        <li> <button className="KategoriKnap" onClick={() => setSorteret('Boller')}>Boller</button> </li>
                        <li> <button className="KategoriKnap" onClick={() => setSorteret('Kager')}>Kager</button> </li>
                        <li> <button className="KategoriKnap" onClick={() => setSorteret('Baguettes')}>Baguettes</button> </li>
                    </ul>

                </div>

                <div className="col card-deck mb-5">
                    {productmap}
                </div>
            </div>

        </div>


    )
}

export default Products
