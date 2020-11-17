import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dropdowncomponent from "./Components/Dropdowncomponent"


function App() {
  return (
    <section>
      
      <div className="App">
        <BrowserRouter>
          <switch>
          <Route path="/"  render={(props) => (
    <Dropdowncomponent {...props} privilege="admin" addAndSelectHandler="true" />
  )} />
            {/* <Route path="/admin"  render={(props) => (
    <Dropdowncomponent {...props} privilege="admin" addAndSelectHandler="true" />
  )} />
    <Route path="/user"  render={(props) => (
    <Dropdowncomponent {...props} privilege="user" addAndSelectHandler="false" />
  )} /> */}
          </switch>
        </BrowserRouter>
      </div>
    </section> 
  );
}

export default App;
