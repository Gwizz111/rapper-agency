import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome to Inghelbrecht Agency!">
        <p>Lorem ipsum</p>
        <StaticImage alt="Een Porsche Gt3-RS" src="../images/porsche.jpg" />
      </Layout>
    </main>
  )
}

export default IndexPage
