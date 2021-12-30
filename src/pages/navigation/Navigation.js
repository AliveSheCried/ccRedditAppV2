import React from "react";
import { Logo } from "../../components/Logo/Logo";
import { QuickNav } from "../../components/quicknav/QuickNav";
import { Search } from "../../components/search/Search";

export const Navigation = () => {
  return (
    <header>
      <Logo />
      <Search />
      <QuickNav />
    </header>
  );
};
