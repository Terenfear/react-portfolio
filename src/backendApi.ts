import axios from 'axios'
import { RootState } from './store'

const baseUrl = process.env.REACT_APP_API_ADDRESS

const backendApi = {
    fetchAppData: async (): Promise<RootState | undefined> => {
        try {
            const response = await axios.get(baseUrl + 'portfolioData?p=1&l=1')
            return response.data[0] as RootState
        } catch (error) {
            // TODO(Nov 26, 2021): gracefully handle errors
            console.error(error)
        }
    }

}

export default backendApi
