import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    state = {
        answer: 42,
    }
    asyncFunc = () => {
        return Promise.resolve(22);
    }
    async componentDidMount() {
        this.setState({
            answer: await this.asyncFunc()
        })
    }

    render(){
        return(
            <h2>Hello React -- {this.state.answer}</h2>
        );
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
)