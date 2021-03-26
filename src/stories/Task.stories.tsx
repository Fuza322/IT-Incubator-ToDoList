import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Task, TaskPropsType} from "../Task";

export default {
    title: 'Todolist/Task Component',
    component: Task
} as Meta

const chageTaskStatusCallback = action('Task status was changed')
const chageTaskTitleCallback = action('Task title was changed')
const removeTaskCallback = action('Button removeTask was clicked')

const Template: Story<TaskPropsType> = (args) => <Task {...args} />

let baseArgs = {
    removeTask: removeTaskCallback,
    changeTaskStatus: chageTaskStatusCallback,
    changeTaskTitle: chageTaskTitleCallback
}

export const TaskIsDoneStories = Template.bind({})
TaskIsDoneStories.args = {
    ...baseArgs,
    task: {id: '1', title: 'JS', isDone: true},
    todolistId: 'todolistId1'
}

export const TaskIsNotDoneStories = Template.bind({})
TaskIsNotDoneStories.args = {
    ...baseArgs,
    task: {id: '1', title: 'CSS', isDone: false},
    todolistId: 'todolistId2'
}