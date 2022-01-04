import React from "react";
import { IconCard } from "./iconcard/IconCard";
import { STATIC } from "./static-menu";

export const QuickNav = () => {
  const staticMenu = STATIC.map((menu) => (
    <IconCard
      key={menu.id}
      svg={menu.svg}
      label={menu.label}
      endpoint={menu.endpoint}
      //handleSubmit={handleSubmit}
    />
  ));

  return <form className="icons">{staticMenu}</form>;
};
