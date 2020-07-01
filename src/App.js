import React from 'react';
import { TodoList } from './components/todos';
import TodoForm from './components/todos/TodoForm';
import Button from './components/todos/Button/Button';

class App extends React.Component {

  state = {
    items : [
      {
        todo: "Item 1",
        isComplete: false
      },
      {
        todo: "Item 2",
        isComplete: false
      },
      {
        todo: "Item 3",
        isComplete: false
      }
    ],
    allCompleted: false
  };

  handleSubmit = todo => {
    this.setState({items: [...this.state.items, {todo, isComplete: false}]}, () => this.checkIfAllComplete());
  }

  handleDelete = index => {
    const newArr = [...this.state.items];
    newArr.splice(index, 1);
    this.setState({items: newArr}, () => this.checkIfAllComplete());
  }

  handleComplete = index => {
    const newArr = [...this.state.items];
    newArr[index].isComplete = !newArr[index].isComplete;
    this.setState({items: newArr}, () => this.checkIfAllComplete());
  }

  handleCompleteAll = () => {
    const newArr = [...this.state.items];
    newArr.map((item) => {
      item.isComplete = true;
    });
    this.setState({items: newArr}, () => this.checkIfAllComplete());
  }

  handleRemoveAll = () => {
    this.setState({items: [], allCompleted: false});
  }

  checkIfAllComplete = () => {
    for (let index = 0; index < this.state.items.length; index++) {
      if (!this.state.items[index].isComplete) {
        this.setState({allCompleted: false});
        return;
      }
    }
    this.setState({allCompleted: true});
  }

  masterButton = () => {
    if (this.state.items.length > 0) {
      return (
        <Button 
          type={this.state.allCompleted ? "remove" : "completeAll"} 
          onClick={this.state.allCompleted ? this.handleRemoveAll : this.handleCompleteAll} 
        >
          {this.state.allCompleted ? "Remove All" : "Complete All"}
        </Button>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-2/5">
          <div className="flex justify-between mb-4">
            <h1 className="text-gray-darkest text-3xl font-bold">Todo List</h1>
            {this.masterButton()}
          </div>
          <TodoForm onFormSubmit={this.handleSubmit} />
          <div>
            <TodoList 
              items={this.state.items} 
              onDelete={this.handleDelete}
              onComplete={this.handleComplete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;