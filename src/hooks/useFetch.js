import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const useFetch = (id = "") => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, "recipes", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    }

    fetchData();
  }, [id]);

  return { data };
};
