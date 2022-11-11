import { HeaderGlobal, HeaderH3Title, HeaderNav, HeaderNavLink } from "../Styles";

const Header = () => {
  return (
    <HeaderGlobal>
      <div>
        <HeaderH3Title>Axel Aguilar</HeaderH3Title>
        <HeaderNav>
          <HeaderNavLink to="/aboutme">About me</HeaderNavLink>
          <HeaderNavLink to="/skills">Skills</HeaderNavLink>
          <HeaderNavLink to="/projects">Projects</HeaderNavLink>
          <HeaderNavLink to="/contact">Contact</HeaderNavLink>
        </HeaderNav>
      </div>
    </HeaderGlobal>
  );
};

export default Header;
