'use client';

import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();
    const [news, setNews] = useState();

    useEffect( () => {
        async function fetchNews() {
            setIsLoading(true);
            const response = await fetch('http://localhost:8080/news');

            if (!response.ok) {
                setError('Failed to fetch news.');
                setIsLoading(false);
            }
            
            const news = await response.json();
            setIsLoading(false);
            setNews(news);
        }

        fetchNews();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    let newsContent;

    if (news) {
        return (<NewsList news={news}/>);
    }
    
    return (
        <>
            <h1>News Page</h1>
            {newsContent}
        </>
    );
}