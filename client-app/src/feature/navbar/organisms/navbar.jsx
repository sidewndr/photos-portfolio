import React from 'react'
import styled from 'styled-components'
import {BtnLanguageList} from "../molecules/btn-language-list";
import {LinkList} from "../molecules/link-list";
import {LinkItem} from "../atoms/link-item";
import {ThemeSwitcher} from "../molecules/theme-switcher";
import {NavLink} from "react-router-dom";

const NavbarStl = styled.div`
  height: 4.375rem;
  background-color: #133F2C;

  display: flex;
  align-items: center;
  justify-content: center;
`

const WrapperStl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2.5rem;
  max-width: 1600px;
  width: 1600px;
  min-width: 1px;

  & > div:nth-child(1) {
    flex-grow: 1;
  }

  & > a:nth-child(2) {
    margin-right: 4.375rem;
  }
`

const LinkStl = styled(NavLink)`
  &:link{
    text-decoration: none;
  }
`

export const Navbar = ({type}) => {

  let list = null

  switch (type) {
    case 'lang':
      list = <BtnLanguageList />
      break

    case 'menu':
      list = <LinkList />
      break
  }

  return (
    <NavbarStl>
      <WrapperStl>
        {list}

        <LinkStl to={"/records"}>
          <LinkItem text={"Записаться на фотосессию"} />
        </LinkStl>

        <ThemeSwitcher />
      </WrapperStl>
    </NavbarStl>
  )
}