import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import {Button, Container} from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import star_img from '../assets/big-star.png'

const DevicePage = () => {
    
    const device = {
        "id": 4,
        "name": "12 pro",
        "price": 99990,
        "rating": 0,
        "img": "f4771c53-d4dc-491e-b6c9-426ebdb24bf2.jpg",
        "createdAt": "2021-05-01T18:16:33.185Z",
        "updatedAt": "2021-05-01T18:16:33.185Z",
        "typeId": 2,
        "brandId": 1
    }
    const description = [
        {id: 1, title: 'Память', description: '5GB'},
        {id: 2, title: 'Выносливость', description: '10GB'},
        {id: 3, title: 'Надежность', description: '5GB'},
        {id: 4, title: 'Переменность', description: '5GB'},
    ]

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${star_img}) no-repeat center center`, 
                                width: 40, height:40,
                                backgroundSize: 'cover',
                                fontSize: 14}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lighgray'}}
                    >
                        <h3>{device.price} руб.</h3>
                        <Button variant={"outline-dark"}>В корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index) => 
                    <Row key={info.id} style={{background: index % 2 == 0 ? 'lightgray' : 'tranparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
}

export default DevicePage;