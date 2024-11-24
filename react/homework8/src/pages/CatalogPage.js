import Advantages from "../components/advantages/Advantages";
import Filter from "../components/catalog/Filter";
import PageHeader from "../components/common/PageHeader";
import ProductList from "../components/common/ProductList";
import { useEffect, useState } from 'react';
import { fetchProducts } from '../store/reducers/productsSlice';
import { useDispatch, useSelector } from 'react-redux'
import Spinner from "../components/common/Spinner";

function CatalogPage() {
    const status = useSelector((state) => state.products.status)
    const products = useSelector((state) => state.products.data);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
            <PageHeader title={'NEW ARRIVALS'} breadcrumbs={['HOME', 'MEN', 'NEW ARRIVALS']} />
            <Filter />
            {status === 'resolved'
                ? <>
                    <section class="catalog">
                        <div class="catalog__wrap container">
                            <ProductList products={products} pagination={{ page: 10, totalPages: 20 }} />
                        </div>
                    </section>
                </>
                : <Spinner />
            }

            <Advantages />
        </>
    );
}

export default CatalogPage;