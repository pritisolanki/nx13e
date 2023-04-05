import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.herosection}>
      <h2>
        Hello next 13.2 - Exploring Experimental Features
      </h2>
      <p className={styles.listing}>
        <p>
          In this app setup I have explored how to 
        </p>
        <ul>
            <li>Set up Layout (app/layout.js)</li>
            <li>Set up new page (app/about/page.js)</li>
            <li>Set up Layout at page level (app/about/layout.js)</li>
            <li>Set up Error and loading message at page level</li>
            <li>Add page specific metadata using Next.js metadata api </li>
        </ul>
      </p>
    </main>
  )
}
