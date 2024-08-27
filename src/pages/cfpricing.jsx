import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import CFPricingBar from "../components/sections/CfPricingBar";

const Cfpricing = () => {
  return (
    <Layouts contactButton cartButton>
      <PageBanner pageTitle={"Pick a plan that’s right for you"} pageDesc={"It helps you choose prices to maximise."} />
      <CFPricingBar hiddenHeading />
    </Layouts>
  );
};
export default Cfpricing;