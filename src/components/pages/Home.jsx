import Jumbotron from '../jumbotron.jsx';
import Divider from '../Divider.jsx';
import HomePlantSection from '../HomePlantSection.jsx';
import CategoryCard from '../categoryCard.jsx';


export default function Home() {
  return (
    <>
      <Jumbotron />
      <HomePlantSection/>
      <Divider />
      <CategoryCard/>
    </>
  );
}
