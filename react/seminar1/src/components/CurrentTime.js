import './CurrentTime.css'

function CurrentTime() {
    const now = new Date();
    return (
        <div>
            <p className="CurrentTime">Текущее время: <span >{now.toLocaleTimeString()}</span></p>
            <p className="CurrentDate">Текущая дата: <span >{now.toLocaleDateString()}</span></p>
        </div>
    );
}

export default CurrentTime;