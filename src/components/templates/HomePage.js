import styles from "./HomePage.module.css";
import PropertyType from "./PropertyType";
import LastProperty from "./LastProperty";
import CarouselContent from "./CarouselContent";
import SearchBarPageContainer from "./SearchBarPageContainer";

function HomePage() {
  return (
    <div className={styles.container}>
      <CarouselContent />
      <SearchBarPageContainer/>
      <PropertyType />
      <LastProperty />
    </div>
  );
}

export default HomePage;
