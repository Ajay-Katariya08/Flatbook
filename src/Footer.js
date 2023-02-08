import './style.css';
function Footer()
{
    return(
        <>
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
    )
}
export default Footer;