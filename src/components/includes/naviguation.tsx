function Naviguation({location}: { location: {text:string, url:string}[] }) {
    return <div className="breadcrumbs text-sm">
        <ul>
            {location.map((page) => (
            <li key={page.url}>
                <a className="flex gap-1" href={page.url}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 stroke-current">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                    </svg>
                    {page.text}
                </a>
            </li>
            ))}
        </ul>
    </div>
}

export default Naviguation;