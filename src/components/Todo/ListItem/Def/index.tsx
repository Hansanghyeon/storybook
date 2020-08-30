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
  content?: string;
  isDone?: boolean;
};
const TodoItemDef: React.FC<props> = ({ content, isDone }: props) => {
  const [value, setValue] = useState(content);
  const [done, setDone] = useState<boolean>(isDone || false);

  const handleValue = ({ target }: { target: HTMLInputElement }) =>
    setValue(target.value);

  const handleDone = ({ target }: { target: HTMLInputElement }) => {
    setDone(target.checked);
  };

  return (
    <ListItem animate={done ? 'open' : 'closed'}>
      <DragControler>
        <DragBtn />
      </DragControler>
      <TextBox
        type="text"
        value={value}
        onChange={handleValue}
        placeholder="New TODOs"
      />
      <CompletedMask.Component
        checked={done}
        variants={CompletedMask.variants}
      />
      <CompletedBtn type="checkbox" onChange={handleDone} />
    </ListItem>
  );
};
TodoItemDef.defaultProps = {
  content: '',
  isDone: false,
};

export default TodoItemDef;
