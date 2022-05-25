import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Landingpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  imgFacebookLogo,
  imgInstagramLogo,
  imgBarLogo,
  imgNavBar,
  bar1,
  bar2,
  bar3,
  bar4,
  bar5,
  bar6,
  bar7,
  bar8,
  bar9,
  bar10,
} from "../../images/index.jsx";

import {
  Container,
  Row,
  Col,
  Image,
  Figure,
  Nav,
  Navbar,
  Spinner,
} from "react-bootstrap";

import {
  AiFillPhone,
  AiFillInstagram,
  AiFillFacebook,
  AiFillMail,
} from "react-icons/ai";
import { GiSuitcase } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";

function Landingpage() {
  const [navBarBackground, setNavBarBackgorund] = useState(false);
  const [loading, setLoading] = useState(true);

  const changeBackground = () => {
    if (screen.width < 1500) {
      if (window.scrollY >= 10) {
        setNavBarBackgorund(true);
      }
    } else if (window.scrollY >= 790) {
      setNavBarBackgorund(true);
    } else {
      setNavBarBackgorund(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const containerStyle = {
    backgroundImage: `url(${imgNavBar})`,
    backgroundAttachment: `fixed`,
  };

 

  useEffect(() => {
	setTimeout(() => {
		setLoading(false);
		window.scrollTo(0, 0);
	  }, 4500);
	
  }, [])
  

  return (
    <>
      <Container
        fluid={+true}
        className={loading ? "loading true" : "loading false"}
      >
       
        <Spinner animation="border" variant="dark" />
      </Container>
      <Container fluid={+true} className="LandingPage__Container">
        <Navbar fixed="top">
          <Container
            className={navBarBackground ? "navbar active" : "navbar false"}
            fluid={+true}
          >
            <Link
              activeClass="active"
              to="home"
              smooth={true}
              duration={1000}
              delay={100}
            >
              <Navbar.Brand>F&D</Navbar.Brand>
            </Link>

            <Nav className="me-auto">
              <Link
                activeClass="active"
                to="home"
                smooth={true}
                duration={1000}
                delay={100}
              >
                <Nav>Inicio</Nav>
              </Link>
              <Link
                activeClass="active"
                to="about"
                smooth={true}
                duration={1000}
                delay={100}
              >
                <Nav>Sobre Nosotros</Nav>
              </Link>
              <Link
                activeClass="active"
                to="photos"
                smooth={true}
                duration={1000}
                delay={100}
              >
                <Nav>Fotos</Nav>
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <Row id="home" fluid={+true} className="LandingPage__Container_NavBar">
          <Col style={containerStyle} className="Landingpage__Container_image">
            <div>
              <div className="Landing__Letras">
                <h1>Food & Drink</h1>
              </div>
              <div className="LandingRedes">
                <a
                  target="_blank"
                  href="https://www.instagram.com/empresasoluciones/"
                >
                  <img
                    className="logos"
                    src={imgFacebookLogo}
                    width="30px"
                    alt="facebook"
                    loading="lazy"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/empresasoluciones/"
                >
                  <img
                    className="logos"
                    src={imgInstagramLogo}
                    width="30px"
                    alt="imgInstagramLogo"
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="LandingPage__Container_Row_Dos">
          <Col xs={6} xl={12}>
            <Figure className="LandingPage__LogoBar">
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={imgBarLogo}
              />
              <Figure.Caption>
                <h2>Resto Bar</h2>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={3} xl={6}>
            <Figure className="LandingPage__LogoBar">
              <Figure.Image
                width={300}
                height={300}
                alt="171x180"
                src={imgBarLogo}
              />
              <Figure.Caption>Disco bar Food & Drink.</Figure.Caption>
            </Figure>
          </Col>
          <Col xs={12} xl={6}>
            <p>
              El Disco bar Food & Drink abrio sus puertas el dia 10 de julio del
              2009, estamos en Posada de Rengos (al lado de la iglesia)y dista a
              16 km de Cangas del Narcea.
            </p>
          </Col>
        </Row>
        <Row style={containerStyle} className="LandingPage__Container_Row_Tres">
          <Col xxl={12}>
            <h2>
              {" "}
              <ImLocation2 /> Paraná, Entre Riós
            </h2>
          </Col>
        </Row>
        <Row
          fluid={+true}
          id="about"
          className="LandingPage__Container_Row_Cuatro"
        >
          <Col xs={12} xl={6}>
            <p>
              El disco bar Food & Drink, ubicado en la zona rosa de Pereira , es
              uno de los locales mas climatizados el cual disfruta de un
              ambiente divertido con una decoración espectacular, suambiente
              moderno te asegura una noche divertida única y inolvidable. Su
              estructura se presenta como una obra 160 metros, por 90 metros
              aproximadamente capacidad aproximadamente para 250 personas y
              unaespectacular infraestructura en sonido, iluminación y video
              imagen. En Food & Drink lo encontraras todo, Alta tecnología,
              decoración vanguardista, son mezclas originales para que bailes
              desde tu mesa oen la pista.
              <br /> <br />
              En sus dos barras te ofrecerán una inmensa variedad de cócteles
              que son preparados por barman profesionales, licores variados,
              bebidas internacionales, nacionales y cerveza. Cuenta conun muy
              buen servicio al cliente, servicio de estacionamiento. Si quieres
              pasar una noche inolvidable sin duda en Food & Drink con su estilo
              juvenil, la diversión es asegurada, la entrada es libre,
              losprecios son accesibles puedes tener una noche inolvidable y
              divertida.
            </p>
          </Col>
          <Col className="imgOcultar" xs={12} xl={6}>
            <Figure className="LandingPage__LogoBar">
              <Figure.Image width={300} height={300} alt="171x180" src={bar9} />
            </Figure>
          </Col>
        </Row>
        <Row style={containerStyle} className="LandingPage__Container_Row_Tres">
          <Col xxl={12}>
            <h2>
              {" "}
              <AiFillPhone /> +54 343 620-3341
            </h2>
          </Col>
        </Row>
        <Row id="photos" className="LandingPage__Container_Row_Cinco">
          <Col xs={12} sm={12} xl={3}>
            <a
              target="_blank"
              href="https://www.instagram.com/empresasoluciones/"
            >
              {" "}
              <Image
                loading="lazy"
                className="imgHover"
                src={bar1}
                rounded
                roundedCircle
              />
            </a>
          </Col>
          <Col xs={12} sm={12} xl={3}>
            <a
              target="_blank"
              href="https://www.instagram.com/empresasoluciones/"
            >
              {" "}
              <Image
                loading="lazy"
                className="imgHover"
                src={bar2}
                rounded
                roundedCircle
              />{" "}
            </a>
          </Col>
          <Col xs={12} sm={12} xl={3}>
            <a
              target="_blank"
              href="https://www.instagram.com/empresasoluciones/"
            >
              {" "}
              <Image
                loading="lazy"
                className="imgHover"
                src={bar3}
                rounded
                roundedCircle
              />{" "}
            </a>
          </Col>
          <Col className="imgOcultar" xs={12} xl={3}>
            <a
              target="_blank"
              href="https://www.instagram.com/empresasoluciones/"
            >
              {" "}
              <Image
                loading="lazy"
                className="imgHover"
                src={bar10}
                rounded
                roundedCircle
              />{" "}
            </a>
          </Col>
          <Col className="imgOcultar" xs={12} xl={3}>
            <a
              target="_blank"
              href="https://www.instagram.com/empresasoluciones/"
            >
              {" "}
              <Image
                loading="lazy"
                className="imgHover"
                src={bar7}
                rounded
                roundedCircle
              />{" "}
            </a>
          </Col>
          <Col className="imgOcultar" xs={12} xl={3}>
            <a
              target="_blank"
              href="https://www.instagram.com/empresasoluciones/"
            >
              {" "}
              <Image
                loading="lazy"
                className="imgHover"
                src={bar6}
                rounded
                roundedCircle
              />{" "}
            </a>
          </Col>
          <Col className="imgOcultar" xs={12} xl={3}>
            <a
              target="_blank"
              href="https://www.instagram.com/empresasoluciones/"
            >
              {" "}
              <Image
                loading="lazy"
                className="imgHover"
                src={bar8}
                rounded
                roundedCircle
              />{" "}
            </a>
          </Col>
          <Col className="imgOcultar" xs={12} xl={3}>
            <a
              target="_blank"
              href="https://www.instagram.com/empresasoluciones/"
            >
              {" "}
              <Image
                loading="lazy"
                className="imgHover"
                src={bar5}
                rounded
                roundedCircle
              />{" "}
            </a>
          </Col>
        </Row>
        <Row
          fluid={+true}
          id="about"
          className="LandingPage__Container_Row_Seis"
        >
          <Col className="googleMaps" xs={12} xl={12}>
            <div  className="googleMapsCenter">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54285.58907590346!2d-60.55006831376418!3d-31.747313687934355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b44df2b9835231%3A0x554ebde0aa5cfa9a!2zUGFyYW7DoSwgRW50cmUgUsOtb3M!5e0!3m2!1ses-419!2sar!4v1646008001231!5m2!1ses-419!2sar"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            </div>
          </Col>
        </Row>
        <Row className="LandingPage__Container_Row_Footer">
          <Col sm={12} xl={12}>
            <div className="centradoFooter">
              <ul className="FooterList">
                <a
                  href="https://api.whatsapp.com/send?phone=+543436203341&text=Hola,%20vi%20la%20plantilla%20de%20tu%20pagina%20web%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <AiFillPhone /> CONTACTANOS
                  </li>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/empresasoluciones/"
                >
                  <li>
                    <ImLocation2 /> ENCONTRANOS
                  </li>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=+543436203341&text=Hola,%20vi%20la%20plantilla%20de%20tu%20pagina%20web%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <GiSuitcase /> TRABAJA CON NOSOTROS
                  </li>
                </a>
                <a
                  href="mailto:liammarega85@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <AiFillMail /> CORREO
                  </li>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=+543436203341&text=Hola,%20vi%20la%20plantilla%20de%20tu%20pagina%20web%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <AiFillInstagram /> INSTAGRAM
                  </li>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=+543436203341&text=Hola,%20vi%20la%20plantilla%20de%20tu%20pagina%20web%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <IoLogoWhatsapp /> WHATSAPP
                  </li>
                </a>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Landingpage;
