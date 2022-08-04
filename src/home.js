// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentColumn from './contentColumn';
// import Card from 'react-bootstrap/Card'
const HomeComponent = () => {

    // let name = "Irene";
    return ( 
        <div>
            <Row className='container-fluid mt-2'>
                <Col xs={12} md={6} lg={3}>
                    <div className='p-3'>
                        <ContentColumn></ContentColumn>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <div className='p-3'>
                        <ContentColumn></ContentColumn>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <div className='p-3'>
                        <ContentColumn></ContentColumn>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <div className='p-3'>
                        <ContentColumn></ContentColumn>
                    </div>
                </Col>
            </Row>
        </div>
     );
}
 
export default HomeComponent;