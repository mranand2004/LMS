import { useEffect } from "react"
import { serverUrl } from "../App"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setUserData } from "../redux/userSlice"
const getCurrentUser = ()=>{
    let dispatch = useDispatch()
   
    useEffect(() => {
        const fetchUser = async () => {
        try {
            const res = await axios.get(
            `${serverUrl}/api/user/currentuser`,
            { withCredentials: true }
            )
            dispatch(setUserData(res.data))
        } catch (error) {
            // IMPORTANT: silent fail
            dispatch(setUserData(null))
        }
        }

        fetchUser()
    }, [dispatch])
}

export default getCurrentUser