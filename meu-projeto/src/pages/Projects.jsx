import { useState, useEffect } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { FaTrash } from "react-icons/fa"; // Ícone de lixeira

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Carregar projetos do LocalStorage ao iniciar
  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(savedProjects);
  }, []);

  const [projectName, setProjectName] = useState("");

  const addProject = () => {
    if (projectName.trim() !== "") {
      const newProjects = [...projects, { name: projectName }];
      setProjects(newProjects);
      localStorage.setItem("projects", JSON.stringify(newProjects)); // Salvar no LocalStorage
      setProjectName("");
    }
  };

  // Função para remover um projeto
  const deleteProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
    localStorage.setItem("projects", JSON.stringify(newProjects)); // Atualizar LocalStorage
  };

  return (
    <Container className="mt-4">
      <h2>Gerenciamento de Projetos</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nome do Projeto</Form.Label>
          <Form.Control
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={addProject}>
          Criar Projeto
        </Button>
      </Form>
      <div className="mt-4">
        {projects.map((proj, index) => (
          <Card key={index} className="mb-2 d-flex flex-row align-items-center">
            <Card.Body className="flex-grow-1">
              <Card.Title>{proj.name}</Card.Title>
            </Card.Body>
            <Button variant="danger" onClick={() => deleteProject(index)} className="me-3">
              <FaTrash />
            </Button>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
