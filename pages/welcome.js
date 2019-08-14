import Head from 'next/head'
import Link from 'next/link'
import Header from "../components/header"
import Layout from "../components/layout"
import Break from "../components/break"

export default function Welcome() {
  return (
    <Layout>
        <Break clicked />
        <div className="content" style={{position: `relative`, margin: `0 auto`, background: `#fff`, border: `3px solid #000`, padding: 20}}>
      <Head>
        <title>Welcome to the Young &amp; Reckless Family!</title>
      </Head>
      <Header />
      <h1>WELCOME TO THE<br />YOUNG &amp; RECKLESS FAMILY!</h1>
      <p><strong>Wir freuen uns, dass du dich zum Newsletter angemeldet hast. Deinen exklusiven Gutschein bekommst du sofort per E-Mail.</strong></p>
      <p>Und jetzt breche die Regeln, versuche das Glas einzuschlagen und erhalte ein exklusives Preview des Onlineshops.</p>
        <Link href="/break" >
            <a style={{ marginTop: 20, background: `#EA3F33`, display: `block`, padding: `10px 40px 5px`, textDecoration: `none`, fontSize: 18, fontWeight: `bold`, color: `#fff`, textTransform: `uppercase`, cursor: `pointer` }}>Break the rules</a>
        </Link>
      </div>
    </Layout>
  )
}