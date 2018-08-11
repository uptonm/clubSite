import axios from 'axios'

export const fetchAll = async () => {
    const response = await axios.get('/api/newsletters')
    return response.data
}

export const fetchNewsletter = async (id) => {
    const response = await axios.get(`/api/newsletter/${id}`)
    return response.data
}
