import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

//import icons from './content'
import * as S from './styles'
import { SectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionTech = ({ title, techIcons }: SectionTechProps) => {
  console.log(techIcons)
  return (
    <S.Wrapper>
      <Container>
        <Heading reverseColor>{title}</Heading>
        <S.IconsContainer>
          {techIcons.map(({ icon, title }) => (
            <S.Icon key={title}>
              <S.Icons src={getImageUrl(icon.url)} alt={title} loading="lazy" />
              <S.IconsName>{title}</S.IconsName>
            </S.Icon>
          ))}
        </S.IconsContainer>
      </Container>
    </S.Wrapper>
  )
}

export default SectionTech
