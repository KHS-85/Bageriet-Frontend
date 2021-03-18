import React from 'react'
import { useState, useEffect } from "react";
import { MdDeleteForever } from 'react-icons/md';

// API

import { opretIngrediens, sletIngrediens, getProduct } from '../helpers/apicall'

const AdminIngredienser = (props) => {

    // State
    const [error, setError] = useState()
    const [besked, setBesked] = useState()
    // skal rumme timestamp for seneste opdaterede ingredienst, så component rerender ved hver ændring
    const [opdateret, setOpdateret] = useState() 

    // State som skal rumme ingrediesner og prdouktets ID
    const [ingredienser, setIngredienser] = useState()
    const [produktID, setProduktID] = useState()

    // Skaf info om produktets ingredienser - enten fra props eller hent selv via API-kald
    useEffect(() => {

        // hvis opdateret er undefined OG der er et produkt med i props - så snup produktID og ingredienser fra props
        if (!opdateret && props.produktet) {

            setIngredienser(props.produktet.ingredienser)
            setProduktID(props.produktet._id)

        }
        else {

            getProduct(produktID).then(data => {

                if (data) {

                    setIngredienser(data.ingredienser)
                    setError()

                }
                else {
                    setError("der er sket en fejl")
                }
            })
        }

    }, [ opdateret ])




    // håndter opret ingrediens (kald til api endpoint)
    const handleSubmit = e => {

        e.preventDefault()

        const ingrediensen = new FormData(e.target)

        opretIngrediens(produktID, ingrediensen).then(data => {

            if (data) {

                console.log(data)
                setBesked("En ingrediens er oprettet")
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

    const handleSletIngrediens = (ingrediensId) => {
        sletIngrediens(produktID, ingrediensId).then(data => {

            if (data) {
                setBesked("ingrediensen er slettet")
                setError() // tøm state med fejlbesked - hvis der tidligere har været fejl
                setOpdateret(new Date().getTime()) // opdater denne state så useeffect kører igen
            }
            else {
                setError("noget gik galt")
            }
        })
    }

    return (
        <div>

            <h2 className="my-5">Opret og slet ingredienser</h2>


            {
                ingredienser && ingredienser.map(i =>
                    <p key={i._id} >
                        {i.ingrediens_titel} , {i.maengde} {i.enhed_navn}
                        <MdDeleteForever color="red" onClick={() => handleSletIngrediens(i._id)} />

                    </p>
                )
            }

            <h2>Opret ny ingrediens</h2>
            <form onSubmit={handleSubmit}>

                <input name="ingrediens_titel" type="text" required placeholder="ingrediens navn" />
                <br />

                <input name="maengde" type="number" required placeholder="ingrediens mængde" />
                <br />

                <input name="enhed_forkortet" type="text" required placeholder="ingrediens enhed forkortet" />
                <br />

                <input name="enhed_navn" type="text" required placeholder="ingrediens enhed" />
                <br />

                <button className="my-5" type="submit"> Opret Ingrediens </button>

            </form>

            <p>{besked}</p>
            <p>{error}</p>

        </div>
    )
}

export default AdminIngredienser
