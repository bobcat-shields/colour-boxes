import React from 'react';
import './Square.css';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = { colour: null };
    }

    randomColour() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        this.colour = 'rgb(' + red + ',' + green + ',' + blue + ')';

        return this.colour;
    }

    render() {
        return (
            <div
                className="square"
                onMouseOver={() => this.setState({ randomColour: this.randomColour() })}
                onMouseLeave={() => this.setState({ randomColour: this.randomColour() })}
                style={{ backgroundColor: this.colour }}
            >
            </div>
        );
    }
}

export default Square