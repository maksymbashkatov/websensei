import AboutUs from './components/about-us';
import Header from './components/header';
import Contacts from './components/contacts'

export default function Page() {
  return (
    <>
      <Header/>
      <main>
        <AboutUs/>
        <Contacts/>
      </main>
    </>
  );
}