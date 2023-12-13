import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const Edit = () => {
  const [ form, setForm ] = useState({
    content: "",
  });
  const { content } = form;

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:7070/posts/${id}`)
      .then((response) => response.json())
      .then((post) => setForm({
        content: post.post.content,
      }));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);

    fetch(`http://localhost:7070/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    navigate(`/posts/${id}`);
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { 
    const { value } = e.target;
    setForm({
      content: value,
    })
  }

  const handleClose = () => {
    navigate(-1);
  }
  
  return (
    <>
      <div className="edit">
        <span style={{fontWeight: "600"}}>Редактировать публикацию</span>
        <div className="material-icons" onClick={handleClose}>close</div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="new-post-main">
          <div style={{display: "flex", gap: "20px"}}>
            <img src="" width="50px" height="50px" 
              style={{borderRadius: "50%", border: "1px solid gray"}}/>
            <textarea placeholder="Что у вас нового?" name="content"
              value={content} onChange={handleChange}>
            </textarea>
          </div>
          <div className="material-icons" style={{fontSize: "24px"}}>mood</div>
        </div>

        <div className="edit-actions">
          <div className="edit-action">
            <div className="material-icons" style={{fontSize: "24px"}}>image</div>
            <span className="post-group">Фото/видео</span>
          </div>
          <div className="edit-action">
            <div className="material-icons" style={{fontSize: "24px"}}>group</div>
            <span className="post-group">Отметить друзей</span>
          </div>
          <div className="edit-action">
            <div className="material-icons" style={{fontSize: "24px"}}>mood</div>
            <span className="post-group">Чувства/действия</span>
          </div>
          <div className="edit-action">
            <div className="material-icons" style={{fontSize: "24px"}}>location_on</div>
            <span className="post-group">Отметить посещение</span>
          </div>
          <div className="edit-action">
            <div className="material-icons" style={{fontSize: "24px"}}>gif_box</div>
            <span className="post-group">GIF</span>
          </div>
        </div>

        <div className="new-post-footer">
          <button className="post-button" type="submit">Сохранить</button>
        </div>
      </form>
    </>
  )
}
