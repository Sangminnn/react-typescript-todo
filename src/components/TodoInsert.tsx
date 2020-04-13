import React, { useState, ChangeEvent } from 'react';
import useAddTodo from '../hooks/useAddTodo';
import styled from 'styled-components';

// react hooks + typescript
function TodoInsert() {
  const [value, setValue] = useState('');
  const addTodo = useAddTodo();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  
  const onSubmit = () => {
    addTodo(value);
    setValue('');
  };
 
  return (
    <Wrapper>
      <Input
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력하세요."
      />
      <Button onClick={onSubmit}>
        입력
      </Button>
    </Wrapper>
  )
};

export default TodoInsert;

// styled-components
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid black;
  outline: none;
  border-radius: 3px;
  line-height: 1rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const Button = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  padding: 0.2rem 0.1rem;
  
  margin-left: 1rem;
`;