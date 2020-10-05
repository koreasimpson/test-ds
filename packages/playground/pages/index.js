import Head from "next/head";
import styles from "../styles/Home.module.css";
import { MyTestComponent, Typo } from "closet-core";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>여기를 이렇게 수정해볼게요</p>
        <MyTestComponent>윽!</MyTestComponent>
        <Typo textDecoration={"underline"}>안녕하세욥 abcdedg</Typo>
        <Typo textDecoration={"line-through"}>안녕하세욥 abcdedg</Typo>
        <Typo variant={"TITLE"} level={1}>
          안녕하세욥 abcdedg
        </Typo>
        <Typo variant={"SUBTITLE"} level={1}>
          안녕하세욥 sub title abcdedg
        </Typo>
        <Typo variant={"SUBTITLE"} level={2}>
          안녕하세욥 sub title abcdedg
        </Typo>
        <Typo variant={"SUBTITLE"} level={3}>
          안녕하세욥 sub title abcdedg
        </Typo>
        <Typo textAlign={"right"}>안녕하세욥 abcdedg</Typo>
        <Typo variant={"HEADER"} color={"red"}>
          헤덜 abcedfg
        </Typo>
      </main>
    </div>
  );
}
