import axios from 'axios';

const instance =axios.create({
    baseURL:"https://my-burger-f7d03-default-rtdb.firebaseio.com/"
})

export default instance;