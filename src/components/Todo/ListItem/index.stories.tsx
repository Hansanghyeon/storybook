import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import faker from 'faker';
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
      color: text('category color', faker.commerce.color()),
    },
  };
  return <TodoItem.Undo data={data} />;
};
