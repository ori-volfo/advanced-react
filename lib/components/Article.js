import React from 'react';
import PropTypes from 'prop-types';

const style = {
    article: {
        paddingBottom: 10,
        borderBottomStyle: 'solid',
        borderBottomColor: '#aaa',
        marginBottom: 10,
        borderBottomWidth: 1,
    },
    title: {
        fontWeight: 'bold',
    },
    date: {
        fontSize: '0.85em',
        color: '#888',
    },
    author: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    body: {
        paddingLeft: 20,
    }
};

const dateDisplay = (dateString) => new Date(dateString).toDateString();

const Article = (props, { store }) => {
    const { article } = props;
    const author = store.lookupAuthor(article.authorId)
    return (
        <div style={style.article}>
            <div style={style.title}>{article.title}</div>
            <div style={style.date}>
                {dateDisplay(article.date)}
            </div>
            <div style={style.author}>
                <a href={author.website}>
                    <div>{author.firstName} {author.lastName}</div>
                </a>
            </div>
            <div style={style.body}>{article.body}</div>
        </div>
    );
};

Article.propTypes = {
    article: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })
};

Article.contextTypes = {
    store: PropTypes.object
};

export default Article;