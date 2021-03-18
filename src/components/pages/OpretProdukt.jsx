import React from 'react'
import { useState, useEffect } from "react";
import DummyImg from '../gfx/chooseImg.jpg'

// API
import { hentAlleKategorier, opretProdukt } from '../helpers/apicall'

const OpretProdukt = () => {

    // state
    const [kategorier, setKategorier] = useState()
    const [besked, setBesked] = useState()
    const [error, setError] = useState()
    // til visning af thumbnail
    const [thumb, setThumb] = useState(DummyImg)


    // Hent kategorier
    useEffect(() => {

        // Hent kategorier
        hentAlleKategorier().then(data => {

            if (data) {
                setKategorier(data)
            } else {
                setError("der er sket en fejl")
            }
        }
        )

    }, [])

    // Visning af thumbnail
    const thumbVisning = e => {

        let reader = new FileReader();
        reader.onload = r => setThumb(r.target.result)
        reader.readAsDataURL(e.target.files[0])
    }

    // hånter opret produkt (kald til api endpoint)
    const handleSubmit = e => {
        

        e.preventDefault()

        const produktet = new FormData(e.target)

        opretProdukt ( produktet ).then( data => {

            if ( data && data.oprettet ) {

                setBesked(" Produktet er oprettet ")
                setError()

                //tøm formular
                e.target.reset()
            } else {
                seterror("Der er sket en fejl")
            }


        })
        

    }


    
    return (

        <section className="my-5">

            <h1 className="px-5 LobsterText">Opret nyt produkt</h1>
            <p> {besked} </p>
            <p> {error} </p>

            <form onSubmit={handleSubmit}>

                {/* Titel */}
                <label>Indtast titel
                    <input name="titel" type="text" required placeholder="Indtast titel her" />
                </label>

                <br /><br />

                {/* Teaser */}
                <label>Indtast teaser
                    <input name="teaser" type="text" required placeholder="Indtast teaser her" />
                </label>

                <br /><br />

                {/* Beskrivelse */}
                <label>Indtast beskrivelse <br/>
                    <textarea name="beskrivelse" id="" cols="30" rows="10" required ></textarea>
                </label>

                <br /><br />

                {/* Tilberedningstid */}
                <label>Indtast Tilberedningstid
                    <input name="tilberedningstid" type="number" min="1" required placeholder="Indtast tilberedningstiden" />
                </label>

                <br /><br />

                {/* Pris */}
                <label>Indtast Pris i hele kroner
                    <input name="pris" type="number" min="1" required placeholder="Indtast prisen" />
                </label>

                <br /><br />

                {/* Antal brød/kager */}
                <label>Hvor mange stk.
                    <input name="antal" type="number" min="1" required placeholder="Indtast antal" />
                </label>

                <br /><br />



                <select name="kategori" required>
                    {
                        kategorier && kategorier.map(k =>
                            <option key={k._id} value={k._id} defaultValue="5f63b9f9702cca37f87ce06f"> {k.titel} </option>
                        )
                    }
                </select>

                <br/> <br/>

                {/* Billede */}
                <label>Vælg et billede <br/>
                    <input onChange={thumbVisning} name="image" type="file" accept=".jpg, .jpeg, .png, .bmp"  required />
                

                <br/><br/>

                <img src={thumb}  width="150px" alt="Vælg billede til produkt"/>

                </label>

                <br /><br />

                <button type="submit">Indsend og opret produkt</button>


            </form>

        </section>
    )
}

export default OpretProdukt
