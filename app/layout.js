import './globals.css'
import styles from './page.module.css'

/* Automatically render in the page - head.js is replaced with metadata */

export const metadata = {
  title: 'Next13.2  app',
  description: 'How to integrate metadata api in next13.2',
  openGraph: {
    title: 'Next13.2 app',
    description: 'How to integrate metadata api in next13.2',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head/>
      <body>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
