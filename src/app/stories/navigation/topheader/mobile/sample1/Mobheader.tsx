

import React, { useEffect } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";






type Anchor = "top" | "left" | "bottom" | "right";

import "./button.scss";

interface MobheaderProps {
  brandname: string;
  outline?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";

  color?: string;
  padding?: string;
  rounded?: boolean;
  onClick?: React.MouseEventHandler;
}

/**
 * Primary UI component for user interaction
 */
export const Mobheader = ({
  brandname = "Brand",
  outline = false,
  size = "medium",
  backgroundColor,
  color,
  padding,
  rounded = false,
  onClick,
}: MobheaderProps) => {
  const roundedClass = rounded ? "rounded-[30px]" : "rounded-[5px]";

  const outlineClass = outline ? "outlineborder" : "";

  // drawer start from here

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );



  return (
    <div
      className={[
        "flex",
        "justify-between",
        "p-4",
        "items-center",
        "header",
        "primary"
      ].join(" ")}
    >
      
      <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
      <div className="flex  items-center">
      <div  className="px-4 cursor-pointer" onClick={toggleDrawer("left", true)}><MenuIcon /></div>

        <div>
          <Image
            src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_640.png"
            alt="logo image"
            width={20}
            height={20}
          />
        </div>
        <div className="pl-2">{brandname} </div>
      </div>
      <div>
      <SearchIcon className="text-[#000000]" fontSize="small" />
      </div>
    </div>
  );
};