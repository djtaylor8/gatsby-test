import * as React from "react";
import Layout from '../components/layout';
import { StaticImage } from "gatsby-plugin-image";


const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle='Home Page'>
      <p>Yoooooo just trying things out</p>
      <StaticImage
        alt="Palm trees"
        src="../images/photo-1542649350-a24209ce01b5.jpeg"
      />
      </Layout>
    </main>
  )
}

export default IndexPage
