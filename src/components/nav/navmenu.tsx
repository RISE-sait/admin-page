import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Home as HomeIcon,
  Settings as SettingsIcon,
  Message as MessagesIcon,
  Home,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import RiseLogo from "@/public/RiseLogo.svg";
import ManageSubMenu from "./manage-sub-menu";
import ReportSubMenu from "./report-sub-menu";
import HomeSubMenu from "./home-sub-menu";

export default function NavMenu() {
  return (
    <div className="h-screen w-64 border-r border-gray-300 p-4 bg-gray-50">
      {/* Logo at the top */}
      <Link href="/" passHref>
        <div className="flex justify-center mb-8">
          <Image src={RiseLogo} alt="Rise Logo" width={150} height={50} />
        </div>
      </Link>

      {/* Navigation Menu */}
      <List component="nav">
        {/* Home Link */}
        <HomeSubMenu />



        {/* Manage Section */}
        <ManageSubMenu />

        {/* Message Section */}
        <ListItemButton component={Link} href="/messages">
          <ListItemIcon>
            <MessagesIcon />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItemButton>


        {/* Reports Section */}
        <ReportSubMenu />

        {/* Settings */}
        <ListItemButton component={Link} href="/settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </div>
  );
}
