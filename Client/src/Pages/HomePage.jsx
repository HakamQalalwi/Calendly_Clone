import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import HeroSection from "../component/Home/HeroSection";
import FeaturesSection from "../component/Home/FeaturesSection";
import SchedulingTypesSection from "../component/Home/SchedulingTypesSection";
import LogoMotion from "../component/LogoMotion";

function HomePage() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <LogoMotion />
            <FeaturesSection />
            <SchedulingTypesSection />
            <Footer />
        </>
    );
}

export default HomePage;
