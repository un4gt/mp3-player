import MusicPlayer from "./components/MusicPlayer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <MusicPlayer />
    </main>
  );
}
