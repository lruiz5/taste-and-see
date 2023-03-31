import React from "react";
import Skeleton from "react-loading-skeleton";
import "./RecipeCard.css";

export const SkeletonCard = () => {
  return (
    <div className="card">
      <div className="card_image">
        {<Skeleton width={"100%"} height={"100%"} />}
      </div>

      <div className="card_content">
        <h2 className="card_title">{<Skeleton />}</h2>
        <div className="card_text">
          <p>{<Skeleton count={5} />}</p>
          <hr />
        </div>
      </div>
    </div>
  );
};
