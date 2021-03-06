import React from "react";
import { profile } from "../../helper/constants";
import {
  LinkStyle,
  SidebarList,
  SidebarListContainer,
  SidebarStyle,
} from "../styles/StyleContainer.styles";
import { sideList } from "../../helper/data";

const SideBar = ({ sideBarState }: { sideBarState: boolean }) => {
  //   const sideBarState = useSideBarStore(({ isActive }) => isActive);

  const listItem = sideList.map((val) => {
    if (val.type === "img") {
      if (val?.hr) {
        return (
          <SidebarList key={val.id} className="icon">
            <div></div>
            <p>Sign in to like videos, comment and subscribe.</p>
            <button>{profile}SIGN UP</button>
            <div></div>
            <h3>BEST OF YOUTUBE</h3>
            <LinkStyle>
              <img src={`${val.icon}`} alt={val.name} />

              <span>{val.name}</span>
            </LinkStyle>
          </SidebarList>
        );
      } else {
        return (
          <SidebarList key={val.id} className="icon">
            <LinkStyle>
              <img src={`${val.icon}`} alt={val.name} />

              <span>{val.name}</span>
            </LinkStyle>
          </SidebarList>
        );
      }
    } else {
      return (
        <SidebarList key={val.id}>
          <LinkStyle>
            {val.icon}
            <span>{val.name}</span>
          </LinkStyle>
        </SidebarList>
      );
    }
  });
  return (
    <SidebarStyle className={sideBarState ? "collapse" : ""}>
      <nav>
        <SidebarListContainer>{listItem}</SidebarListContainer>
      </nav>
    </SidebarStyle>
  );
};

export default SideBar;
