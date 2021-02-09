import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae, eius praesentium facere doloremque iusto omnis ab magni magnam neque consequatur aut itaque asperiores debitis soluta expedita quas, obcaecati earum!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda perferendis quae enim laboriosam iure possimus pariatur numquam molestiae. Dolores magni officiis in iure dolorem. Animi quibusdam ipsa quidem! Nisi?</p>
      <Footer />
    </div>
  )
}
