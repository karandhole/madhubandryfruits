import React from "react";
import Image from "next/image";
import Link from "next/link";
import menu_data from "@/data/menu-data";

/* ✅ Props type */
type MenusProps = {
  position?: "left" | "right";
};

const Menus: React.FC<MenusProps> = ({ position = "left" }) => {
  // Split menus
  const midIndex = Math.ceil(menu_data.length / 2);
  const leftMenus = menu_data.slice(0, midIndex);
  const rightMenus = menu_data.slice(midIndex);

  const menusToRender = position === "left" ? leftMenus : rightMenus;

  return (
    <nav id="mobile-menu">
      <ul>
        {menusToRender.map((menu) => (
          <li
            key={menu.id}
            className={`${menu.has_dropdown ? "has-dropdown" : ""} ${
              menu.home_menus ? "has-homemenu" : ""
            } ${menu.shop_menus ? "has-megamenu" : ""}`}
          >
            <Link href={menu.link}>{menu.name}</Link>

            {/* Home menu */}
            {menu.home_menus ? (
              <ul className="sub-menu home-menu-style">
                {menu.home_menus.map((home_menu, i) => (
                  <li key={i}>
                    <Link href={home_menu.link}>
                      <Image
                        src={home_menu.img}
                        alt="home-img"
                        width={208}
                        height={219}
                        style={{ width: "100%", height: "100%" }}
                      />
                      {home_menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : menu.shop_menus ? (
              /* Mega menu */
              <ul
                className="sub-menu mega-menu"
                style={{
                  backgroundImage:
                    "url(/assets/img/banner/mega-menu-shop-1.jpg)",
                }}
              >
                {menu.shop_menus.map((shop_menu, i) => (
                  <li key={i}>
                    <span className="mega-menu-title">{shop_menu.title}</span>
                    <ul>
                      {shop_menu.menus.map((submenu, i) => (
                        <li key={i}>
                          <Link href={submenu.link}>{submenu.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            ) : menu.dropdown_menus ? (
              /* Dropdown */
              <ul className="sub-menu">
                {menu.dropdown_menus.map((dropdown_menu, i) => (
                  <li key={i}>
                    <Link href={dropdown_menu.link}>
                      {dropdown_menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menus;
