import Aside from "../organisms/Aside";
import Header from "../organisms/Header";
import Main from "../organisms/Main";
import SecundaryNav from "../organisms/SecundaryNav";
import "./styles/home.scss";

export default function Home() {
  return (
    <>
      <Header></Header>
      <SecundaryNav></SecundaryNav>
      <div className="main__container fg__1 flex fspace__between">
        <Main></Main>
        <Aside></Aside>
      </div>
    </>
  );
}
