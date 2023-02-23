import { useEffect, useState } from 'react';
// import AuthUser from './AuthUser';
import axios from 'axios';
export default function Dashboard() {
    // const {http} = AuthUser();
    const [userdetail,setUserdetail] = useState('');

    useEffect(()=>{
        fetchUserDetail();
        console.log(userdetail)
    },[]);

    const fetchUserDetail = () => {
        const token = sessionStorage.getItem('token.access');
        const api = axios.create({
            baseURL:"http://127.0.0.1:8000/api",
            headers: {
                'Accept': 'application/json',
                "Authorization" : `Bearer ${JSON.parse(token)}`
            }
        });
        api.post('/profile').then((res)=>{
            setUserdetail(res.data);

        });
    }
     console.log(userdetail)
    function renderElement(){
        if(userdetail){
            return <div>
                <h4>Name</h4>
                <p>{userdetail.name}</p>
                <h4>Email</h4>
                <p>{userdetail.email}</p>
            </div>
        }else{
            return <p>Loading.....</p>
        }

    }

    return(
        <div>
            <h1 className='mb-4 mt-4'>Dashboard page</h1>
            <div>
               { renderElement()}
            </div>
        </div>
    )
}