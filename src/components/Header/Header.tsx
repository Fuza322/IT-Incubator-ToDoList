import React from 'react'
import {AppBar, Button, CircularProgress, LinearProgress, Toolbar, Typography} from '@material-ui/core'
import style from '../Header/Header.module.scss'
import headerLogoImg from '../../assets/images/primaryLogo.png'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../app/store'
import {RequestStatusType} from '../../app/app-reducer'
import {logoutTC} from '../../features/Login/auth-reducer'

export function Header() {

    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const email = useSelector<AppRootStateType, string>(state => state.auth.email)

    const dispatch = useDispatch()

    const loguotHandler = () => {
        dispatch(logoutTC())
    }

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }

    return (
        <AppBar position='static'>
            <Toolbar data-aos='zoom-in-right' data-aos-duration='800' className={style.header}>
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
                                <Button href={'https://social-network.samuraijs.com/signUp'}
                                        className={style.headerButton}>
                                    Sign up
                                </Button>
                            </div>
                        </div>
                }
            </Toolbar>
            {status === 'loading' && <LinearProgress/>}
        </AppBar>
    )
}