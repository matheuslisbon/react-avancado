import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

//import content from './content'
import * as S from './styles'
import { SectionAboutUsProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionAboutUs = ({ title, authors }: SectionAboutUsProps) => {
  return (
    <Container>
      <Heading reverseColor>{title}</Heading>

      <S.Content>
        {authors.map((author) => {
          return (
            <ProfileCard
              key={author.name}
              name={author.name}
              role={author.role}
              image={getImageUrl(author.photo.url)}
              socialLinks={author.socialLinks}
              description={author.description}
            />
          )
        })}
      </S.Content>
    </Container>
  )
}

export default SectionAboutUs
