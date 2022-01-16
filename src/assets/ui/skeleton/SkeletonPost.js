import React from "react";
import { Card } from "../card/Card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonPost = () => {
  return (
    <Card>
      <article>
        <div className="post-meta">
          <div className="post-meta__author">
            <Skeleton width={75} height={16} />
            <span className="post-meta__author--pink">
              <Skeleton width={75} height={16} />
            </span>
          </div>
          <div className="post-meta__time">
            <Skeleton width={30} height={16} />
          </div>
        </div>
        <div className="post-title">
          <Skeleton width={200} height={16} />
        </div>

        <Skeleton width={280} height={400} />
      </article>
    </Card>
  );
};
