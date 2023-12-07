import { PaginaEnContruccion } from '../../components/Tienda/tienda'
import { motion as m } from 'framer-motion'

function Tienda() {
	return(
	<m.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.75, ease: 'easeInOut' }}
		exit={{ opacity: 0 }}
	>
		<PaginaEnContruccion />
	</m.div>)
}
export default Tienda
