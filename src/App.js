import React from 'react';
import TodoList from './components/TodoList';
import styled from 'styled-components';

const AppStyle = styled.div`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    width: 100vw;
    height: 100vh;
`;

const App = () =>(
    <AppStyle>
        <TodoList />
    </AppStyle>
)

export default App;