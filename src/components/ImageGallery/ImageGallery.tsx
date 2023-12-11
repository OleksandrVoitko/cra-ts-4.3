import { FC } from "react";
import { Image } from "../App";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { UlImageGallery } from "./ImageGallery.styled";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: string) => void;
}

export const ImageGallery: FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
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
};
