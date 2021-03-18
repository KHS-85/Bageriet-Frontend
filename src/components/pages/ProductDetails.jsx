import React, { Fragment, useEffect, useState } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import ProfilePic from '../gfx/profile.jpg'

import { BsHeart } from 'react-icons/bs';
import { MdEdit } from 'react-icons/md';

// API

import { opretKommentar } from '../helpers/apicall'

const ProductDetails = (props) => {

    const produktID = props.match.params.produktID
    const [produkt, setProdukt] = useState();
    const [error, setError] = useState();
    const [opdateret, setOpdateret] = useState()

    // Sørger for at lave <br/> fra api'et om til rigtige linebreaks
    const [ParsedText, setParsedText] = useState()

    const imagepath = "http://localhost:5033/images/"



    useEffect(() => {
        const apiUrl = "http://localhost:5033/produkter/" + produktID;
        fetch(apiUrl)
            .then((res) => {
                return res.json()
            })
            .then((produkt) => {
                setProdukt(produkt)
                setParsedText(produkt.beskrivelse)
                setError();
            })
            .catch(error => {
                setError("Der er sket en fejl med kald til API (fetch metode)")
                setProdukt()
                console.log(error)
            })
    }, [opdateret]);

    console.log("Produkt:", produkt)

    
    
    // Håndter opret ny kommentar

    const handleKommentar = e => {

        e.preventDefault()

        const kommentaren = new FormData(e.target)

        opretKommentar( kommentaren ).then(data => {

            if (data) {

                console.log(data)
                setOpdateret(new Date().getTime())
                setError()
                //tøm formular
                e.target.reset()

            } else {
                console.log("Der er sket en fejl")
                setError("Der er sket en fejl")
            }

        })

    }





    // Ingredienser - check om der er ingredienser og map dem ud som list item
    let ingrediensliste = <p>Indlæser ingredienser</p>
    if (produkt && produkt.ingredienser) {
        ingrediensliste = produkt.ingredienser.map(ingrediens => {
            return (
                <li>  <p className="mb-0 text-muted" key={ingrediens._id}> {ingrediens.ingrediens_titel} </p> </li>
            )
        })
    }

    // Kommentarer - check om der er Kommentarer og map dem ud
    let kommentarliste = <p>Indlæser kommentarer</p>
    if (produkt && produkt.kommentar) {
        kommentarliste = produkt.kommentar.map(kommentar => {

            return (
                <div className="commentbox container whitebackground text-left my-2 py-3">

                    <div className="row">

                    {/* Brugerens billede */}
                    <div className="imagecontainer col-2">
                        <img className="ProfilePic" src={ProfilePic} alt="ProfilePicture" />
                    </div>

                    {/* Brugerens navn, dato og kommentar */}
                    <div key={kommentar._id} className="col-10 commentcontainer">

                    <p className="my-0"> <strong> {kommentar.bruger.fornavn + " " + kommentar.bruger.efternavn} </strong> </p>
                    <p className="my-0 text-muted">
                    { new Date( kommentar.oprettet ).toLocaleDateString( 'da-DK', { year: 'numeric', hour: 'numeric', minute: 'numeric', month: 'long', day: 'numeric' } ) }
                          
                    </p> <br/>
                    
                    <p className="asd">  {kommentar.kommentaren} </p>

                    </div>

                    </div>

                </div>
            )
        })
    }

    return (


        <section>

            {

                produkt && // er der noget i produkt state? True eller false 

                <main key={produkt._id}>

                    <div className="container produktdetails">

                        <div className="row productnavigation mt-5">
                            <p className="pl-2 py-2 mb-0"> Produkter &gt; {produkt.titel}</p>
                        </div>

                        <div className="row px-0">

                            {/* LEFT SIDE */}
                            <div className="col-md-8 col-sm-12 my-3 px-0">

                                <div className="produkttitel mt-3">
                                    <h3 className="text-left p-0 m-0">{produkt.titel}</h3>
                                    <p className="text-left p-0 m-0 prodkat">{produkt.kategori.titel}</p>
                                </div>

                                <div className="prodIMGcontainer">

                                    <div className="imgcontainer" style={{
                                        backgroundImage: `url(${imagepath + produkt.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        width: '200px',
                                        height: '200px'
                                    }}>
                                    </div>


                                    {/* Parser sørger for at lave br fra api'et om til rigtige linebreaks */}
                                    <p className="mt-4 mr-5 text-left">{ReactHtmlParser(ParsedText)}</p>

                                </div>

                            </div>


                            {/* RIGHT SIDE */}
                            <div className="col-md-4 col-sm-12 my-4 ">
                                <div className="d-flex justify-content-end">
                                    <button className="px-5 mb-3 mt-3 likebutton">LIKE! <span className="heart"> <BsHeart /></span> </button>
                                </div>
                                <h5 className="text-left my-4">Ingredienser:</h5>
                                <ul className="ingredienser">
                                    {ingrediensliste}
                                </ul>
                            </div>

                            {/* Kommentarer */}
                            <div className="col-12">

                                <div>

                                    {/* Overskrift: "Kommentarer" */}
                                    <div className="whitebackground col-12">
                                        <h3 className="commentheadline">Kommentarer</h3>
                                    </div>

                                    {/* Form til at oprette kommentar */}
                                    <div className="whitebackground col-12 mt-2 p-0">
                                        <form className="commentform" onSubmit={handleKommentar}>
                                            <MdEdit className="formIcon"/>
                                            <input className="kommentarinput" name="kommentaren" required placeholder="Fortæl os hvad du synes..." type="text"/>
                                            <input className="hidden" type="text" name="titel" value="titel" />
                                            <input className="hidden" type="text" name="bruger" value="6053566790714013d43769c0" />
                                            <input className="hidden" type="text" name="produkt" value={produktID} />
                                            <button type="submit">INDSÆT</button>
                                        </form>
                                    </div>

                                    {/* Liste med alle kommentarer til pågældende opskrift */}
                                    {kommentarliste}

                                </div>

                            </div>

                        </div>

                    </div>

                </main>


            }

            {
                !produkt && !error && <h2 className="text-black py-3">Loader...</h2>

            }
            {
                error && <h2 className="text-black py-3"> {error} </h2>

            }

        </section>
    )
}

export default ProductDetails
