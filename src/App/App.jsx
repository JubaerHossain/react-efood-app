import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../common/Header';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import {ProductAdd} from '../product/ProductAdd';
import {ProductEdit} from '../product/ProductEdit';
import {ProductView} from '../product/ProductView';
import { RestaurantPage } from '../Pages/RestaurantPage';
import { Notfound } from '../Pages/Notfound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();
   
    useEffect(() => {
        // history.listen((location, action) => {  
        //     console.log(location);   
        //     dispatch(alertActions.clear());
        // });
    }, []);

    return (
            <Router>
                    <ToastContainer autoClose={5000}/>
                    <Header></Header>
                        <Switch>   
                            <Route exact path="/" component={HomePage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/restaurants" component={RestaurantPage} />
                            <PrivateRoute  path="/product-add" component={ProductAdd}  />
                            <PrivateRoute  path="/product-view" component={ProductView}  />
                            <PrivateRoute path="/product-edit" component={ProductEdit} />
                            {/* <Route path="/not-found" component={Notfound} />
                            <Redirect from="*" to="/not-found" /> */}
                        </Switch>
            </Router>
    );
}

export { App };