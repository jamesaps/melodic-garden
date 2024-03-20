import Jumbotron from "../Jumbotron.jsx";
import Divider from "../Divider.jsx";
import HomePlantSection from "../HomePlantSection.jsx";
import CategoryCard from "../CategoryCard.jsx";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <HomePlantSection/>
      <Divider />
      <CategoryCard/>
    </div>
  );
}
