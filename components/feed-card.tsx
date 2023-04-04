import Image from 'next/image'
import React from 'react'
import {
  BiCommentAdd,
} from "react-icons/bi";
import {
  AiFillLike,
  AiOutlineLike,
} from "react-icons/ai";
import {
  CiMenuKebab,
} from "react-icons/ci";
import naruto from '@/public/assets/download.jpeg'
import styles from '@/styles/FeedsCard.module.css'

export default function FeedsCard() {
  return (
    <div className={styles.container}>
      <div className={styles.feed_header}>
        <div
          style={{ display: "inline-flex", alignItems: "center", margin: 2 }}
        >
          <div className={styles.avatar}>
            <Image src={naruto} alt="" height={50} />
          </div>
          <div>
            <h5 className={styles.avatar_name}>USER NAME</h5>
            <p className={styles.sub_data}>POSTED DATE</p>
          </div>
        </div>
        <div className={styles.header_icon}>
          <CiMenuKebab size={24} color="#000s" />
        </div>
      </div>
      <div style={{marginTop:10}}>
        <p style={{ textAlign: "justify", marginInline: 10 }}>
          FEED DESCRIPTION
        </p>
      </div>
      <div className={styles.img_container}>
        <Image src={naruto} alt="" width={600} />
      </div>

      <div
        className={styles.feed_header}
        style={{ marginBottom: 10, paddingBlock: 10 }}
      >
        <div className={`${styles.icon_container} ${styles.bg_green}`}>
          <BiCommentAdd size={24}/>
        </div>
        <div className={`${styles.icon_container} ${styles.bg_green}`}>
          <AiOutlineLike size={24} />
        </div>
      </div>
    </div>
  );
}
