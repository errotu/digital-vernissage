import React from "react";
import {Col, Row, ListItem, Input, List, ListHeader} from "react-onsenui";
let logo = require('../static/logo.png');

export default class About extends React.Component {

    render() {
        let version = __VERSION__;
        return (<Row className="about-page">
            <Col width="100%">
                <img src={logo} title="WeeDooCare-Logo" alt="WeeDooCare-Logo"/>
            </Col>
            <Col width="100%">
                <p>We see the world as an ecosystem, and combine facts with poetry and art.</p>
                <p>With this Digital Vernissage we want to show our GreenArt. Unique green cartoons and art galleries to
                    guide people for a mindset change.</p>

                <p>See more on <a href="http://www.weedoocare.com">www.weedoocare.com</a></p></Col>
            <Col width="100%">
                <p>App-Version: {version}</p>
            </Col>
            <Col width="100%">
                <List
                    dataSource={this.props.language.possible}
                    renderHeader={() => <ListHeader>Change language</ListHeader>}
                    renderRow={this.renderLanguageRow.bind(this)}
                />

            </Col>

        </Row>);
    }

    renderLanguageRow(language) {
        return (
            <ListItem key={language} tappable>
                <label className='left'>
                    <Input
                        inputId={`${language}`}
                        checked={language === this.props.language.inUse}
                        onChange={this.props.language.onChange}
                        type='radio'
                    />
                </label>
                <label htmlFor={`${language}`} className='center'>
                    {language}
                </label>
            </ListItem>
        )
    }

}