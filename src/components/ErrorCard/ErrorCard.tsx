import { FC } from "react";

interface ErrorCard {
  children: string;
}

export const ErrorCard: FC<ErrorCard> = ({ children }) => {
  return (
    <div className="card bg-danger">
      <div className="card-body">
        <h5 className="card-title">Error</h5>
        <p className="card-text">{children}</p>
      </div>
    </div>
  );
};
