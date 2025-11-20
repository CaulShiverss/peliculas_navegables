function Card(props) {
    const { foto, nombre } = props;
    return (
        <article
            tabIndex="0"
            className="flex flex-col items-start items-start gap-3 p-4 rounded-lg bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%)] shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
            aria-label={`${nombre}`}
        >
            <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
                <img
                    src={foto}
                    alt={`Foto de ${nombre}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
                <figcaption className="sr-only">{props.children}</figcaption>
            </figure>

            <header>
                <h2 className="text-(--heading-h5-font-size) font-(--heading-h5-font-weight) leading-(--heading-h5-line-height) text-gray-800">
                    <strong>{nombre}</strong>
                </h2>
            </header>
            {/* Descripción */}
            <p className="text-(--body-text-font-size) leading-(--body-text-line-height)">
                {props.children}
            </p>
        </article>
    );
}

export default Card;


