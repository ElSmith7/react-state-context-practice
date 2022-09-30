import "./App.css";
import Navigation from "../Navigation/Navigation";
import SaladMaker from "../SaladMaker/SaladMaker";
import UserContext from "../User/User";

const user = {
  name: `Kwame`,
  favorites: [`avocado`, `carrot`],
};

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Navigation />
        <SaladMaker />
      </UserContext.Provider>
    </div>
  );
}

export default App;
