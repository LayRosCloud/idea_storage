import HeroSection from "../../components/sections/Hero/HeroSection";
import FeatureSection from "../../components/sections/Feature/FeatureSection";
import TestimonialsSection from "../../components/sections/Testimonials/TestimonialsSection";
import HowItWorksSection from "../../components/sections/HowItWorks/HowItWorksSection";
import CtaSection from "../../components/sections/Cta/CtaSection";


function MainPage() {
    return (
        <div>
            <HeroSection/>
            <FeatureSection/>
            <HowItWorksSection/>
            <TestimonialsSection/>
            <CtaSection/>

        </div>
    )
}

export default MainPage;