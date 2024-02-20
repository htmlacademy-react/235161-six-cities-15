type OfferInsideListProps = {
  insideOffers: string[];
}

function OfferInsideList({insideOffers}: OfferInsideListProps): JSX.Element {
  const offerInsideListItems = insideOffers.map((insideOffer) => (
    <li
      key={insideOffer}
      className="offer__inside-item"
    >
      {insideOffer}
    </li>
  ));

  return (
    <ul className="offer__inside-list">
      {offerInsideListItems}
    </ul>
  );
}

export default OfferInsideList;
