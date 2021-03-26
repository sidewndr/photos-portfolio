import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Navbar} from "../../navbar/organisms/navbar";
import {BtnReturn} from "../atoms/btn-return";
import {Title} from "../atoms/title";
import {useDispatch, useSelector} from "react-redux";
import {ThemeListItems} from "../../portfolio/molecules/theme-link-list";
import {selectGroupTitle, selectPhotosLinks, setPhotos, setTitle} from "../photos.slice";
import {getPhotos} from "../../../tests/mocks/photosMock";

const PhotosStl = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const WrapperStl = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4.375rem;
  margin-bottom: 3.75rem;
  
  //BtnReturn
  & > :first-child {
    position: absolute;
    left: 15rem;
  }
`

const ItemsWrapperStl = styled.div`
  width: 73.75rem;
  align-self: center;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 1.25rem;
  
  //TODO: del
  background-color: #cccccc;
`

const ImgSmallContainerStl = styled.div`
  width: 36.25rem;
  height: 47.5rem;
`

const ImgLargeContainerStl = styled.div`
  width: 73.75rem;
  height: 45rem;
`

const ImgStl = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`



export const Photos = () => {

  const groupTitle = useSelector(selectGroupTitle)
  const photosLinks = useSelector(selectPhotosLinks)
  const dispatch = useDispatch()


  const setTitleFromUrl = (url, ThemeListItems) => {
    let str = url.split('/')
    str = str[str.length - 1]

    ThemeListItems.map((item) => {
      if (item.theme.toLowerCase().split(' ').join('-') === str) {
        str = item.theme
      }
    })

    return str
  }

  const groupTitleParsed = setTitleFromUrl(window.location.href, ThemeListItems)
  dispatch(setTitle({groupTitle: groupTitleParsed}))

  useEffect(() => {
    const photos = getPhotos(groupTitleParsed)
    //TODO: sort array
    dispatch(setPhotos({photos: photos.photos}))
  }, [])



  return (
    <PhotosStl>
      <Navbar type={"menu"} />
      <WrapperStl>
        <BtnReturn />
        <Title title={groupTitle} />
      </WrapperStl>

      <ItemsWrapperStl>
        {
          photosLinks.map(i => (
            i.size === "small"
              ? (<ImgSmallContainerStl>
                  <ImgStl src={i.link} />
                </ImgSmallContainerStl>)

              : (<ImgLargeContainerStl>
                  <ImgStl src={i.link} />
                </ImgLargeContainerStl>)
          ))
        }
      </ItemsWrapperStl>
    </PhotosStl>
  )
}