import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState('')
    const history = useHistory();
    

    const handleSubmit =(e)=>{

      

      e.preventDefault();
      const blog = {title, body, author}

      setIsPending(true);

      fetch('http://localhost:8000/blogs',{
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify( blog)
      }).then(()=>{
        console.log("new blog added")
        setIsPending(false);
        history.push('/')
      })
    }

    return (
      <div className="create">
        <h1>Add a new blog</h1>
        <form onSubmit={handleSubmit}>
          <label> Blog Title: </label>
          <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
          <label> Blog Body:</label>
          <textarea value={body} onChange={(e)=>{setBody(e.target.value)}}></textarea>
          <label>Written by :</label>
          <select value={author} onChange={(e)=>{setAuthor(e.target.value)}}>
            <option value="Mario">Mario</option>
            <option value="Yoshi">Yoshi</option>
          </select>
          {!isPending && <button>Submit</button>}
          {isPending && <button>Adding blog...</button>}
        </form>
        <p>{title}</p>
        <p>{body}</p>
      </div>
    );
  }
   
  export default Create;