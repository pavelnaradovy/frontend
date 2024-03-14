import { all, call, put, take, takeEvery } from "redux-saga/effects"
import { resource } from "@/api/http"


// import { REDIRECT_ACTION_TYPE } from './actionTypes';
function* loginRequest(): any {
    while (true) {
        const { payload: { email, password, redirect } } = yield take('auth/login')

        console.log("payload", email, password, redirect);

        try {
            const { data } = yield call(resource.post, `api/auth/login`, { email: email, password: password })



            if (data.token) {
                // localStorage.setItem('token', token)
                // yield put(setAuth(!!token))
                // yield put(getUser())
                // payload.setSubmitting(false)
                console.log(redirect);

                yield put(redirect("/page2"))
            }
        } catch (err) {
          
            console.log(err)
        }
    }

}
function* authSaga() {
    // yield takeEvery('auth/login', loginRequest)
    yield all([loginRequest()])
}

export default authSaga;