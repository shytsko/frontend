import Advantages from "../components/advantages/Advantages";
import Filter from "../components/catalog/Filter";
import PageHeader from "../components/common/PageHeader";
import Pagination from "../components/common/Pagination";
import ProductList from "../components/common/ProductList";
import { allProducts } from "../data/products";

function CatalogPage() {
    const filteredProducts = [...allProducts];

    return (
        <>
            <PageHeader title={'NEW ARRIVALS'} breadcrumbs={['HOME', 'MEN', 'NEW ARRIVALS']} />
            <Filter />
            <section class="catalog">
                <div class="catalog__wrap container">
                    <ProductList products={filteredProducts} />
                    <Pagination currentPage={1} totalPages={20} />
                </div>
            </section>
            <Advantages />
        </>
    );
}

export default CatalogPage;