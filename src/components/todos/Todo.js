import React from 'react';
import Button from './Button/Button';

export const Todo = (props) => {

    return (
        <div className="flex mb-4 items-center justify-between">
            <div>
                <div 
                    className="flex-grow text-gray-darkest" 
                    style={{ textDecoration: props.isComplete ? "line-through" : "" }}
                >
                    {props.content}
                </div>
            </div>
            <div>
                <Button 
                    type={props.isComplete ? "invalid" : "primary"} 
                    onClick={() => {props.onComplete(props.id)}}
                >
                    {props.isComplete ? "Not Done" : "Done"}
                </Button>
                <Button 
                    type="remove" 
                    onClick={() => {props.onDelete(props.id)}}
                >
                    Remove
                </Button>
            </div>
        </div>
    );
    
}
