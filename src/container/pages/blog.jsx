
import { HeroBlog } from '../../components/Blog/Heroblog'

import { motion as m } from 'framer-motion'
function Blog() {
	return (
		<m.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.75, ease: 'easeInOut' }}
		exit={{ opacity: 0 }}
		>
			<HeroBlog />
			{/* <Contancto/> */}
			{/* <Footer/> */}
		</m.div>
	)
}
export default Blog
