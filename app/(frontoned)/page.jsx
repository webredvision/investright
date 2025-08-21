import HeroSection from "@/components/herosection/herosection";
import SubscribCard from "@/components/partners/partners";
import WhyChooseUs from "@/components/whytochooseus/whytochooseus";
import Calculator from "@/components/calculator/calculator";
import Blog from "@/components/blogs/blog";
import { FAQ } from "@/components/faq/faq";
import AdvisorCategory from "@/components/AdvisoryCategory/advisorycategory";
import Features from "@/components/features/features";
import { getAboutus, getAboutusteams, getAddisLogos, getArn, getBlogs, getFaqs, getSiteData, getTestimonials } from "@/lib/functions";
import MutalFundSection from "@/components/MutalfundSection/page";
import Testimonials from "@/components/testimonials/testimonials";
import TeamSection from "@/components/Aboutuspage/teamsection/teamsection";
import LatestNews from "@/components/latestnews";
import AboutUsSection from "@/components/about-us/aboutus";

export default async function Page() {
  const sitedata = await getSiteData();
  const testimonials = await getTestimonials();
  const blogs = await getBlogs();
  const amclogos = await getAddisLogos()
  const Faqs = await getFaqs()
  const teams = await getAboutusteams();
  const aboutUs =await getAboutus()

  return (
    <div className="">
      <main className="overflow-x-hidden">
        <HeroSection sitedata={sitedata} />
        <AboutUsSection aboutUs={aboutUs} sitedata={sitedata} />
        <Features />
        <AdvisorCategory />
        <WhyChooseUs sitedata={sitedata}/>
        <Calculator />
        <MutalFundSection />
        <SubscribCard amclogos={amclogos} />
        <TeamSection teams={teams}/>
        <Testimonials testimonials={testimonials} />
        {/* <Blog blogs={blogs} /> */}
        {/* <LatestNews /> */}
        <FAQ Faqs={Faqs} />
      </main>
    </div>
  );
}