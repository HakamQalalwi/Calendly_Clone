import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import BookingLinkSection from "../component/Individual/BookingLinkSection";
import IntegrationSection from "../component/Individual/IntegrationSection";
import SolutionSection from "../component/Individual/SolutionSection";
import HeroSection from "../component/Individual/HeroSection.jsx";

function IndividualsPage() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <BookingLinkSection />
            <IntegrationSection />
            <SolutionSection />
            <Footer />
        </>
    );
}

export default IndividualsPage;
