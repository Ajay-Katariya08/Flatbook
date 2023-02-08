import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import logo from "./images/demo2_logo.png";
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
    InputGroup
  } from "react-bootstrap";
import Header from './Header';
import Footer from "./Footer"
function Blog(){
    return(
        <>
      <Header />
      <section>
        <div className='bggray1 blog text-center'>
                <h1>Blog</h1>
        </div>
        <div className='sec2_bgcolor spacer'>
         <div className="container-md-fluid container-lg">
            <div className='blog_box'>
              <div className='blog_area'>
              <div className='bg-white blog_img'>
                <img src={require('./images/key2.jpg')}></img>
                <div className='blog_contant'>
                  <div className='entry_date d-flex align-items-center'>
                    <i class="fa-regular fa-calendar"></i>
                    <p>Mar 04, 2022</p>
                  </div>
                  <div className='blog_text'>
                    <h4><a href="">Lorem ipsum sodales malesuda </a></h4>
                    <p>Vivamus sollicitudin lacus in sapien feugiat, vel rhoncus risus tristique.</p>
                  </div>
                  <div className='pt-4'>
                    <a href="">Continue reading …</a>
                  </div>
                </div>
              </div>
              </div>
              <div className='blog_area'>
              <div className='bg-white blog_img'>
                <img src={require('./images/key2.jpg')}></img>
                <div className='blog_contant'>
                  <div className='entry_date d-flex align-items-center'>
                    <i class="fa-regular fa-calendar"></i>
                    <p>Mar 04, 2022</p>
                  </div>
                  <div className='blog_text'>
                    <h4><a href="">Lorem ipsum sodales malesuda </a></h4>
                    <p>Vivamus sollicitudin lacus in sapien feugiat, vel rhoncus risus tristique.</p>
                  </div>
                  <div className='pt-4'>
                    <a href="">Continue reading …</a>
                  </div>
                </div>
              </div>
              </div>
              <div className='blog_area'>
              <div className='bg-white blog_img'>
                <img src={require('./images/key2.jpg')}></img>
                <div className='blog_contant'>
                  <div className='entry_date d-flex align-items-center'>
                    <i class="fa-regular fa-calendar"></i>
                    <p>Mar 04, 2022</p>
                  </div>
                  <div className='blog_text'>
                    <h4><a href="">Lorem ipsum sodales malesuda </a></h4>
                    <p>Vivamus sollicitudin lacus in sapien feugiat, vel rhoncus risus tristique.</p>
                  </div>
                  <div className='pt-4'>
                    <a href="">Continue reading …</a>
                  </div>
                </div>
              </div>
              </div>
              <div className='blog_area'>
              <div className='bg-white blog_img'>
                <img src={require('./images/key2.jpg')}></img>
                <div className='blog_contant'>
                  <div className='entry_date d-flex align-items-center'>
                    <i class="fa-regular fa-calendar"></i>
                    <p>Mar 04, 2022</p>
                  </div>
                  <div className='blog_text'>
                    <h4><a href="">Lorem ipsum sodales malesuda </a></h4>
                    <p>Vivamus sollicitudin lacus in sapien feugiat, vel rhoncus risus tristique.</p>
                  </div>
                  <div className='pt-4'>
                    <a href="">Continue reading …</a>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <Footer />

        </>
    )
}
export default Blog;