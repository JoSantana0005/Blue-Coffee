import React from 'react'
import Layout from '../layout/layout'
import Hero from '../components/sections/hero'
import Capsulas from '../components/sections/capsulas'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Capsulas />
    </Layout>
  )
}