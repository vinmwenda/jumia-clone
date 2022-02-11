
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import TopSellingProducts from "./TopSellingProducts";
import CardItem from "../Reusable/CardItem";
import Button from "react-bootstrap/esm/Button";

export default function TopSellingItems(category,products,back) {
  return (
    <Container fluid="sm">
      <div className="topSellingItemsContainer m-2">
        <div className="align" style={{ padding: "15px", fontSize: "1.5rem", fontWeight: 600,backgroundColor:`${back}` }}>
          <Col>{category}</Col>
          <Button className="sm " variant="none" style={{float:'right',color:"white",fontWeight:800}}>View All</Button>
        </div>
        <div className="p-2" style={{ display: "flex", overflowX: "scroll" }}>
        {products.map((product) => (
        <Col key={product.id}>
          <CardItem
            image={product.image}
            name={product.title}
            price={product.price}
          />
        </Col>
      ))}
        </div>
      </div>
    </Container>
  );
};


