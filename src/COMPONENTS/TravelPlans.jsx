import { useState } from "react";
import { initialTravelPlan } from "../data/places_normalize";
import PlaceTree from "./PlaceTree";

export default function TravelPlans() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planId = root.childIds;
  return (
    <>
      <ol>
        {planId.map((placeId) => (
          <PlaceTree key={placeId} id={placeId} placeById={plan} />
        ))}
      </ol>
    </>
  );
}
