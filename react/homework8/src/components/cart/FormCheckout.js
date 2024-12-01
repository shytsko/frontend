function FormCheckout({ subTotalAmount, grandTotalAmaunt }) {
    return (
        <form className="form-checkout">
            <p className="form-checkout__subtotal">
                SUB TOTAL<span>${subTotalAmount.toFixed(2)}</span>
            </p>
            <p className="form-checkout__grandtotal">
                GRAND TOTAL<span>${grandTotalAmaunt.toFixed(2)}</span>
            </p>
            <div className="form-checkout__separator" />
            <button className="form-checkout__button animate-button" type="submit">
                PROCEED TO CHECKOUT
            </button>
        </form>
    );
}

export default FormCheckout;