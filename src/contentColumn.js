import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import imageFile from "./Images/surprise3.jfif";

const ContentColumn = () => {
    const style = {
        backgroundColor: 'brown',
        marginLeft: '60px'
    }
    return ( 
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageFile} />
            <Card.Body>
                <Card.Title style={{textAlign:'center', fontWeight:'bold'}}> SURPRISE </Card.Title>
                <Card.Text>
                    You want to surprise someone special and don't know how to go about it? Think no further, our surprise packages got you covered.
                </Card.Text>
                <Button style={style}> I'm Interested </Button>
            </Card.Body>
    </Card>
     );
}
 
export default ContentColumn;