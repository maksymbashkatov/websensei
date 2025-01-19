import AboutUs from './components/about-us';
import Header from './components/header';
import Services from './components/services/services';
import Contacts from './components/contacts';
import Reviews from './components/reviews/reviews';

export default function Page() {
  return (
    <>
      <Header/>
      <main>
        <AboutUs/>
        <Services/>
        <Reviews/>
        <Contacts/>
      </main>
    </>
  );
}