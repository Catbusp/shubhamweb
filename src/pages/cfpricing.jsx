import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import CFPricingBar from "../components/sections/CfPricingBar";
import { Helmet } from "react-helmet";
import Head from "next/head";

const Cfpricing = () => {
  return (
      <div>
        <Head>
            <title>Video Production Services & Cost in Delhi NCR | Content Foundry</title>
        </Head>
        <Helmet>
          <meta property="og:title" content="video production services & cost | content foundry" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.contentfoundry.in/cfpricing  " />
          <meta property="og:image" content="https://www.contentfoundry.in/images/logo-main.png" />
      </Helmet>
    <Layouts contactButton cartButton>
      <PageBanner pageTitle={"Pick a plan that’s right for you"} pageDesc={"It helps you choose prices to maximise."} />
      <CFPricingBar hiddenHeading/>
    </Layouts>
    </div>
  );
};
export default Cfpricing;