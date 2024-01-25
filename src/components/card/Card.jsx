import Link from "next/link";
import React from "react";

export default function Card({ item }) {
  // 주어진 날짜 및 시간 문자열
  const createdAtString = item.createdAt;

  // Date 객체로 변환
  const createdAt = new Date(createdAtString);

  // 한국 시간으로 변환
  const koreanTime = createdAt.toLocaleString("en-US", {
    timeZone: "Asia/Seoul",
  });

  return (
    <Link href={`blogDetail/${item.slug}`}>
      <div className="list">
        <span className="cate">{item.catSlug}</span>
        <h3 className="title">{item.title}</h3>
        <p className="desc">{item.desc}</p>
        <div className="img"></div>
        <div className="auth">{/* {item.user.name} */}</div>
        <div className="date">{koreanTime}</div>
        <div className="bottom">
          <div className="view">
            <image src="/view.svg" alt="" />
            <p>{item.views}</p>
          </div>
          <div className="like">
            <image src="/like.svg" alt="" />
            <p>0</p>
          </div>
          <div className="comment">
            <image src="/comment.svg" alt="" />
            <p>{item.comment}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
