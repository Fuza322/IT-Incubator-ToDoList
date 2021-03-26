import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {AddItemForm, AddItemFormType} from "../AddItemForm";

export default {
    title: 'Todolist/AddItemForm Component',
    component: AddItemForm,
    argsTypes: {
        onClick: {
            description: 'Button addItem was clicked'
        }
    }
} as Meta;

const Template: Story<AddItemFormType> = (args) => <AddItemForm {...args} />

export const AddItemFormStories = Template.bind({})
AddItemFormStories.args = {
    addItem: action('Button addItem was clicked')
}