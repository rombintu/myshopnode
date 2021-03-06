import React, {useState} from 'react'
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/models/createBrand';
import CreateDevice from '../components/models/createDevice';
import CreateType from '../components/models/createType';

const Admin = () => {
    const [BrandVisible, setBrandVisible] = useState(false)
    const [TypeVisible, setTypeVisible] = useState(false)
    const [DeviceVisible, setDeviceVisible] = useState(false)


    return (
        <Container className="d-flex flex-column">
            <Button 
                variant={"outline-dark"} 
                className="mt-2"
                onClick={() => setTypeVisible(true)}
                >
                    Добавить тип
            </Button>
            <Button 
                variant={"outline-dark"} 
                className="mt-2"
                onClick={() => setBrandVisible(true)}
                >
                    Добавить бренд
            </Button>
            <Button 
                variant={"outline-dark"} 
                className="mt-2"
                onClick={() => setDeviceVisible(true)}
                >
                    Добавить устройство
            </Button>
            <CreateBrand show={BrandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType show={TypeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateDevice show={DeviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    )
}

export default Admin;