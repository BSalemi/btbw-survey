import Button from "../ui/Button";

export default function ArticleCard({
  backgroundColor,
  title,
  text,
  image,
  imageIsOnRight = false,
}) {
  return (
    <div className="article-card" style={{ backgroundColor }}>
      <div
        className={`article-card-content ${imageIsOnRight ? "reverse" : ""}`}
      >
        {image && <img src={image} alt={title} />}
        <div className="article-card-text" style={{ maxWidth: "355px" }}>
          <h3>{title}</h3>
          <p>{text}</p>
          <Button text="Learn more" className="learn-more-button" />
        </div>
      </div>
    </div>
  );
}
