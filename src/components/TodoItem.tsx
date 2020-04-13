import React from 'react';
import styled from 'styled-components';
import { Todo } from '../modules/types';
import useTodoActions from '../hooks/useTodoActions';

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const { onToggle, onRemove } = useTodoActions(todo.id);

  return (
    <ToggleList>
      <Text onClick={onToggle} done={todo.done}>{todo.text}</Text>
      <Remove onClick={onRemove}>(X)</Remove>
    </ToggleList>
  )
};

export default TodoItem;

const ToggleList = styled.li``;

const Text = styled.span<{done: boolean}>`
  cursor: pointer;
  color: ${props => props.done ? '#999999' : ''};
  text-decoration: ${props => props.done ? 'line-through' : 'none'};
`;

const Remove = styled.span`
  color: red;
  margin-left: 4px;
  cursor: pointer;
`;