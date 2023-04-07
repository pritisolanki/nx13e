import styles from '../page.module.css'

export const metadata = {
    title: 'About us',
    description: 'How to integrate metadata api at page level in next13.2',
    openGraph: {
      title: 'Next 13.2 app - About us',
      description: 'How to integrate metadata api at page level in next13.2',
    },
};

export default function AboutLayout({ children }) {
    return (
        <main className={styles.main}>
          {children}
        </main>
    )
}