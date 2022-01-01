import React from "react";

export const Comments = ({ username = "theCatcher", time = "9 hours ago" }) => {
  return (
    <div className="comments">
      <p className="comments__title">Comments</p>
      <div className="comments__detail">
        <span className="comments__detail-user">{username}</span>
        <span className="comments__detail-time">{time}</span>
        <p className="comments__detail-text">
          Man that guy looks a lot like Tony Hawke
        </p>
      </div>
    </div>
  );
};
