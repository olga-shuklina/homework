import Header from '../../widgets/LayoutHeader/Header.tsx';
import Footer from '../../widgets/LayoutFooter/Footer.tsx';
import PostList from '../../widgets/PostList/PostList.tsx';

function MainLayout() {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-main-content">
       <div>HELLO</div>
        <PostList/>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;