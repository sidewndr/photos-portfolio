import React from "react";
import {AboutTemp} from "../templates/about-temp";
import {Navbar} from "../../../navbar/desktop/organisms/navbar";
import {MainContent} from "../organisms/main-content";
import {Footer} from "../../../footer/desktop/organisms/footer";


export const AboutD = () => (
  <AboutTemp
    navbarChildren={<Navbar type={'menu'} />}
    mainContentChildren={<MainContent />}
    footerChildren={<Footer />}
  />
)