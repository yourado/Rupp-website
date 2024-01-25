import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';
import { AccordionItem } from 'react-bootstrap';
function FaqAccordion(){
    return (
        <div className='faq-section'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
                <p className='text-center mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus corrupti eum modi aut dolor in deserunt, sapiente laborum dolores! A recusandae, architecto vero, voluptates reprehenderit officiis quod optio doloremque illum veniam totam eum. Dicta porro beatae, quas ducimus saepe non!</p>
                <Accordion defaultActiveKey="" flush>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>First question?</Accordion.Header>
                        <Accordion.Body>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ducimus, perspiciatis pariatur fugit quas atque laboriosam. Velit blanditiis voluptatibus alias consequatur itaque. Modi expedita dicta maiores omnis, veritatis nesciunt odio aliquam facilis architecto veniam consequuntur vitae! Soluta repellat fugit magnam!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>Second question?</Accordion.Header>
                        <Accordion.Body>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ducimus, perspiciatis pariatur fugit quas atque laboriosam. Velit blanditiis voluptatibus alias consequatur itaque. Modi expedita dicta maiores omnis, veritatis nesciunt odio aliquam facilis architecto veniam consequuntur vitae! Soluta repellat fugit magnam!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='2'>
                        <Accordion.Header>Third question?</Accordion.Header>
                        <Accordion.Body>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ducimus, perspiciatis pariatur fugit quas atque laboriosam. Velit blanditiis voluptatibus alias consequatur itaque. Modi expedita dicta maiores omnis, veritatis nesciunt odio aliquam facilis architecto veniam consequuntur vitae! Soluta repellat fugit magnam!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='3'>
                        <Accordion.Header>Fourth question?</Accordion.Header>
                        <Accordion.Body>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ducimus, perspiciatis pariatur fugit quas atque laboriosam. Velit blanditiis voluptatibus alias consequatur itaque. Modi expedita dicta maiores omnis, veritatis nesciunt odio aliquam facilis architecto veniam consequuntur vitae! Soluta repellat fugit magnam!
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default FaqAccordion;