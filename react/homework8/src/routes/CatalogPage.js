import Advantages from "../components/advantages/Advantages";
import Filter from "../components/catalog/Filter";
import PageHeader from "../components/common/PageHeader";
import ProductList from "../components/common/ProductList";
import { useState } from 'react';
import { useSelector } from 'react-redux'
import '../styles/catalog-page.scss'

function CatalogPage() {
    const products = useSelector((state) => state.products.data);
    const [filter, setFilter] = useState([]);

    return (
        <>
            <PageHeader title={'NEW ARRIVALS'} breadcrumbs={['HOME', 'MEN', 'NEW ARRIVALS']} />
            <Filter />
            <section class="catalog">
                <div class="catalog__wrap container">
                    <ProductList products={products} pagination={{ page: 1, totalPages: 20 }} />
                </div>
            </section>
            <Advantages />
        </>
    );
}

export default CatalogPage;