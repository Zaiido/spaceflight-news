import { Carousel } from "react-bootstrap"
import { Link } from "react-router-dom"
import { ICarouselNews } from "../interfaces/ICarouselNews"

const NewsCarousel = ({ articles }: ICarouselNews) => {
    return (
        <Carousel>
            {articles.map((article) => {
                return (
                    <Carousel.Item key={article.id}>
                        <img
                            className="d-block w-100"
                            src={article.imageUrl}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <Link to={"/details/" + article.id}>
                                <h3>{article.title}</h3>
                            </Link>
                            <p className="truncate">{article.summary}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default NewsCarousel