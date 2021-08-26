const GET_LANDING_PAGE = `
# Write your query or mutation here
fragment logo on LandingPage {
  logo {
    alternativeText
    url
  }
}
fragment header on LandingPage {
  header {
    title
    description
    button {
      label
      url
    }
    image {
      alternativeText
      url
    }
  }
}

fragment sectionAboutProject on LandingPage {
  sectionAboutProject {
    title
    description
    image {
      url
      alternativeText
    }
  }
}
fragment sectionTech on LandingPage {
  sectionTech {
    title
    techIcons {
      icon {
        url
        alternativeText
      }
      title
    }
  }
}
fragment sectionConcepts on LandingPage {
  sectionConcepts {
    title
    concepts {
      title
    }
  }
}
fragment sectionModules on LandingPage {
  sectionModules {
    title
    modules {
      title
      subtitle
      description
    }
  }
}
fragment sectionAgenda on LandingPage {
  sectionAgenda {
    title
    description
  }
}
fragment pricingBox on LandingPage {
  pricingBox {
    benefits
    totalPrice
    numberInstallments
    priceInstallment
    button {
      label
      url
    }
  }
}
fragment sectionAboutUs on LandingPage {
  sectionAboutUs {
    authors {
      photo {
        url
        alternativeText
      }
      socialLinks {
        title
        Url
      }
      role
      name
      description
    }
    title
  }
}
fragment sectionReviews on LandingPage {
  sectionReviews {
    title
    reviews {
      name
      text
      photo {
        alternativeText
        url
      }
    }
  }
}
fragment sectionFaq on LandingPage {
  sectionFaq {
    title
    questions {
      answer
      question
    }
  }
}
query GET_LANDING_PAGE {
  landingPage {
    ...logo
    ...header
    ...sectionAboutProject
    ...sectionTech
    ...sectionConcepts
    ...sectionModules
    ...sectionAgenda
    ...pricingBox
    ...sectionAboutUs
    ...sectionReviews
    ...sectionFaq
  }
}

`

export default GET_LANDING_PAGE
