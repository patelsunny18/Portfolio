import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Particle from '../components/Particle';
import Projects from '../components/Projects';

export default function Home() {
    return (
        <>
            <Head>
                <title>Sunny Patel | Portfolio</title>
            </Head>
            <Header></Header>
            {/* <Particle></Particle> */}
            <main id='main'>
                <Hero></Hero>
                <Projects></Projects>
                <About></About>
                <Contact></Contact>
            </main>
            <Footer></Footer>
        </>
    )
}