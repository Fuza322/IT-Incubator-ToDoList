import React, {useEffect} from 'react'
import {AppBar, Button, Container, LinearProgress, Toolbar, Typography} from '@material-ui/core'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {ErrorSnackbar} from '../components/ErrorSnackbar/ErrorSnackbar'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from './store'
import {initializeAppTC, RequestStatusType} from './app-reducer'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Login} from '../features/Login/Login'
import {CircularProgress} from '@material-ui/core'
import {logoutTC} from '../features/Login/auth-reducer'
import style from './App.module.scss'
import headerLogoImg from '../assets/images/primaryLogo.png'

type PropsType = {
    demo?: boolean
}

export function App({demo = false}: PropsType) {

    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const email = useSelector<AppRootStateType, string>(state => state.auth.email)

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

    const loguotHandler = () => {
        dispatch(logoutTC())
    }

    return (
        <div>
            <ErrorSnackbar/>
            <AppBar position="static">
                <Toolbar className={style.header}>
                    <a href='/' className={style.linkHeaderLogo}>
                        <div className={style.headerLogoContainer}>
                            <div className={style.headerLogo}>
                                <img src={headerLogoImg} alt={'LogoImage'} className={style.headerLogoImg}/>
                            </div>
                            <Typography className={style.headerLogoText}>
                                Task Tracker
                            </Typography>
                        </div>
                    </a>
                    {
                        isLoggedIn
                            ?
                            <div className={style.headerDisplay}>
                                <div className={style.headerUserInfo}>
                                    <span className={style.headerUserText}>User:</span>
                                    <span className={style.headerEmailText}>{email}</span>
                                </div>
                                <div>
                                    <Button onClick={loguotHandler} className={style.headerButton}>Sign out</Button>
                                </div>
                            </div>
                            :
                            <div className={style.headerDisplay}>
                                <div>
                                    <Button href={'https://social-network.samuraijs.com/signUp'} className={style.headerButton}>
                                        Sign up
                                    </Button>
                                </div>
                            </div>
                    }
                </Toolbar>
                {status === 'loading' && <LinearProgress/>}
            </AppBar>
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