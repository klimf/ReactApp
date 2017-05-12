import React, { Component } from 'react';
import Header from "../common/components/layout/Header";
import Routes from "./Routes";
import Footer from "../common/components/layout/Footer";
import ScrollFix from "../common/components/layout/ScrollFix";

class App extends Component {

    constructor() {
        super()

    }

    render() {
        return (
            <div>
                <Header  />
                <ScrollFix >
                    <Routes {...this.props} />
                </ScrollFix>
                <Footer />
            </div>
        );
    }
}

export default App;