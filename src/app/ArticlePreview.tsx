"use client";

import { useState, useEffect } from "react";
import { ROUTING } from "./routing";
import AppLink from "./shared/components/app-link";

type ArticlePreviewProps = {
    name: string;
    text: string;
  }
  
  const getLikeKey = (articleName: string) => `dev_blog_1_like${articleName}`;

  export default function ArticlePreview({name, text}: ArticlePreviewProps) {
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const likeKey = getLikeKey(name);
        const likeValue = localStorage.getItem(likeKey);
        setLiked(likeValue  === "like");
    
    }, [name]);

    const like = () => {
        const likeKey = getLikeKey(name);
        localStorage.setItem(likeKey, "like");
        setLiked(true);
    };

    return (
    <>
      <AppLink href={ROUTING.article(name)}>{text}</AppLink>
      <button onClick={like} type="button">{liked ? "❤️" : "Like"}</button>
    </>
    );
  }