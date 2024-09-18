import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/mathxs.png" />
          <div className={styles.authorInfo}>
            <strong>Matheus</strong>
            <span>Dev</span>
          </div>
        </div>
        <time title='18 de setembro de 2024 as 15:10' dateTime='2024-09-18 15:10:00'>
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 {' '}<a href=''>jane.design/doctorcare</a></p>
        <p>
          <a href=''> #novoprojeto</a>{' '}
          <a href=''> #nlw </a>{' '}
          <a href=''> #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seus feedback</strong>
        <textarea placeholder='Deixe seu comentario' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>        
      </form>
    </article>
  );
}
