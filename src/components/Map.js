import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import './style/Style.css';

class Map extends Component {
    render() {
        return (
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15050.746590869192!2d-99.1754397777556!3d19.425940440207814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzMzLjQiTiA5OcKwMTAnMDAuMSJX!5e0!3m2!1ses-419!2smx!4v1524344534959" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            
        );
    }
}

export default Map;