import React, {useEffect} from 'react'
import {AppRootStateType} from './store'
import {Header} from '../components/Header/Header'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {Login} from '../features/Login/Login'
import {ErrorSnackbar} from '../components/ErrorSnackbar/ErrorSnackbar'
import {useDispatch, useSelector} from 'react-redux'
import {initializeAppTC} from './app-reducer'
import {Redirect, Route, Switch} from 'react-router-dom'
import {CircularProgress, Container} from '@material-ui/core'
import style from './App.module.scss'

type PropsType = {
    demo?: boolean
}

export function App({demo = false}: PropsType) {

    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [dispatch])

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }

    return (
        <div>
            <ErrorSnackbar/>
            <Header/>
            <section className={style.mainBlock}>
                <Container>
                    <Switch>
                        <Route exact path={'/'} render={() => <TodolistsList demo={demo}/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                        <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
                        <Redirect from={'*'} to={'/404'}/>
                    </Switch>
                </Container>
            </section>
        </div>
    )
}