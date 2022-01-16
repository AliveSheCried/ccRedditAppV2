import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonComments = () => {
  return (
    <div className="comments__detail">
      <span className="comments__detail-user">
        <Skeleton width={75} height={16} />
      </span>
      <span className="comments__detail-time">
        <Skeleton width={45} height={16} />
      </span>
      <p className="comments__detail-text">
        <Skeleton width={300} height={50} />
      </p>
    </div>
  );
};
