import { ButtonLoadMore } from './Button.styled';

export function Button({ onButtonClick }) {
  return <ButtonLoadMore onClick={onButtonClick}>Load more...</ButtonLoadMore>;
}
