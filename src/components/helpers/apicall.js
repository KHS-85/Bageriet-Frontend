import axios from 'axios'

// base URL
const api = {
    baseUrl: "http://andreashg.com:50333/"
}


// ----------------------------- \\
// ---------- PRODUKTER --------- \\
// ----------------------------- \\


//Hent alle products
export const getAllProducts =  () => {

    //http://localhost:5053/produkter        
    let response =  axios.get(api.baseUrl + "produkter")
        .then(res => { return res.data })
        .catch(error => {return "error"})

        return response

}

//Hent alle kategorier
export const hentAlleKategorier =  () => {

    //http://andreashg.com:50333/kategorier       
    let response =  axios.get(api.baseUrl + "kategorier")
        .then(res => { return res.data })
        .catch(error => {return "error"})

        return response

}


// Hent udvalgt produkt
export const getProduct = (productID) => {

    //http://localhost:5017/products/admin/5fb501b4bbb1d24e00fece99       
    let response = axios.get(api.baseUrl + "produkter/" + productID)
        .then(res => { return res.data })
        .catch(error => {return "error"})

        return response

}


//POST -  http://andreashg.com:50333/products/admin
export const opretProdukt = ( nytProdukt ) => {

      
    let response = axios.post(api.baseUrl + "produkter/admin", nytProdukt, {withCredentials: true} )
        .then(res => { return res.data })
        .catch(error => {return "error"})

        return response

}

//PUT Product -  http://localhost:5017/products/admin
export const editProduct =  ( editProduct, productID ) => {

    let formdata = new FormData(editProduct)

    //http://localhost:5017/products/admin/5fb501b4bbb1d24e00fece99       
    let response =  axios.put(api.baseUrl + "produkter/admin/" + productID, formdata, {withCredentials: true} )
        .then(res => { return res.data })
        .catch(error => {return "error"})

        return response

}


// DELETE - 

export const deleteProduct = (productID) => {


    //http://andreashg.com:50333/products/admin/:ID 
    let response = axios.delete(api.baseUrl + 'produkter/admin/' + productID, {withCredentials: true})   
    .then(res => {return res.data})
    .catch(error => {return "error"})

    return response

}


// --------------------- AUTH -----------------------------

// Login
export const loginAdmin = (logindata) => {

    let formdata = new FormData(logindata)

    // http://localhost:5017/login/login
    let response = axios.post(api.baseUrl + "login/login", formdata, { withCredentials: true } )
    .then( res => {
        return res.data
    } )

    .catch(error => {
        return "error"
    } )

    return response

}

//Logout

export const logoutAdmin = () =>{

    // http://localhost:5017/login/logout
    let response = axios.get(api.baseUrl + "login/logout",{ withCredentials: true } )
    .then( res => {
        return res.data

    } )

    .catch(error => {

        return "error"

    } )

    return response

}

//tjek login status -> er jeg stadig logget ind?
export const loginCheck = (  ) =>   {

    // http://localhost:5017/login/logout
    let response = axios.get(api.baseUrl + "login/loggedin", { withCredentials: true } )
    .then( res => {
        return res.data

    } )

    .catch(error => {

        return "error"

    } )

    return response



}

// -------------//
// Ingredienser //
// -------------//


export const opretIngrediens = ( produktID, ingrediensen ) => {

    // http://andreashg.com:50333/produktingrediens/admin/5f6719c7d1be3e2fd0cb2648
      
    let response = axios.post(api.baseUrl + "produktingrediens/admin/" + produktID , ingrediensen, {withCredentials: true} )
        .then(res => { return res.data })
        .catch(error => {return "error"})

        return response

}


export const sletIngrediens = (produktID, IngrediensId) => {


    //http://andreashg.com:50333/produktingrediens/admin/5f6638a41fe7cf67d08a64d8/5f6638be1fe7cf67d08a64db

    let response = axios.delete(api.baseUrl + 'produktingrediens/admin/' + produktID + "/" + IngrediensId, {withCredentials: true})   
    .then(res => {return res.data})
    .catch(error => {return "error"})

    return response

}


// -------------//
// Kommentarer  //
// -------------//



//POST -  http://andreashg.com:50333/kommentar/admin
export const opretKommentar = ( nyKommentar ) => {

      
    let response = axios.post(api.baseUrl + "kommentar/admin", nyKommentar, {withCredentials: true} )
        .then(res => { return res.data })
        .catch(error => {return "error"})

        return response

}



