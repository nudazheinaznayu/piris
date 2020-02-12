import React from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";

const Header = () => 
{
    return(
            <MDBNavbar color="indigo" expand = "md">
                <MDBNavbarBrand>
                    <strong className = "white-text">СуперБанк</strong>
                </MDBNavbarBrand>
                <MDBNavbarNav left>
                    <MDBNavItem>
                        <MDBNavLink to = '/Clients'>Все клиенты</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to = '/AddClient'>Добавить клиента</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
    )
}

export default Header