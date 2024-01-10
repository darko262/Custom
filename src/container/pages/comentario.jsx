
import { motion as m } from 'framer-motion'
import { Testimonio } from '../../components/home/Testimonio'

function Comentario() {
	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: 'easeInOut' }}
			exit={{ opacity: 0 }}
		>
            
			<Testimonio />
			{/* <Footer/> */}
		</m.div>
	)
}
export default Comentario