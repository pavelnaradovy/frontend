import {call,put,takeEvery} from "redux-saga/effects"
import {resource} from "@/api/http"


function* loginRequest(){
    try {
        const {
            data: { token },
        } = yield call(resource.post, `api/auth/login`, {lolka:"sdad"})

        if (token) {
            localStorage.setItem('token', token)
            // yield put(setToken(token))
            // yield put(setAuth(!!token))
            // yield put(getUser())
            // payload.setSubmitting(false)
            // yield put(navigate('/'))
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
function* authSaga(){
    yield takeEvery('auth/login', loginRequest)
}

export default authSaga;