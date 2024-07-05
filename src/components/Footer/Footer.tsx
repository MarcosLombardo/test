import styles from "./Footer.module.css";
import {
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialFacebook,
  SlSocialYoutube,
} from "react-icons/sl";
import { PiTiktokLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>Copyright &#169; 2024 Marcos.dev. All Rights Reserved.</p>
      <div className={styles.social_networks}>
        <SlSocialInstagram size={30} />
        <SlSocialTwitter size={30} />
        <SlSocialFacebook size={30} />
        <PiTiktokLogo size={30} />
        <SlSocialYoutube size={30} />
      </div>
    </div>
  );
};

export default Footer;
