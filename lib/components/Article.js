import React from 'react';

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

const Article = (props) => {
    const { article, actions } = props;
    const author = actions.lookupAuthor(article.authorId)
    return (
        <div style={style.article}>
            <div style={style.title}>{article.title}</div>
            <div style={style.date}>{article.date}</div>
            <div style={style.author}>
                <a href={author.website}>
                    <div>{author.firstName} {author.lastName}</div>
                </a>
            </div>
            <div style={style.body}>{author.body}</div>
        </div>
    );
};

export default Article;