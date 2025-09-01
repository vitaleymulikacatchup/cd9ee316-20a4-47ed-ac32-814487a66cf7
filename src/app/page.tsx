"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarBase
        logoSrc="/images/logo.svg"
        logoAlt="MemeCoin Spark Logo"
        logoText="MemeCoin Spark"
        leftButtonText="Menu"
        rightButtonText="Contact"
      />
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-gradient-to-r from-[#FF6B6B] to-[#FFD166]">
        <SplitHero
          title="Welcome to MemeCoin Spark"
          subtitle="Your playful memecoin adventure!"
          primaryButtonText="Buy Spark"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => {}}
          onSecondaryButtonClick={() => {}}
        />
      </div>
      <div id="about" data-section="about" className="bg-[#F7F7FB]">
        <SplitAbout
          description="Join the fun and explore what MemeCoin Spark has to offer, from trading advice to community events!"
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="bg-white">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Create a wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Purchase Spark", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Join the community", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="bg-[#FBFBFC]">
        <NumberGridTokenomics
          title="Tokenomics"
          description="Explore the metrics behind MemeCoin Spark."
          kpiItems={[
            { value: "1M", description: "Total Supply" },
            { value: "10K", description: "Holders" },
            { value: "5K", description: "Daily Transactions" }
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="bg-[#F7F7FB]">
        <CentralFAQ
          items={[
            { title: "What is MemeCoin Spark?", content: "It's a playful memecoin for everyone!" },
            { title: "How can I buy it?", content: "You can buy it on our exchange!" },
            { title: "What are the benefits?", content: "Join our community for exclusive rewards!" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="bg-white">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Logo"
          logoText="MemeCoin Spark"
          columns={[
            { title: "Get Started", items: [{ label: "Buy Spark", onClick: () => {} }] },
            { title: "Company", items: [{ label: "About Us", onClick: () => {} }] },
            { title: "Support", items: [{ label: "Contact", onClick: () => {} }] }
          ]}
          copyrightText="© 2023 MemeCoin Spark. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}
