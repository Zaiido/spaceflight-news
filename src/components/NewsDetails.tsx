import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { INews } from "../interfaces/INews"
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap"
import { format, parseISO } from 'date-fns'



const NewsDetails = () => {

    const [currentArticle, setCurrentArticle] = useState<INews>()
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const params = useParams()


    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getData = async () => {
        try {

            let response = await fetch("https://api.spaceflightnewsapi.net/v3/articles/" + params.id)
            if (response.ok) {
                let currentArticleDetails = await response.json()
                setCurrentArticle(currentArticleDetails)
                setIsLoading(false)
            } else {
                setIsError(true)
                setIsLoading(false)
            }

        } catch (error) {
            setIsError(true)
            setIsLoading(false)
        }


    }


    return (
        <>
            {isLoading && <Spinner className='spinner-ux' animation="border" variant="primary" />}
            {isError && <Alert className='alert-ux' variant="danger">Aww Snap 😐</Alert>}
            {currentArticle && (<Container className='my-5'>
                <Row className='justify-content-center'>
                    <Col className="col-12">
                        <Card className="rounded-0">
                            <Card.Img variant="top" src={currentArticle.imageUrl} className="details-img" />
                            <Card.Body className='details-card-body'>
                                <Card.Title>{currentArticle.title}</Card.Title>
                                <Card.Text>
                                    {currentArticle.summary}
                                </Card.Text>
                                <div>Published: {format(parseISO(currentArticle.publishedAt.toString()), 'dd.MM.yyyy')}, {currentArticle.newsSite}</div>

                                <Link to={currentArticle.url}>
                                    <div className='mt-3'>Continue reading...</div>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>)}
        </>
    )
}

export default NewsDetails