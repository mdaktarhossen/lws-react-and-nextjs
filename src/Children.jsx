import { useContext } from "react";
import Gdaughter from "./Gdaughter";
import Gson from "./Gson";
import { FamilyContex } from "./context/FamilyContex";

export default function Childrean() {
  const secret = useContext(FamilyContex);
  return (
    <>
      <div className="children">
        <h2>{`Children: ${secret.familyName}`}</h2>
        <Gson />
        <Gdaughter />
      </div>
    </>
  );
}
