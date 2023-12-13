import { IPost } from "../pages/Home"

interface PostBodyProps {
  post: IPost,
}

const nowTime = new Date().getTime();

export const PostBody = ({ post }: PostBodyProps) => {
  console.log(post);
  const postTime = new Date(post.created).getTime();
  const minutesAgo = (nowTime - postTime)/60000;

  return (
    <>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div style={{display: "flex", gap: "20px", padding: "10px"}}>
          <img src="" width="50px" height="50px" 
            style={{borderRadius: "50%", border: "1px solid gray"}}/>
          <div>
            <div style={{fontWeight: 600, color: "rgb(97, 97, 171)"}}>Ilnaz Gilyazov</div>
            <div style={{display: "flex", alignItems: "center"}}>
              <div className="material-icons">rocket</div>
              <span className="post-group">Основатель группы - </span>
              <span>{(minutesAgo).toFixed()} мин.</span> 
            </div>
          </div>
        </div>
        <div className="material-icons" 
          style={{padding: "10px", fontSize: "24px"}}>expand_more</div>
      </div>
            
      <div style={{padding: "10px", fontSize: "2em"}}>{post.content}</div>

      <div style={{border: "1px solid lightgray", display: "flex",
        justifyContent: "space-around", padding: "10px"}}>
        <div style={{display: "flex", alignItems: "center"}}>
          <div className="material-icons" style={{fontSize: "24px"}}>thumb_up</div>
          <span className="post-group">Нравится</span>
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
          <div className="material-icons" style={{fontSize: "24px"}}>chat_bubble</div>
          <span className="post-group">Комментировать</span>
        </div>
      </div>
    </>
  )
}
