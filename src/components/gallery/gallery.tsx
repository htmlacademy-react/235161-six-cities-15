type GalleryProps = {
  images: string[];
}

function Gallery({images}: GalleryProps): JSX.Element {
  return (
    <div className="offer__gallery">
      {images.map((image) => (
        <div key={image} className="offer__image-wrapper">
          <img className="offer__image" src={`img/${image}`} alt="Photo studio"/>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
