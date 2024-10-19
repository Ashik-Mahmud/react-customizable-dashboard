import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";

type Props = {};

const AppLayout = (props: Props) => {
  return (
    <main className="font-lato">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default AppLayout;
