import React, {Component} from 'react';
import './App.css';
import './Normalize.css';
import LandingPage from "./pages/LandingPage";

class App extends Component {

    render() {
        return (
            <div className="App">
                <LandingPage />
            </div>
        );
    }
}

export default App;
