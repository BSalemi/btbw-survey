import Button from "../ui/Button";

export default function ArticleCard({ backgroundColor, title, text, image }) {
  return (
    <div style={{ backgroundColor: `${backgroundColor}` }}>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <Button text={"Learn more"} className={"learn-more-button"} />
      </div>
      <img src={image} />
    </div>
  );
}
