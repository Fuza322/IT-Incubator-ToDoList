import React, {useEffect} from 'react'
import {Container} from '@material-ui/core'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {ErrorSnackbar} from '../components/ErrorSnackbar/ErrorSnackbar'
import {useDispatch, useSelector} from 'react-redux'
import {initializeAppTC} from './app-reducer'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Login} from '../features/Login/Login'
import {Header} from "../components/Header/Header";

type PropsType = {
    demo?: boolean
}

export function App({demo = false}: PropsType) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [dispatch])

    return (
        <div>
            <ErrorSnackbar/>
            <Header/>
            <Container>
                <Switch>
                    <Route exact path={'/'} render={() => <TodolistsList demo={demo}/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
                    <Redirect from={'*'} to={'/404'}/>
                </Switch>
            </Container>
        </div>
    )
}