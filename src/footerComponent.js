import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './logo.svg';
import SubscriptionForm from './subscriptionComponent';

const FooterComponent = () => {
    return ( 
        <footer className='bg-dark'>
            <Row className='container-fluid mt-5'>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <img src={logo} style={{maxWidth:'70px'}} alt='company logo' />
                        <p className='text-light'> This is just an example to show how you put up components using React. </p>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <h3 className='text-light'> Address </h3>
                        <p className='text-light'> We deliver Nationwide </p>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                    <h3 className='text-light'> Contact US </h3>
                        <p className='text-light'> +234-1234567, +234-9874563 </p>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <h3 className='text-light'> Subcscribe </h3>
                        <SubscriptionForm />
                    </div>
                </Col>
            </Row>
        </footer>
     );
}
 
export default FooterComponent;