import './nav.css';

const Nav = ({setPage}) =>
  <nav>
      <h1>Carlee Miller</h1>
      <div>
        <button onClick={()=>setPage('about')}>About Me</button>
        <button onClick={()=>setPage('portfolio')}>Portfolio</button>
        <button onClick={()=>setPage('contact')}>Contact</button>
        <button onClick={()=>setPage('resume')}>Resume</button>
      </div>
  </nav>

  export default Nav;