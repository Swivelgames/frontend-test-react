import React from 'react';
import Button from './Button/Button';

export default class TodoForm extends React.Component {

    state = { formValue: '' };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.formValue === '') {
            return;
        }
        this.props.onFormSubmit(this.state.formValue);
        this.setState({ formValue: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="flex my-8">
                <input 
                    type='text'
                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-darker"
                    placeholder='Add Todo'
                    value={this.state.formValue}
                    onChange={(e) => this.setState({formValue: e.target.value})}
                />
                <Button type="primary">Submit</Button>
            </form>
        );
    }
  }
