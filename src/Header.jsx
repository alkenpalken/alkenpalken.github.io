import "./header.css";

const Header = ( {text} ) => {
  return (
    <div className="header">
      <div className="img_logo">
        <div  className="img"/>
      </div>
      <div className="text_logo">
        <h1>{text}</h1>
      </div>
    </div>
  );
}

export default Header;
