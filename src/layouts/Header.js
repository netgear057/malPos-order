import React, { useContext, useState, useRef } from "react";
import {
  LanguageDropdown,
  WidgetDropdown,
  ProfileDropdown,
} from "../components/header";
import { Button, Section, Box, Input } from "../components/elements";
import { DrawerContext } from "../context/Drawer";
import { ThemeContext } from "../context/Themes";
import { Logo } from "../components";
import data from "../data/master/header.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faLock,
  faLockOpen,
  faPlus,
  faReceipt,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { Text } from "../components/elements";
export default function Header() {
  const { drawer, toggleDrawer } = useContext(DrawerContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const searchRef = useRef();
  const [scroll, setScroll] = useState("fixed");
  const [search, setSearch] = useState("");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) setScroll("sticky");
    else setScroll("fixed");
  });

  document.addEventListener("mousedown", (event) => {
    if (!searchRef.current?.contains(event.target)) {
      setSearch("");
    }
  });

  return (
    <Section as="header" className={`mc-header ${scroll}`}>
      {/* <Logo
        src={data?.logo.src}
        alt={data?.logo.alt}
        // name={data?.logo.name}
        href={data?.logo.path}
      /> */}
      <Box className="mc-header-group">
        <Box className="mc-header-left">
          <Box>
            <Text className={"bold floor-bg mr-10 "} as="span">
              First Floor Al-Babesi
            </Text>
            <Text className={"bold  floor-bg mr-10 "} as="span">
              2nd Floor{" "}
            </Text>
          </Box>
          {/* <Button
            icon={data?.search.icon}
            className="mc-header-icon search"
            onClick={() => setSearch("show")}
          />
          <Button 
                        icon={ drawer ? "menu_open" : "menu" } 
                        className="mc-header-icon toggle" 
                        onClick={ toggleDrawer } 
                    />
          <Box className={`mc-header-search-group ${search}`}>
            <form className="mc-header-search" ref={searchRef}>
              <Button className="material-icons">{data?.search.icon}</Button>
              <Input type="search" placeholder={data?.search.placeholder} />
            </form>
          </Box> */}
        </Box>
        <Box className="mc-header-right">
          {/* <Button
            icon={theme}
            title={data.theme.title}
            onClick={toggleTheme}
            className={`mc-header-icon ${data.theme.addClass}`}
          /> */}

          <Box className={"header-right-or "}>
            <Button className={"header-add-btn"}>
              <FontAwesomeIcon icon={faPlus} /> New Order
            </Button>

            <Box className={" cus-mt-5 cus-btn-outline-fontIcon"}>
              <FontAwesomeIcon icon={faReceipt} color="#f29b30" /> Receipt{" "}
              <Text className={"r-count"} as={"span"}>
                0
              </Text>
            </Box>
            <Box className={" cus-mt-5 cus-btn-outline-fontIcon"}>
              <FontAwesomeIcon icon={faBars} />
            </Box>
            <Box className={" cus-mt-5 cus-btn-outline-fontIcon mr-10 "}>
              <FontAwesomeIcon icon={faLock} color="#f29b30" /> TIS Software
            </Box>
            <Box className={"bars cus-mt-5 mr-10"}>
              <FontAwesomeIcon icon={faBell} color="#f29b30" />
            </Box>
            <Box className={"bars cus-mt-5  mr-10"}>
              <FontAwesomeIcon icon={faWifi} color="#f29b30" />
            </Box>

            {/* <Box className={'bars mr-10'}>
            <LanguageDropdown
            icon={data.language.icon}
            title={data.language.title}
            addClass={data.language.addClass}
            dropdown={data.language.dropdown}
          />
            </Box> */}
          </Box>
          {/* <WidgetDropdown
            icon={data.cart.icon}
            title={data.cart.title}
            badge={data.cart.badge}
            addClass={data.cart.addClass}
            dropdown={data.cart.dropdown}
          /> */}
          {/* <WidgetDropdown
            icon={data.message.icon}
            title={data.message.title}
            badge={data.message.badge}
            addClass={data.message.addClass}
            dropdown={data.message.dropdown}
          /> */}
          {/* <WidgetDropdown
            icon={data.notify.icon}
            title={data.notify.title}
            badge={data.notify.badge}
            addClass={data.notify.addClass}
            dropdown={data.notify.dropdown}
          /> */}
          <ProfileDropdown
            name={data.profile.name}
            image={data.profile.image}
            username={data.profile.username}
            dropdown={data.profile.dropdown}
          />
        </Box>
      </Box>
    </Section>
  );
}
