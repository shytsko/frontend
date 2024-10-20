import './Message.css'

function Message({ text, type, title }) {
    return (
        <div className={`Message ${type == 'error' && 'Message__error'}`}>
            <h3 className='Message__title'>{title || (type === 'error' ? 'Ошибка' : 'Обычное сообщени')}</h3>
            <p className="Message__text">{text}</p>
        </div>
    );
}

export default Message;