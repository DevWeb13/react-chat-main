import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

/**
 * It takes a message, a function to set the message, and a scroll ref, and returns a function that
 * sends the message to the database and then clears the message and scrolls to the bottom of the page
 * @param {string} message - The message that the user has typed in the input field.
 * @param {function} setMessage - This is the function that sets the message state.
 * @param {object} scroll - This is the ref that we created in the useEffect hook.
 * @returns A function that takes in an event and prevents the default action. It then checks if the
 * message is empty and if it is, it alerts the user. If the message is not empty, it gets the current
 * user's uid, displayName, and photoURL. It then adds a document to the messages collection with the
 * text, name, avatar, createdAt, and uid. It then
 */
export default function settingsSendMessage(message, setMessage, scroll) {
  return async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    // @ts-ignore
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
}