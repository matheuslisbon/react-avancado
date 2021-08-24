const GET_LANDING_PAGE = `
# Write your query or mutation here
fragment logo on LandingPage {
  logo {
    alternativeText
    url
  }
}
fragment header on LandingPage {
      header{
      title
      description
      button{
        label
        url
      }
      image{
        alternativeText
        url
      }
    }
}

query GET_LANDING_PAGE {
	landingPage{
		...logo
    ...header
  }
}
`

export default GET_LANDING_PAGE
