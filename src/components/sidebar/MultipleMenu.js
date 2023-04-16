import React from "react";
import MenuItem from "./MenuItem";
import { List, Menu, Heading } from "../elements";
import { useNavigate } from "react-router-dom";

export default function MultipleMenu({ data }) {
  const navigate = useNavigate();

  return (
    <>
      {data?.map((item, index) => (
        <Menu key={index} className="mc-sidebar-menu">
          {/* <Heading as="h5" className="mc-sidebar-menu-title">{ item.title }</Heading> */}
          <List className="mc-sidebar-menu-list">
            <button
              style={{ marginLeft: "13px", fontSize: "20px" }}
              onClick={() => navigate(-1)}
            >
              &larr;
            </button>

            {item.menu.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </List>
        </Menu>
      ))}
    </>
  );
}
