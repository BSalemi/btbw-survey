import retirementImage from "../../assets/images/retirementImage.png";

import ArticleCard from "../content/ArticleCard";
import Button from "../ui/Button";
import ProgressDots from "../ui/ProgressDots";

export default function ArticlesScreen() {
  return (
    <div className="articles-screen">
      {/* 75%: cards */}
      <div className="articles-cards">
        <ArticleCard
          backgroundColor="#001f45"
          title="Invest in your future"
          text="There are a variety of places to invest your savings to help your money grow — from low interest with low risk to higher risk with higher long-term growth potential."
          image="/images/invest.png"
          imageIsOnRight={true}
        />
        <ArticleCard
          backgroundColor="#007bc3"
          title="Retire with confidence"
          text="Think about your goals for life after your career. You'll likely use a variety of saving and investment tools to prepare. "
          image={retirementImage}
          imageIsOnRight={false}
        />
        <ArticleCard
          backgroundColor="#001f45"
          title="Start building your future"
          text="Do you have loved ones who depend on your income? Life insurance can help replace that income if you're no longer there."
          image="/images/family.png"
          imageIsOnRight={true}
        />
      </div>

      {/* 25%: footer (dark blue) */}
      <div className="articles-footer">
        <Button
          text="Click here to take our survey and win a prize"
          className="main-button"
        />
        <ProgressDots currentStep={3} />
      </div>
    </div>
  );
}
