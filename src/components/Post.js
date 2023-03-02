import React from "react";

function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=1390&crop=1"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Full-house battery backup coming later this year</h2>
        <p className="info">
          <span className="author">NAMENAME</span>
          <time>26-02-2023 11:10</time>
        </p>
        <p>
          Today at its special launch event, home backup power giant EcoFlow
          launched a flurry of new products, including a “Whole-Home Backup
          Power Solution.” The company also launched a battery-powered fridge
          and a portable battery-powered air-conditioning unit, which both makes
          sense. There’s also a lawn mower, which makes me think that preppers
          will have delightfully pristine lawns, even as the apocalypse looms.
        </p>
      </div>
    </div>
  );
}

export default Post;
