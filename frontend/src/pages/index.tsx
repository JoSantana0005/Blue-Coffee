import React from 'react'
import Layout from '../layout/layout'
import Hero from '../components/sections/hero'
import Paquetes from '../components/sections/paquetes'
import Capsulas from '../components/sections/capsulas'
import Grano from '../components/sections/grano'
import Molido from '../components/sections/molido'
import Packs from '../components/sections/packs'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Paquetes />
      <Capsulas />
      <Grano />
      <Molido />
      <Packs />
    </Layout>
  )
}