import React, { useState } from 'react';
// components
import DragBtn from '@atom/btn/Drag';
import {
  ListItem,
  CompletedBtn,
  CompletedMask,
  TextBox,
  DragControler,
} from './style';

type props = {
  data: {
    content?: string;
    category?: {
      color: any;
    };
  };
  isDone?: boolean;
};
const TodoItemUndo: React.FC<props> = ({ data, isDone }: props) => {
  const [value, setValue] = useState(data?.content);
  const [done, setDone] = useState<boolean>(isDone || false);

  const handleValue = ({ target }: { target: HTMLInputElement }) => {
    setValue(target.value);
  };

  const handleDone = ({ target }: { target: HTMLInputElement }) => {
    setDone(target.checked);
  };

  return (
    <ListItem animate={done ? 'open' : 'closed'} bg={data?.category?.color}>
      <DragControler>
        <DragBtn />
      </DragControler>
      <TextBox
        type="text"
        value={value === '' ? data?.content : value}
        onChange={handleValue}
        placeholder="New TODOs"
        bg={data?.category?.color}
      />
      <CompletedMask checked={done} />
      <CompletedBtn type="checkbox" onChange={handleDone} />
    </ListItem>
  );
};
TodoItemUndo.defaultProps = {
  isDone: false,
};

export default TodoItemUndo;
