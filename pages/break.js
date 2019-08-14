import Head from 'next/head'

import Break from "../components/break"

import "../components/layout.scss"

export default function BreakPage() {
  return (
    <div className="wrapper" style={{ backgroundImage: `url(/static/images/background.jpg)`, backgroundSize: `cover`, textAlign: `center` }}>
        <main style={{padding: 0}}>
      <Head>
        <title>Young & Reckless</title>
      </Head>
      <div className="breakWrapper">
        <Break clickable />
      </div>
      </main>
    </div>
  )
}