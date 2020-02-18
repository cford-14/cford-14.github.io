import React from 'react';
import './preview.css';
import Banner from './Banner';
import Cover from './images/cover.jpg';
import Page from './images/p1.jpg';


class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state={isCover: true};
        this.handleClick = this.handleClick.bind(this);
        
    }
    handleClick() {
        this.setState(state=>({isCover: !state.isCover}));

    }
    render() {
        return(
            <div className='all'>
                <Banner />
                <div className='pageContainer'>
                    <img id='page' src={this.state.isCover ? Cover:Page} />
                
                <button className='button' onClick={this.handleClick}>Next Page</button>
                </div>
            </div>
        )

    }
}

export default Preview;