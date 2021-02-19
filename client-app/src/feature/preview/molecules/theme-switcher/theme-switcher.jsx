import React, { useState } from "react";
import styled from "styled-components";
import {ThemeIcons} from "../../atoms/theme-icons/theme-icons";
import {ToggleSwitch} from "../../atoms/toggle-switch/toggle-switch";

import BlackThemeMoonIco from "../../../../attachments/icon/BlackThemeMoonIco.svg"
import WhiteThemeSunIco from "../../../../attachments/icon/WhiteThemeSunIco.svg"

const ThemeSwitcherStl = styled.div`
  display: flex;
  
  img:nth-child(1) {
    margin-right: 20px;
  }
`

export const ThemeSwitcher = () => {

  const [isMoon, setIsMoon] = useState(true)

  return(
    <ThemeSwitcherStl>
      <ThemeIcons path={(isMoon) ? BlackThemeMoonIco : WhiteThemeSunIco}/>
      <ToggleSwitch onToggle={() => setIsMoon(!isMoon)} />
    </ThemeSwitcherStl>
    )
}