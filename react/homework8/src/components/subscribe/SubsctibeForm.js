function SubsctibeForm() {
    return (
        <div className="subscribe__form-box">
            <h2 className="subscribe__form-title">SUBSCRIBE</h2>
            <h3 className="subscribe__form-subtitle">
                FOR OUR NEWLETTER AND PROMOTION
            </h3>
            <form className="subscribe__form" action="#">
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="subscribe__input-email"
                />
                <button type="submit" className="subscribe__button-submit">
                    Subscribe
                </button>
            </form>
        </div>
    );
}

export default SubsctibeForm;