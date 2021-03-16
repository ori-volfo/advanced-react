import React from 'react';
import DataApi from "../DataApi";
import axios from 'axios';
import ArticleList from './ArticleList';

class App extends React.Component {
    state = {
        articles: this.props.initialData.articles,
        authors: this.props.initialData.authors,
    }

    async componentDidMount() {
        const rawData = await axios.get('/data');
        const api = new DataApi(rawData.data);


        this.setState( () => {
            return {
                articles: api.getArticles(),
                authors: api.getAuthors(),
            }
        });
    }
    articleActions = {
        lookupAuthor: authorId => this.state.authors[authorId]
    };
    render() {

        return (
            <ArticleList
                articles={this.state.articles}
                articleActions={this.articleActions}
            />
        );
    }
}

export default App;