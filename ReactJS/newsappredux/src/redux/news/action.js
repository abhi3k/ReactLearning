/* 
    Redux Thunk - Async Redux state updates
        - access to getState, dispatch methods
        - make async API calls
*/
import axios from 'axios'

export const FETCH_NEWS_REQUESTED = 'FETCH_NEWS_REQUESTED'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR'

export const fetchNewsRequested = () => ({
    type: FETCH_NEWS_REQUESTED
})

export const fetchNewsSuccess = (newsList) => ({
    type: FETCH_NEWS_SUCCESS,
    payload: newsList
})

export const fetchNewsError = (errorMessage) => ({
    type: FETCH_NEWS_ERROR,
    payload: errorMessage
})

export const fetchNews = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchNewsRequested())

            let res = await axios.get("https://newsapi.org/v2/top-headlines?apiKey=8a26143a071a43bc88ee8ec4f6685126&country=in")

            dispatch(fetchNewsSuccess(res.data.articles))
            
        } catch (error) {
            dispatch(fetchNewsError(error.message))
        }
    }
}