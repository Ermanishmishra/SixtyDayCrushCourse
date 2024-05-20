function Post(props) {
  const {Pos} = props
  const {title,body} = Pos
  
  return (
    <div>
      <p>Title : {title}</p>
      <p>Body : {body}</p>
    </div>
  );
}

export default Post;
