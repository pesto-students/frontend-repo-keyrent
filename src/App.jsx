import { Container } from "react-bootstrap"
import {Outlet} from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Header from "./components/header"
import Footer from "./components/footer"

const Gamrezy = () => {
  return (
    <>
   <Header/>
   <main className="py-3">
   <Container className="grid grid-cols-4">
   <Outlet/>
   </Container>
   </main>
   <Footer/>
   <ToastContainer/>
      </>
  )
}

export default Gamrezy