function FormCheckout({ subTotalAmount, grandTotalAmaunt }) {
    return (
        <form className="form-checkout" onSubmit={(e) => { e.preventDefault(); }}>
            <p className="form-checkout__subtotal">
                SUB TOTAL<span>${subTotalAmount.toFixed(2)}</span>
            </p>
            <p className="form-checkout__grandtotal">
                GRAND TOTAL<span>${grandTotalAmaunt.toFixed(2)}</span>
            </p>
            <div className="form-checkout__separator" />
            <button className="form-checkout__button animate-button">
                PROCEED TO CHECKOUT
            </button>
        </form>
    );
}

export default FormCheckout;