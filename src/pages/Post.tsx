import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IPost } from "./Home";
import { PostBody } from "../components/PostBody";

export const Post = () => {
  const [post, setPost] = useState<IPost | null>(null); 
  const { id } = useParams();
  const navigate = useNavigate();
 
  useEffect(() => {
    fetch(`http://localhost:7070/posts/${id}`)
      .then((response) => response.json())
      .then((post) => setPost(post.post));
  }, []);

  const handleDelete = () => {
    fetch(`http://localhost:7070/posts/${id}`, {
      method: 'DELETE',
    })
    navigate("/");
  }

  return (
    <>
      {post && (
        <div className="post">
          <PostBody post={post}/>
          <div style={{textAlign: "right", padding: "5px"}}>
            <Link to={`/posts/${id}/edit`} className="post-link">Изменить</Link>
            <button className="post-button delete-button" onClick={handleDelete}>
              Удалить
            </button>
          </div>
        </div>
      )}
    </>
  )
}
