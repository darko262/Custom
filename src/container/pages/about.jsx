import { Layout } from '../../layouts/Layout'
import { Services } from '../../components/home/service'
import { HeroBlog } from '../../components/Blog/Heroblog'
import { Contancto } from '../../components/home/Contacto'
import { Footer } from '../../components/Nav/Footer'
import { HeroAbout } from '../../components/About/HeroAbout'
import { motion as m } from 'framer-motion'
function About() {
	return (
		<m.div
			initial={{ y: '100%' }}
			animate={{ y: '0' }}
			transition={{ duration: 0.75, ease: 'easeInOut' }}
			exit={{ opacity: 1 }}
		>
			<HeroAbout />
			{/* <Footer/> */}
		</m.div>
	)
}
export default About
