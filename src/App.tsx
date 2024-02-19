import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Pugialli.png",
      name: "João Paulo Pugialli",
      role: "Web Developer",
    },
    content: [
      { id: 1, type: "paragraph", content: "Salve! 🤘🏽" },
      {
        id: 2,
        type: "paragraph",
        content:
          "Acabei de subir um novo projeto no meu portifolio. Esse é o meu primeiro da formação regular da Rocketseat. Ainda básico mas focando em solidificar as bases para voar ainda mais alto, em breve teremos um grande projeto aqui.",
      },
      { id: 3, type: "link", content: "https://github.com/Pugialli" },
      { id: 4, type: "hashtag", content: "#novoprojeto" },
      { id: 5, type: "hashtag", content: "#rockeatseat" },
      { id: 6, type: "hashtag", content: "#reactjs" },
    ],
    publishedAt: new Date("2024-02-13 23:20:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Padilha04.png",
      name: "Amanda Padilha",
      role: "UX Designer",
    },
    content: [
      { id: 1, type: "paragraph", content: "Hello!" },
      {
        id: 2,
        type: "paragraph",
        content: "Im Amanda Padilha UX Designer and Front End Developer!",
      },
      { id: 3, type: "link", content: "https://github.com/Padilha04" },
      { id: 4, type: "hashtag", content: "#newhere" },
      { id: 5, type: "hashtag", content: "#lookingforwork" },
    ],
    publishedAt: new Date("2024-02-14 12:26:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <div>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
}
