import React from 'react';

class Navigation extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a href="true" className="text-white">
                    { this.props.titulo }
                </a>
            </nav>
        )
    }
}
export default Navigation;