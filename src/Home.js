import logo from "./images/demo2_logo.png";
import model from "./images/model-1.png";
import "./all.min.css";
import "./style.css";
import "./media.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Blog from "./Blog";

import {
  Button,
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Tab,
  NavDropdown,
  Form,
  InputGroup,
} from "react-bootstrap";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* =============================================================================================
                                               Start Header
      ================================================================================================= */}
      <header>
        <div className="navbar_fix">
          <Navbar className="Navbar" expand="lg">
            <Container>
              <Navbar.Brand href="#">
                <img src={logo}></img>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" className="navbar_set">
                <Nav
                  className="ms-auto my-2 my-lg-0"
                  style={{ maxHeight: "310px" }}
                  navbarScroll
                >
                  <Nav.Link href="#Features" className="">
                    Features
                  </Nav.Link>
                  <Nav.Link href="#Samples">Samples</Nav.Link>
                  <Nav.Link href="#Chapters">Chapters</Nav.Link>
                  <Nav.Link href="#Reviews">Reviews</Nav.Link>
                  <Nav.Link href="#Prices">Prices</Nav.Link>
                  <Nav.Link href="#" onClick={() => navigate("/blog")}>
                    Blog
                  </Nav.Link>
                </Nav>
                <Form>
                  <Button className="btn-primary">Order Now</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
      {/* =============================================================================================
                                               End Header
      ================================================================================================= */}
      <div className="bg_img">
        <div className="container-md-fluid container-lg">
          <div className="d-lg-flex">
            <div className="text_set">
              <div>
                <h1 className="bgtext">BEGINNERS GUIDE To</h1>
                <br></br>
                <h1 className="bgtext">HTML5 CODING</h1>
                <p>
                  This is an example usuage of FlatBook WordPress theme. We
                  would like to show the possibilities of this ebook selling
                  landing page template.
                </p>
              </div>
              <span>
                <a href="#" className="me-lg-3 btn-primary">
                  Order Now
                </a>
                <a
                  href="#"
                  className="btn-primary"
                  onClick={() => navigate("/blog")}
                >
                  Learn More
                </a>
              </span>
            </div>
            <div className="model_img">
              <img src={model}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="bgorange">
        <div className="container-md-fluid container-lg">
          <div className="row get_our">
            <div className="col-lg-8 col-sm-12">
              GET OUR FREE 5+1 LESSONS STARTER COURSE
            </div>
            <div className="col-lg-4 col-sm-12 w100 d-flex justify-content-end">
              <a href="#" className="btn-primary fluid">
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ===============================================================================
                                  Start Why Learn Html5 section
      ==================================================================================== */}
      <section className="spacer sec_bgcolor" id="Features">
        <Container>
          <div className="sec_title">
            <h1>WHY LEARN HTML5</h1>
            <span>
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            </span>
            <p>
              Just as <a href="#">this article on about.com</a> says that html5
              adds a lot of new features to the usual html specification.
            </p>
          </div>
          <Row>
            <Col md="2" sm="12" className="shape1">
              <span>
                <i class="fa-brands fa-html5"></i>
              </span>
            </Col>
            <Col md="3" lg="3" xl="4" sm="12" className="learn_text">
              <h2>Easy implementation</h2>
              <p>
                The nav element is used for the part of a website that links to
                other pages on the site. The links can be organized a number of
                ways. Below, the links are displayed within.
              </p>
            </Col>
            <Col md="2" sm="12" className="shape1">
              <span>
                <i class="fa-solid fa-folder-open"></i>
              </span>
            </Col>
            <Col md="3" lg="3" xl="4" sm="12" className="learn_text">
              <h2>Dynamic page support</h2>
              <p>
                The nav element is used for the part of a website that links to
                other pages on the site. The links can be organized a number of
                ways. Below, the links are displayed within.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="2" sm="12" className="shape1">
              <span>
                <i class="fa-solid fa-table-cells-large"></i>
              </span>
            </Col>
            <Col md="3" lg="3" xl="4" sm="12" className="learn_text">
              <h2>New useful elements</h2>
              <p>
                The nav element is used for the part of a website that links to
                other pages on the site. The links can be organized a number of
                ways. Below, the links are displayed within.
              </p>
            </Col>
            <Col md="2" sm="12" className="shape1">
              <span>
                <i class="fa-solid fa-heart"></i>
              </span>
            </Col>
            <Col md="3" lg="3" xl="4" sm="12" className="learn_text">
              <h2>Live theme customizer</h2>
              <p>
                The nav element is used for the part of a website that links to
                other pages on the site. The links can be organized a number of
                ways. Below, the links are displayed within.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="2" sm="12" className="shape1">
              <span>
                <i class="fa-solid fa-cloud-arrow-down"></i>{" "}
              </span>
            </Col>
            <Col md="3" lg="3" xl="4" sm="12" className="learn_text">
              <h2>Elementor integrated</h2>
              <p>
                The nav element is used for the part of a website that links to
                other pages on the site. The links can be organized a number of
                ways. Below, the links are displayed within.
              </p>
            </Col>
            <Col md="2" sm="12" className="shape1">
              <span>
                <i class="fa-regular fa-copy"></i>
              </span>
            </Col>
            <Col md="3" lg="3" xl="4" sm="12" className="learn_text">
              <h2>Better browser support</h2>
              <p>
                The nav element is used for the part of a website that links to
                other pages on the site. The links can be organized a number of
                ways. Below, the links are displayed within.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ==========================================================================================
                                        SAMPLES FROM EBOOK
      =============================================================================================== */}
      <section className="spacer sec1_bgcolor" id="Samples">
        <Container>
          <div className="sec_title">
            <h1>SAMPLES FROM EBOOK</h1>
            <span>
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            </span>
            <p>
              Just as Display the most attractive parts of your ebook in this
              cool interactive sample viewer! Just click on the sample name tab
              on the right, and you can start scrolling the chosen section,
              where you can also include images of course.
            </p>
          </div>
        </Container>
      </section>
      <section className="top_spacer bgorange img1">
        <div className="sample_bg"></div>
        <Container>
          <div className="  ">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col lg={5} sm={12} className="tab_pad">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        BLOCK & INLINE ELEMENTS
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        CSS GRID & FLEXBOX LAYOUTS
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="three">
                        CONTENT SIDEBAR LAYOUT
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="four">
                        12 COLUMNS BOOTSTRAP GRID
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col lg={7} sm={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <h4>BLOCK AND INLINE EEMENTS</h4>
                      <div className="tab_img">
                        <img
                          src={require("./images/sample_content_img.png")}
                        ></img>
                      </div>
                      <p>
                        Every HTML element has a default display value,
                        depending on what type of element it is. There are two
                        display values: block and inline.
                      </p>
                      <h6>CONTENT MODEL</h6>
                      <p>
                        Generally, block-level elements may contain inline
                        elements and (sometimes) other block-level elements.
                        Inherent in this structural distinction is the idea that
                        block elements create "larger" structures than inline
                        elements.
                      </p>
                      <h6>DEFAULT FORMATTING</h6>
                      <p>
                        The distinction of block-level vs. inline elements was
                        used in HTML specifications up to 4.01. In HTML5, this
                        binary distinction is replaced with a more complex set
                        of content categories.
                      </p>
                      <p>
                        While the "inline" category roughly corresponds to the
                        category of phrasing content, the "block-level" category
                        doesn't directly correspond to any HTML5 content
                        category, but "block-level" and "inline" elements
                        combined together correspond to the flow content in
                        HTML5. There are also additional categories, e.g.
                        interactive content.
                      </p>
                      <h6>BLOCK LEVEL ELEMENTS</h6>
                      <p>
                        Block level elements take up as much space as possible
                        by default. Each block level element will start a new
                        line on the page, stacking down the page. In addition to
                        stacking vertically, block level elements will also take
                        up as much horizontal space as possible.
                      </p>
                      <p>
                        The p element is an example of a block level element.
                        Each new paragraph tag will appear on its own line
                        vertically. Paragraphs with longer content will stretch
                        all the way to the edge of the page.
                      </p>
                      <h6>INLINE ELEMENTS</h6>
                      <p>
                        Inline elements display in a line. They do not force the
                        text after them to a new line. An anchor (or link) is an
                        example of an inline element. You can put several links
                        in a row, and they will display in a line.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h4>CSS GRID & FLEXBOX LAYOUTS</h4>
                      <div className="tab_img">
                        <img
                          src={require("./images/sample_content_img2.png")}
                        ></img>
                      </div>
                      <p>
                        Our comprehensive guide to CSS flexbox layout. This
                        complete guide explains everything about flexbox,
                        focusing on all the different possible properties for
                        the parent element (the flex container) and the child
                        elements (the flex items).
                      </p>
                      <h6>FLEXBOX LAYOUT</h6>
                      <p>
                        The flexbox layout (flexible box) module a W3C Candidate
                        Recommendation as of October 2017) aims at providing a
                        more efficient way to lay out, align and distribute
                        space among items in a container, even when their size
                        is unknown and/or dynamic (thus the word “flex”).
                      </p>
                      <p>
                        The main idea behind the flex layout is to give the
                        container the ability to alter its items’ width/height
                        (and order) to best fill the available space (mostly to
                        accommodate to all kind of display devices and screen
                        sizes). A flex container expands items to fill available
                        free space or shrinks them to prevent overflow.
                      </p>
                      <h6>THE GRID LAYOUT</h6>
                      <p>
                        Since flexbox is a whole module and not a single
                        property, it involves a lot of things including its
                        whole set of properties. Some of them are meant to be
                        set on the container (parent element, known as “flex
                        container”) whereas the others are meant to be set on
                        the children (said “flex items”).
                      </p>
                      <p>
                        If “regular” layout is based on both block and inline
                        flow directions, the flex layout is based on “flex-flow
                        directions”. Please have a look at this figure from the
                        specification, explaining the main idea behind the flex
                        layout.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="three">
                      <h4>CONTENT SIDEBAR LAYOUT</h4>
                      <div className="tab_img">
                        <img
                          src={require("./images/sample_content_img3.png")}
                        ></img>
                      </div>
                      <p>
                        This defines the alignment along the main axis. It helps
                        distribute extra free space leftover when either all the
                        flex items on a line are inflexible, or are flexible but
                        have reached their maximum size. It also exerts some
                        control over the alignment of items when they overflow
                        the line.
                      </p>
                      <h6>ORDINARY SIDEBAR</h6>
                      <p>
                        Note that that browser support for these values is
                        nuanced. For example, space-between never got support
                        from some versions of Edge, and start/end/left/right
                        aren’t in Chrome yet. MDN has detailed charts. The
                        safest values are flex start.
                      </p>
                      <p>
                        There are also two additional keywords you can pair with
                        these values: safe and unsafe. Using safe ensures that
                        however you do this type of positioning, you can’t push
                        an element such that it renders off-screen (e.g. off the
                        top) in such a way the content can’t be scrolled too
                        (called “data loss”).
                      </p>
                      <h6>WIDGETIZED SIDEBARS</h6>
                      <p>
                        Flexbox requires some vendor prefixing to support the
                        most browsers possible. It doesn’t just include
                        prepending properties with the vendor prefix, but there
                        are actually entirely different property and value
                        names. This is because the Flexbox spec has changed over
                        time, creating versions.
                      </p>
                      <p>
                        Perhaps the best way to handle this is to write in the
                        new (and final) syntax and run your CSS through
                        Autoprefixer, which handles the fallbacks very well.
                      </p>
                      <p>
                        Alternatively, here’s a Sass @mixin to help with some of
                        the prefixing, which also gives you an idea of what kind
                        of things need to be done:
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="four">
                      <h4>12 COLUMNS BOOTSTRAP GRID</h4>
                      <div className="tab_img">
                        <img
                          src={require("./images/sample_content_img4.png")}
                        ></img>
                      </div>
                      <p>
                        Use our powerful mobile-first flexbox grid to build
                        layouts of all shapes and sizes thanks to a twelve
                        column system, six default responsive tiers, Sass
                        variables and mixins, and dozens of predefined classes.
                      </p>
                      <h6>ONE COLUMN GRID</h6>
                      <p>
                        Auto-layout for flexbox grid columns also means you can
                        set the width of one column and have the sibling columns
                        automatically resize around it. You may use predefined
                        grid classes (as shown below), grid mixins, or inline
                        widths. Note that the other columns will resize no
                        matter the width of the center column
                      </p>
                      <h6>CONTAINERS</h6>
                      <p>
                        Containers are the most basic layout element in
                        Bootstrap and are required when using our default grid
                        system. Containers are used to contain, pad, and
                        (sometimes) center the content within them. While
                        containers can be nested, most layouts do not require a
                        nested container.
                      </p>
                      <h6>BREAKPOINTS</h6>
                      <p>
                        Bootstrap includes six default breakpoints, sometimes
                        referred to as grid tiers, for building responsively.
                        These breakpoints can be customized if you’re using our
                        source Sass files.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Container>
      </section>
      {/* ==========================================================================================
                                      End  SAMPLES FROM EBOOK
      =============================================================================================== */}
      {/* ==========================================================================================
                                    Start See More Section
      =============================================================================================== */}
      <section className="see_more spacer">
        <Container>
          <div className="sec_title">
            <h1>WANT TO SEE MORE?</h1>
            <p>
              Hit the amazing button below to purchase this HTML5 based ebook
              landing page theme.
            </p>
          </div>
          <span>
            <a href="#" className="btn-primary">
              Begin Starter Course
            </a>
          </span>
        </Container>
      </section>
      {/* ==========================================================================================
                                    End See More Section
      =============================================================================================== */}
      {/* ==========================================================================================
                                    Start RESPONSIVE LAYOUTS
      =============================================================================================== */}
      <section className="r_layout spacer" id="Chapters">
        <Container>
          <div className="sec_title">
            <h1>RESPONSIVE LAYOUTS</h1>
            <span>
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            </span>
            <p>
              Just as Display the most attractive parts of your ebook in this
              cool interactive sample viewer! Just click on the sample name tab
              on the right, and you can start scrolling the chosen section,
              where you can also include images of course.
            </p>
          </div>
          <div className="d-md-flex layout_box">
            <div className="img_box">
              <div>
                <img src={require("./images/laptop.png")}></img>
              </div>
              <div className="img_text">
                <h4>Desktop layout</h4>
                <p>
                  Developers are also likely to be pleased with the simplified
                  syntax for doct structuring. Lots of tags have been
                  implemented that are clear, simple and do what they say.
                </p>
              </div>
            </div>
            <div className="img_box">
              <div>
                <img src={require("./images/mobile.png")}></img>
              </div>
              <div className="img_text">
                <h4>Desktop layout</h4>
                <p>
                  Developers are also likely to be pleased with the simplified
                  syntax for doct structuring. Lots of tags have been
                  implemented that are clear, simple and do what they say.
                </p>
              </div>
            </div>
            <div className="img_box">
              <div>
                <img src={require("./images/mobile2.png")}></img>
              </div>
              <div className="img_text">
                <h4>Desktop layout</h4>
                <p>
                  Developers are also likely to be pleased with the simplified
                  syntax for doct structuring. Lots of tags have been
                  implemented that are clear, simple and do what they say.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center pt-4 pb-4">
            <a href="#" className="btn-primary">
              Order HTML5 Ebook Now
            </a>
          </div>
        </Container>
      </section>
      {/* ==========================================================================================
                                    End RESPONSIVE LAYOUTS
      =============================================================================================== */}
      {/* ==========================================================================================
                                    Start BEHIND THE SCENES
      =============================================================================================== */}
      <section className="behind spacer sec_bgcolor" id="Reviews">
        <div className="container-md-fluid container-lg">
          <div className="sec_title">
            <h1>BEHIND THE SCENES</h1>
            <span>
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            </span>
          </div>
          <Row className="behind_text pb-5">
            <Col lg={2} md={3}>
              <div className="behind_img">
                <img src={require("./images/user3.webp")}></img>
              </div>
            </Col>
            <Col lg={10} md={9}>
              <h4>David Russo</h4>
              <p>
                Proin gravida nibh vel auctor aliquet enean sollicitudin, lorem
                quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                uis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                auctor a ornare sed non mauris vitae erat consequat auctor eu in
                elit taciti sociosqu ad litora.
              </p>
            </Col>
          </Row>
          <Row className="behind_text pt-3 pb-5">
            <Col lg={10} md={9} className="text-md-end text_left">
              <h4>Jake Smith</h4>
              <p>
                Proin gravida nibh vel auctor aliquet enean sollicitudin, lorem
                quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                uis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                auctor a ornare sed non mauris vitae erat consequat auctor eu in
                elit taciti sociosqu ad litora.
              </p>
            </Col>
            <Col lg={2} md={3}>
              <div className="behind_img">
                <img src={require("./images/face_1.png")}></img>
              </div>
            </Col>
          </Row>
          <Row className="behind_text pb-5 pt-3">
            <Col lg={2} md={3}>
              <div className="behind_img">
                <img src={require("./images/face_4.png")}></img>
              </div>
            </Col>
            <Col lg={10} md={9}>
              <h4>Marie Holmes</h4>
              <p>
                Proin gravida nibh vel auctor aliquet enean sollicitudin, lorem
                quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                uis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                auctor a ornare sed non mauris vitae erat consequat auctor eu in
                elit taciti sociosqu ad litora.
              </p>
            </Col>
          </Row>
          <Row className="behind_text pt-3 pb-5">
            <Col lg={10} md={9} className="text-md-end text_left">
              <h4>Bobby Hasson</h4>
              <p>
                Proin gravida nibh vel auctor aliquet enean sollicitudin, lorem
                quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                uis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                auctor a ornare sed non mauris vitae erat consequat auctor eu in
                elit taciti sociosqu ad litora.
              </p>
            </Col>
            <Col lg={2} md={3}>
              <div className="behind_img">
                <img src={require("./images/face_3.png")}></img>
              </div>
            </Col>
          </Row>
          <Row className="behind_text pt-3">
            <Col lg={2} md={3}>
              <div className="behind_img">
                <img src={require("./images/face_5.png")}></img>
              </div>
            </Col>
            <Col lg={10} md={9}>
              <h4>Jane Smith</h4>
              <p>
                Proin gravida nibh vel auctor aliquet enean sollicitudin, lorem
                quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                uis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                auctor a ornare sed non mauris vitae erat consequat auctor eu in
                elit taciti sociosqu ad litora.
              </p>
            </Col>
          </Row>
        </div>
      </section>
      {/* ==========================================================================================
                                    End BEHIND THE SCENES
      =============================================================================================== */}
      {/* ==========================================================================================
                                   Start LET'S GO PREMIUM
      =============================================================================================== */}
      <section className="spacer sec2_bgcolor lets" id="Prices">
        <div className="container-md-fluid container-lg">
          <div className="sec_title">
            <h1>LET'S GO PREMIUM</h1>
            <span>
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            </span>
            <p>
              You can create smarter forms thanks to HTML5’s expanded form
              options. In addition to all the standard form input types, HTML5
              offers more, including: datetime, datetime-local, date, month,
              week, time, number, range, email, and url. You can also add date
              pickers, sliders, validation, etc.
            </p>
          </div>
          <div className="d-md-flex w-100 premium_box">
            <div className="premium me-md-5 mb-md-0 mb-sm-5 bg-white">
              <h3 className="p-4">HTML5 ONLINE VERSION</h3>
              <div className="bgorange p-5 online">
                <h1>€39.50</h1>
              </div>
              <div className="online_text">
                <p className="p-2">Sed none mauris vitaeras sed</p>
                <p className="p-2">Auctor eust elit taciti socio</p>
                <p className="p-2">Opsum dolores adipiscing </p>
                <p className="p-2">Auctor eust elit taciti socio</p>
                <p className="p-2">Sed none mauris sed est</p>
              </div>
              <div>
                <a href="#" className="btn-primary">
                  Purchase now
                </a>
              </div>
            </div>
            <div className="premium bggray">
              <h3 className="p-4">HTML5 EBOOK VERSION</h3>
              <div className="bgorange sec_premium online">
                <h1>€59.00</h1>
              </div>
              <div className="online_text">
                <p className="p-2">Sed none mauris vitaeras sed</p>
                <p className="p-2">Auctor eust elit taciti socio</p>
                <p className="p-2">Opsum dolores adipiscing </p>
                <p className="p-2">Auctor eust elit taciti socio</p>
                <p className="p-2">Sed none mauris sed est</p>
              </div>
              <div>
                <a href="#" className="btn-primary">
                  Purchase now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========================================================================================
                                   End LET'S GO PREMIUM
      =============================================================================================== */}
      {/* ==========================================================================================
                                   Start Make Your Order
      =============================================================================================== */}
      <section className="img2 bgblack spacer">
        <div className="bg_map"></div>
        <div className="container-md-fluid container-lg">
          <div className="sec_title">
            <h1>MAKE YOUR ORDER</h1>
            <span>
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            </span>
            <p>
              So if you decided to buy the “Beginners Guide to HTML5 Coding”
              ebook, fill out the form below to place your order.
            </p>
          </div>
          <div className="order_box">
            <Form>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="name" placeholder="name" />
                <Form.Control type="email" placeholder="email" />
                <Form.Control type="email" placeholder="phone" />
                <Form.Control
                  as="textarea"
                  aria-label="With textarea"
                  placeholder="Message"
                />
              </Form.Group>
            </Form>
            <div>
              <a href="#" className="btn-primary">
                Submit
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ==========================================================================================
                                   End Make Your Order
      =============================================================================================== */}
      {/* ==========================================================================================
                                   Start GET IN TOUCH
      =============================================================================================== */}
      <section className="spacer">
        <div className="container-md-fluid container-lg">
          <div className="sec_title">
            <h1>GET IN TOUCH</h1>
            <span>
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            </span>
          </div>
          <div className="get_icon justify-content-between text-center">
            <div className="touch">
              <i class="fa-solid fa-location-dot"></i>
              <h2>LOCATION</h2>
              <p>8122, New York, Park Lane 12.</p>
            </div>
            <div className="touch">
              <i class="fa-solid fa-paper-plane"></i>
              <h2>EMAIL</h2>
              <p>html5ebook@flatbook.hu</p>
            </div>
            <div className="touch">
              <i class="fa-solid fa-mug-saucer"></i>
              <h2>OFFICE</h2>
              <p>8122, New York, Sun street 5.</p>
            </div>
            <div className="touch">
              <i class="fa-solid fa-phone"></i>
              <h2>PHONE</h2>
              <p>+182 918 8271 627</p>
            </div>
          </div>
        </div>
      </section>
      {/* ==========================================================================================
                                   End GET IN TOUCH
      =============================================================================================== */}
      {/* ==========================================================================================
                                   Start Footer
      =============================================================================================== */}
      <footer className="spacer bggray1">
        <div className="container-md-fluid container-lg">
          <div className="footer_contant d-lg-flex">
            <div className="flatbook">
              <h4>ABOUT FLATBOOK</h4>
              <p className="pt-3">
                FlatBook is a responsive clean & minimal ebook landing page
                theme featuring a trendy unique flat design style with unlimited
                color schemes, promising an easy customization and excellent
                result.
              </p>
            </div>
            <div className="flatbook book_link">
              <h4>PUBLISHER LINKS</h4>
              <ul className="list-unstyled pt-3">
                <li>
                  {" "}
                  <a href="#">Proin gravida velit essam</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Aliquet enean sollici tudines</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Bibendum auctor dolore</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Epsum ness sagittis quiset</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Lorem ipsum adipiscing</a>
                </li>
              </ul>
            </div>
            <div className="flatbook book_link book1">
              <h4>LATEST ARTICLES</h4>
              <ul className="list-unstyled latest pt-4">
                <li className="d-flex">
                  <a href="#">
                    <img src={require("./images/key.jpg")}></img>
                  </a>
                  <div className="f_contant">
                    <a href="#">Amazing blog post</a>
                    <p>May 17</p>
                  </div>
                </li>
                <li className="d-flex">
                  <a href="#">
                    <img src={require("./images/key1.jpg")}></img>
                  </a>
                  <div className="f_contant">
                    <a href="#">Amazing blog post</a>
                    <p>May 17</p>
                  </div>
                </li>
                <li className="d-flex">
                  <a href="#">
                    <img src={require("./images/key2.jpg")}></img>
                  </a>
                  <div className="f_contant">
                    <a href="#">Amazing blog post</a>
                    <p>May 17</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flatbook footer_contant">
              <h4>CONTACT DETAILS</h4>
              <div className="pt-4">
                <span>
                  <i class="fa-regular fa-map"></i> 19. Sunset Blvd., New York
                </span>
                <br></br>
                <span>
                  <i class="fa-solid fa-phone"></i>+23 (76) 893-537-22
                </span>
                <br></br>
                <span>
                  <i class="fa-regular fa-envelope"></i>info@flatbook.com
                </span>
                <div>
                  <a href="#" className="btn-primary">
                    Purchase now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </footer>
      <div className="bgblack">
          <div className="container-md-fluid container-lg p-4 d-flex justify-content-between">
              <div className="copy">
                  <p>2022 © FlatBook</p>
              </div>
              <div className="f_icon">
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-skype"></i>
              </div>
          </div>
        </div>
    </>
  );
}

export default Home;
