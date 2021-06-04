
import { RouteComponentProps } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
type RouteInfo = {
    id: string;
};

export default function CartPage({ match }: RouteComponentProps<RouteInfo>) {
    const location = useLocation();
    const proudctId = match.params.id;
    const qty = location.search.split('=')[1];
    return (

        <div>
            <h1> Cart Screen</h1>
            <p>Add To Cart : PRODUCTID {proudctId}  Qty: {qty}</p>

        </div>
    )
}
