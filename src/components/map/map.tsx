type MapProps = {
  classModificator?: string;
}

function Map({classModificator = 'cities'}: MapProps): JSX.Element {
  return (
    <section className={`${classModificator}__map map`}></section>
  );
}

export default Map;
