import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Home as HomeIcon,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import RiseLogo from "@/public/RiseLogo.svg";
import SubMenu from "./sub-menu";

export default function NavMenu() {

  return (
    <div className="h-screen w-64 border-r border-gray-300 p-4">
      {/* Logo at the top */}
      <Link href="/" passHref>
        <div className="flex justify-center mb-8">
          <Image src={RiseLogo} alt="Rise Logo" width={150} height={50} />
        </div>
      </Link>

      {/* Navigation Menu */}
      <List component="nav">
        {/* Home Link */}
        <ListItemButton component={Link} href="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        {/* Manage Section */}
        <SubMenu/>
      </List>
    </div>
  );
}