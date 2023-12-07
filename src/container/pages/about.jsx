
import { Footer } from '../../components/Nav/Footer'
import { HeroAbout } from '../../components/About/HeroAbout'
import { motion as m } from 'framer-motion'
function About() {
	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: 'easeInOut' }}
			exit={{ opacity: 0 }}
		>
			<HeroAbout />
			{/* <Footer/> */}
		</m.div>
	)
}
export default About
