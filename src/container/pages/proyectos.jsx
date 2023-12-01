import { PaginaBlog } from "../../components/Blog/Proyect";
import {Layout} from "../../layouts/Layout"
import { useParams } from "react-router-dom";


function Proyect() {
    const { slug } = useParams();
	return(
	<Layout >
      <PaginaBlog slug={slug}/>
	</Layout>)
}
export default Proyect