import Button from "../ui/Button";
import ProgressDots from "../ui/ProgressDots";

export default function WelcomeScreen() {
  return (
    <div className="screen welcome-screen">
      <img />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="welcome-header">
          Welcome to Blueprints To Black Wealth
        </h1>
        <h3 className="welcome-text">
          Blueprints to Black Wealth is based on a deep understanding of the
          power of the Black community.{" "}
        </h3>
        <Button className={"start-button"} text={"Start here"} />
      </div>
      <ProgressDots currentStep={1} />
    </div>
  );
}
