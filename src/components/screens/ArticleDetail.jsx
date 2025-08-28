import Button from "../ui/Button";

export default function ArticleDetail({ image, headerText, bodyText, qrCode }) {
  return (
    <div>
      <Button text={"Back to Overview"} className={"back-to-overview-button"} />
      <img />
      <h1>{headerText}</h1>
      <p>{bodyText}</p>
      <img src={qrCode} />
    </div>
  );
}
