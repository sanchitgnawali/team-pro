import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id);
    console.log(id);
    const unsub = ref.onSnapshot(
      (snapshot) => {
        setDocument({ ...snapshot.data(), id: snapshot.id });
        console.log(snapshot.data());
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("ERROR: couldn' fetch the data");
      }
    );

    return () => unsub();
  }, [collection, id]);

  return { document, error };
};
