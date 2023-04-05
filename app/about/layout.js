import styles from '../page.module.css'

export const metadata = {
    title: 'About us',
    description: 'This is the app setup to explore if we can configure separate meta tags per page',
    openGraph: {
      title: 'Next 13.2 app - About us',
      description: 'This is the app setup to explore if we can configure separate meta tags per page',
    },
};

export default function AboutLayout({ children }) {
    return (
        <main className={styles.main}>
          {children}
        </main>
    )
}