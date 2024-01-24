
import Gallery from '@/components/Gallery/Gallary';
import HeroSection from '@/components/HeroSection/HeroSection';
import NewsLetter from '@/components/NewsLetter/NewsLetter';
import PageSearch from '@/components/PageSearch/PageSearch';


const Home = async () => {
 

  return (
    <>
      <HeroSection />
      <PageSearch />
      <Gallery/>
      <NewsLetter/>
    </>
  );
};

export default Home;