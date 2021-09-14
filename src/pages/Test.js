import React from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {} from "../firebase/firebase";

function Test() {
  const storage = getStorage();

  function getUrl() {
    getDownloadURL(ref(storage, "images/left.png")).then((url) => {
      const img = document.createElement("img");
      img.setAttribute("src", url);
      console.log(img.src);
    });
  }
  return (
    <div>
      <button onClick={getUrl}>İndir</button>
      <h1>TEST</h1>
    </div>
  );
}

export default Test;
