import Product from '../components/Product'
import { data } from '../Mockdata'

export default function HomePage() {
    return (
        <div>
            <div className="row center">
                {
                    data.products.map(product => {
                        return (
                            <Product key={product._id} product={product} />
                        )
                    })
                }
            </div>
        </div>
    )
}
