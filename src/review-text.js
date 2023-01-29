import React from "react";
import ReactStars from "react-stars";

export default class ReviewText extends React.Component {
    constructor(props) {
            super(props);
            // this.state = [];
            this.displayData = [];

            this.state = {
                showReview: this.displayData,
                inputValue: ''
            }

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.appendReview = this.appendReview.bind(this);
        }

        appendReview() {
            this.displayData.push(<div className='display-review'><p>{this.state.inputValue}</p></div>);
            this.setState ({
                showReview: this.displayData,
                inputValue: ''
            });
        }

        handleChange(event) {
            let getTextAreaValue = event.target.value;
            this.setState({
                inputValue: getTextAreaValue
            });
        }

        handleSubmit(event) {
            const inputVal = this.state.value;
            inputVal.value = '';
            event.preventDefault();
        }

        render() {
            return (
                <form>
                    <h6>Rate and write a review!</h6>

                    <section className='stars-react'>
                    <ReactStars />
                    </section>

                    <input value={this.state.inputValue} onChange={this.handleChange}></input>
                    
                    <button type='button' onClick={this.appendReview}>Submit</button>

                    <div className='display-review'>{this.displayData}</div>
                </form>


            );
        }
    }

    // value={this.state.value} onChange={this.handleChange} 

    // <form onSubmit={this.handleSubmit}>


