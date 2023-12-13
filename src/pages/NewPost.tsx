import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface IForm {
  id: number,
  content: string,
}

export const NewPost = () => {
  const [ form, setForm ] = useState<IForm>({
    id: 0,
    content: "",
  });
  const { content } = form;

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);

    fetch('http://localhost:7070/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    navigate("/");
  }

  const handleClose = () => {
    navigate("/");
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { 
    const { name, value } = e.target;
    if(!/[<>\\/@{}]/.test(value)) {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }))
    }
  }

  return (
    <div className="new-post">
      <div className="new-post-header">
        <div style={{display: "flex", gap: "10px"}}>
          <div className="icon-action">
            <span className="material-icons" style={{color: "rgb(97, 97, 171)"}}>edit</span>
            <span style={{fontWeight: 600}}>Публикация</span>
          </div>
          <div className="icon-action">
            <span className="material-icons">photo_camera</span>
            <span style={{fontWeight: 600, color: "rgb(97, 97, 171)"}}>Фото/видео</span>
          </div>
          <div className="icon-action">
            <span className="material-icons">videocam</span>
            <span style={{fontWeight: 600, color: "rgb(97, 97, 171)"}}>Прямой эфир</span>
          </div>
          <div className="icon-action">
            <span className="material-icons" 
              style={{backgroundColor: "gray", color: "white"}}>more_horiz</span>
            <span style={{fontWeight: 600, color: "rgb(97, 97, 171)"}}>Ещё</span>
          </div>
        </div>
        <div className="material-icons" style={{fontSize: "24px"}}
          onClick={handleClose}>close</div>
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
        <div className="new-post-footer">
          <button className="post-button" type="submit">Опубликовать</button>
        </div>
      </form>       
    </div>
  )
}
