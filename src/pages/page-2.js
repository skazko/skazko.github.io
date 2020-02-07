import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Страница 2</h1>
    <p>А на ней тоже пока что пусто</p>
    <Link to="/">Назад на главную</Link>
  </Layout>
)

export default SecondPage
