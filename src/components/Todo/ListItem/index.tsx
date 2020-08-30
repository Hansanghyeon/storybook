import React from 'react';
// Components
import TodoItemDef from './Def';
import TodoItemUndo from './Undo';

const TodoItem = () => <TodoItemDef />;
TodoItem.Undo = () => <TodoItemUndo />;

export default TodoItem;
