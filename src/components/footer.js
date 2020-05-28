import React from 'react';
import { Button, Card } from 'react-bootstrap';
function Footer() {

    return (
        <>

            <Card className="text-center">
                <Card.Header><h3 style={{ color:"#FF6347"}}>MOVIE DB API</h3></Card.Header>
                <Card.Body>
                    <Card.Title>Designed by <h2 style={{color:"blue"}}>Rayees Malik</h2></Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Card.Footer className="text-muted">@Copyright</Card.Footer>
            </Card>

            <br />
        </>
    );
}

export default Footer