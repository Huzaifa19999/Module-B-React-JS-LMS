import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'; 
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import CommentIcon from '@mui/icons-material/Comment';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LMS_Button from "../../components/LMS_Button";

function Feevoucher() {
  const [comment, setComment] = useState<any>([]);
  const [postId, setPostId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const getCommentData = () => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        console.log(res.data);
        setComment([...res.data]);
      }).catch((err) => {
        console.log(err);
      });
  };

  const postCommentData = () => {
    axios.post('https://jsonplaceholder.typicode.com/comments', {
      postId,
      name,
      email,
      body
    })
    .then((res) => {
      console.log(res.data);
      alert("Comment Posted")
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const deleteCommentData = () => {
    axios.delete('https://jsonplaceholder.typicode.com/comments/1')
      .then((res) => {
        console.log(res.data);
        alert("Comment Deleted")
        setComment([]);
      }).catch((err) => {
        console.log(err);
      });
  };

  const deleteComment = (i:any) => {
    comment.splice(i, 1);
    setComment([...comment]);
  };

  const putCommentData = () => {
    axios.put('https://jsonplaceholder.typicode.com/comments/1', {
      postId,
      name,
      email,
      body
    })
    .then((res) => {
      console.log(res.data);
      alert("Comment Updated")
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <h1 className="text-center mt-3 mb-4">API CRUD COMMENT APP</h1>
      <center>
        <form className="container mt-4 mb-5">
          <div className="form-group">
            <label className="fw-bold">Post ID</label>
            <input 
              type="text" 
              id="postId" 
              className="form-control" 
              value={postId} 
              required
              onChange={(e) => setPostId(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label className="fw-bold">Name</label>
            <input 
              type="text" 
              id="name" 
              className="form-control" 
              value={name} 
              required
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label className="fw-bold">Email</label>
            <input 
              type="email" 
              id="email" 
              className="form-control"
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label className="fw-bold">Comment</label>
            <textarea 
              id="body" 
              className="form-control" 
              required
              value={body} 
              onChange={(e) => setBody(e.target.value)} 
            ></textarea>
          </div>
        </form>

        <LMS_Button className="btn fw-bold btn-primary m-1" label="Get Comment" onClick={getCommentData} type={undefined}/>
        <LMS_Button className="btn fw-bold btn-success m-1" label="Post Comment" onClick={postCommentData} type={undefined}/>
        <LMS_Button className="btn fw-bold btn-secondary m-1" label="Put Comment" onClick={putCommentData} type={undefined}/>
        <LMS_Button className="btn fw-bold btn-danger m-1" label="Delete Comment" onClick={deleteCommentData} type={undefined}/>
      </center>
      <div className="parent-comment mt-5 container">
        {comment.map((e:any, i:any) => (
          <div key={i} className="card mb-5" style={{ width: '18rem' }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item text-center">
                <h4 className="fw-bolder text-primary">ID<br /> {e.id} </h4>
              </li>
              <li className="list-group-item">
                <label className="fw-bolder"><PostAddIcon /> Post ID:</label> <br /> {e.postId}
              </li>
              <li className="list-group-item">
                <label className="fw-bolder"><AccountCircleIcon /> Name:</label> <br /> {e.name}
              </li>
              <li className="list-group-item">
                <label className="fw-bolder"><MailIcon /> Email:</label> <br /> {e.email}
              </li>
              <li className="list-group-item">
                <label className="fw-bolder"><CommentIcon /> Body:</label> <br /> {e.body} <br />
              </li>
              <li className="d-flex p-4 justify-content-center">
                <button onClick={() => deleteComment(i)} className="fw-bold btn w-100 btn-danger">Delete</button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Feevoucher;