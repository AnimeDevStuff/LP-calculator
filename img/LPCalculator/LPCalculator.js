import React from 'react';
import './LPCalculator.css';
import LP from './LP Calculator GX.png';
import LPGauge from './LP Gauge GX.png';
import LP0 from './LP Gauge GX 0.png';
import LP100 from './LP Gauge GX 100.png';
import LP500 from './LP Gauge GX 500.png';
import LP1000 from './LP Gauge GX 1000.png';
import LP1500 from './LP Gauge GX 1500.png';
import LP2000 from './LP Gauge GX 2000.png';
import LP2500 from './LP Gauge GX 2500.png';
import LP3000 from './LP Gauge GX 3000.png';
import LP3500 from './LP Gauge GX 3500.png';



class LPCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lp: 4000,
            lpChange: 0
        };
        this.handleLPChange = this.handleLPChange.bind(this);
        this.getLPImage = this.getLPImage.bind(this);
        this.addLP = this.addLP.bind(this);
        this.subtractLP = this.subtractLP.bind(this);

    }

    handleLPChange(event) {
        this.setState({ lpChange: parseInt(event.target.value) });
    }

    addLP() {
        this.setState({ lp: this.state.lp + this.state.lpChange });
    }

    subtractLP() {
        this.setState({ lp: this.state.lp - this.state.lpChange });
    }

    getLPImage() {
        if (this.state.lp > 3500) {
            return LPGauge;
        }
        else if (this.state.lp > 3000) {
            return LP3500;
        }
        else if (this.state.lp > 2500) {
            return LP3000;
        }
        else if (this.state.lp > 2000) {
            return LP2500;
        }
        else if (this.state.lp > 1500) {
            return LP2000;
        }
        else if (this.state.lp > 1000) {
            return LP1500;
        }
        else if (this.state.lp > 500) {
            return LP1000;
        }
        else if (this.state.lp > 100) {
            return LP500;
        }
        else if (this.state.lp > 0) {
            return LP100;
        }
        else if (this.state.lp <= 0) {
            return LP0;
        }
    }
    render() {
        return (
            <>
                <div className='calculator-container'>
                    <img className="gx-calculator" src={LP}></img>
                    <img className="lp-gauge" src={this.getLPImage()}></img>
                    <p className='LP-amount'>{this.state.lp}</p>
                </div>
                <div className='lp-controls'>
                    <input placeholder='Enter LP Amount' onChange={this.handleLPChange}></input>
                    <button className="lp-add" onClick={this.addLP}>+</button>
                    <button className='lp-subtract' onClick={this.subtractLP}>-</button>
                </div>
            </>
        )
    }
}

export default LPCalculator;