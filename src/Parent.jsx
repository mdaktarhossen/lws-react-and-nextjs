import { useContext } from "react";
import Childrean from "./Children";
import { FamilyContex } from "./context/FamilyContex";

export default function Parent() {
  const secret = useContext(FamilyContex);
  return (
    <>
      <div className="parent">
        <h1>{`Parent: ${secret.familyName}`}</h1>
        <p>{secret.onlyParentCanSee()}</p>
        <Childrean />
      </div>
    </>
  );
}
