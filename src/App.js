import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import HomePage from './pages/home/homePage';
import AboutPage from './pages/about/aboutPage';
import ContactPage from './pages/contact/contactPage';
import Footer from './components/footer/Footer.components';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Mauro Espinal V',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Acerca', path: '/about' },
        { title: 'Contacto', path: '/contact' }
      ],
      home: {
        title: 'Ser implacable',
        subTitle: 'Proyectos que marcan la diferencia',
        text: 'Mira mis proyectos a continuación'
      },
      about: {
        title: 'Sobre mí'
      },
      contact: {
        title: 'Hablemos'
      }
    }
  }
  render() {
    return (
      <Router>
      <Container className="p-0" fluid={true}>
        
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Mauro Espinal</Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">home</Link>
              <Link className="nav-link" to="/about">acerca</Link>
              <Link className="nav-link" to="/contact">contacto</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
        <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
        <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
        
        <Footer />

      </Container>
    </Router>
    );
  }
}

export default App;
