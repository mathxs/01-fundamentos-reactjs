import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post 
            author="Matheus" 
            content="Lorem ipsum dolor sit amet odio aliquam"
          />
          <Post 
            author="Matheus1" 
            content="2Lorem ipsum dolor sit amet odio aliquam"
          />
        </main>
      </div>
    </div>
  )
}

