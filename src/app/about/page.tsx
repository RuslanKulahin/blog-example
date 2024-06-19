import Image from "next/image";
import myImage from "./my_foto.jpg";
import styles from "./about.module.css"

export default function AboutPage() {
  return (
    <article className={styles.root}>
        <Image src={myImage} alt="My photo" loading="eager" width={300} />
        <div className={""}>
            John Smith is a seasoned FullStack developer currently employed at Itera
            Ukraine, where he harnesses his nine years of experience to craft
            innovative solutions. Outside the realm of coding, he finds solace in
            the pages of books and the thrill of snowboarding down icy slopes.
            Proficient in  JavaScript, TypeScript, React, and Next.
        </div>
    </article>
    )
}
