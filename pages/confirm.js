import Head from 'next/head'

import Layout from "../components/layout"
import Header from "../components/header"
import Break from "../components/break"

import "../components/thanks.scss"

export default function Confirm() {
  return (
    <Layout>
        <Break />
    <div className="content" style={{position: `relative`, margin: `0 auto`, background: `#fff`, border: `3px solid #000`, padding: 20}}>
      <Head>
        <title>Young & Reckless - Du Hast Post! 25% Warten Auf Dich!</title>
      </Head>
      <Header />
      <h1>DU HAST POST! 25% WARTEN AUF DICH!</h1>
            <p>Wir haben dir soeben eine E-Mail an deine Adresse gesendet. Bitte bestätige deine Newsletteranmeldung durch einen Klick auf den in der E-Mail enthaltenen Link.</p>
      <div className="icons">
        <div>
          <img src="/static/images/icons/email.svg" width="50px" height="50px" alt="E-Mails checken" /><br />
          E-Mails checken
        </div>
        <div>
        <img src="/static/images/icons/coupon.svg" width="50px" height="50px" alt="Deinen exklusiven 25% Gutschein erhalten" /><br />
          Deinen exklusiven 25% Gutschein erhalten
        </div>
        <div>
        <img src="/static/images/icons/eye.svg" width="50px" height="50px" alt="Exklusives Preview unseres Onlineshops bekommen" /><br />
          Exklusives Preview unseres Onlineshops bekommen
        </div>
        <div>
        <img src="/static/images/icons/running.svg" width="50px" height="50px" alt="Als erster informiert werden, sobald der Onlineshop live geht" /><br />
          Als erster informiert werden, sobald der Onlineshop live geht
        </div>
        <div>
        <img src="/static/images/icons/code.svg" width="50px" height="50px" alt="Gutscheincode einlösen" /><br />
          Gutscheincode einlösen
        </div>
      </div>
      <p className="small">*Falls du nach 15 Minuten noch keine E-Mail von uns erhalten hast, schaue bitte in Deinen Spam Ordner!</p>  
      </div>
    </Layout>
  )
}