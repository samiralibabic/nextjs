import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { FaLaptopCode } from 'react-icons/fa';

import { Container, Span, Div1, Div2, Div3, SocialIcons } from './HeaderStyles';
import { NavLink } from '../../styles/GlobalComponents/index'
import { useSmoothScroll } from '../../pages/_app';

const Header = () => (
<Container>
    <Div1>
      <Link href="/" style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
        <FaLaptopCode size="5rem" style={{ marginRight: "10px" }}/> <Span>dip.ing. Samir Alibabic</Span>
      </Link>
    </Div1>
    <Div2>
        {/* <Link href="#projects" scroll={true}>
          <NavLink>Projects</NavLink>
        </Link> */}
        <Link href="#tech" scroll={false}>
          <NavLink>Techonologies</NavLink>
        </Link>
        <Link href="#contact" scroll={false}>
          <NavLink>Contact</NavLink>
        </Link>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/samiralibabic' target='_blank'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/samiralibabic/' target='_blank'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://twitter.com/samiralibabic' target='_blank'>
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
