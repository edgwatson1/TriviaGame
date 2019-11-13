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
          <div>
            <h1> It's time to choose a category!...</h1>
            <h2>Click below to spin the wheel!</h2>
            <button
              onClick={event => {
                this.startTimer();
                fetchQuestions();
              }}
            >
              Click me!
            </button>
          </div>
        </div>
      );
    } else {
      if (this.state.time > 3) {
        return (
          <div>
            <img
              src="https://media.giphy.com/media/D4z5qrV4s9e4o/giphy.gif"
              alt="category spinner wheel"
            />
          </div>
        );
      } else {
        return (
          <div>
            {this.renderRedirect()}
            <h1>Welcome to the {categoryName} round!</h1>
            <h2>It will begin in {this.state.time} seconds!</h2>
          </div>
        );
      }
    }
  }
}

export default CategoryWheel;
