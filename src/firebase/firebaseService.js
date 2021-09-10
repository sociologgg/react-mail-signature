import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {} from "./firebase";
class firebaseService {
  register(email, password) {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch(async (error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  async login(email, password) {
    const auth = getAuth();

    return await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        localStorage.setItem("user", JSON.stringify(user));
        console.log(user);
        return true;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        return false;
      });
  }
  async logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Çıkış başarılı");
      })
      .catch((error) => {
        // An error happened.
      });
    localStorage.removeItem("user");
  }
}

export default new firebaseService();
