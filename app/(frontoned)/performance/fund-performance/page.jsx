
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import FundCategoryTabs from "@/components/FundCategoryTabs/page";
 
export default function MarketUpdate() {
 
  return (
    <div className="">
     <InnerBanner pageName="Fund Performance" subpages="Performance"/>
      <div className="container mx-auto main_section ">
        <FundCategoryTabs/>
      </div>
    </div>
  );
}