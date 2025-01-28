import "./button.css";

interface IButtonProps {
  text: string;
  url: string;
}

export const Button = (props: IButtonProps) => {
  const { text, url } = props;
  return (
    <a href={url} target="__blank">
      <button className="ticket-button">{text}</button>
    </a>
  );
};
