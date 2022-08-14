import React,{ useState, useEffect } from 'react';
import Menu from './UpMovieItemMenu'
import { Link, useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'
import $ from "jquery";
import axios from 'axios';

const Header = () => {
  const [post, setPost] = useState(Menu);
  const navigate = useNavigate();
  useEffect( () => {
    dbTable.map(async(val) => {
      await axios.get(`http://localhost:8080/${val}/`).then((response) => {
      setPost(response.data);
      const data = response.data;
      console.log(data);
    });
    // document.getElementsByClassName(categItem).classList = document.getElementsByClassName(categItem).classList || 'active'
    // console.log(document.getElementsByClassName(categItem))
    })
  }, []);

  const dbTable = ['tamil', 'kannada', 'hindi', 'malayalam', 'telugu', 'upcoming', 'featured'];
  const [items, setItems] = useState(Menu);
    const filterItem = ()=>{
      
      
    }
  
  useEffect(()=>{
/*=============================================
	=    		Mobile Menu			      =
=============================================*/
//SubMenu Dropdown Toggle
if ($('.menu-area li.menu-item-has-children ul').length) {
	$('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
}
//Mobile Nav Hide Show
if ($('.mobile-menu').length) {

	var mobileMenuContent = $('.menu-area .main-menu').html();
	$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

	//Dropdown Button
	$('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(500);
	});
	//Menu Toggle Btn
	$('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	});

	//Menu Toggle Btn
	$('.menu-backdrop, .mobile-menu .close-btn').on('click', function () {
		$('body').removeClass('mobile-menu-visible');
	});
}

/*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
		$('.scroll-to-target').removeClass('open');

	} else {
		$("#sticky-header").addClass("sticky-menu");
		$('.scroll-to-target').addClass('open');
	}
});


/*=============================================
	=    		 Scroll Up  	         =
=============================================*/
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);

  });
}

  },[])
  return (
    <header>
    <motion.div id="sticky-header" className="menu-area transparent-header">
      <div className="container custom-container">
        <div className="row">
          <div className="col-12">
            <div className="mobile-nav-toggler"><i className="fas fa-bars" /></div>
            <div className="menu-wrap">
              <nav className="menu-nav show">
                <div className="logo">
                  <Link to="/">
                    <img src="img/logo/logo.png" alt="Logo" />
                  </Link>
                </div>
                <div className="navbar-wrap main-menu d-none d-lg-flex">
                  <ul className="navigation">
                    <li className="active menu-item-has-children">
                      <Link to="/"> Home </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to={{
                                pathname:"/tv-show",
                                state: post
                      }}>Tamil</Link>
                      
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/tv-show" onClick={()=> {filterItem()}}>Hindi</a>
                     
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/tv-show">Telugu</a>
                      
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/tv-show">Kannada</a>
                      
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/tv-show">Mayalam</a>
                      
                    </li>
                    <li><a href="/tv-show">tv show</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    
                    <li><a href="/contact">contacts</a></li>
                  </ul>
                </div>
                <div className="header-action d-none d-md-block">
                  <ul>
                    <li className="header-search"><a href="/#" data-toggle="modal" data-target="#search-modal"><i className="fas fa-search" /></a></li>
                    <li className="header-lang">
                      <form action="/#">
                        <div className="icon"><i className="flaticon-globe" /></div>
                        <select id="lang-dropdown">
                          <option value>En</option>
                          <option value>Au</option>
                          <option value>AR</option>
                          <option value>TU</option>
                        </select>
                      </form>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            {/* Mobile Menu  */}
            <div className="mobile-menu">
              <div className="close-btn"><i className="fas fa-times" /></div>
              <nav className="menu-box">
                <div className="nav-logo"><Link to="/"><img src="img/logo/logo.png" alt="" /></Link>
                </div>
                <div className="menu-outer">
                  {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                </div>
                <div className="social-links">
                  <ul className="clearfix">
                    <li><a href="/#"><span className="fab fa-twitter" /></a></li>
                    <li><a href="/#"><span className="fab fa-facebook-square" /></a></li>
                    <li><a href="/#"><span className="fab fa-pinterest-p" /></a></li>
                    <li><a href="/#"><span className="fab fa-instagram" /></a></li>
                    <li><a href="/#"><span className="fab fa-youtube" /></a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="menu-backdrop" />
            {/* End Mobile Menu */}
            {/* Modal Search */}
            <div className="modal fade" id="search-modal" tabIndex={-1} role="dialog" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <form>
                    <input type="text" placeholder="Search here..." />
                    <button><i className="fas fa-search" /></button>
                  </form>
                </div>
              </div>
            </div>
            {/* Modal Search-end */}
          </div>
        </div>
      </div>
    </motion.div>
  </header>
  )
}

export default Header