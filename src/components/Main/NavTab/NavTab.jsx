import './NavTab.css';

function NavTab(props) {
  return <a href={props.to} target={props.openNewTab ? '_blank' : '_self'} rel="noreferrer" className='navTab-item' id={props.size}>
    {props.name}
  </a>
}

export default NavTab;
