import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

export default function Home() {
    return (
        <>
            <Head>
                <title>Sunny Patel | Portfolio</title>
            </Head>
            <Header></Header>
            <main id='main'>
                <Hero></Hero>
                <Projects></Projects>
                <About></About>
                <Contact></Contact>
                <Footer></Footer>
            </main>
        </>
    )
}