import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Post, PostType } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/60307596?v=4",
      name: "Ana Júlia",
      role: "Web Developer",
    },

    publishedAt: new Date("2024-06-28 20:00:00"),

    content: [
      {
        type: "paragraph",
        content: "Fala galeraa",
      },
      {
        type: "paragraph",
        content: `👋 Acabei de subir mais um projeto no meu portifa. É um projeto que
            fiz no NLW Return, evento da Rocketseat. O nome do projeto é
            DoctorCare 🚀`,
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
      {
        type: "hashtag",
        content: "#novoprojeto",
      },
      {
        type: "hashtag",
        content: "#nlw",
      },
      {
        type: "hashtag",
        content: "#rocketseat",
      },
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/60307596?v=4",
      name: "Maria José",
      role: "Frontend Developer",
    },

    publishedAt: new Date("2024-06-29 14:00:00"),

    content: [
      {
        type: "paragraph",
        content: "Fala galeraa",
      },
      {
        type: "paragraph",
        content: `👋 Acabei de subir mais um projeto no meu portifa. É um projeto que
            fiz no NLW Return, evento da Rocketseat. O nome do projeto é
            DoctorCare 🚀`,
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
      {
        type: "hashtag",
        content: "#novoprojeto",
      },
      {
        type: "hashtag",
        content: "#nlw",
      },
      {
        type: "hashtag",
        content: "#rocketseat",
      },
    ],
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/60307596?v=4",
      name: "José Maria",
      role: "Backend Developer",
    },

    publishedAt: new Date("2024-06-30 08:00:00"),

    content: [
      {
        type: "paragraph",
        content: "Fala galeraa",
      },
      {
        type: "paragraph",
        content: `👋 Acabei de subir mais um projeto no meu portifa. É um projeto que
            fiz no NLW Return, evento da Rocketseat. O nome do projeto é
            DoctorCare 🚀`,
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
      {
        type: "hashtag",
        content: "#novoprojeto",
      },
      {
        type: "hashtag",
        content: "#nlw",
      },
      {
        type: "hashtag",
        content: "#rocketseat",
      },
    ],
  },
];

export function App() {
  return (
    <>
      <Header></Header>

      <div className={styles.wrapper}>
        <SideBar></SideBar>
        <div>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      </div>
    </>
  );
}
