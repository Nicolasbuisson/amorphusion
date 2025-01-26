import { ReactNode } from "react";
import "./carousel.css";

interface IProps {
  children: ReactNode;
}

export const Carousel = ({ children }: IProps) => {
  return (
    <div className="carousel-container">
      <div className="carousel-mover">{children}</div>
    </div>
  );
};
