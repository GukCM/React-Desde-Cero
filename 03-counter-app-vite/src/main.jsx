import React from 'react';
import ReactDOM from "react-dom/client";
import { MyName } from './MyName';
import {App} from './HelloWorldApp';

import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    //Se recomienda trabajar con React StrictMode
    <React.StrictMode>
        <MyName title='Hola, Soy Gus' subTitle={123}/>
    </React.StrictMode>
)