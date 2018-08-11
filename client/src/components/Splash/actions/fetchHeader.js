import axios from 'axios'

const fetchHeader = async () => {
    const response = await axios.get('/api/headers/5b6dff9f680740cd6cf755e5')
    return response.data[0]
}

export default fetchHeader