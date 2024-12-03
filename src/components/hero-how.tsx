export type HeroType = {
    reverse: boolean,
    title: string,
    content: string,
    button: string,
    src: string,
    hero?: HeroType
}


function HeroHow({reverse, title, button, content, src}: HeroType) {
    return <div className="hero bg-base-200 min-h-screen">
        <div
            className={reverse ? "mx-44 hero-content flex-col lg:flex-row-reverse" : "mx-44 hero-content flex-col lg:flex-row"}>
            <img
                src={src}
                className="max-w-sm rounded-lg shadow-2xl"/>
            <div className="max-w-full">
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="py-6">
                    {content}
                </p>
                <button className="btn btn-primary">{button}</button>
            </div>
        </div>
    </div>
}

export default HeroHow;