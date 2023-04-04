import React from 'react'
import { useRouter } from 'next/router';
import style from '@/styles/SignIn.module.css'
import { ImClubs } from "react-icons/im";

export default function SignIn() {
  const router = useRouter()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push("/");
  };
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
        <ImClubs size={36}/>
        <h2 style={{ margin: 10 }}>Log In</h2>
        <input
          type="text"
          placeholder="User Name"
          className={style.user_input}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder='password'
          className={style.user_input}
        />
        <input type="submit" value="Log In" className={style.submit_btn}/>
      </form>
    </div>
  );
}
