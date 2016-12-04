/**
 * Created by swati on 16/8/16.
 */
import React from "react";
import { render } from "react-dom";
import  TodoList  from "./components";
import DummyTodos from "./dummyTodos";

render(
    <TodoList todos={DummyTodos} />,
    document.getElementById('app')
)