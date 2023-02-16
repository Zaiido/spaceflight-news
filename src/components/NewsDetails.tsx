import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { INews } from "../interfaces/INews"
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'



const NewsDetails = () => {

    const [currentNews, setCurrentNews] = useState<null | INews>(null)
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
                let currentNewsDetails = await response.json()
                setCurrentNews(currentNewsDetails)
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
            {currentNews && (<Container className='my-5'>
                <Row className='justify-content-center'>
                    <Col className="col-12">
                        <Card className="rounded-0">
                            <Card.Img variant="top" src={currentNews.imageUrl} className="details-img" />
                            <Card.Body>
                                <Card.Title>{currentNews.title}</Card.Title>
                                <Card.Text>
                                    {currentNews.summary}
                                </Card.Text>
                                <div>Published: {format(parseISO(currentNews.publishedAt.toString()), 'dd.MM.yyyy')}, {currentNews.newsSite}</div>

                                <Link to={currentNews.url}>
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