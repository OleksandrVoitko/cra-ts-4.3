import { ImgGalleryItem, LiGalleryItem } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ src, modalImage, onImageClick }) {
  return (
    <LiGalleryItem onClick={() => onImageClick(modalImage)}>
      <ImgGalleryItem src={src} />
    </LiGalleryItem>
  );
}
