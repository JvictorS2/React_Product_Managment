import styles from './style.module.css'

const ImagePage = ({display}) => {
    
    return (
      <>
        <img style={{display: display}}  className={styles.img}
          src="https://th.bing.com/th/id/R.737c8b5516687272221ac78311f0ac5b?rik=ZQ2eIw%2fEzvQ%2bzw&pid=ImgRaw&r=0"
          alt="Noite com plantas, mar e os céu estrelado"
        ></img>
      </>
    );
}

export default ImagePage;