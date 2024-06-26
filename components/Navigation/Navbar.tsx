import { navLinks, upperNavLinks } from '@/constants';
import UpperNav from './UpperNav';
import MainNav from './MainNav';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      {/* Upper Links */}
      <UpperNav links={upperNavLinks} />

      {/* Man Nav Links */}
      <MainNav links={navLinks} upperLinks={upperNavLinks} />
    </div>
  );
};

export default Navbar;
