import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
// components
import TodoItem from '@/Todo/ListItem';
import { Title } from './style';

const TaskList = styled.div``;
const Task = ({ task, index }: any) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <TodoItem content={task.content} />
        </div>
      )}
    </Draggable>
  );
};
const Column = ({ column, tasks }: any) => (
  <div>
    <Title>{column.title}</Title>
    <Droppable droppableId={column.id}>
      {(provided) => (
        <TaskList ref={provided.innerRef} {...provided.droppableProps}>
          {tasks.map((task: any, index: number) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </TaskList>
      )}
    </Droppable>
  </div>
);

const TodoList = () => {
  const [data, setData] = useState<any>({
    tasks: {
      'task-1': { id: 'task-1', content: 'Take out the garbage' },
      'task-2': { id: 'task-2', content: 'Watch my favorite show' },
      'task-3': { id: 'task-3', content: 'Charge my phone' },
      'task-4': { id: 'task-4', content: 'Cook dinner' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'To do',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
    },
    columnOrder: ['column-1'],
  });

  const onDragEnd = ({ destination, source, draggableId }: any) => {
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const column = data.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
    };

    setData(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {data.columnOrder.map((columnId: any) => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map((taskId: any) => data.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};

export default TodoList;
