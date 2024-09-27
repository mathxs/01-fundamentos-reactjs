import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(['Post Muito Bacana']);
  const [newCommentText, setNewCommentText] = useState('');

  const isNewCommentEmpty = newCommentText.length === 0;

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, 
  { locale: ptBR , addSuffix: true });
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'de' y 'às' HH:mm'h'", { locale: ptBR })

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
  }

  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Esse campo é obrigatorio.')
  }

  function deleteComment(commentToDelete){
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => { return comment !== commentToDelete});
    setComments(commentsWithoutDeletedOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/mathxs.png" />
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
        <textarea 
          placeholder='Deixe seu comentario' 
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty} >Publicar</button>
        </footer>        
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  );
}
