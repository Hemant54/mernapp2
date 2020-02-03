import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './components/About/About';
import Products from './components/Products/Products';
import Store from './components/Store/Store';
import Founders from './components/Founders/Founders';
import Blogs from './components/Blogs/Blogs';
import FAQs from './components/FAQs/FAQs';
import Partners from './components/Partners/Partners';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={About} exact/>
            <Route path="/products" component={Products} exact/>
            <Route path="/store" component={Store} exact/>
            <Route path="/founders" component={Founders} exact/>
            <Route path="/blogs" component={Blogs} exact/>
            <Route path="/faqs" component={FAQs} exact/>
            <Route path="/partners" component={Partners} exact/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}


export default App;
