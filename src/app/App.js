import React, { Component } from 'react';
import Header from "../components/layout/Header";
import Routes from "./Routes";
import Footer from "../components/layout/Footer";
import ScrollFix from "../components/wrappers/ScrollFix";

class App extends Component {
    render() {
        return (
            <div>
                <Header {...this.props} />
                <ScrollFix {...this.props}>
                    <Routes {...this.props} />
                </ScrollFix>
                <Footer {...this.props}/>
            </div>
        );
    }
}

export default App;