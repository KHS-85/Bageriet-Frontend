import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import AdminLayout from './components/admin/layout/AdminLayout';
import Layout from './components/layout/Layout';
import Login from './components/auth/Login'
import ProductAdmin from './components/admin/ProductAdmin';
import Home from './components/pages/Home';
import AdminHome from './components/admin/AdminHome';
import Contact from './components/pages/Contact';
import Products from './components/pages/Products';
import ProductDetails from './components/pages/ProductDetails';
import ProductCreate from './components/admin/ProductCreate';
import ProductEdit from './components/admin/ProductEdit';
import ProductDelete from './components/admin/ProductDelete';

import OpretProdukt from './components/pages/OpretProdukt';

function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <Switch>

          {/* Admin */}
          <Route path="/Admin">
            <AdminLayout>
            <Route exact path="/Admin" component={AdminHome} /> 
            <Route exact path="/Admin/Products" component={ProductAdmin} />
            <Route exact path="/Admin/ProductCreate" component={ProductCreate} />
            <Route exact path="/Admin/ProductEdit/:id" component={ProductEdit} />
            <Route exact path="/Admin/ProductDelete/:id" component={ProductDelete} />

            </AdminLayout>
          </Route>

          {/* Login */}
          <Route path="/login">
            <Login/>
          </Route>

          {/* Public */}
          <Route path="/">
            <Layout>
              
              <Route exact path="/" component={Home}  />
              <Route exact path="/Produkt/:produktID" component={ProductDetails} />
              <Route exact path="/Products" component={Products} />
              <Route exact path="/Kontakt" component={Contact} />
              <Route exact path="/Login" component={Login} />

              <Route exact path="/OpretProdukt" component={OpretProdukt} />

              

            </Layout>
          </Route>

        </Switch>

      </div>

    </BrowserRouter>
  );
}

export default App;