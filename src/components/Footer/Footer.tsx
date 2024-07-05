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
      <p className={styles.p}>
        Copyright &#169; 2024 Marcos.dev. All Rights Reserved.
      </p>
      <div className={styles.social_networks}>
        <a
          href="https://www.instagram.com/michaelbjordan/?hl=es"
          className={styles.a}
        >
          <SlSocialInstagram size={30} />
        </a>
        <a href="https://x.com/michaelb4jordan" className={styles.a}>
          <SlSocialTwitter size={30} />
        </a>
        <a
          href="https://www.facebook.com/michaelbjordan/?locale=es_LA"
          className={styles.a}
        >
          <SlSocialFacebook size={30} />
        </a>
        <a
          href="https://www.tiktok.com/@michaelbjordan?lang=es"
          className={styles.a}
        >
          <PiTiktokLogo size={30} />
        </a>
        <a
          href="https://www.youtube.com/results?search_query=michael+b+jordan"
          className={styles.a}
        >
          <SlSocialYoutube size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
