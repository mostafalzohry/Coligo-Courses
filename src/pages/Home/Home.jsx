import Sidebar from '../../components/Sidebar/Sidebar';
import Container from '../../components/Container/Container';
import Navbar from '../../components/Navbar/Navbar';
import Dashboard from '../../pages/Dashboard/Dashboard';
import RequireAuth from '../../auth/RequireAuth';


const Home = () => {

    const Auth = RequireAuth(Dashboard);
    return (
    <>
      <Sidebar />
      <Container stickyNav={<Navbar />} content={<Auth />} />
    </>
  );
}
  export default Home