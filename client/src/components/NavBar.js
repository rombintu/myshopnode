import React, { useContext } from 'react'
import { Context } from '..'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link, NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import {Button, Container} from "react-bootstrap"
import {observer} from "mobx-react-lite"
import {useHistory} from 'react-router-dom'


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>OnlineShopNodeJS</NavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{color: "black"}}>
                            <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)} >Администрация</Button>
                            <Button className="ml-2" onClick={() => logOut()}>Выйти</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: "black"}}>
                            {/* <Button variant={"outline-light"}>Администрация</Button> */}
                            <Button className="ml-2" onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                        </Nav>
                    }
            </Container>
        </Navbar>
    )
})


export default NavBar