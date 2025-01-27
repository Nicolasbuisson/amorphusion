import "./twitchStream.css";

export const TwitchStream = () => {
  return (
    <iframe
      src="https://player.twitch.tv/?channel=amorphusion&parent=amorphusion.com&parent=localhost"
      height={400}
      width={400}
      allowFullScreen
      className="twitch-player"
    ></iframe>
  );
};
