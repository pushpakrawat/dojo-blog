import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');

    return (
      <div className="create">
        <h1>Add a new blog</h1>
        <form>
          <label> Blog Title: </label>
          <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
          <label> Blog Body:</label>
          <textarea value={body} onChange={(e)=>{setBody(e.target.value)}}></textarea>
          <label>Written by :</label>
          <select value={author} onChange={(e)=>{setAuthor(e.target.value)}}>
            <option value="Mario">Mario</option>
            <option value="Yoshi">Yoshi</option>
          </select>
          <button>Submit</button>
        </form>
        <p>{title}</p>
        <p>{body}</p>
      </div>
    );
  }
   
  export default Create;