import { ISingleNews } from "../interfaces/ISingleNews"
import { Col, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { format, parseISO } from "date-fns"


const SingleNews = ({ article }: ISingleNews) => {
    return (
        <Col className="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
            <Card className="rounded-0">
                <Card.Img variant="top" src={article.imageUrl} />
                <Card.Body>
                    <Card.Title className="title-line-clamp">{article.title}</Card.Title>
                    <Card.Text className="summary-line-clamp">
                        {article.summary}
                    </Card.Text>
                    <Card.Text className="date-site">
                        {format(parseISO(article.publishedAt.toString()), 'dd.MM.yyyy')}, {article.newsSite}
                    </Card.Text>
                    <Link to={"/details/" + article.id}>
                        <div className="d-flex justify-content-end">More...</div>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleNews