import React, { useContext } from 'react'
import { Context } from '..'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link, NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import {Button, Container} from "react-bootstrap"
import {observer} from "mobx-react-lite"

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>OnlineShopNodeJS</NavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{color: "black"}}>
                            <Button variant={"outline-light"}>Администрация</Button>
                            <Button className="ml-2">Выйти</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: "black"}}>
                            <Button variant={"outline-light"}>Администрация</Button>
                            <Button className="ml-2" onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                        </Nav>
                    }
            </Container>
        </Navbar>
    )
})


export default NavBar