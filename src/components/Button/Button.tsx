import { FC } from "react";
import { ButtonLoadMore } from "./Button.styled";

interface ButtonProps {
  onButtonClick: () => void;
}

export const Button: FC<ButtonProps> = ({ onButtonClick }) => {
  return <ButtonLoadMore onClick={onButtonClick}>Load more...</ButtonLoadMore>;
};
