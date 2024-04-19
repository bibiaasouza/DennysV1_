import './App.js'; 
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Form } from 'react-bootstrap';

// Importando o CSS do Bootstrap

// Definindo um componente funcional chamado LoginForm
const LoginForm = () => {

  // Função para lidar com o evento de login
  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para autenticar o usuário
  };

  // Renderizando o formulário de login
  return (
    // Div que contém o formulário de login
    <div className="login-form">
      <h2>Login</h2>
      
      <Form onSubmit={handleLogin}>
        
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Seu email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>

        <Button variant="primary" type="submit" block style={{borderRadius: '50px'}}>
          Entrar
        </Button>

        <hr />

        <Button variant="danger" block style={{borderRadius: '50px'}}>
          Logar com Facebook
        </Button>
      </Form>
    </div>
  );
};

// Exportando o componente LoginForm para ser usado em outros arquivos
export default LoginForm;
      