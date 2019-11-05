import React from "react";
import QandA from "./QandA";

class Challenge extends React.Component {
  constructor(props) {
    super(props);
  }


// map1 from live code

const TaskList = ({ tasks, onClickTask }) => (
    <ul>
        {tasks.map((task) => (
            <Task key={task.text} task={task} onClickTask={onClickTask}/>
        ))}
    </ul>
)

// map2 from live code
handleToggleDone = (clickedTask) => {
  this.setState(
    (state) => {

      const qP = state.tasks.map((task) => {
        if(task.text === clickedTask.text) {
          // change is done
          task.isDone = !task.isDone;
        }
        return task;
      })

      return {
        ...state,
        tasks: updatedTasks
      }
    },
    () => localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
  )
}





  render() {

    return (
      <>
        <p>This is the challenge container</p>
        <div className="ui cards">
          <div className="card">
            <div className="content"></div>

            <QandA questionPackages={this.props.questionPackages} />
            
            <br />
            <button>Next Question</button>
            <br />
          </div>
        </div>
      </>
    );
  };
}

export default Challenge;
