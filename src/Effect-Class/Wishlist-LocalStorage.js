import { useEffect, useState } from "react";
// import uuid from "react-uuid";

function WishList() {
  const [wishText, setWishText] = useState("");
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    console.log("effect");
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  useEffect(() => {
    console.log("in once effect");
    console.log(localStorage.getItem("wishlist"));
    setWishList(JSON.parse(localStorage.getItem("wishlist")));
  }, []);

  const handleWishAdd = () => {
    setWishList((list) => list.concat({ wish: wishText }));
    setWishText("");
  };

  const handleWishInput = (event) => setWishText(event.target.value);

  return (
    <div>
          <h1 className="app-header">wishing well</h1>
      <input
        onChange={handleWishInput}
        value={wishText}
        placeholder={"I wish..."}
      />
      <button onClick={handleWishAdd}>Add </button>
      <ul>
        {wishList.map(({ id, wish }) => (
          <li key={id}> {wish} </li>
        ))}
      </ul>
    </div>
  );
}

export default WishList
