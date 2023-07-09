import CharacterCounter from "./exercise/character-counter";
import PasswordMatch from "./exercise/password-match";
import ShowPassword from "./exercise/show-password";
import AddToCart from "./exercise/addToCart";
import SwitchTab from "./exercise/switch-tabs";
import ShowToast from "./exercise/Toast/ShowToast";
import DarkMode from "./exercise/DarkMode";
import LikeInList from "./exercise/LikeInList";
import  WishList  from "./Effect-Class/Wishlist-LocalStorage";

function App() {
  return (
    <div className="App">
      <CharacterCounter/>
     {/* <PasswordMatch />  */}
    {/* <ShowPassword /> */}
    {/* <AddToCart /> */}
    {/* <SwitchTab /> */}
    {/* <ShowToast /> */}
    {/* <DarkMode /> */}
    {/* <LikeInList /> */}
    <WishList />
    </div>
  );
}

export default App;
