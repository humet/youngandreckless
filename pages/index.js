import Head from 'next/head'

import Countdown from 'react-countdown-now'

import Layout from "../components/layout"
import Header from "../components/header"
import Form from "../components/form"
import Break from "../components/break"
import BreakMe from "../components/breakme"

// Set date to countdown to
var countdownTo = new Date('2019-09-10')

export default function HomePage() {
  return (
    <Layout>
        <Break />
       <div className="content" style={{position: `relative`, margin: `0 auto`}}>
      <Head>
        <title>Young & Reckless</title>
      </Head>
      <Header />
      <div className="dateWrapper" style={{ textTransform: `uppercase`, margin: `0 auto 20px` }}>
        <strong>
        <span className="date"><Countdown date={countdownTo} /></span>
        <span style={{display: `block`, width: `100%`, height: 1, background: `#000`, marginBottom: 5}}></span>
        <span className="date__subtitle">until launch</span>
        </strong></div>
      <BreakMe />
      <p><strong>Sichere dir vorab 25% auf die gesamte Kollektion und versuche das Glas einzuschlagen um ein exklusives Preview unseres Onlineshops zu erhalten.*</strong></p>
      <Form />
      <p className="small">* Jeder Teilnehmer erhält einen 25% Gutschein gültig ab einem Mindestbestellwert von 40€ bis einschließlich 4 Wochen nach Onlineshop Launch. Pro Kunde nur einmal einlösbar. Kaufgutscheine sind ausgeschlossen.</p>
      </div>
    </Layout>
  )
}