import React from "react";
import { Card } from "../../assets/ui/card/Card";
import { PostDetail } from "./PostDetail";

export const Posts = () => {
  return (
    <article>
      <Card>
        <PostDetail />
      </Card>
    </article>
  );
};
