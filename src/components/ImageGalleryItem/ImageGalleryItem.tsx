import { FC } from "react";
import { ImgGalleryItem, LiGalleryItem } from "./ImageGalleryItem.styled";

interface ImageGalleryItemProps {
  src: string;
  modalImage: string;
  onImageClick: (image: string) => void;
}

export const ImageGalleryItem: FC<ImageGalleryItemProps> = ({
  src,
  modalImage,
  onImageClick,
}) => {
  return (
    <LiGalleryItem onClick={() => onImageClick(modalImage)}>
      <ImgGalleryItem src={src} />
    </LiGalleryItem>
  );
};
