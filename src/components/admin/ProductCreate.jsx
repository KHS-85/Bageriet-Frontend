import React from 'react'
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'

import ImageUploader from 'react-images-upload';

//Brugeren åbner "siden"
//brugeren udfylder formular
// - trykker opret
//Kontakt til api'et opretmetode - post
//brugeren får en tilbagemelding eller vinsning på at produktet er oprettet

// api-kald 
import { hentAlleKategorier, opretProdukt } from '../helpers/apicall'


const ProductCreate = () => {

    const [kategorier, setKategorier] = useState()
    const [error, setError] = useState()
    const [besked, setBesked] = useState()

    const history = useHistory();

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

    function clearPreview() {
        document.querySelector('.deleteImage').click();
    }



    // håndter opret produkt (kald til api endpoint)
    const handleSubmit = e => {


        e.preventDefault()

        const produktet = new FormData(e.target)

        opretProdukt(produktet).then(data => {

            if (data && data.oprettet) {

                setBesked(" Produktet er oprettet ")
                setError()

                //tøm formular
                e.target.reset()
                clearPreview()

            } else {
                seterror("Der er sket en fejl")
            }


        })


    }


    return (
        <div>


            <h2 className="mb-5 LobsterText mt-5">Tilføj nyt produkt</h2>

            <form onSubmit={handleSubmit}>

                {/* Titel */}
                <label>Titel <br/>
                    <input name="titel" type="text" required placeholder="Indtast titel" />
                </label>

                <br /><br />

                {/* Teaser */}
                <label>Teaser <br/>
                <textarea name="teaser" id="" cols="30" rows="4" required placeholder="Indtast teaser..."></textarea>
                </label>

                <br /><br />

                {/* Beskrivelse */}
                <label>Beskrivelse <br />
                    <textarea name="beskrivelse" id="" cols="30" rows="10" required placeholder="Indtast beskrivelse..."></textarea>
                </label>

                <br /><br />

                {/* Tilberedningstid */}
                <label>Tilberedningstid <br/>
                    <input name="tilberedningstid" type="number" min="1" required placeholder="Indtast tilberedningstiden" />
                </label>

                <br /><br />

                {/* Pris */}
                <label>Pris <br/>
                    <input name="pris" type="number" min="1" required placeholder="Indtast prisen (i hele kroner)" />
                </label>

                <br /><br />

                {/* Antal brød/kager */}
                <label>Antal <br/>
                    <input name="antal" type="number" min="1" required placeholder="Indtast antal" />
                </label>

                <br /><br />


                <label>Kategori <br/>
                <select name="kategori" required>
                    {
                        kategorier && kategorier.map(k =>
                            <option key={k._id} value={k._id} defaultValue="5f63b9f9702cca37f87ce06f"> {k.titel} </option>
                        )
                    }
                </select>
                </label>

                <br /> <br />

                    <p className="pb-0 mb-0">Billede</p>
                < ImageUploader
                    name="image"
                    className="pt-0 mt-0"
                    withIcon={true}
                    buttonText="Upload Billede"
                    withLabel={true}
                    label={"Maks filstørrelse: 5mb - Tilladte filer: jpg, jpeg, gif, png"}
                    imgExtension={['.jpg', '.gif', '.jpeg', '.png']}
                    maxFileSize={5242880}
                    fileSizeError={"Filen er for stor - vælg et mindre billede"}
                    fileTypeError={"Denne filtype er ikke tilladt"}
                    singleImage={true}
                    withPreview={true}
                    required={true}
                />


                <br /> <br />

                <h2 className="my-3">
                    {besked}
                </h2>

                <button className="btn btn-secondary my-3" type="submit"> Tilføj nyt produkt </button>


            </form>





        </div>
    )
}

export default ProductCreate
