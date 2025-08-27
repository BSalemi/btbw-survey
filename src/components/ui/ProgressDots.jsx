export default function ProgressDots({ currentStep }) {
  const dots = Array.from({ length: 6 }, (_, i) => (
    <div key={i} className={`dot ${i === currentStep ? "active" : ""}`} />
  ));

  return <div className="dots-wrapper">{dots}</div>;
}
