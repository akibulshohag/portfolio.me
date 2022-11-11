import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
import boy from "../../img/boy.png";
import boy1 from '../../img/2.png'
import crown from "../../img/crown.png";
import Github from "../../img/github.png";
import glassesimoji from "../../img/glassesimoji.png";
import Instagram from "../../img/instagram.png";
import LinkedIn from "../../img/linkedin.png";
import thumbup from "../../img/thumbup.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import "./Intro.css";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Akibul Islam</span>
          <span>
            Frontend Developer with one year of experience in web designing
            and mobile app development, producting the Quality work.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/akibulshohag" target='blank'>
          <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/akibul-islam021/" target='blank'>
          <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.facebook.com/akibulislam.shohag" target='blank'>
          <Facebook  color="#efb507" size={"5rem"} />
          </a>
          {/* <img src={Instagram} alt="" /> */}
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img  style={{width:'400px',height:'400px',}} src={boy1} alt="boy1" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Mobile App" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
