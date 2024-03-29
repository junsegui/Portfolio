import "./App.css";
import { Container } from "./Components/Container/Container";
import { Layout } from "./Components/Layout/Layout";
import { Modal } from "./Components/Navbar/modal/Modal";
import { Navbar } from "./Components/Navbar/Navbar";
import { Routes } from "./Components/Routes/Routes";
import { SideBar } from "./Components/SideBar/SideBar";

function App() {
  return (
    <Container>
      <SideBar />
      <Layout>
        <Routes />
      </Layout>
    </Container>
  );
}

export default App;
