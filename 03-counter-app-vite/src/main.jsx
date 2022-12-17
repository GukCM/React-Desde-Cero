import React from 'react';
import ReactDOM from "react-dom/client";

import {App} from './HelloWorldApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
    //Se recomienda trabajar con React StrictMode
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)