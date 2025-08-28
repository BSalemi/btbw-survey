import Button from "../ui/Button";
import ProgressDots from "../ui/ProgressDots";
export default function OverviewScreen() {
  return (
    <div className="screen overview-screen">
      <h1 className="overview-header">More on Blueprints to Black Wealth</h1>
      // Needs Video Player added
      <p style={{ lineHeight: "150%" }}>
        Blueprints to Black Wealth builds on Prudential's long-standing
        commitment to invest in communities, organizations, and institutions
        that drive true economic inclusion. It is based on a deep understanding
        of the power of the Black community and importance of generational
        wealth building.
      </p>
      <Button className={"main-button"} text={"Next"} />
      <ProgressDots currentStep={2} />
    </div>
  );
}
