type OfferInsideListProps = {
  insideOffers: string[];
}

function OfferInsideItem({insideOffer}: {insideOffer: string}): JSX.Element {
  return (
    <li
      className="offer__inside-item"
    >
      {insideOffer}
    </li>
  );
}

function OfferInsideList({insideOffers}: OfferInsideListProps): JSX.Element {
  const offerInsideListItems = insideOffers.map((insideOffer) => <OfferInsideItem key={insideOffer} insideOffer={insideOffer}/>);

  return (
    <ul className="offer__inside-list">
      {offerInsideListItems}
    </ul>
  );
}

export default OfferInsideList;
