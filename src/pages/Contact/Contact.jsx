import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CampusImg1 from '../../utils/images/rupp1.jpg';
import CampusImg2 from '../../utils/images/rupp2.jpg';
import CampusImg3 from '../../utils/images/rupp3.jpg';



function Contact(){
    return (
        <div className='contact-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center
                 text-light'> 

                    <h1 className='text-center fw-semibold'>Get in Touch</h1>
                    <p className='text-center w-75 mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus repudiandae laudantium amet numquam, adipisci quod consectetur, nihil aliquid iste consequuntur dolor minima consequatur qui suscipit!</p>
                </div>
            </header>

            <div className='container my-5 d-flex justify-content-center'>
                <Form id='contact-form'>
                    <Row className='mb-3'>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'> 
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder='First Name'/>
                        </Col>
                        <Col sm={12} md={6}> 
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder='Last Name'/>
                        </Col>
                    </Row>

                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='Enter email'/>
                        <Form.Text className='text-muted'>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder='Your address'/>
                    </Form.Group>

                    <Row className='mb-3'>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                         <Form.Label>Status</Form.Label>
                         <Form.Select defaultValue="Choose your status">
                            <option  hidden>Choose your status</option>
                            <option >Current Student</option>
                            <option >Future Student</option>
                            <option >Others</option>
                         </Form.Select>
                         
                        </Col>

                        <Col sm={12} md={6}>
                            <Form.Label>PostCode</Form.Label>
                            <Form.Control placeholder='Postcode'/>
                        </Col>
                    </Row>

                    <Form.Group className='mb-3'>
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Button variant="danger btn-lg" type="button">Submit</Button>

                </Form>
            </div>


            <div className='bg-dark text-light p-5'>
                <div className='container'>
                    <h2 className='text-center mb-5'>Our Campus</h2>
                    <div className='row g-4'>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img src={CampusImg1} className='img-fluid' alt="" />
                            
                        </div>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img src={CampusImg3} className='img-fluid' alt="" />
                            <h3 className='text-center mt-3'>Unleash Your Potential, <br /> Embrace Your Future</h3>
                            
                        </div>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img src={CampusImg2} className='img-fluid' alt=""  />
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;