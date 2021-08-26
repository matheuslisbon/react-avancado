export type LogoProps = {
  alternativeText?: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}
export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}
type Icons = {
  icon: {
    url: string
    alternativeText: string
  }
  title
}

export type SectionTechProps = {
  title: string
  techIcons: Icons[]
}
type Concepts = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: Concepts[]
}

type Modules = {
  title: string
  subtitle: string
  description: string
}
export type SectionModulesProps = {
  title: string
  modules: Modules[]
}
export type SectionAgendaProps = {
  title: string
  description: string
}
type SocialLinks = {
  title: string
  Url: string
}
type Authors = {
  photo: {
    url: string
    title: string
  }
  role: string
  name: string
  description: string
  socialLinks: SocialLinks[]
}
export type SectionAboutUsProps = {
  title: string
  authors: Authors[]
}
export type Reviews = {
  name: string
  text: string
  photo: LogoProps
}
export type SectionReviewsProps = {
  title: string
  reviews: Reviews[]
}
type Questions = {
  answer: string
  question: string
}
export type SectionFaqProps = {
  title: string
  questions: Questions[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
