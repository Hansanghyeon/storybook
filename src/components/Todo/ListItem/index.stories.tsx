import React from 'react';
import { withKnobs, color } from '@storybook/addon-knobs';
// components
import CenterWrap from '@atom/wrap/Center';
import TodoItem from '.';

export default {
  title: 'TODOS/TODO/List Item',
  component: TodoItem,
  decorators: [
    withKnobs,
    (storyFn: any) => (
      <CenterWrap style={{ padding: 0 }}>{storyFn()}</CenterWrap>
    ),
  ],
};

export const standard = () => <TodoItem />;
export const undo = () => {
  const data = {
    category: {
      color: color(
        'category color',
        `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      ),
    },
  };
  return <TodoItem.Undo data={data} />;
};
