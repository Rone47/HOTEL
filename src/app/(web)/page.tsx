
import Gallery from '@/components/Gallery/Gallary';
import HeroSection from '@/components/HeroSection/HeroSection';
import PageSearch from '@/components/PageSearch/PageSearch';


const Home = async () => {
 

  return (
    <>
      <HeroSection />
      <PageSearch />
      <Gallery/>
    </>
  );
};

export default Home;