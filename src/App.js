import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
    return (
        <div className="app">
            
            {/* components in our react app */}
            
            <Header/>
            {/* Header */}

            <Home/>
            {/* Home */}

        </div>
    );
}

export default App;
