import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { QuickNav } from "../../components/quicknav/QuickNav";
import { Search } from "../../components/search/Search";

export const Navigation = () => {
  return (
    <header>
      <Logo />
      <Search />
      <QuickNav />
      <Menu />
    </header>
  );
};
