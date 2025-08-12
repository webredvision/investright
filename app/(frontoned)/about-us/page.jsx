import InnerBanner from "@/components/InnerBanner/InnerBanner";
import { getAboutus, getAboutusteams, getmissionvission, getSiteData } from "@/lib/functions";
import WhoWeare from "@/components/Aboutuspage/whoweare";
import TeamSection from "@/components/Aboutuspage/teamsection/teamsection";
import AboutUsSection from "@/components/about-us/aboutus";

export const metadata = {
  title: "About Us - Renaissance Financial Wealth",
  description:
    "Learn more about Renaissance Financial  Wealth, your trusted financial partner in India.",
};

const AboutUsPage = async () => {
  const aboutus = await getAboutus()
  const missionVission = await getmissionvission();
  const teams = await getAboutusteams()
  const sitedata=await getSiteData()
  return (
    <div>
      <InnerBanner pageName="About Us" />
      <AboutUsSection aboutUs={aboutus} sitedata={sitedata} />
      {/* <HeaderAboutus aboutus={aboutus} /> */}
      <WhoWeare aboutus={aboutus} missionVission={missionVission} />
      <TeamSection teams={teams} />
    </div>
  );
};

export default AboutUsPage;