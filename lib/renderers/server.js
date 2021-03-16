import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import DataApi from "../DataApi";

import App from 'components/App';
import config from 'config';

const serverRender = async () => {
    const rawData = await axios.get(`http://${config.host}:${config.port}/data`);
    const api = new DataApi(rawData.data);
    const initialData = {
        articles: api.getArticles(),
        authors: api.getAuthors(),
    }

    return {
        initialMarkup: ReactDOMServer.renderToString(
            <App initialData={initialData}/>
        ),
        initialData,
    };
};

export default serverRender;