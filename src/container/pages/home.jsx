import { Cardwork } from '../../components/BoxCard/CardRecientes'
import Navbar from '../../components/Nav/Navbar'
import { Hero } from '../../components/home/Hero'
import { Services } from '../../components/home/service'
import { Layout } from '../../layouts/Layout'
import { Recientes } from '../../components/home/Proyectos'
import { Testimonio } from '../../components/home/Testimonio'
import { Contancto, Precios } from '../../components/home/Contacto'
import { Footer } from '../../components/Nav/Footer'
import { Datos } from '../../components/home/Datos'
import { HeroHome } from '../../components/home/HeroHome'
import { About } from '../../components/home/AboutService'
import { Trabajos } from '../../components/home/Trabajos'
import { motion as m } from 'framer-motion'

function Home() {
	return (
		// <Layout>
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: 'easeInOut' }}
			exit={{ opacity: 0 }}
			
			
		>
			{/* <Navbar/> */}
			{/* <Hero/> */}
			<HeroHome />
			{/* <Datos/> */}
			{/* <Services/> */}
			<About />
			{/* <Recientes/> */}
			<Trabajos />
			<Precios />
			<Testimonio />
			<Contancto />
			{/* <Footer/> */}
		</m.div>
		// </Layout>
	)
}
export default Home
