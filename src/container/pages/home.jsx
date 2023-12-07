import { Testimonio } from '../../components/home/Testimonio'
import { Contancto, Precios } from '../../components/home/Contacto'
import { HeroHome } from '../../components/home/HeroHome'
import { About } from '../../components/home/AboutService'
import { Trabajos } from '../../components/home/Trabajos'
import { motion as m } from 'framer-motion'

function Home() {
	return (
		
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: 'easeInOut' }}
			exit={{ opacity: 0 }}
		>
			<HeroHome />

			<About />

			<Trabajos />
			<Precios />
			<Testimonio />
			<Contancto />
		</m.div>
		
	)
}
export default Home
