import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'

const Post = ({ postData = {} }) => {
  const { author, text, replies } = postData;
  const { name } = author || {};
  const avatar = `https://xsgames.co/randomusers/assets/avatars/pixel/${
    Math.floor(Math.random() * 50) + 1
  }.jpg`;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="post">
      <div className="author-content">
        {isCollapsed && (
          <button className="show-cta" onClick={toggleCollapse}>
            <FontAwesomeIcon icon={faExpand} />
          </button>
        )}
        <img src={avatar} alt="Avatar" className="avatar" />
        <h3 className="name">{name}</h3>
      </div>
      <div className={`post-content ${isCollapsed ? "hide" : ""}`}>
        <button className="bar" onClick={toggleCollapse} />
        <div>
          <p className="text-content">{text}</p>
          {(replies || []).map((reply, index) => (
            <Post key={index} postData={reply} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
