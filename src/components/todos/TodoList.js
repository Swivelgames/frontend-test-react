import React from 'react';
import { Todo } from './Todo';

export const TodoList = (props) => {

    const todos = props.items.map((item, index) => {
        return <Todo 
            content={item.todo}
            key={index}
            id={index}
            isComplete={item.isComplete}
            onDelete={props.onDelete}
            onComplete={props.onComplete}
            />
    });

    return ( 
        <div>
            {todos}
        </div>
    );
}
