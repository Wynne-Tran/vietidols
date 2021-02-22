import axios from 'axios'
import apiUrl from '../api'

export const signup = (info) => {
    const headers = {
        'Content-Type': 'application/json'
    }

    return axios.post(apiUrl + '/auth/signup', info, { headers: headers})
}

export const signin = (name, password) => {
    return axios.post(apiUrl + '/auth/signin', {
        name, password
    })
    .then(response => {
        if (response.data.token) {
            localStorage.setItem('currentUser', JSON.stringify(response.data))
        }

        return response.data
    })
}