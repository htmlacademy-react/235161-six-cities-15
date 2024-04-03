import { memo } from 'react';

type GalleryProps = {
  images: string[] | undefined;
}

const GalleryImage = memo(({image}: {image: string}): JSX.Element =>
  (
    <div
      className="offer__image-wrapper"
    >
      <img
        className="offer__image"
        src={image}
        alt="Photo studio"
      />
    </div>
  )
);

GalleryImage.displayName = 'GalleryImage';

const Gallery = memo(({images}: GalleryProps): JSX.Element => {
  const galleryImages = images?.map((image) => <GalleryImage key={image} image={image}/>);

  return (
    <div className="offer__gallery">
      {galleryImages}
    </div>
  );
});

Gallery.displayName = 'Gallery';

export default Gallery;
