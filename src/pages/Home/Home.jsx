import Banner from "../../Components/Banner/Banner";
import HireMe from "../../Components/HireMe/HireMe";
import PortfolioSection from "../../Components/Portfolio/PortfolioSection";
import Service from "../../Components/Service/Service";
import SkillsSection from "../../Components/SkillsSection/SkillsSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HireMe></HireMe>
            <PortfolioSection></PortfolioSection>
            <SkillsSection></SkillsSection>
            <Service></Service>
        </div>
    );
};

export default Home;