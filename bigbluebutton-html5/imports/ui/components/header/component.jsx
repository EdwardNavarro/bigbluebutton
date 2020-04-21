import React from "react";
import PropTypes from "prop-types";
import { styles } from "./styles";

const Header = ({ text }) => (
  <div className={styles.head}>
    <div className={styles.logo}>
      <img
        src="https://umbrella-cdn.us-east-1.linodeobjects.com/logo_rp_bbb_top_header.png"
        border="0"
      />
    </div>
    <div className={styles.headTitle}>{text}</div>
    <div className={styles.demoTag}>
      <span>Demostración</span>
    </div>
    <div className={styles.demoTagMobile}>
      <span>Demo</span>
    </div>
  </div>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;