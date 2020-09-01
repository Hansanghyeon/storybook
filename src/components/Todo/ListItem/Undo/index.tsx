import React, { useState } from 'react';
// components
import DragBtn from '@atom/btn/Drag';
import {
  ListItem,
  CompletedBtn,
  CompletedMask,
  TextBox,
  DragControler,
  UndoLabel,
  ButtonBox,
  ListItemRoot,
} from './style';

type props = {
  data: {
    content?: string;
    category?: {
      color: any;
    };
  };
  isDone?: boolean;
  controller?: any;
};
const TodoItemUndo: React.FC<props> = ({ data, isDone, controller }: props) => {
  const [value, setValue] = useState(data?.content);
  const [done, setDone] = useState<boolean>(isDone || false);

  const handleValue = ({ target }: { target: HTMLInputElement }) => {
    setValue(target.value);
  };

  const handleDone = ({ target }: { target: HTMLInputElement }) => {
    setDone(target.checked);
    controller();
  };

  return (
    <ListItemRoot animate={!done ? 'open' : 'closed'}>
      <ListItem bg={data?.category?.color}>
        <DragControler>
          <DragBtn />
        </DragControler>
        <TextBox
          type="text"
          value={value === '' ? data?.content : value}
          onChange={handleValue}
          placeholder="New TODOs"
        />
        <CompletedMask checked={done} />
        <ButtonBox>
          <CompletedBtn
            id="test"
            type="checkbox"
            onChange={handleDone}
            name="test"
          />
          <UndoLabel>Uudo</UndoLabel>
        </ButtonBox>
      </ListItem>
    </ListItemRoot>
  );
};
TodoItemUndo.defaultProps = {
  isDone: false,
  controller: console.log,
};

export default TodoItemUndo;
