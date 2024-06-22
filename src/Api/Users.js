import axios from 'axios';
export const getAllUser=async()=>{
    try{
const {data}=await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users');
return data;
}catch(err){
    console.log(err);
}

}
export const getSingleUser=async(id)=>{
    try{
        const {data}=await axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`);
        return data;
        }catch(err){
            console.log(err);
        }
}