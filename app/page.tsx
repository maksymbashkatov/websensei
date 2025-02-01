import AboutUs from './components/about-us';
import Services from './components/services/services';
import Contacts from './components/contacts';
import Reviews from './components/reviews/reviews';
import HeaderClient from './components/header-client';

export default function Page() {
  return (
    <>
      <HeaderClient/>
      <main>
        <AboutUs/>
        <Services/>
        <Reviews/>
        <Contacts/>
      </main>
    </>
  );
}