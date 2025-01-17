import AboutUs from './components/about-us';
import Header from './components/header';
import Services from './components/services/services';
import Contacts from './components/contacts'

export default function Page() {
  return (
    <>
      <Header/>
      <main>
        <AboutUs/>
        <Services/>
        <Contacts/>
      </main>
    </>
  );
}