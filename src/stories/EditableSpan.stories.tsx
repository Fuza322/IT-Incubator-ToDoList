import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {EditableSpan, EditableSpanType} from "../EditableSpan";

export default {
    title: 'Todolist/EditableSpan Component',
    component: EditableSpan,
    argsTypes: {
        onChangeValue: {
            description: 'EditableSpan value was changed'
        },
        value: {
            defaultValue: 'HTML',
            description: 'Start value EditableSpan'
        }
    }

} as Meta

const Template: Story<EditableSpanType> = (args) => <EditableSpan {...args} />

export const EditableSpanStories = Template.bind({})
EditableSpanStories.args = {
    onChagneValue: action('EditableSpan value was changed')
}