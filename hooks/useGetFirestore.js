// React imports
import { useEffect } from "react";

// Firebase imports
import { db } from "/firebase.config.js";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

export function useGetDoc(col, document, setState) {
  const getData = async () => {
    //* Tell firestore what collection AND document we're looking for
    // Get the data
    const docRef = doc(db, col, document);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    //* Error handling
    try {
      setState(data);
    } catch (e) {
      console.error(
        `FIRESTORE ERROR: The ${col.toUpperCase()} does not exist in the Cloud Firestore! \n`
      );
      console.error(e);
    }
  };
  useEffect(() => {
    getData();

    //* Empty array to only run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export function useGetCol(col, setState) {
  const getData = async () => {
    // TODO: FIX ERROR HANDLING
    //* Error handling
    try {
      //* Tell firestore what collection we're looking for
      const colRef = await getDocs(collection(db, col));
      // Map all that juicy data and return it
      const rawData = Array.from(colRef.docs).map((doc) => {
        return {
          ...doc.data(),
        };
      });
      // Sort data in descending order by id
      const data = rawData.sort(function (a, b) {
        return a.id - b.id;
      });
      // Send data to state created
      setState(data);
    } catch (e) {
      console.error(
        `FIRESTORE ERROR: The ${col.toUpperCase()} does not exist in the Cloud Firestore! \n`
      );
      console.error(e);
    }
  };
  useEffect(() => {
    getData();

    //* Empty array to only run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
