import { useEffect, useState } from "react"
import { INews } from "../interfaces/INews"
import SingleNews from "./SingleNews"
import { Container, Row, Spinner, Alert } from "react-bootstrap"
import JumbotronComponent from "./JumbotronComponent"


const NewsSection = () => {
    const [news, setNews] = useState<INews[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {

            let response = await fetch("https://api.spaceflightnewsapi.net/v3/articles")
            if (response.ok) {
                let allNews = await response.json()
                setNews(allNews)
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
            {isLoading && <Spinner className="spinner-ux" animation="border" variant="primary" />}
            {isError && <Alert className="alert-ux" variant="danger">Aww Snap 😐</Alert>}
            <JumbotronComponent />
            <Container className="my-5">
                <Row>
                    {news.map((article) =>
                        <SingleNews article={article} key={article.id} />)}
                </Row>
            </Container>
        </>
    )
}

export default NewsSection