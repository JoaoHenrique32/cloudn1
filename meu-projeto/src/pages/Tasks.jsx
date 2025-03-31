import { useState, useEffect } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { FaTrash } from "react-icons/fa"; // Ícone de lixeira

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  // Carregar tarefas do LocalStorage ao iniciar
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const [taskName, setTaskName] = useState("");

  const addTask = () => {
    if (taskName.trim() !== "") {
      const newTasks = [...tasks, { name: taskName, completed: false }];
      setTasks(newTasks);
      localStorage.setItem("tasks", JSON.stringify(newTasks)); // Salvar no LocalStorage
      setTaskName("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Atualizar LocalStorage
  };

  // Função para remover uma tarefa
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks)); // Atualizar LocalStorage
  };

  return (
    <Container className="mt-4">
      <h2>Gestão de Tarefas</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nome da Tarefa</Form.Label>
          <Form.Control
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" onClick={addTask}>
          Criar Tarefa
        </Button>
      </Form>
      <div className="mt-4">
        {tasks.map((task, index) => (
          <Card key={index} className="mb-2 d-flex flex-row align-items-center">
            <Card.Body className="flex-grow-1">
              <Card.Title className={task.completed ? "text-success" : ""}>
                {task.name}
              </Card.Title>
              <Button
                variant={task.completed ? "secondary" : "success"}
                onClick={() => toggleTaskCompletion(index)}
              >
                {task.completed ? "Concluído" : "Concluir"}
              </Button>
            </Card.Body>
            <Button variant="danger" onClick={() => deleteTask(index)} className="me-3">
              <FaTrash />
            </Button>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Tasks;
