import React from "react"
import {Redirect} from "react-router-dom"
import {AppRootStateType} from "../../app/store"
import {useFormik} from "formik"
import {loginTC} from "./auth-reducer"
import {useDispatch, useSelector} from "react-redux"
import projectImage from "./../../assets/images/todolist.png"
import {Checkbox, FormControl, FormControlLabel, TextField, Button, Grid} from "@material-ui/core"
import style from "./Login.module.scss"

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = React.memo(function () {

    const dispatch = useDispatch()

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = "Required."
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address."
            }
            if (!values.password) {
                errors.password = "Required."
            } else if (values.password.length < 6) {
                errors.password = "Password must be more than six characters."
            }
            return errors
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm()
        }
    })

    if (isLoggedIn) {
        return <Redirect to={"/"}/>
    }

    return (
        <div className={style.loginContainer}>
            <div className={style.welcomeTextContainer}>
                <h3>Welcome to Task Tracker application</h3>
            </div>
            <div className={style.loginContent}>
                <div data-aos="zoom-in" data-aos-duration="600" className={style.projectContainer}>
                    <div className={style.projectImageContainer}>
                        <img src={projectImage} alt="ProjectImage" className={style.projectImage}/>
                    </div>
                    <div className={style.projectBody}>
                        <div className={style.projectInfo}>
                            <h3 className={style.projectHelpText}>Task Tracker help you to:</h3>
                            <ul className={style.projectList}>
                                <li>Structure information about all current tasks in one place;</li>
                                <li>Set description, deadline and filtres for your tasks;</li>
                                <li>Set a deadline for completed tasks;</li>
                                <li>Display the percentage of completed tasks;</li>
                                <li>Manage and control tasks with user interface;</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Grid data-aos="zoom-in" data-aos-duration="600" className={style.authContainer} container>
                    <form onSubmit={formik.handleSubmit} className={style.authForm}>
                        <FormControl className={style.authFormControl}>
                            <div className={style.authTextContainer}>
                                <h3>Authorization</h3>
                            </div>
                            {/*<p>Email: free@samuraijs.com</p>*/}
                            {/*<p>Password: free</p>*/}
                            <TextField
                                variant="outlined"
                                label="Email"
                                {...formik.getFieldProps("email")}
                            />
                            {
                                formik.touched.email && formik.errors.email
                                    ? <div className={style.authErrorText}>{formik.errors.email}</div>
                                    : <div className={style.authErrorText}></div>
                            }
                            <TextField
                                type="password"
                                variant="outlined"
                                label="Password"
                                {...formik.getFieldProps("password")}
                            />
                            {
                                formik.touched.password && formik.errors.password
                                    ? <div className={style.authErrorText}>{formik.errors.password}</div>
                                    : <div className={style.authErrorText}></div>
                            }
                            <FormControlLabel
                                label={"Remember me"}
                                className={style.authRememberMeText}
                                control={
                                    <Checkbox
                                        {...formik.getFieldProps("rememberMe")}
                                    />}
                            />
                            <Button type={"submit"} variant={"contained"} className={style.authButton}>Login</Button>
                        </FormControl>
                    </form>
                </Grid>
            </div>
        </div>
    )
})
