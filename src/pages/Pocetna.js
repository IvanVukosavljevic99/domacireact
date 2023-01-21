import Proizvodi from "../components/Proizvodi";
import items from"../data"
import Pagination from "../components/Pagination";
import { useState } from "react";
function Pocetna(){
  const [products] = useState(items);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

   
 const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return(
        <div className="container mt-5 mb-5">
          <Proizvodi items={currentProducts}/>
          <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
          
      </div>
    )

}

export default Pocetna;