import { all, call, put, take, takeEvery } from "redux-saga/effects"
import { resource } from "@/api/http"
import { redirect } from "next/navigation";

// import { REDIRECT_ACTION_TYPE } from './actionTypes';
function* loginRequest(): any {
    while (true) {
        const { payload } = yield take('auth/login')



        try {
            const xxl = yield call(resource.post, `api/auth/login`, { email: payload.email, password: payload.password })

            console.log("xxlxxlxxlxxl", xxl.data);

            if (xxl.data.token) {
                // localStorage.setItem('token', token)
                // yield put(setAuth(!!token))
                // yield put(getUser())
                // payload.setSubmitting(false)
                yield put(redirect("/page2"))
            }
        } catch (err) {
            // const message = err?.response?.data?.message
            // if (message) {
            //     // yield put(dangerMessage(message));
            //     setFieldError('password', message)
            // }
            // // payload.setSubmitting(false)
            console.log(err)
        }
    }

}
function* authSaga() {
    // yield takeEvery('auth/login', loginRequest)
    yield all([loginRequest()])
}

export default authSaga;