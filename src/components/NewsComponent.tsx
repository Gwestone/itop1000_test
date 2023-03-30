import styles from "@/styles/News.module.css";
import Link from "next/link";

export default function NewsComponent() {
  return (
    <div className={styles.news}>
      <Link className={styles.news_line} href={"https://example.com/"}>
        <div className={styles.line_title}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div className={styles.line_desc}>
          Pellentesque mollis semper est, ac sodales sapien rhoncus quis.
        </div>
      </Link>
      <Link className={styles.news_line} href={"https://example.com/"}>
        <div className={styles.line_title}>
          Suspendisse dapibus sapien vel neque ultricies, at feugiat mauris
          dictum.
        </div>
        <div className={styles.line_desc}>
          Phasellus vel nisi et lacus aliquam tristique vel sit amet ex.
        </div>
      </Link>
      <Link className={styles.news_line} href={"https://example.com/"}>
        <div className={styles.line_title}>
          Curabitur finibus orci non velit rhoncus, eget pulvinar sapien congue.
        </div>
        <div className={styles.line_desc}>
          Sed blandit risus vel dolor blandit, ut bibendum ipsum hendrerit.
        </div>
      </Link>
      <Link className={styles.news_line} href={"https://example.com/"}>
        <div className={styles.line_title}>
          Etiam cursus metus at nisl vehicula, quis tincidunt justo convallis.
        </div>
        <div className={styles.line_desc}>
          Mauris eget eros quis nisi pellentesque elementum a ac justo.
        </div>
      </Link>
      <Link className={styles.news_line} href={"https://example.com/"}>
        <div className={styles.line_title}>
          In hac habitasse platea dictumst.
        </div>
        <div className={styles.line_desc}>
          Aliquam eget velit vel velit malesuada posuere vel vitae elit.
        </div>
      </Link>
    </div>
  );
}
