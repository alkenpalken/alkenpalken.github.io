import { useEffect } from "react";
import "./footer.css";

const Footer = ({ text, links }) => {
  useEffect(() => {
    console.log(links);
  }, []);
  return (
    <div className="footer">
      <div className="text_log">
        <h2>{text}</h2>
      </div>
      <div>
        <nav className="navig">
          <ul>
            {
              links.map((link, index) => (<li key={index}><a href={link.href}>{link.title}</a></li>))
            }
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;