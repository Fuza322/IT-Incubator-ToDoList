import React from 'react'
import {AppWithRedux} from "../AppWithRedux";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";
import {Story} from "@storybook/react/types-6-0";

export default {
    title: 'Todolist/AppWithRedux Component',
    component: AppWithRedux,
    argTypes: {},
    decorators: [ReduxStoreProviderDecorator]
}

const Template: Story = (args) => <AppWithRedux {...args} />

export const AppWithReduxBaseExample = Template.bind({})
AppWithReduxBaseExample.args = {}