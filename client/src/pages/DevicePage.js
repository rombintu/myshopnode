import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import {Button, Container} from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import star_img from '../assets/big-star.png'
import {useParams} from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceAPI'

const DevicePage = () => {
    
    const [device, setDevices] = useState({info: []})
    const params = useParams()
    const {id} = useParams()
    console.log(params)
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevices(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
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
                {device.info.map((info, index) => 
                    <Row key={info.id} style={{background: index % 2 == 0 ? 'lightgray' : 'tranparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
}

export default DevicePage;