import React from "react";
import ons from "onsenui";
import {Fab, Icon} from "react-onsenui";
import {ERR_INVALID_QR} from "../index";

export default class QRButton extends React.Component {

    render() {
        return (<Fab //style={{backgroundColor: ons.platform.isIOS() ? '#4282cc' : null}}
                     onClick={this.handleClick.bind(this)}
                     position='bottom right'>
            <Icon icon='fa-qrcode' size={26} fixedWidth={false} style={{verticalAlign: 'middle'}}/>
        </Fab>);
    }

    handleClick() {
        console.log("Clicked QR Scan Button");
        if (typeof cordova === "undefined") {
            ons.notification.alert('Cordova is not available in `npm start`', {modifier: ons.platform.isIOS ? null : "material"});
        } else {
            cordova.plugins.barcodeScanner.scan(
                (result) => {
                    if (!result.cancelled) {
                        this.props.navigation.pushPage("qr-code", result.text);
                    }
                },
                (error) => {
                    console.log("Error:");
                    console.log(error);
                    if (error != "No barcode") {
                        this.props.navigation.displayError(ERR_INVALID_QR);
                    }
                },
                {
                    "preferFrontCamera": false, // iOS and Android
                    "showFlipCameraButton": true, // iOS and Android
                    "prompt": "Place a barcode inside the scan area", // supported on Android only
                    "formats": "QR_CODE" // default: all but PDF_417 and RSS_EXPANDED
                }
            );
        }
    }
}