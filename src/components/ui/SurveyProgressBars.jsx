export default function SurveyProgressBars({ currentStep }) {
  const bars = Array.from({ length: 4 }, (_, i) => (
    <div key={i} className={`bar ${i === currentStep - 1 ? "active" : ""} `} />
  ));
  return <div className="bars-wrapper">{bars}</div>;
}
