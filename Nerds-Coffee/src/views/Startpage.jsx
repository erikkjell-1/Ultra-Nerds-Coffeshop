import { useNavigate } from 'react-router-dom';
import './Startpage.css';

function Startpage() {
  const navigation = useNavigate();
  
  function handleClick() {
    navigation("/menu")
  }
  
    return (
      <section className='startpage' onClick={handleClick}>
        <article>
          <img src="/src/views/img/intro-graphic-left.svg" alt="graphicLeft" />
        </article> 
        <article className="logo">
          <img src="/src/views/img/airbean-landing.svg" alt="graphicRight" />
        </article>
        <article>
          <img src="/src/views/img/intro-graphic-right.svg" alt="logo" />
        </article>
      </section>
    )
  }
  
  export default Startpage