function AdvantagesItem({ advantage }) {
    return (
        <article class="advantages__item">
            {advantage.icon}
            <h4 class="advantages__item-title">{advantage.title}</h4>
            <p class="advantages__item-text">
                {advantage.text}
            </p>
        </article>
    );
}

export default AdvantagesItem;