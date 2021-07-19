import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Redirect, Route, Switch} from "react-router-dom"
import {AppRootStateType} from "./store"
import {TodolistsList} from "../features/TodolistsList/TodolistsList"
import {Login} from "../features/Login/Login"
import {PageNotFound} from "./PageNotFound/PageNotFound"
import {Header} from "../components/Header/Header"
import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar"
import {initializeAppTC} from "./app-reducer"
import {CircularProgress} from "@material-ui/core"
import style from "./App.module.scss"

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
        return <div style={{position: "fixed", top: "30%", textAlign: "center", width: "100%"}}>
            <CircularProgress/>
        </div>
    }

    return (
        <>
            <ErrorSnackbar/>
            <Header/>
            <section className={style.mainBlock}>
                <Switch>
                    <Route exact path={"/"} render={() => <TodolistsList demo={demo}/>}/>
                    <Route path={"/login"} render={() => <Login/>}/>
                    <Route path={"/404"} render={() => <PageNotFound/>}/>
                    <Redirect from={"*"} to={"/404"}/>
                </Switch>
            </section>
        </>
    )
}