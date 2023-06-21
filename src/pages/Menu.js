import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getArticles } from "../services/api";
import { Link } from "react-router-dom";

const Article = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await getArticles();
      setArticles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {articles.map((article) => (
        <Card className="text-center" key={article.id}>
          <Card.Header>
            <Card.Body>
              <Card.Img variant="top" src={`/uploads/${article.image}`}
                            alt="Image de l'article"
                            style={{ width: "25%" }} />
              <Card.Title>{article.type}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" size="lg">
               <Link to="../product" style={{
                textDecoration:"none",
                color:"white" 
               }}>
               Discover
               </Link> 
                </Button>
            </Card.Body>
          </Card.Header>
        </Card>
      ))}
    </div>
  );
};

export default Article;
