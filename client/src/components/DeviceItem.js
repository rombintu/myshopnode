import React from 'react'
import { Card, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { useHistory } from 'react-router-dom'
import star_img from '../assets/rating.png'
import { DEVICE_ROUTE } from '../utils/consts'


const DeviceItem = ({device}) => {
    const history = useHistory()
    console.log(history)
    return (
        <Col md={3} className="mt-3" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card
                style={{width: 150, cursor: 'pointer'}}
                border={'light'}>
                    <Image widht={150} height={150} src={device.img}/>
                    <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                        <div>
                            Apple
                        </div>
                        <div className="d-flex">
                            <div>{device.rating}</div>
                            <Image widht={10} height={10} src={star_img}/>
                        </div>
                        
                    </div>
                    <div>
                        {device.name}
                    </div>
            </Card>
        </Col>
    )
}

export default DeviceItem;