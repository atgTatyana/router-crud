import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import { PostBody } from "../components/PostBody";

export interface IPost {
  id: number,
  content: string,
  created: string,
}

export const Home = () => {
  const [ posts, setPosts ] = useState<IPost[]>([]);

  useEffect(() => {
    fetch('http://localhost:7070/posts')
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  const navigate = useNavigate();
  const handleNewPost = () => {
    navigate('/posts/new');
  }

  const handlePost = (postId: number) => {
    navigate(`/posts/${postId}`);
  }

  return (
    <>
      <div style={{textAlign: "right", border: "2px solid lightgrey", padding: "5px"}}>
        <button className="post-button" onClick={handleNewPost}>
          Создать пост
        </button>
      </div>
      <div>
        {posts.map((post) => (
          <div className="post" key={post.id} onClick={() => handlePost(post.id)}>
            <PostBody post={post}/>

            <div style={{display: "flex", gap: "10px", padding: "10px"}}>
              <img src="" width="40px" height="40px" 
                style={{borderRadius: "50%", border: "1px solid gray"}}/>
              <div className="post-comment">
                <input type="text" placeholder="Напишите комментарий..."/>
                <div style={{display: "flex", gap: "5px"}}>
                  <div className="material-icons" style={{fontSize: "24px"}}>sentiment_satisfied</div>
                  <div className="material-icons" style={{fontSize: "24px"}}>photo_camera</div>
                  <div className="material-icons" style={{fontSize: "24px"}}>gif_box</div>
                  <div className="material-icons" style={{fontSize: "24px"}}>sticky_note_2</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
