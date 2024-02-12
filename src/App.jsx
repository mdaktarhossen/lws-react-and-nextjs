import Famaly from "./Famaly";
import { FamilyContex } from "./context/FamilyContex";

const familySecret = {
  familyName: "The Smiths",
  onlyParentCanSee: () => {
    return `The Smiths are the best!`;
  },
  onlyGrandChildrenShouldKnow: () => {
    return `They are the best!`;
  },
};

export default function App() {
  return (
    <FamilyContex.Provider value={familySecret}>
      <Famaly />
    </FamilyContex.Provider>
  );
}
