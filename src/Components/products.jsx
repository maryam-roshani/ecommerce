import React from 'react'
import '../index.css';


const PRODUCTS_URL = "http://localhost:8000/products";

const getData = async() => {
  await axios.get(PRODUCTS_URL)
      .then(response => {
          console.log(response);
      })
};

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      async function fetchData() {
        const request = await axios.get(PRODUCTS_URL)
        setProducts(request.data);
        return request.data;
      }
      fetchData();
    }, [products])

  return (
    <>
      <div className="products">
        <h1>Products</h1>
        <hr />
        <div className="container-fluid">
          <div className="product-item row">
            {products.map((product, i) => (
              <div className="card col-3">
                <img key={i} src={product.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 key={i} className="card-title">{product.title}</h5>
                </div>
                <div className="card-body">
                    <span key={i} className="badge bg-success">{product.price}$</span><br />
                    <a href="#" className="card-link"></a>
                    <Link  key={i} className="card-link" to={`/${product.id}`}>Details</Link>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )

}

export default Products