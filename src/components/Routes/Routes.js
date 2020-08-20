import React from "react";
import {Route, Switch} from "react-router-dom";
import Landing from "../Landing/Landing";
import Cart from "../Cart/Cart";
import ProductList from "../ProductList/ProductList";
import ProductInfo from "../ProductList/ProductInfo/ProductInfo";

export const routes = [
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/products",
    component: ProductList,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/products/:id",
    component: ProductInfo,
  },
];

const Routes = (props) => (
  <Route
    exact
    path={[routes.map((route) => route.path)]}
    render={() => (
      <section>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </section>
    )}
  />
);

export default Routes;
