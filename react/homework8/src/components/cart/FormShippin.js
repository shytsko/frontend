function FormShippin() {
    return (
        <form className="form-shipping" onSubmit={(e) => { e.preventDefault(); }}>
            <h4 className="form-shipping__title">SHIPPING ADRESS</h4>
            <input
                type="text"
                className="form-shipping__input"
                placeholder="Counry"
            />
            <input
                type="text"
                className="form-shipping__input"
                placeholder="State"
            />
            <input
                type="text"
                className="form-shipping__input"
                placeholder="Postcode / Zip"
            />
            <button className="form-shipping__button animate-button">
                GET A QUOTE
            </button>
        </form>
    );
}

export default FormShippin;