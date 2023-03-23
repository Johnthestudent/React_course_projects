import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

//styled component
import styled from "styled-components";

//new import index based
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
} from "./pages";

//styled component
const Button = styled.button`
  background: green;
  color: white;
`;

const Container = styled.div`
  background: red;
  color: white;
  font-size: 2rem;
  .hero {
    font-size: 8rem;
  }
`;

//the page (website)
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct />} />
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/error">
          <Error />
        </Route>
      </Switch>
      <Footer />

      {/*<Button>click me</Button>*/}
      {/*<Container>
        <div>
          <h3>hello</h3>
        </div>
        <div className="hero">hero text</div>
      </Container>*/}
    </Router>
  );
}

export default App;
