/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function PlaceTree({ id, placeById }) {
  const place = placeById[id];
  const childIds = place.childIds;
  return (
    <>
      <li>{place.title}</li>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((id) => (
            <PlaceTree key={id} id={id} placeById={placeById} />
          ))}
        </ol>
      )}
    </>
  );
}
