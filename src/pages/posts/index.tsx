import Head from 'next/head';
import styles from './styles.module.scss';

export default function Post() {
  return(
    <>
      <Head>
        <title>Posts | Ignews </title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Navigation should be visible, not tucked away</strong>
            <p>The mobile version of your site may have truncated navigation, and that’s okay. </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Navigation should be visible, not tucked away</strong>
            <p>The mobile version of your site may have truncated navigation, and that’s okay. </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Navigation should be visible, not tucked away</strong>
            <p>The mobile version of your site may have truncated navigation, and that’s okay. </p>
          </a>
        </div>
      </main>
    </>
  )
}