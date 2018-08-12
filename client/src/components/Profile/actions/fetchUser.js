import axios from 'axios'

export const fetchUserById = async (id)  => {
    const res = await axios.get(`/api/users/${id}`)
    return res
}