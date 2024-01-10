
import { useParams } from 'react-router-dom'

import { motion as m } from 'framer-motion'
import { HeroBlogCategory } from '../../components/Blog/HeroBlogCategory'
function Category() {
	const params = useParams()
	const slug = params.slug

	console.log(slug)

	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: 'easeInOut' }}
			exit={{ opacity: 0 }}
		>
			<HeroBlogCategory slug={slug&&slug} />
			{/* <Contancto/> */}
			{/* <Footer/> */}
		</m.div>
	)
}
export default Category
