import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import './App.css';
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={3} sm={6}>
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li><Link to="/All" style={{ textDecoration: 'none', color: 'inherit' }}>All News</Link></li>
              <li><Link to="/Top" style={{ textDecoration: 'none', color: 'inherit' }}>Top News</Link></li>
              <li><Link to="/Trending" style={{ textDecoration: 'none', color: 'inherit' }}>Trending</Link></li>
              <li><Link to="/Science" style={{ textDecoration: 'none', color: 'inherit' }}>Science</Link></li>
              <li><Link to="/Entertainment" style={{ textDecoration: 'none', color: 'inherit' }} >Entertainment</Link></li>
              <li><Link to="./Sports" style={{ textDecoration: 'none', color: 'inherit' }}>Sports</Link></li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h5>About Us</h5>
            <p>Your go-to source for the latest news and updates from around the world.</p>
          </Col>
          <Col md={3} sm={6}>
            <h5>Contact Us</h5>
            <address>
              <p>Email: contactnewsapi@gmail.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </Col>
          <Col md={3} sm={6}>
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="https://www.facebook.com/profile.php?id=61550115176163&sk=friends&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true"><FaFacebookF /></a></li>
              <li className="list-inline-item"><a href="https://twitter.com/newswebapi69943"><FaTwitter /></a></li>
              <li className="list-inline-item"><a href="https://www.instagram.com/newsapi9411/"><FaInstagram /></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-3">
        <p>&copy; {new Date().getFullYear()} NewsWebAPI. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
