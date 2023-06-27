import { pageLinks } from '../data';
import PageLink from './PageLink';

// You can split it up into more components. It's definitely an option. The result will be exactly the same. Just be aware of the trade offs in this case. If you use component for entire list, you will have to set up and pass the props.

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id='nav-links'>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} />;
      })}
    </ul>
  );
};

export default PageLinks;
