import { doc, getDoc } from "firebase/firestore";
import db from "./firebae.mjs";

async function waite() {
    const collectionRef = doc(db, "f2020065264", "completed Courses");
    const documentSnapshot = await getDoc(collectionRef);

    // Check if the documentSnapshot exists before accessing its data
    if (documentSnapshot.exists()) {
        const coursesData = documentSnapshot.data();
        console.log(coursesData);
    } else {
        console.log("Document does not exist");
        // Handle the case where the document does not exist
    }
}

waite();
