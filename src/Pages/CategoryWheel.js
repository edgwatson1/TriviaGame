import React from "react";
import { Redirect } from "react-router-dom";

class CategoryWheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 6,
      timerIsRunning: false
    };

    this.startTimer = this.startTimer.bind(this);
    this.renderRedirect2 = this.renderRedirect2.bind(this);
  }

  startTimer() {
    this.setState({
      timerIsRunning: true
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: this.state.time - 1
        }),
      1000
    );
  }

  renderRedirect2 = () => {
    if (this.state.time < 1) {
      return <Redirect to="/Challenge" />;
    }
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { fetchQuestions, categoryName } = this.props;

    if (this.state.timerIsRunning === false) {
      return (
        <div className="container">
          <h1 className="spinner-message">
            {" "}
            Click Below To Pick A Category At Random!
          </h1>

          <div className="footer">
            <button
              className="btn"
              onClick={event => {
                this.startTimer();
                fetchQuestions();
              }}
            >
              <a href="#">
                Spin The Wheel!
              </a>
            </button>
          </div>
          
        </div>
      );
    } else {
      if (this.state.time > 3) {
        return (
          <div className="container">
            <div>
              <h1>
                Mario's A-Dreamin' Up<br></br> A Category For You!
              </h1>
            </div>
            <div>
            <img
              className="spinnergif"
              src="https://media.giphy.com/media/SPB2DnJt1oB8c/giphy.gif"
              alt="category spinner wheel"
            />
            </div>
          </div>
        );
      } else {
        return (
          <div className="container">

            {this.renderRedirect2()}
            <h1 className="timer-category-message">
              {decodeURIComponent(categoryName)} Round
            </h1>
            <h2>Starting In...</h2>
            <p className="timer">{this.state.time}</p>
          </div>
        );
      }
    }
  }
}

export default CategoryWheel;
