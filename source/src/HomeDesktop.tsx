const assetPathPrefix = "https://www.figma.com/api/mcp/asset/4b2b026e-7891-4ec7-b2b1-03473a3a279f";
const imgIconArrowRight = `${assetPathPrefix}/c7347.svg`;
const imgBrandSymbolImage = `${assetPathPrefix}/56571.png`;
const imgImageEngineGlowIllustration2 = `${assetPathPrefix}/eac83.png`;
const imgImageChannelIcon = `${assetPathPrefix}/60614.png`;
const imgImageResultIcon = `${assetPathPrefix}/48c55.png`;
const imgImageChannelIcon1 = `${assetPathPrefix}/8bb12.png`;
const imgImageResultIcon1 = `${assetPathPrefix}/e70df.png`;
const imgImageChannelIcon2 = `${assetPathPrefix}/19bab.png`;
const imgImageResultIcon2 = `${assetPathPrefix}/e7a2f.png`;
const imgImageChannelIcon3 = `${assetPathPrefix}/8d106.png`;
const imgImageResultIcon3 = `${assetPathPrefix}/ab8f8.png`;
const imgImageChannelIcon4 = `${assetPathPrefix}/efef6.png`;
const imgImageResultIcon4 = `${assetPathPrefix}/a1fb0.png`;
const imgImageChannelIcon5 = `${assetPathPrefix}/4b80e.png`;
const imgImageResultIcon5 = `${assetPathPrefix}/5421a.png`;
const imgImageStepIllustration = `${assetPathPrefix}/5af8e.png`;
const imgImageStepIllustration1 = `${assetPathPrefix}/8e63e.png`;
const imgImageStepIllustration2 = `${assetPathPrefix}/5ee12.png`;
const imgImageStepIllustration3 = `${assetPathPrefix}/faac5.png`;
const imgImageStepIllustration4 = `${assetPathPrefix}/dedd0.png`;
const imgImageUpperPinkDecorativeBrush = `${assetPathPrefix}/c1edb.png`;
const imgImageLowerTurquoiseDecorativeCorner = `${assetPathPrefix}/bf8be.png`;
const imgImageFeatureIcon = `${assetPathPrefix}/17c6e.png`;
const imgImageFeatureIcon1 = `${assetPathPrefix}/fc72c.png`;
const imgImageFeatureIcon2 = `${assetPathPrefix}/dfe29.png`;
const imgImageFeatureIcon3 = `${assetPathPrefix}/01073.png`;
const imgImageFeatureIcon4 = `${assetPathPrefix}/6cff8.png`;
const imgImageFeatureIcon5 = `${assetPathPrefix}/22087.png`;
const imgImageIncomingDecorativeFeedbackWaves = `${assetPathPrefix}/8c401.png`;
const imgImageCustomerVoicesDecorativeIllustration = `${assetPathPrefix}/0bb17.png`;
const imgImageRocketIllustration = `${assetPathPrefix}/27c89.png`;
const imgDropdownChevron = `${assetPathPrefix}/c717e.svg`;
const imgTrailingIcon = `${assetPathPrefix}/ef05f.svg`;
const imgTrailingIcon1 = `${assetPathPrefix}/bdde2.svg`;
const imgImageEngineGlowIllustration = `${assetPathPrefix}/f9595.svg`;
const imgImageEngineGlowIllustration1 = `${assetPathPrefix}/2ab66.svg`;
const imgStepConnector0 = `${assetPathPrefix}/d56f4.svg`;
const imgStepConnector1 = `${assetPathPrefix}/52c29.svg`;
const imgStepConnector2 = `${assetPathPrefix}/7724f.svg`;
const imgStepConnector3 = `${assetPathPrefix}/fb942.svg`;
const imgHandDrawnToDriveUnderline = `${assetPathPrefix}/a954b.svg`;
const imgFeatureUnderlineUnifiedData = `${assetPathPrefix}/a55bd.svg`;
const imgFeatureUnderlineAiPoweredInsights = `${assetPathPrefix}/be2e4.svg`;
const imgFeatureUnderlineAutomationThatWorks = `${assetPathPrefix}/f01a2.svg`;
const imgFeatureUnderlineCustomBenchmarks = `${assetPathPrefix}/fe228.svg`;
const imgFeatureUnderlineRoleBasedReporting = `${assetPathPrefix}/8f048.svg`;
const imgFeatureUnderlineSecureCompliant = `${assetPathPrefix}/19302.svg`;
const imgFlowArrowData = `${assetPathPrefix}/2651f.svg`;
const imgFlowArrowAutomation = `${assetPathPrefix}/635c5.svg`;
const imgFlowArrowBenchmarks = `${assetPathPrefix}/871f7.svg`;
const imgFourPetalsLogo = `${assetPathPrefix}/405de.svg`;

function IconArrowRight({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="13:13454" data-name="Icon / Arrow right">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArrowRight} />
    </div>
  );
}

type ButtonProps = {
  className?: string;
  label?: string;
  showTrailingIcon?: boolean;
  style?: "Primary" | "Outline";
};

function Button({ className, label = "Request a Demo", showTrailingIcon = true, style = "Primary" }: ButtonProps) {
  const isOutline = style === "Outline";
  const isPrimary = style === "Primary";
  return (
    <div className={className || `content-stretch flex gap-[var(--eip-spacing-12,12px)] items-center justify-center pl-[var(--eip-spacing-24,24px)] relative rounded-[var(--eip-full,999px)] ${isOutline ? "border border-[var(--eip-color-violet,#7816ba)] border-solid pr-[var(--eip-spacing-23,23px)] py-[var(--eip-spacing-12,12px)]" : "bg-gradient-to-r from-[var(--eip-cta-violet,#7c23f8)] pr-[var(--eip-spacing-25,25px)] py-[var(--eip-spacing-11,11px)] to-[var(--eip-cta-coral,#fe6c57)] via-[57%] via-[var(--eip-cta-pink,#e024a7)]"}`} id={isOutline ? "node-13_13459" : "node-13_13455"}>
      {isPrimary && (
        <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-white,white)] whitespace-nowrap" data-node-id="13:13456" style={{ fontVariationSettings: '"wdth" 100' }}>
          {label}
        </p>
      )}
      {isPrimary && showTrailingIcon && <IconArrowRight className="relative shrink-0 size-[20px]" />}
      {isOutline && (
        <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-violet,#7816ba)] whitespace-nowrap" data-node-id="13:13460" style={{ fontVariationSettings: '"wdth" 100' }}>
          {label}
        </p>
      )}
      {isOutline && showTrailingIcon && <IconArrowRight className="relative shrink-0 size-[20px]" />}
    </div>
  );
}

export default function HomeDesktop() {
  return (
    <div className="bg-[var(--eip-color-white,white)] content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-start relative size-full" data-node-id="33:119" data-name="Home / Desktop">
      <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] items-center pl-[var(--eip-spacing-46,46px)] pr-[var(--eip-spacing-41,41px)] py-[var(--eip-spacing-24,24px)] relative shrink-0 w-full" data-node-id="33:120" data-name="Header">
        <div className="content-stretch flex gap-[var(--eip-spacing-13,13px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:120;29:119" data-name="Brand">
          <div className="content-stretch flex h-[42px] items-start relative shrink-0 w-[40px]" data-node-id="I33:120;29:120" data-name="Brand symbol">
            <div className="absolute h-[48px] left-[-6px] top-[-2px] w-[50px]" data-node-id="I33:120;29:121" data-name="Brand symbol / Image">
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBrandSymbolImage} />
            </div>
          </div>
          <div className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[0] relative shrink-0 text-[18px] text-[color:var(--eip-color-ink,#0b0b2c)] whitespace-nowrap" data-node-id="I33:120;29:122" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[21px] mb-0">Experience</p>
            <p className="leading-[21px]">Intelligence Platform</p>
          </div>
        </div>
        <div className="flex-[1_0_0] h-[42px] min-w-px relative" data-node-id="I33:120;29:123" data-name="Flexible spacing / Before navigation" />
        <div className="content-stretch flex gap-[var(--eip-spacing-53_2,53.2px)] h-[42px] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0 w-[694px]" data-node-id="I33:120;29:124" data-name="Navigation">
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:120;29:125" data-name="Navigation / Platform">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:120;29:126" style={{ fontVariationSettings: '"wdth" 100' }}>
              Platform
            </p>
          </a>
          <div className="content-stretch flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:120;29:128" data-name="Navigation / Solutions">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] whitespace-nowrap" data-node-id="I33:120;29:129" style={{ fontVariationSettings: '"wdth" 100' }}>
              Solutions
            </p>
            <div className="relative shrink-0 size-[10px]" data-node-id="I33:120;29:130" data-name="Dropdown chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDropdownChevron} />
            </div>
          </div>
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:120;29:132" data-name="Navigation / Features">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:120;29:133" style={{ fontVariationSettings: '"wdth" 100' }}>
              Features
            </p>
          </a>
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:120;29:134" data-name="Navigation / Benchmarking">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:120;29:135" style={{ fontVariationSettings: '"wdth" 100' }}>
              Benchmarking
            </p>
          </a>
          <div className="content-stretch flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:120;29:136" data-name="Navigation / Resources">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] whitespace-nowrap" data-node-id="I33:120;29:137" style={{ fontVariationSettings: '"wdth" 100' }}>
              Resources
            </p>
            <div className="relative shrink-0 size-[10px]" data-node-id="I33:120;29:138" data-name="Dropdown chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDropdownChevron} />
            </div>
          </div>
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:120;29:140" data-name="Navigation / About Us">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:120;29:141" style={{ fontVariationSettings: '"wdth" 100' }}>
              About Us
            </p>
          </a>
        </div>
        <div className="flex-[1_0_0] h-[42px] min-w-px relative" data-node-id="I33:120;29:142" data-name="Flexible spacing / Before actions" />
        <div className="content-stretch flex gap-[var(--eip-spacing-14,14px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:120;29:143" data-name="Actions">
          <Button className="border border-[var(--eip-color-violet,#7816ba)] border-solid content-stretch flex gap-[var(--eip-spacing-12,12px)] items-center justify-center pl-[var(--eip-spacing-24,24px)] pr-[var(--eip-spacing-23,23px)] py-[var(--eip-spacing-12,12px)] relative rounded-[var(--eip-full,999px)] shrink-0" label="Log In" showTrailingIcon={false} style="Outline" />
          <a className="bg-gradient-to-r content-stretch cursor-pointer flex from-[var(--eip-cta-violet,#7c23f8)] gap-[var(--eip-spacing-12,12px)] items-center justify-center pl-[var(--eip-spacing-24,24px)] pr-[var(--eip-spacing-25,25px)] py-[var(--eip-spacing-11,11px)] relative rounded-[var(--eip-full,999px)] shrink-0 to-[var(--eip-cta-coral,#fe6c57)] via-[57%] via-[var(--eip-cta-pink,#e024a7)]" data-node-id="I33:120;29:145" data-name="Button / Request demo">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-white,white)] text-left whitespace-nowrap" data-node-id="I33:120;29:145;13:13456" style={{ fontVariationSettings: '"wdth" 100' }}>
              Request a Demo
            </p>
            <IconArrowRight className="relative shrink-0 size-[20px]" />
          </a>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[672px] items-start relative shrink-0 w-full" data-node-id="33:157" data-name="Every experience has a voice">
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-20,20px)] items-start left-[52.5px] top-[88.5px] w-[492px]" data-node-id="33:158" data-name="Hero introduction">
          <div className="bg-[var(--eip-custom-f5efff,#f5efff)] content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-start px-[var(--eip-spacing-16,16px)] py-[var(--eip-spacing-5,5px)] relative rounded-[var(--eip-radius-15,15px)] shrink-0" data-node-id="33:159" data-name="Future of experience badge">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[13.5px] text-[color:var(--eip-custom-6524d9,#6524d9)] w-[229px]" data-node-id="33:165" style={{ fontVariationSettings: '"wdth" 100' }}>
              THE FUTURE OF EXPERIENCE
            </p>
          </div>
          <div className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[0] min-w-full relative shrink-0 text-[57px] text-[color:var(--eip-custom-08082a,#08082a)] w-[min-content]" data-node-id="33:169" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[66px] mb-0">Every Experience</p>
            <p className="leading-[66px]">Has A Voice.</p>
          </div>
          <div className="[word-break:break-word] bg-clip-text font-['Roboto:Bold'] font-bold leading-[0] min-w-full relative shrink-0 text-[64.5px] text-[transparent] w-[min-content]" data-node-id="33:173" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(90deg, rgb(56, 71, 255) 0%, rgb(128, 20, 232) 35%, rgb(224, 28, 150) 65%, rgb(255, 97, 77) 94%, rgb(255, 107, 77) 100%)" }}>
            <p className="leading-[69px] mb-0">We Turn It Into</p>
            <p className="leading-[69px]">Intelligence.</p>
          </div>
          <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[17.5px] text-[color:var(--eip-custom-101033,#101033)] w-[min-content]" data-node-id="33:175" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[30px] mb-0">Collect feedback across every touchpoint, understand</p>
            <p className="leading-[30px] mb-0">what people really think, benchmark performance,</p>
            <p className="leading-[30px]">and turn every response into meaningful action.</p>
          </div>
        </div>
        <a className="absolute bg-gradient-to-r content-stretch cursor-pointer flex from-[var(--eip-cta-violet,#7c23f8)] gap-[var(--eip-spacing-12,12px)] items-center justify-center left-[52.5px] px-[var(--eip-spacing-28,28px)] py-[var(--eip-spacing-19,19px)] rounded-[var(--eip-full,999px)] to-[var(--eip-cta-coral,#fe6c57)] top-[568.5px] via-[57%] via-[var(--eip-cta-pink,#e024a7)]" data-node-id="33:178" data-name="Button / Request a Demo">
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[18px] text-[color:var(--eip-color-white,white)] text-left whitespace-nowrap" data-node-id="I33:178;29:307" style={{ fontVariationSettings: '"wdth" 100' }}>
            Request a Demo
          </p>
          <div className="relative shrink-0 size-[20px]" data-node-id="I33:178;29:308" data-name="Trailing icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrailingIcon} />
          </div>
        </a>
        <a className="absolute bg-[var(--eip-color-white,white)] border border-[#d6d1e8] border-solid content-stretch cursor-pointer flex gap-[var(--eip-spacing-12,12px)] h-[60px] items-center justify-center left-[295.5px] px-[var(--eip-spacing-28,28px)] py-[var(--eip-spacing-19,19px)] rounded-[var(--eip-full,999px)] top-[568.5px]" data-node-id="33:182" data-name="Button / See How It Works">
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[18px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:182;29:311" style={{ fontVariationSettings: '"wdth" 100' }}>
            See How It Works
          </p>
          <div className="relative shrink-0 size-[20px]" data-node-id="I33:182;29:312" data-name="Trailing icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrailingIcon1} />
          </div>
        </a>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[558px] items-center left-[571.5px] top-[24px] w-[907.5px]" data-node-id="41:459" data-name="Experience intelligence engine diagram">
          <div className="h-[558px] overflow-clip relative shrink-0 w-[524px]" data-node-id="41:460" data-name="Artwork / Engine glow illustration / feather">
            <div className="absolute contents left-0 top-0" data-node-id="41:461" data-name="horizontal edge fade / mask group">
              <div className="absolute contents left-0 top-0" data-node-id="41:463" data-name="vertical edge fade / mask group">
                <div className="absolute h-[558px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[433.5px_558px,_433.5px_558px] top-0 w-[433.5px]" data-node-id="41:465" style={{ maskImage: `url("${imgImageEngineGlowIllustration}"), url("${imgImageEngineGlowIllustration1}")` }} data-name="Image / Engine glow illustration">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageEngineGlowIllustration2} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex gap-[var(--eip-spacing-13_5,13.5px)] h-[66px] items-center left-[12px] px-[var(--eip-spacing-18,18px)] py-[var(--eip-spacing-12,12px)] rounded-[var(--eip-radius-16,16px)] top-[51px] w-[180px]" data-node-id="41:466" data-name="Source / SMS Surveys">
            <div className="relative shrink-0 size-[37.5px]" data-node-id="41:467" data-name="Image / Channel icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageChannelIcon} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[17px] relative shrink-0 text-[13.2px] text-[color:var(--eip-custom-08082a,#08082a)] w-[93px]" data-node-id="41:468" style={{ fontVariationSettings: '"wdth" 100' }}>
              SMS Surveys
            </p>
          </div>
          <div className="absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex gap-[var(--eip-spacing-13_5,13.5px)] h-[66px] items-center left-[625px] px-[var(--eip-spacing-20,20px)] py-[var(--eip-spacing-12,12px)] rounded-[var(--eip-radius-16,16px)] top-[51px] w-[253.5px]" data-node-id="41:469" data-name="Result / Real-Time Insights">
            <div className="relative shrink-0 size-[39px]" data-node-id="41:470" data-name="Image / Result icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageResultIcon} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[17px] relative shrink-0 text-[13.2px] text-[color:var(--eip-custom-08082a,#08082a)] w-[161px]" data-node-id="41:471" style={{ fontVariationSettings: '"wdth" 100' }}>
              Real-Time Insights
            </p>
          </div>
          <div className="absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex gap-[var(--eip-spacing-13_5,13.5px)] h-[66px] items-center left-[12px] px-[var(--eip-spacing-18,18px)] py-[var(--eip-spacing-12,12px)] rounded-[var(--eip-radius-16,16px)] top-[131.5px] w-[180px]" data-node-id="41:472" data-name="Source / AI Calls">
            <div className="relative shrink-0 size-[37.5px]" data-node-id="41:473" data-name="Image / Channel icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageChannelIcon1} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[17px] relative shrink-0 text-[13.2px] text-[color:var(--eip-custom-08082a,#08082a)] w-[93px]" data-node-id="41:474" style={{ fontVariationSettings: '"wdth" 100' }}>
              AI Calls
            </p>
          </div>
          <div className="absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex gap-[var(--eip-spacing-13_5,13.5px)] h-[66px] items-center left-[625px] px-[var(--eip-spacing-20,20px)] py-[var(--eip-spacing-12,12px)] rounded-[var(--eip-radius-16,16px)] top-[131px] w-[253.5px]" data-node-id="41:475" data-name="Result / Sentiment Analysis">
            <div className="relative shrink-0 size-[39px]" data-node-id="41:476" data-name="Image / Result icon">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImageResultIcon1} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[17px] relative shrink-0 text-[13.2px] text-[color:var(--eip-custom-08082a,#08082a)] w-[161px]" data-node-id="41:477" style={{ fontVariationSettings: '"wdth" 100' }}>
              Sentiment Analysis
            </p>
          </div>
          <div className="absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex gap-[var(--eip-spacing-13_5,13.5px)] h-[66px] items-center left-[12px] px-[var(--eip-spacing-18,18px)] py-[var(--eip-spacing-12,12px)] rounded-[var(--eip-radius-16,16px)] top-[212px] w-[180px]" data-node-id="41:478" data-name="Source / QR Feedback">
            <div className="relative shrink-0 size-[37.5px]" data-node-id="41:479" data-name="Image / Channel icon">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[92.59%] left-0 max-w-none top-[3.7%] w-full" src={imgImageChannelIcon2} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[17px] relative shrink-0 text-[13.2px] text-[color:var(--eip-custom-08082a,#08082a)] w-[93px]" data-node-id="41:480" style={{ fontVariationSettings: '"wdth" 100' }}>
              QR Feedback
            </p>
          </div>
          <div className="absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex gap-[var(--eip-spacing-13_5,13.5px)] h-[66px] items-center left-[625px] px-[var(--eip-spacing-20,20px)] py-[var(--eip-spacing-12,12px)] rounded-[var(--eip-radius-16,16px)] top-[212px] w-[253.5px]" data-node-id="41:481" data-name="Result / Trend Detection">
            <div className="relative shrink-0 size-[39px]" data-node-id="41:482" data-name="Image / Result icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageResultIcon2} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[17px] relative shrink-0 text-[13.2px] text-[color:var(--eip-custom-08082a,#08082a)] w-[161px]" data-node-id="41:483" style={{ fontVariationSettings: '"wdth" 100' }}>
              Trend Detection
            </p>
          </div>
          <div className="absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex gap-[var(--eip-spacing-13_5,13.5px)] h-[66px] items-center left-[12px] px-[var(--eip-spacing-18,18px)] py-[var(--eip-spacing-12,12px)] rounded-[var(--eip-radius-16,16px)] top-[292.5px] w-[180px]" data-node-id="41:484" data-name="Source / Web & App">
            <div className="relative shrink-0 size-[37.5px]" data-node-id="41:485" data-name="Image / Channel icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageChannelIcon3} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[17px] relative shrink-0 text-[13.2px] text-[color:var(--eip-custom-08082a,#08082a)] w-[93px]" data-node-id="41:486" style={{ fontVariationSettings: '"wdth" 100' }}>{`Web & App`}</p>
          </div>
          <div className="absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex gap-[var(--eip-spacing-13_5,13.5px)] h-[66px] items-center left-[625px] px-[var(--eip-spacing-20,20px)] py-[var(--eip-spacing-12,12px)] rounded-[var(--eip-radius-16,16px)] top-[292px] w-[253.5px]" data-node-id="41:487" data-name="Result / Benchmarking & Ranking">
            <div className="relative shrink-0 size-[39px]" data-node-id="41:488" data-name="Image / Result icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageResultIcon3} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[17px] relative shrink-0 text-[13.2px] text-[color:var(--eip-custom-08082a,#08082a)] w-[161px]" data-node-id="41:489" style={{ fontVariationSettings: '"wdth" 100' }}>{`Benchmarking & Ranking`}</p>
          </div>
          <div className="absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex gap-[var(--eip-spacing-13_5,13.5px)] h-[66px] items-center left-[12px] px-[var(--eip-spacing-18,18px)] py-[var(--eip-spacing-12,12px)] rounded-[var(--eip-radius-16,16px)] top-[373px] w-[180px]" data-node-id="41:490" data-name="Source / Email Surveys">
            <div className="relative shrink-0 size-[37.5px]" data-node-id="41:491" data-name="Image / Channel icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageChannelIcon4} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[17px] relative shrink-0 text-[13.2px] text-[color:var(--eip-custom-08082a,#08082a)] w-[93px]" data-node-id="41:492" style={{ fontVariationSettings: '"wdth" 100' }}>
              Email Surveys
            </p>
          </div>
          <div className="absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex gap-[var(--eip-spacing-13_5,13.5px)] h-[66px] items-center left-[625px] px-[var(--eip-spacing-20,20px)] py-[var(--eip-spacing-12,12px)] rounded-[var(--eip-radius-16,16px)] top-[373px] w-[253.5px]" data-node-id="41:493" data-name="Result / Automated Actions">
            <div className="relative shrink-0 size-[39px]" data-node-id="41:494" data-name="Image / Result icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageResultIcon4} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[17px] relative shrink-0 text-[13.2px] text-[color:var(--eip-custom-08082a,#08082a)] w-[161px]" data-node-id="41:495" style={{ fontVariationSettings: '"wdth" 100' }}>
              Automated Actions
            </p>
          </div>
          <div className="absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex gap-[var(--eip-spacing-13_5,13.5px)] h-[66px] items-center left-[12px] px-[var(--eip-spacing-18,18px)] py-[var(--eip-spacing-12,12px)] rounded-[var(--eip-radius-16,16px)] top-[453.5px] w-[180px]" data-node-id="41:496" data-name="Source / In-Person">
            <div className="relative shrink-0 size-[37.5px]" data-node-id="41:497" data-name="Image / Channel icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageChannelIcon5} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[17px] relative shrink-0 text-[13.2px] text-[color:var(--eip-custom-08082a,#08082a)] w-[93px]" data-node-id="41:498" style={{ fontVariationSettings: '"wdth" 100' }}>
              In-Person
            </p>
          </div>
          <div className="absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex gap-[var(--eip-spacing-13_5,13.5px)] h-[66px] items-center left-[625px] px-[var(--eip-spacing-20,20px)] py-[var(--eip-spacing-12,12px)] rounded-[var(--eip-radius-16,16px)] top-[453px] w-[253.5px]" data-node-id="41:499" data-name="Result / Executive Reports">
            <div className="relative shrink-0 size-[39px]" data-node-id="41:500" data-name="Image / Result icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageResultIcon5} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[17px] relative shrink-0 text-[13.2px] text-[color:var(--eip-custom-08082a,#08082a)] w-[161px]" data-node-id="41:501" style={{ fontVariationSettings: '"wdth" 100' }}>
              Executive Reports
            </p>
          </div>
        </div>
        <div className="absolute bg-[var(--eip-custom-ececf3,#ececf3)] h-[1.5px] left-0 top-[670.5px] w-[1536px]" data-node-id="33:318" data-name="Hero divider" />
      </div>
      <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[355.5px] items-start relative shrink-0 w-full" data-node-id="33:321" data-name="From feedback to meaningful action">
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-20,20px)] h-[279px] items-start left-[61.5px] top-[49.5px] w-[420px]" data-node-id="33:322" data-name="Process introduction">
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[12.5px] text-[color:var(--eip-custom-6321cc,#6321cc)] w-[420px]" data-node-id="33:324" style={{ fontVariationSettings: '"wdth" 100' }}>
            ONE PLATFORM. ENDLESS POSSIBILITIES.
          </p>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Roboto:Bold'] font-bold gap-[var(--eip-spacing-6_5,6.5px)] h-[103px] items-start overflow-clip pb-[var(--eip-spacing-4_5,4.5px)] relative shrink-0 text-[40.5px] w-full" data-node-id="34:614" data-name="Process heading">
            <p className="leading-[46px] relative shrink-0 text-[color:var(--eip-custom-09092c,#09092c)] w-[420px]" data-node-id="33:328" style={{ fontVariationSettings: '"wdth" 100' }}>
              From Feedback
            </p>
            <p className="bg-clip-text leading-[0] relative shrink-0 text-[transparent] w-[430px]" data-node-id="33:331" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(90deg, var(--eip-gradient-blue,rgb(62, 74, 240)) 0%, var(--eip-gradient-violet,rgb(141, 34, 213)) 43%, var(--eip-gradient-pink,rgb(231, 54, 144)) 86%, var(--eip-gradient-coral,rgb(239, 87, 100)) 100%)" }}>
              <span className="leading-[46px] text-[#09092c]">{`to Meaningful `}</span>
              <span className="leading-[46px]">Action.</span>
            </p>
          </div>
          <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] h-[3px] items-start relative shrink-0 w-[33px]" data-node-id="33:332" data-name="Accent underline">
            <div className="bg-[var(--eip-custom-3566df,#3566df)] h-[3px] relative shrink-0 w-[12px]" data-node-id="33:333" data-name="Blue accent" />
            <div className="bg-[var(--eip-custom-f0c13a,#f0c13a)] h-[3px] relative shrink-0 w-[21px]" data-node-id="33:336" data-name="Yellow accent" />
          </div>
          <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-h-px relative text-[16.5px] text-[color:var(--eip-custom-151537,#151537)] w-[420px]" data-node-id="33:340" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[30px] mb-0">A complete experience intelligence platform</p>
            <p className="leading-[30px] mb-0">that helps you listen, understand, benchmark</p>
            <p className="leading-[30px]">and act — all in one place.</p>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-27,27px)] items-center left-[502.5px] top-[61.5px] w-[174px]" data-node-id="33:343" data-name="Step 1 / Capture">
          <div className="h-[124.5px] relative shrink-0 w-[121.5px]" data-node-id="33:345" data-name="Image / Step illustration">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageStepIllustration} />
          </div>
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16.5px] text-[color:var(--eip-custom-08082a,#08082a)] text-center w-[174px]" data-node-id="33:347" style={{ fontVariationSettings: '"wdth" 100' }}>
            Capture
          </p>
          <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal h-[58.5px] leading-[0] relative shrink-0 text-[13.5px] text-[color:var(--eip-custom-151537,#151537)] text-center w-[174px]" data-node-id="33:349" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[25px] mb-0">Collect feedback from</p>
            <p className="leading-[25px]">any channel, anywhere.</p>
          </div>
        </div>
        <div className="absolute h-[30px] left-[627.5px] top-[108px] w-[97px]" data-node-id="33:350" data-name="Step connector 0">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStepConnector0} />
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-27,27px)] h-[259px] items-center left-[702px] top-[61px] w-[174px]" data-node-id="33:354" data-name="Step 2 / Understand">
          <div className="h-[124.5px] relative shrink-0 w-[121.5px]" data-node-id="33:355" data-name="Image / Step illustration">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageStepIllustration1} />
          </div>
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16.5px] text-[color:var(--eip-custom-08082a,#08082a)] text-center w-[174px]" data-node-id="33:356" style={{ fontVariationSettings: '"wdth" 100' }}>
            Understand
          </p>
          <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-h-px relative text-[13.5px] text-[color:var(--eip-custom-151537,#151537)] text-center w-[174px]" data-node-id="33:357" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[25px] mb-0">AI analyzes sentiment,</p>
            <p className="leading-[25px]">themes and intent.</p>
          </div>
        </div>
        <div className="absolute h-[30px] left-[827px] top-[108px] w-[97px]" data-node-id="33:358" data-name="Step connector 1">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStepConnector1} />
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-27,27px)] items-center left-[901.5px] top-[61.5px] w-[174px]" data-node-id="33:362" data-name="Step 3 / Benchmark">
          <div className="h-[124.5px] relative shrink-0 w-[121.5px]" data-node-id="33:363" data-name="Image / Step illustration">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageStepIllustration2} />
          </div>
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16.5px] text-[color:var(--eip-custom-08082a,#08082a)] text-center w-[174px]" data-node-id="33:364" style={{ fontVariationSettings: '"wdth" 100' }}>
            Benchmark
          </p>
          <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[13.5px] text-[color:var(--eip-custom-151537,#151537)] text-center w-[174px]" data-node-id="33:365" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[25px] mb-0">Compare performance</p>
            <p className="leading-[25px] mb-0">across locations, regions</p>
            <p className="leading-[25px]">and industries.</p>
          </div>
        </div>
        <div className="absolute h-[30px] left-[1026.5px] top-[108px] w-[97px]" data-node-id="33:366" data-name="Step connector 2">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStepConnector2} />
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-27,27px)] items-center left-[1101px] top-[61.5px] w-[174px]" data-node-id="33:370" data-name="Step 4 / Act">
          <div className="h-[124.5px] relative shrink-0 w-[121.5px]" data-node-id="33:371" data-name="Image / Step illustration">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageStepIllustration3} />
          </div>
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16.5px] text-[color:var(--eip-custom-08082a,#08082a)] text-center w-[174px]" data-node-id="33:372" style={{ fontVariationSettings: '"wdth" 100' }}>
            Act
          </p>
          <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[13.5px] text-[color:var(--eip-custom-151537,#151537)] text-center w-[174px]" data-node-id="33:373" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[25px] mb-0">Automate actions and</p>
            <p className="leading-[25px] mb-0">drive meaningful</p>
            <p className="leading-[25px]">improvement.</p>
          </div>
        </div>
        <div className="absolute h-[30px] left-[1226px] top-[108px] w-[97px]" data-node-id="33:374" data-name="Step connector 3">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStepConnector3} />
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-27,27px)] h-[258px] items-center left-[1300.5px] top-[61.5px] w-[174px]" data-node-id="33:378" data-name="Step 5 / Improve">
          <div className="h-[124.5px] relative shrink-0 w-[121.5px]" data-node-id="33:379" data-name="Image / Step illustration">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageStepIllustration4} />
          </div>
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16.5px] text-[color:var(--eip-custom-08082a,#08082a)] text-center w-[174px]" data-node-id="33:380" style={{ fontVariationSettings: '"wdth" 100' }}>
            Improve
          </p>
          <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-h-px relative text-[13.5px] text-[color:var(--eip-custom-151537,#151537)] text-center w-[174px]" data-node-id="33:381" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[25px] mb-0">Track results and close</p>
            <p className="leading-[25px]">the loop continuously.</p>
          </div>
        </div>
        <div className="absolute bg-[var(--eip-custom-ececf3,#ececf3)] h-[1.5px] left-0 top-[354px] w-[1536px]" data-node-id="33:382" data-name="Process divider" />
      </div>
      <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[519px] items-start relative shrink-0 w-full" data-node-id="33:383" data-name="Everything you need">
        <div className="absolute h-[118.5px] left-[1263px] top-[1.5px] w-[273px]" data-node-id="33:384" data-name="Image / Upper pink decorative brush">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageUpperPinkDecorativeBrush} />
        </div>
        <div className="absolute h-[108px] left-0 top-[409.5px] w-[55.5px]" data-node-id="33:385" data-name="Image / Lower turquoise decorative corner">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLowerTurquoiseDecorativeCorner} />
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] h-[459px] items-start left-[61.5px] top-[43.5px] w-[470px]" data-node-id="33:386" data-name="Everything you need title">
          <p className="font-['Roboto:Bold'] font-bold leading-[16px] min-w-full relative shrink-0 text-[12.5px] text-[color:var(--eip-custom-6625cf,#6625cf)] w-[min-content]" data-node-id="33:387" style={{ fontVariationSettings: '"wdth" 100' }}>
            BUILT FOR IMPACT.
          </p>
          <div className="font-['Roboto:Bold'] font-bold leading-[0] min-w-full relative shrink-0 text-[88.5px] text-[color:var(--eip-custom-070727,#070727)] w-[min-content]" data-node-id="33:391" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[93px] mb-0">Everything</p>
            <p className="leading-[93px]">You Need</p>
          </div>
          <p className="absolute font-['Dancing_Script:Regular'] font-normal leading-[82px] left-[0.5px] text-[75px] text-[color:var(--eip-custom-6550e8,#6550e8)] top-[211px] whitespace-nowrap" data-node-id="33:395">
            to Drive
          </p>
          <div className="absolute bg-clip-text font-['Roboto:Bold'] font-bold leading-[0] left-[6px] text-[75px] text-[transparent] top-[292.5px] whitespace-nowrap" data-node-id="33:399" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(90deg, rgb(56, 71, 255) 0%, rgb(128, 20, 232) 35%, rgb(224, 28, 150) 65%, rgb(255, 97, 77) 94%, rgb(255, 107, 77) 100%)" }}>
            <p className="leading-[70.5px] mb-0">Better</p>
            <p className="leading-[70.5px]">Experiences.</p>
          </div>
        </div>
        <div className="absolute h-[15px] left-[145.5px] top-[329px] w-[170px]" data-node-id="33:400" data-name="Hand drawn to Drive underline">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHandDrawnToDriveUnderline} />
        </div>
        <div className="absolute content-stretch flex gap-[var(--eip-spacing-16_5,16.5px)] h-[159px] items-start left-[606px] top-[61.5px] w-[294px]" data-node-id="33:402" data-name="Feature / Unified Data">
          <div className="h-[58.5px] relative shrink-0 w-[52.5px]" data-node-id="33:404" data-name="Image / Feature icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFeatureIcon} />
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--eip-spacing-9,9px)] items-start relative shrink-0 w-[225px]" data-node-id="33:405" data-name="Feature copy">
            <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-101032,#101032)] w-[225px]" data-node-id="33:407" style={{ fontVariationSettings: '"wdth" 100' }}>
              Unified Data
            </p>
            <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] text-[color:var(--eip-custom-151537,#151537)] w-[225px]" data-node-id="33:411" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[25.5px] mb-0">All feedback in one</p>
              <p className="leading-[25.5px]">connected view.</p>
            </div>
          </div>
        </div>
        <div className="absolute h-[27px] left-[651px] top-[153px] w-[156px]" data-node-id="33:412" data-name="Feature underline / Unified Data">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFeatureUnderlineUnifiedData} />
        </div>
        <div className="absolute content-stretch flex gap-[var(--eip-spacing-16_5,16.5px)] h-[159px] items-start left-[882px] top-[84px] w-[294px]" data-node-id="33:414" data-name="Feature / AI-Powered Insights">
          <div className="h-[58.5px] relative shrink-0 w-[52.5px]" data-node-id="33:415" data-name="Image / Feature icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFeatureIcon1} />
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--eip-spacing-9,9px)] items-start relative shrink-0 w-[225px]" data-node-id="33:416" data-name="Feature copy">
            <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-101032,#101032)] w-[225px]" data-node-id="33:417" style={{ fontVariationSettings: '"wdth" 100' }}>
              AI-Powered Insights
            </p>
            <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] text-[color:var(--eip-custom-151537,#151537)] w-[225px]" data-node-id="33:418" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[25.5px] mb-0">Smarter analysis that</p>
              <p className="leading-[25.5px]">finds what matters.</p>
            </div>
          </div>
        </div>
        <div className="absolute h-[27px] left-[927px] top-[175.5px] w-[156px]" data-node-id="33:419" data-name="Feature underline / AI-Powered Insights">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFeatureUnderlineAiPoweredInsights} />
        </div>
        <div className="absolute content-stretch flex gap-[var(--eip-spacing-16_5,16.5px)] h-[159px] items-start left-[1161px] top-[144px] w-[294px]" data-node-id="33:421" data-name="Feature / Automation That Works">
          <div className="h-[58.5px] relative shrink-0 w-[52.5px]" data-node-id="33:422" data-name="Image / Feature icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFeatureIcon2} />
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--eip-spacing-9,9px)] items-start relative shrink-0 w-[225px]" data-node-id="33:423" data-name="Feature copy">
            <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-101032,#101032)] w-[225px]" data-node-id="33:424" style={{ fontVariationSettings: '"wdth" 100' }}>
              Automation That Works
            </p>
            <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] text-[color:var(--eip-custom-151537,#151537)] w-[225px]" data-node-id="33:425" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[25.5px] mb-0">Trigger actions and close</p>
              <p className="leading-[25.5px]">the loop automatically.</p>
            </div>
          </div>
        </div>
        <div className="absolute h-[27px] left-[1206px] top-[235.5px] w-[156px]" data-node-id="33:426" data-name="Feature underline / Automation That Works">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFeatureUnderlineAutomationThatWorks} />
        </div>
        <div className="absolute content-stretch flex gap-[var(--eip-spacing-16_5,16.5px)] h-[159px] items-start left-[571.5px] top-[301.5px] w-[294px]" data-node-id="33:428" data-name="Feature / Custom Benchmarks">
          <div className="h-[58.5px] relative shrink-0 w-[52.5px]" data-node-id="33:429" data-name="Image / Feature icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFeatureIcon3} />
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--eip-spacing-9,9px)] items-start relative shrink-0 w-[225px]" data-node-id="33:430" data-name="Feature copy">
            <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-101032,#101032)] w-[225px]" data-node-id="33:431" style={{ fontVariationSettings: '"wdth" 100' }}>
              Custom Benchmarks
            </p>
            <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] text-[color:var(--eip-custom-151537,#151537)] w-[225px]" data-node-id="33:432" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[25.5px] mb-0">Industry, region, and</p>
              <p className="leading-[25.5px]">location comparisons.</p>
            </div>
          </div>
        </div>
        <div className="absolute h-[27px] left-[616.5px] top-[393px] w-[156px]" data-node-id="33:433" data-name="Feature underline / Custom Benchmarks">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFeatureUnderlineCustomBenchmarks} />
        </div>
        <div className="absolute content-stretch flex gap-[var(--eip-spacing-16_5,16.5px)] h-[159px] items-start left-[886.5px] top-[324px] w-[294px]" data-node-id="33:435" data-name="Feature / Role-Based Reporting">
          <div className="h-[58.5px] relative shrink-0 w-[52.5px]" data-node-id="33:436" data-name="Image / Feature icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFeatureIcon4} />
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--eip-spacing-9,9px)] items-start relative shrink-0 w-[225px]" data-node-id="33:437" data-name="Feature copy">
            <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-101032,#101032)] w-[225px]" data-node-id="33:438" style={{ fontVariationSettings: '"wdth" 100' }}>
              Role-Based Reporting
            </p>
            <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] text-[color:var(--eip-custom-151537,#151537)] w-[225px]" data-node-id="33:439" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[25.5px] mb-0">The right insights for</p>
              <p className="leading-[25.5px]">every decision maker.</p>
            </div>
          </div>
        </div>
        <div className="absolute h-[27px] left-[931.5px] top-[415.5px] w-[156px]" data-node-id="33:440" data-name="Feature underline / Role-Based Reporting">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFeatureUnderlineRoleBasedReporting} />
        </div>
        <div className="absolute content-stretch flex gap-[var(--eip-spacing-16_5,16.5px)] h-[159px] items-start left-[1210.5px] top-[337.5px] w-[294px]" data-node-id="33:442" data-name="Feature / Secure & Compliant">
          <div className="h-[58.5px] relative shrink-0 w-[52.5px]" data-node-id="33:443" data-name="Image / Feature icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFeatureIcon5} />
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--eip-spacing-9,9px)] items-start relative shrink-0 w-[225px]" data-node-id="33:444" data-name="Feature copy">
            <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-101032,#101032)] w-[225px]" data-node-id="33:445" style={{ fontVariationSettings: '"wdth" 100' }}>{`Secure & Compliant`}</p>
            <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] text-[color:var(--eip-custom-151537,#151537)] w-[225px]" data-node-id="33:446" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[25.5px] mb-0">Enterprise-grade security</p>
              <p className="leading-[25.5px]">and data privacy.</p>
            </div>
          </div>
        </div>
        <div className="absolute h-[27px] left-[1255.5px] top-[429px] w-[156px]" data-node-id="33:447" data-name="Feature underline / Secure & Compliant">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFeatureUnderlineSecureCompliant} />
        </div>
        <div className="absolute h-[63px] left-[741px] top-[145.5px] w-[75px]" data-node-id="33:449" data-name="Flow arrow / data">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowArrowData} />
        </div>
        <div className="absolute h-[75px] left-[1080px] top-[187.5px] w-[90px]" data-node-id="33:451" data-name="Flow arrow / automation">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowArrowAutomation} />
        </div>
        <div className="absolute h-[72px] left-[546px] top-[397.5px] w-[141px]" data-node-id="33:453" data-name="Flow arrow / benchmarks">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowArrowBenchmarks} />
        </div>
        <div className="absolute bg-[var(--eip-custom-ececf3,#ececf3)] h-[1.5px] left-0 top-[517.5px] w-[1536px]" data-node-id="33:455" data-name="Features divider" />
      </div>
      <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[298.5px] items-start relative shrink-0 w-full" data-node-id="33:456" data-name="Real impact every time">
        <div className="absolute h-[214.5px] left-[520.5px] top-0 w-[139.5px]" data-node-id="33:457" data-name="Image / Incoming decorative feedback waves">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageIncomingDecorativeFeedbackWaves} />
        </div>
        <div className="absolute h-[333px] left-[660px] top-[-37.5px] w-[876px]" data-node-id="33:458" data-name="Image / Customer voices decorative illustration">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCustomerVoicesDecorativeIllustration} />
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] items-start left-[63px] top-[36px] w-[445.5px]" data-node-id="33:459" data-name="Real impact introduction">
          <p className="font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[12.5px] text-[color:var(--eip-custom-6321c8,#6321c8)] w-full" data-node-id="33:460" style={{ fontVariationSettings: '"wdth" 100' }}>
            REAL IMPACT. EVERY TIME.
          </p>
          <p className="font-['Roboto:Bold'] font-bold leading-[36px] relative shrink-0 text-[28.5px] text-[color:var(--eip-custom-08082a,#08082a)] w-full" data-node-id="33:464" style={{ fontVariationSettings: '"wdth" 100' }}>
            Turn Every Voice
          </p>
          <p className="bg-clip-text font-['Roboto:Bold'] font-bold leading-[0] relative shrink-0 text-[28.5px] text-[transparent] w-full" data-node-id="33:465" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(90deg, var(--eip-gradient-blue,rgb(62, 74, 240)) 0%, var(--eip-gradient-violet,rgb(141, 34, 213)) 43%, var(--eip-gradient-pink,rgb(231, 54, 144)) 86%, var(--eip-gradient-coral,rgb(239, 87, 100)) 100%)" }}>
            <span className="leading-[36px] text-[#08082a]">{`Into Your `}</span>
            <span className="leading-[36px]">Competitive Edge.</span>
          </p>
          <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[15.5px] text-[color:var(--eip-custom-131332,#131332)] w-full" data-node-id="33:467" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[24px] mb-0">Organizations that listen, understand and act on</p>
            <p className="leading-[24px] mb-0">feedback build stronger relationships, drive loyalty</p>
            <p className="leading-[24px]">and grow faster.</p>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[var(--eip-spacing-15,15px)] h-[42px] items-start left-[64.5px] top-[237px] w-[202.5px]" data-node-id="33:470" data-name="Outcome / Stronger Relationships">
          <div className="bg-[var(--eip-custom-823bed,#823bed)] content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-start px-[var(--eip-spacing-8,8px)] py-[var(--eip-spacing-5,5px)] relative rounded-[var(--eip-radius-30,30px)] shrink-0 size-[37.5px]" data-node-id="33:472" data-name="Outcome badge">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[27px] relative shrink-0 text-[23px] text-[color:var(--eip-color-white,white)] text-center w-[22px]" data-node-id="33:477" style={{ fontVariationSettings: '"wdth" 100' }}>
              ♥
            </p>
          </div>
          <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold'] font-bold h-full leading-[0] min-w-px relative text-[12.5px] text-[color:var(--eip-custom-131332,#131332)]" data-node-id="33:479" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[18px] mb-0">Stronger</p>
            <p className="leading-[18px]">Relationships</p>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[var(--eip-spacing-15,15px)] h-[42px] items-start left-[279px] top-[237px] w-[202.5px]" data-node-id="33:480" data-name="Outcome / Better Performance Every Day">
          <div className="bg-[var(--eip-custom-2767ea,#2767ea)] content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-start px-[var(--eip-spacing-8,8px)] py-[var(--eip-spacing-5,5px)] relative rounded-[var(--eip-radius-30,30px)] shrink-0 size-[37.5px]" data-node-id="33:481" data-name="Outcome badge">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[27px] relative shrink-0 text-[23px] text-[color:var(--eip-color-white,white)] text-center w-[22px]" data-node-id="33:484" style={{ fontVariationSettings: '"wdth" 100' }}>
              ↗
            </p>
          </div>
          <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold'] font-bold h-full leading-[0] min-w-px relative text-[12.5px] text-[color:var(--eip-custom-131332,#131332)]" data-node-id="33:485" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[18px] mb-0">Better Performance</p>
            <p className="leading-[18px]">Every Day</p>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[var(--eip-spacing-15,15px)] h-[42px] items-start left-[493.5px] top-[237px] w-[202.5px]" data-node-id="33:486" data-name="Outcome / Sustainable Growth">
          <div className="bg-[var(--eip-custom-ec429a,#ec429a)] content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-start px-[var(--eip-spacing-8,8px)] py-[var(--eip-spacing-5,5px)] relative rounded-[var(--eip-radius-30,30px)] shrink-0 size-[37.5px]" data-node-id="33:487" data-name="Outcome badge">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[27px] relative shrink-0 text-[23px] text-[color:var(--eip-color-white,white)] text-center w-[22px]" data-node-id="33:490" style={{ fontVariationSettings: '"wdth" 100' }}>
              ★
            </p>
          </div>
          <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold'] font-bold h-full leading-[0] min-w-px relative text-[12.5px] text-[color:var(--eip-custom-131332,#131332)]" data-node-id="33:491" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[18px] mb-0">Sustainable</p>
            <p className="leading-[18px]">Growth</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[165px] items-start relative shrink-0 w-full" data-node-id="33:492" data-name="Elevate every experience">
        <div className="absolute content-stretch flex gap-[var(--eip-spacing-0,0px)] h-[152px] items-start left-[60px] rounded-[var(--eip-radius-18,18px)] top-[6px] w-[1416px]" data-node-id="33:493" style={{ backgroundImage: "linear-gradient(90deg, rgb(99, 79, 255) 0%, rgb(168, 43, 250) 35%, rgb(247, 64, 178) 66%, rgb(255, 117, 48) 100%)" }} data-name="Demo call to action">
          <div className="absolute h-[138px] left-[57px] rounded-[var(--eip-radius-69,69px)] top-[6px] w-[148.5px]" data-node-id="33:497" data-name="Image / Rocket illustration">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-69,69px)] size-full" src={imgImageRocketIllustration} />
          </div>
          <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-9,9px)] h-[111px] items-start left-[255px] text-[color:var(--eip-color-white,white)] top-[22.5px] w-[697.5px]" data-node-id="33:498" data-name="Demo invitation">
            <p className="font-['Roboto:Bold'] font-bold leading-[33px] relative shrink-0 text-[27px] w-[697.5px]" data-node-id="33:500" style={{ fontVariationSettings: '"wdth" 100' }}>
              Ready to Elevate Every Experience?
            </p>
            <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] w-[660px]" data-node-id="33:502" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[25.5px] mb-0">Book a personalized demo and discover how our</p>
              <p className="leading-[25.5px] mb-0">platform can help you listen smarter, understand</p>
              <p className="leading-[25.5px]">deeper and act faster.</p>
            </div>
          </div>
          <a className="absolute bg-[var(--eip-color-white,white)] content-stretch cursor-pointer flex gap-[var(--eip-spacing-12,12px)] h-[63px] items-center justify-center left-[1018.5px] px-[var(--eip-spacing-28,28px)] py-[var(--eip-spacing-20_5,20.5px)] rounded-[var(--eip-full,999px)] top-[45px] w-[259.5px]" data-node-id="33:503" data-name="Button / Request a Demo">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[18px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:503;29:315" style={{ fontVariationSettings: '"wdth" 100' }}>
              Request a Demo
            </p>
            <div className="relative shrink-0 size-[20px]" data-node-id="I33:503;29:316" data-name="Trailing icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrailingIcon1} />
            </div>
          </a>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[204px] items-start relative shrink-0 w-full" data-node-id="33:508" data-name="Footer">
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] h-[147px] items-start left-[60px] top-[12px] w-[244.5px]" data-node-id="33:509" data-name="Platform identity">
          <div className="content-stretch flex flex-[1_0_0] gap-[var(--eip-spacing-12,12px)] items-center min-h-px relative w-full" data-node-id="33:510" data-name="Platform logo">
            <div className="relative shrink-0 size-[36px]" data-node-id="33:511" data-name="Four petals logo">
              <div className="absolute inset-[0_-2.78%_-2.78%_0]">
                <img alt="" className="block max-w-none size-full" src={imgFourPetalsLogo} />
              </div>
            </div>
            <div className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[0] relative shrink-0 text-[13.5px] text-[color:var(--eip-custom-08082a,#08082a)] w-[177px]" data-node-id="33:524" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[16px] mb-0">Experience</p>
              <p className="leading-[16px]">Intelligence Platform</p>
            </div>
          </div>
          <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[11.5px] text-[color:var(--eip-custom-565577,#565577)] w-[244.5px]" data-node-id="33:526" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[16.5px] mb-0">Turning feedback into intelligence</p>
            <p className="leading-[16.5px] mb-0">that drives better experiences</p>
            <p className="leading-[16.5px]">and stronger organizations.</p>
          </div>
          <div className="content-stretch flex gap-[var(--eip-spacing-15,15px)] items-center relative shrink-0 w-[120px]" data-node-id="33:529" data-name="Social links">
            <div className="bg-[var(--eip-color-white,white)] border border-[#dbdbed] border-solid content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-center justify-center p-[var(--eip-spacing-3,3px)] relative rounded-[var(--eip-radius-20,20px)] shrink-0 size-[27px]" data-node-id="33:530" data-name="Social / in">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16.5px] text-[color:var(--eip-custom-5522cb,#5522cb)] text-center w-[21px]" data-node-id="33:532" style={{ fontVariationSettings: '"wdth" 100' }}>
                in
              </p>
            </div>
            <div className="bg-[var(--eip-color-white,white)] border border-[#dbdbed] border-solid content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-center justify-center p-[var(--eip-spacing-3,3px)] relative rounded-[var(--eip-radius-20,20px)] shrink-0 size-[27px]" data-node-id="33:535" data-name="Social / X">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16.5px] text-[color:var(--eip-custom-5522cb,#5522cb)] text-center w-[21px]" data-node-id="33:536" style={{ fontVariationSettings: '"wdth" 100' }}>
                X
              </p>
            </div>
            <div className="bg-[var(--eip-color-white,white)] border border-[#dbdbed] border-solid content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-center justify-center p-[var(--eip-spacing-3,3px)] relative rounded-[var(--eip-radius-20,20px)] shrink-0 size-[27px]" data-node-id="33:537" data-name="Social / ▶">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16.5px] text-[color:var(--eip-custom-5522cb,#5522cb)] text-center w-[21px]" data-node-id="33:538" style={{ fontVariationSettings: '"wdth" 100' }}>
                ▶
              </p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] items-start left-[351px] top-[16px] w-[132px]" data-node-id="33:539" data-name="Footer / Platform">
          <p className="font-['Roboto:Bold'] font-bold leading-[15px] relative shrink-0 text-[11.5px] text-[color:var(--eip-custom-101032,#101032)] w-full" data-node-id="33:541" style={{ fontVariationSettings: '"wdth" 100' }}>
            Platform
          </p>
          <a className="block cursor-pointer font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[12px] text-[color:var(--eip-custom-595878,#595878)] w-full" data-node-id="33:543" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[15px]">Overview</p>
          </a>
          <a className="block cursor-pointer font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[12px] text-[color:var(--eip-custom-595878,#595878)] w-full" data-node-id="33:546" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[15px]">How It Works</p>
          </a>
          <p className="font-['Roboto:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px] text-[color:var(--eip-custom-595878,#595878)] w-full" data-node-id="33:547" style={{ fontVariationSettings: '"wdth" 100' }}>
            Integrations
          </p>
          <p className="font-['Roboto:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px] text-[color:var(--eip-custom-595878,#595878)] w-full" data-node-id="33:548" style={{ fontVariationSettings: '"wdth" 100' }}>
            Security
          </p>
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] items-start leading-[15px] left-[533px] top-[16px] w-[169px]" data-node-id="33:549" data-name="Footer / Solutions">
          <p className="font-['Roboto:Bold'] font-bold relative shrink-0 text-[11.5px] text-[color:var(--eip-custom-101032,#101032)] w-full" data-node-id="33:550" style={{ fontVariationSettings: '"wdth" 100' }}>
            Solutions
          </p>
          <p className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[12px] text-[color:var(--eip-custom-595878,#595878)] w-full" data-node-id="33:551" style={{ fontVariationSettings: '"wdth" 100' }}>
            Customer Experience
          </p>
          <p className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[12px] text-[color:var(--eip-custom-595878,#595878)] w-full" data-node-id="33:552" style={{ fontVariationSettings: '"wdth" 100' }}>
            Employee Experience
          </p>
          <p className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[12px] text-[color:var(--eip-custom-595878,#595878)] w-full" data-node-id="33:553" style={{ fontVariationSettings: '"wdth" 100' }}>
            Product Experience
          </p>
          <p className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[12px] text-[color:var(--eip-custom-595878,#595878)] w-full" data-node-id="33:554" style={{ fontVariationSettings: '"wdth" 100' }}>
            More Solutions
          </p>
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] items-start leading-[15px] left-[744px] top-[16px] w-[143px]" data-node-id="33:555" data-name="Footer / Features">
          <p className="font-['Roboto:Bold'] font-bold relative shrink-0 text-[11.5px] text-[color:var(--eip-custom-101032,#101032)] w-full" data-node-id="33:556" style={{ fontVariationSettings: '"wdth" 100' }}>
            Features
          </p>
          <p className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[12px] text-[color:var(--eip-custom-595878,#595878)] w-full" data-node-id="33:557" style={{ fontVariationSettings: '"wdth" 100' }}>
            Surveys
          </p>
          <p className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[12px] text-[color:var(--eip-custom-595878,#595878)] w-full" data-node-id="33:558" style={{ fontVariationSettings: '"wdth" 100' }}>
            AI Intelligence
          </p>
          <p className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[12px] text-[color:var(--eip-custom-595878,#595878)] w-full" data-node-id="33:559" style={{ fontVariationSettings: '"wdth" 100' }}>
            Analytics
          </p>
          <p className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[12px] text-[color:var(--eip-custom-595878,#595878)] w-full" data-node-id="33:560" style={{ fontVariationSettings: '"wdth" 100' }}>
            Reports
          </p>
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] items-start leading-[15px] left-[923px] top-[16px] w-[138px]" data-node-id="33:561" data-name="Footer / Resources">
          <p className="font-['Roboto:Bold'] font-bold relative shrink-0 text-[11.5px] text-[color:var(--eip-custom-101032,#101032)] w-full" data-node-id="33:562" style={{ fontVariationSettings: '"wdth" 100' }}>
            Resources
          </p>
          <p className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[12px] text-[color:var(--eip-custom-595878,#595878)] w-full" data-node-id="33:563" style={{ fontVariationSettings: '"wdth" 100' }}>
            Case Studies
          </p>
          <p className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[12px] text-[color:var(--eip-custom-595878,#595878)] w-full" data-node-id="33:564" style={{ fontVariationSettings: '"wdth" 100' }}>
            Blog
          </p>
          <p className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[12px] text-[color:var(--eip-custom-595878,#595878)] w-full" data-node-id="33:565" style={{ fontVariationSettings: '"wdth" 100' }}>
            Guides
          </p>
          <p className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[12px] text-[color:var(--eip-custom-595878,#595878)] w-full" data-node-id="33:566" style={{ fontVariationSettings: '"wdth" 100' }}>
            Webinars
          </p>
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] items-start left-[1101px] top-[17px] w-[146px]" data-node-id="33:567" data-name="Footer / Company">
          <p className="font-['Roboto:Bold'] font-bold leading-[15px] relative shrink-0 text-[11.5px] text-[color:var(--eip-custom-101032,#101032)] w-full" data-node-id="33:568" style={{ fontVariationSettings: '"wdth" 100' }}>
            Company
          </p>
          <a className="block cursor-pointer font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[12px] text-[color:var(--eip-custom-595878,#595878)] w-full" data-node-id="33:569" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[15px]">About Us</p>
          </a>
          <p className="font-['Roboto:Regular'] font-normal leading-[15px] relative shrink-0 text-[12px] text-[color:var(--eip-custom-595878,#595878)] w-full" data-node-id="33:570" style={{ fontVariationSettings: '"wdth" 100' }}>
            Careers
          </p>
          <a className="block cursor-pointer font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[12px] text-[color:var(--eip-custom-595878,#595878)] w-full" data-node-id="33:571" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[15px]">Contact Us</p>
          </a>
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] h-[126px] items-start left-[1264.5px] top-[16.5px] w-[211.5px]" data-node-id="33:572" data-name="Stay updated newsletter">
          <p className="font-['Roboto:Bold'] font-bold leading-[15px] relative shrink-0 text-[11.5px] text-[color:var(--eip-custom-101032,#101032)] w-[211.5px]" data-node-id="33:573" style={{ fontVariationSettings: '"wdth" 100' }}>
            Stay Updated
          </p>
          <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[11.5px] text-[color:var(--eip-custom-595878,#595878)] w-[211.5px]" data-node-id="33:575" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[21px] mb-0">Subscribe to our newsletter</p>
            <p className="leading-[21px]">for the latest insights.</p>
          </div>
          <div className="bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex gap-[var(--eip-spacing-15,15px)] h-[39px] items-start px-[var(--eip-spacing-15,15px)] py-[var(--eip-spacing-11,11px)] relative rounded-[var(--eip-radius-10,10px)] shrink-0 w-[211.5px]" data-node-id="33:576" data-name="Newsletter email input">
            <p className="font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[11.5px] text-[color:var(--eip-custom-74728a,#74728a)] w-[145px]" data-node-id="33:579" style={{ fontVariationSettings: '"wdth" 100' }}>
              Enter your email
            </p>
            <p className="font-['Roboto:Bold'] font-bold leading-[18px] relative shrink-0 text-[21px] text-[color:var(--eip-custom-7836de,#7836de)] text-center w-[22px]" data-node-id="33:583" style={{ fontVariationSettings: '"wdth" 100' }}>
              →
            </p>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[20px] items-start left-[60px] top-[173px] w-[720px]" data-node-id="33:586" data-name="Copyright">
          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[11.5px] text-[color:var(--eip-custom-77748e,#77748e)] w-[720px]" data-node-id="33:587" style={{ fontVariationSettings: '"wdth" 100' }}>
            © 2024 Experience Intelligence Platform. All rights reserved.
          </p>
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex font-['Roboto:Regular'] font-normal gap-[var(--eip-spacing-12,12px)] h-[20px] items-start leading-[16px] left-[1264.5px] text-[11.5px] text-[color:var(--eip-custom-77748e,#77748e)] top-[173px] w-[220.5px] whitespace-nowrap" data-node-id="33:590" data-name="Legal links">
          <p className="relative shrink-0" data-node-id="33:591" style={{ fontVariationSettings: '"wdth" 100' }}>
            Privacy Policy
          </p>
          <p className="relative shrink-0" data-node-id="33:592" style={{ fontVariationSettings: '"wdth" 100' }}>
            |
          </p>
          <p className="relative shrink-0" data-node-id="33:593" style={{ fontVariationSettings: '"wdth" 100' }}>
            Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
}