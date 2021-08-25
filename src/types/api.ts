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

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
}
