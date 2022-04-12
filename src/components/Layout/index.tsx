import React, { FC } from "react";
import { createUseStyles } from "react-jss";
import Menu, { MenuItemType } from "@/components/Menu";
import logo from "@/assets/logo.svg";

interface LayoutProps {
  routes: MenuItemType[];
}

const Layout: FC<LayoutProps> = (props) => {
  const { routes, children } = props;
  const styles = useStyles();
  return (
    <div className={styles.layout}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <span>Schema Tool</span>
        </div>
        <div className={styles.menu}>
          <Menu options={routes} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.page}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;

const useStyles = createUseStyles({
  layout: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  left: {
    width: "200px",
    height: "100%",
    borderRight: "1px solid #333",
    backgroundColor: "#1a1d3a",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  right: {
    flex: 1,
    overflow: "hidden",
  },
  page: {
    padding: "22px",
    height: "100%",
    overflow: "auto",
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      width: "60px",
    },
    "& span": {
      fontsize: "22px",
      fontWeight: "bold",
    },
  },
  menu: {},
});
