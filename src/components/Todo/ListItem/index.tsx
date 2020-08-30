import React from 'react';
// Components
import TodoItemDef from './Def';
import TodoItemUndo from './Undo';

const TodoItem = (props: any) => <TodoItemDef {...props} />;
TodoItem.Undo = TodoItemUndo;

export default TodoItem;
