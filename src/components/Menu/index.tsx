import React, { FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { createUseStyles } from "react-jss";

export type MenuItemType = {
  name: string;
  path: string;
  hidden?: boolean;
};

interface MenuProps {
  options: MenuItemType[];
}

const Menu: FC<MenuProps> = (props) => {
  const { options } = props;
  const styles = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (item: MenuItemType) => {
    navigate(item.path, { replace: true });
  };

  const nextOptions = options.filter((item) => !item.hidden);

  return (
    <ul className={styles.menu}>
      {nextOptions.map((item) => {
        return (
          <MenuItem
            key={item.path}
            active={location.pathname === item.path}
            {...item}
            onClick={handleClick}
          />
        );
      })}
    </ul>
  );
};

export default Menu;

interface MenuItemProps extends MenuItemType {
  active: boolean;
  onClick: (item: MenuItemType) => void;
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const { name, path, active, onClick } = props;
  const styles = useStyles();
  return (
    <li
      className={`${styles.item} ${active ? styles.active : ""}`}
      onClick={() => onClick({ path, name })}
    >
      <span>{name}</span>
    </li>
  );
};

const useStyles = createUseStyles({
  menu: {
    padding: "0",
    margin: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  item: {
    listStyle: "none",
    height: "36px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: "0 16px",
    transition: "all 0.2s ease-in",
  },
  active: {
    backgroundColor: "#FF008E",
  },
});
