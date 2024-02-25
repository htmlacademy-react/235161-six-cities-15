type GalleryProps = {
  images: string[];
}

function GalleryImage({image}: {image: string}): JSX.Element {
  return (
    <div
      className="offer__image-wrapper"
    >
      <img
        className="offer__image"
        src={image}
        alt="Photo studio"
      />
    </div>
  );
}

function Gallery({images}: GalleryProps): JSX.Element {
  const galleryImages = images.map((image) => <GalleryImage key={image} image={image}/>);

  return (
    <div className="offer__gallery">
      {galleryImages}
    </div>
  );
}

export default Gallery;
