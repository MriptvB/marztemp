import { faArrowRightLong, faGear, faSliders, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Container className="header pt-5">
        <Row className="justify-content-center p-5" id="icon-list">
          <div className="blur" />
        </Row>
      </Container>
      <div className="justify-content-center d-flex pt-1 pb-5 title">
        <span className="text-span">{'!'}</span>
        <h1>{'به پنل کاربری خوش آمدید'}</h1>
      </div>
    </>
  );
};

export default Header;
