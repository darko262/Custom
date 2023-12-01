import { Layout } from '../../layouts/Layout'
import { Services } from '../../components/home/service'
import { HeroBlog } from '../../components/Blog/Heroblog'
import { Contancto } from '../../components/home/Contacto'
import { Footer } from '../../components/Nav/Footer'
import Navbar from '../../components/Nav/Navbar'
import { motion as m } from 'framer-motion'
function Blog() {
	return (
		<m.div
			initial={{ y: '100%' }}
			animate={{ y: '0' }}
			transition={{ duration: 0.75, ease: 'easeInOut' }}
			exit={{ opacity: 1 }}
		>
			<HeroBlog />
			{/* <Contancto/> */}
			{/* <Footer/> */}
		</m.div>
	)
}
export default Blog
