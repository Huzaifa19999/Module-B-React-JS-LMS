import { getDatabase, onValue, push, ref, set } from "firebase/database";
import app from "./firebaseConfig";



const db = getDatabase(app);

export const sendData = (nodeName:string,data:any) => {

    return new Promise((resolve, reject) => {

        data.id = push(ref(db,`${nodeName}`)).key
        const reference = ref(db,`${nodeName}/${data.id}`);
        set(reference,data)
        .then(()=>{
            resolve(data)
        })
        .catch((err)=>{
            reject(err)
        });     
    });
}




export const getData = (nodeName:any, id?:any) => {

    return new Promise((resolve,reject) => {
        
        const reference = ref(db, `${nodeName}/${id ? id : "" }`);
    
        onValue(reference,(dt) => {
            // console.log(Object.values(dt.val()))
            if (dt.exists()) {
                resolve(dt.val());
                // resolve(dt.val());
            } else {
                reject({message:"Data not found"})
            } 
        });
    });
};

// const deleteData = (nodeName:string,id:any) => {

//     return new Promise((resolve,reject) => {
//         const reference = ref(db, `${nodeName}/${id}`);
//         remove(reference)
//         .then(()=>{
//             resolve(id)
//         })
//         .catch((err)=>{
//             reject(err)
//         })
//     })
// }

// deleteData('login')

// const editData = () => {
    
// }

