export default function NavigationArrows({ prevArticleId, nextArticleId }) {
  return (
    <div className="nav-arrow-container">
      <button className="nav-arrow left" aria-label="Previous" disabled>
        <svg
          viewBox="0 0 24 24"
          className="arrow-icon"
          aria-hidden="true"
          focusable="false"
        >
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="12" y1="8" x2="16" y2="12" />
          <line x1="12" y1="16" x2="16" y2="12" />
        </svg>
      </button>

      <button className="nav-arrow right" aria-label="Next">
        <svg
          viewBox="0 0 24 24"
          className="arrow-icon"
          aria-hidden="true"
          focusable="false"
        >
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="12" y1="8" x2="16" y2="12" />
          <line x1="12" y1="16" x2="16" y2="12" />
        </svg>
      </button>
    </div>
  );
}
