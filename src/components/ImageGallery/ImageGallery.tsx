import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { UlImageGallery } from "./ImageGallery.styled";

export function ImageGallery({ images, onImageClick }) {
  return (
    <UlImageGallery>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          modalImage={largeImageURL}
          onImageClick={onImageClick}
        />
      ))}
    </UlImageGallery>
  );
}
