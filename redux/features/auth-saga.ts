import { all, call, put, take, takeEvery } from "redux-saga/effects"
import { resource } from "@/api/http"


function* loginRequest(): any {
    while (true) {
        const x = yield take('auth/login')

        try {
            const xxl = yield call(resource.post, `api/auth/login`, { email: "qwerty@qwerty.com", password: "Google123@" })

            console.log("xxlxxlxxlxxl", xxl);

            if (xxl) {
                localStorage.setItem('token', token)
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

}
function* authSaga() {
    // yield takeEvery('auth/login', loginRequest)
    yield all([loginRequest()])
}

export default authSaga;