import React from "react";
import "./Navbar.scss";
import logo from "../../assets/img/logo.png";
import vk from "../../assets/img/vk.svg";
import ig from "../../assets/img/ig.svg";
import tt from "../../assets/img/tt.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { color } from "framer-motion";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav_content">
        <div className="nav_left">
          <NavLink to="/">
            <img src={logo} alt="" className="nav_logo" />
          </NavLink>
          <div className="nav_phone">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.92619 6.45846C6.87016 5.46577 7.20376 5.18735 7.60602 5.05777C7.8844 4.98495 8.17636 4.98091 8.45666 5.046C8.82567 5.15308 8.92328 5.23447 10.1333 6.43811C11.1963 7.49505 11.3025 7.60963 11.4044 7.8163C11.5993 8.17908 11.6297 8.60765 11.4881 8.99425C11.3808 9.28873 11.2285 9.48363 10.5838 10.1294L10.1633 10.5502C10.0529 10.6622 10.0269 10.8324 10.0989 10.9721C11.0332 12.5633 12.3586 13.8901 13.9499 14.8272C14.1331 14.9251 14.3586 14.8935 14.5077 14.749L14.9121 14.3518C15.1621 14.096 15.4267 13.855 15.7048 13.63C16.1416 13.3623 16.6858 13.3384 17.1444 13.5668C17.3686 13.6739 17.4426 13.7403 18.5389 14.8326C19.6695 15.958 19.7017 15.9934 19.8261 16.2515C20.0602 16.6787 20.0578 17.1961 19.8197 17.6211C19.6984 17.861 19.6244 17.9477 18.9883 18.5966C18.6043 18.9886 18.2428 19.3462 18.1849 19.3987C17.6601 19.8324 16.9869 20.0452 16.3077 19.992C15.065 19.8789 13.8622 19.4955 12.7839 18.8686C10.3952 17.6052 8.36162 15.7644 6.86908 13.5143C6.544 13.0434 6.25498 12.5487 6.0045 12.0344C5.33255 10.8847 4.98555 9.57458 5.00046 8.24358C5.05176 7.54726 5.38626 6.90224 5.92619 6.45846Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>+7861 21791 18</span>
          </div>
        </div>
        <div className="nav_right">
          <div className="nav_social">
            <NavLink>
              <img src={vk} alt="" />
            </NavLink>
            <NavLink>
              <img src={ig} alt="" />
            </NavLink>
            <NavLink>
              <img src={tt} alt="" />
            </NavLink>
          </div>
          <div className="nav_lang">
            <span>EN</span>
            <span>RU</span>
          </div>
          <div className="nav_interact">
            <button>
              <LiaShoppingBasketSolid />
            </button>
            <button>
              <FontAwesomeIcon icon={faListUl} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
