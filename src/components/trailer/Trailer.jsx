function Trailer({movie, trailer,index}) {

    return (
            <article className="slide">
                <iframe
                    width="560" 
                    height="315" 
                    src={trailer} 
                    title={movie.title}
                    allowFullScreen
                >
                </iframe>
            </article>
    )
}

export default Trailer
