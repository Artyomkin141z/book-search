import './bookFull.css';

const BookFull = (props) => {
    document.title = props.title;
    return(
        <div className='bookFull-parent'>
            <div className='bookFull'>
                <h1 className="bookFull-title">
                    {props.title}
                </h1>
                <div className='bookFull-headContainer'>
                    <p className='center-img'>
                        <img className='bookFull-img' src={props.img}></img>
                    </p>
                    <div className='bookFull-authorsContainer'>                 
                        <div>
                            <p className="bookFull-authors">
                                {props.authors}
                            </p>
                            <div className='bookFull-pablisherContainer'>
                                <p className="bookFull-pablisher">
                                    {props.publisher}
                                </p>
                                <p className="bookFull-date">
                                    {props.publishedDate}
                                </p>
                            </div>
                        </div>
                        <div className='bookFull-pageCountContainer'>
                            <p className="bookFull-pageCount">
                                {props.pageCount}
                            </p>
                            <p className='bookFull-pageCount-text'>
                                Page count
                            </p>
                        </div>
                    </div>   
                </div>
                <div className="bookFull-aboutBookContainer">
                    <h2>About book</h2>
                    <p className="bookFull-aboutBook"
                        dangerouslySetInnerHTML={{__html: props.description}}
                    >
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BookFull;