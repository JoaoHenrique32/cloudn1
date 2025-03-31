import { Card, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      <Row>
        <Col md={4}>
          <Card bg="primary" text="white" className="mb-3">
            <Card.Body>
              <Card.Title>Projetos</Card.Title>
              <Card.Text>Gerencie seus projetos.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="success" text="white" className="mb-3">
            <Card.Body>
              <Card.Title>Tarefas</Card.Title>
              <Card.Text>Acompanhe e conclua suas tarefas.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="warning" text="white" className="mb-3">
            <Card.Body>
              <Card.Title>Equipe</Card.Title>
              <Card.Text>Colabore com sua equipe.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
