import React from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBIcon,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
} from "mdbreact";

interface PropsType {
    user: {};
}

export default class NavigationBar extends React.Component<PropsType, {}> {
    state = {
        isOpen: false,
    };
    
    static propTypes: {};

    private toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    private user: any = this.props.user;

    private isLoggedin = (): boolean => {
        if (!this.user == null) return true;
        return false;
    };

    public render(): JSX.Element | undefined {
        return (
            <MDBNavbar color="blue" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">WE-BT16 Dashboard</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse
                    id="navbarCollapse"
                    isOpen={this.state.isOpen}
                    navbar
                >
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBNavLink to="/">Docs</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/">Support Server</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        {this.isLoggedin() ? (
                            <MDBNavItem>
                                <MDBNavLink to="/">Server Selection</MDBNavLink>
                            </MDBNavItem>
                        ) : null}
                        <MDBNavItem>
                            {this.isLoggedin() ? (
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <MDBIcon icon="user" />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu right>
                                        <MDBDropdownItem href="#!">
                                            Profile
                                        </MDBDropdownItem>
                                        <MDBDropdownItem href="#!">
                                            {`Logout (${this.user.username})`}
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            ) : (
                                <MDBNavItem>
                                    <MDBNavLink to="/">Login</MDBNavLink>
                                </MDBNavItem>
                            )}
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}
