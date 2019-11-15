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
    this.renderRedirect = this.renderRedirect.bind(this);
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
  renderRedirect = () => {
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
        <div>
          <div class="content">
            <h1 class="spinner intro">
              {" "}
              Click below to pick a category at random!
            </h1>
            <button
              id="btn-spin"
              onClick={event => {
                this.startTimer();
                fetchQuestions();
              }}
            >
              Spin!
            </button>
          </div>
        </div>
      );
    } else {
      if (this.state.time > 3) {
        return (
          <div class="spinnergif">
            <img
              src="https://media.giphy.com/media/D4z5qrV4s9e4o/giphy.gif"
              alt="category spinner wheel"
            />
          </div>
        );
      } else {
        return (
          <div class="content">
            {this.renderRedirect()}
            <h2>{categoryName}</h2>
            <p class="timer">{this.state.time}</p>
          </div>
        );
      }
    }
  }
}

export default CategoryWheel;
