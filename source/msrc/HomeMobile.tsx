const assetPathPrefix = "https://www.figma.com/api/mcp/asset/d3e4c92f-ac1d-4d84-a6a6-f8c0a670213c";
const imgStyleSpectrum = `${assetPathPrefix}/3316a.svg`;
const imgTrailingIcon = `${assetPathPrefix}/ef05f.svg`;
const imgTrailingIcon1 = `${assetPathPrefix}/ce6de.svg`;
const imgImageEngineGlowIllustration1 = `${assetPathPrefix}/bb195.png`;
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
const imgImageFeatureIcon = `${assetPathPrefix}/17c6e.png`;
const imgImageFeatureIcon1 = `${assetPathPrefix}/fc72c.png`;
const imgImageFeatureIcon2 = `${assetPathPrefix}/dfe29.png`;
const imgImageFeatureIcon3 = `${assetPathPrefix}/01073.png`;
const imgImageFeatureIcon4 = `${assetPathPrefix}/6cff8.png`;
const imgImageFeatureIcon5 = `${assetPathPrefix}/22087.png`;
const imgImageCustomerVoicesDecorativeIllustration = `${assetPathPrefix}/0bb17.png`;
const imgImageRocketIllustration = `${assetPathPrefix}/27c89.png`;
const imgExperioLogo = `${assetPathPrefix}/01d11.svg`;
const imgIconMenu = `${assetPathPrefix}/5653a.svg`;
const imgImageEngineGlowIllustration = `${assetPathPrefix}/466c9.svg`;
const imgConnectors = `${assetPathPrefix}/a75eb.svg`;
const imgStepConnector0 = `${assetPathPrefix}/e490a.svg`;
const imgSignalDot = `${assetPathPrefix}/1ac03.svg`;
const imgStepConnector1 = `${assetPathPrefix}/b42ed.svg`;
const imgSignalDot1 = `${assetPathPrefix}/5fb8d.svg`;
const imgStepConnector2 = `${assetPathPrefix}/f34ca.svg`;
const imgSignalDot2 = `${assetPathPrefix}/9c436.svg`;
const imgStepConnector3 = `${assetPathPrefix}/bff7b.svg`;
const imgSignalDot3 = `${assetPathPrefix}/20c14.svg`;
const imgHandDrawnToDriveUnderline = `${assetPathPrefix}/2dfc0.svg`;
const imgSocialInstagram = `${assetPathPrefix}/491be.svg`;
const imgSocialX = `${assetPathPrefix}/f8b5d.svg`;
const imgSocialTikTok = `${assetPathPrefix}/6abcc.svg`;

type LogoExperioProps = {
  className?: string;
  style?: "Spectrum";
};

function LogoExperio({ className, style = "Spectrum" }: LogoExperioProps) {
  return (
    <div className={className || "h-[30px] relative w-[181.21px]"} data-node-id="169:648">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStyleSpectrum} />
    </div>
  );
}

type ButtonContentProps = {
  className?: string;
  label?: string;
  theme?: "Primary" | "Inverse";
};

function ButtonContent({ className, label = "Request a Demo", theme = "Primary" }: ButtonContentProps) {
  const isInverse = theme === "Inverse";
  const isPrimary = theme === "Primary";
  return (
    <div className={className || `content-stretch flex gap-[var(--eip-spacing-12,12px)] items-center justify-center px-[var(--eip-spacing-28,28px)] py-[var(--eip-spacing-19,19px)] relative rounded-[var(--eip-full,999px)] ${isInverse ? "bg-[var(--eip-color-white,white)]" : "bg-gradient-to-r from-[var(--eip-cta-violet,#604ba9)] to-[var(--eip-cta-coral,#f36289)] via-[57%] via-[var(--eip-cta-pink,#c7309a)]"}`} id={isInverse ? "node-29_314" : "node-29_305"}>
      {isPrimary && (
        <>
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[18px] text-[color:var(--eip-color-white,white)] whitespace-nowrap" data-node-id="29:307" style={{ fontVariationSettings: '"wdth" 100' }}>
            {label}
          </p>
          <div className="relative shrink-0 size-[20px]" data-node-id="29:308" data-name="Trailing icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrailingIcon} />
          </div>
        </>
      )}
      {isInverse && (
        <>
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[18px] text-[color:var(--eip-color-ink,#0b0b2c)] whitespace-nowrap" data-node-id="29:315" style={{ fontVariationSettings: '"wdth" 100' }}>
            {label}
          </p>
          <div className="relative shrink-0 size-[20px]" data-node-id="29:316" data-name="Trailing icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrailingIcon1} />
          </div>
        </>
      )}
    </div>
  );
}

export default function HomeMobile() {
  return (
    <div className="bg-[var(--eip-color-white,white)] content-stretch flex flex-col gap-[20px] items-start relative size-full" data-node-id="141:348" data-name="Home / Mobile">
      <div className="bg-[var(--eip-color-white,white)] content-stretch flex h-[64px] items-center justify-between px-[20px] relative shrink-0 w-full" data-node-id="141:349" data-name="Header / Mobile">
        <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="I141:349;140:394" data-name="Brand">
          <div className="h-[24px] relative shrink-0 w-[144.97px]" data-node-id="I141:349;169:678" data-name="Experio logo">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExperioLogo} />
          </div>
        </div>
        <a className="content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[22px] shrink-0 size-[44px]" data-node-id="I141:349;140:398" data-name="Open menu">
          <div className="relative shrink-0 size-[24px]" data-node-id="I141:349;140:399" data-name="icon/menu">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconMenu} />
          </div>
        </a>
      </div>
      <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip pb-[32px] pt-[28px] px-[var(--eip-spacing-20,20px)] relative shrink-0 w-full" data-node-id="141:357" data-name="Hero">
        <div className="bg-[var(--eip-custom-f5efff,#f5efff)] content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-start px-[var(--eip-spacing-16,16px)] py-[var(--eip-spacing-5,5px)] relative rounded-[var(--eip-radius-15,15px)] shrink-0" data-node-id="141:358" data-name="Future of experience badge">
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[13.5px] text-[color:var(--eip-custom-6524d9,#604ba9)] w-[229px]" data-node-id="141:359" style={{ fontVariationSettings: '"wdth" 100' }}>
            THE FUTURE OF EXPERIENCE
          </p>
        </div>
        <div className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[0] min-w-full relative shrink-0 text-[36px] text-[color:var(--eip-custom-08082a,#08082a)] tracking-[-0.5px] w-[min-content]" data-node-id="141:360" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[42px] mb-0">Every Experience</p>
          <p className="leading-[42px]">Has A Voice.</p>
        </div>
        <div className="[word-break:break-word] bg-clip-text font-['Roboto:Bold'] font-bold leading-[0] min-w-full relative shrink-0 text-[36px] text-[transparent] tracking-[-0.5px] w-[min-content]" data-node-id="141:361" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(90deg, rgb(56, 71, 255) 0%, rgb(128, 20, 232) 35%, rgb(224, 28, 150) 65%, rgb(255, 97, 77) 94%, rgb(255, 107, 77) 100%)" }}>
          <p className="leading-[42px] mb-0">We Turn It Into</p>
          <p className="leading-[42px]">Intelligence.</p>
        </div>
        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] min-w-full relative shrink-0 text-[15px] text-[color:var(--eip-custom-101033,#101033)] w-[min-content]" data-node-id="141:362" style={{ fontVariationSettings: '"wdth" 100' }}>
          Collect feedback across every touchpoint, understand what people really think, benchmark performance, and turn every response into meaningful action.
        </p>
        <div className="content-stretch cursor-pointer flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="141:363" data-name="Actions">
          <a className="bg-gradient-to-r content-stretch flex flex-[1_0_0] from-[var(--eip-cta-violet,#604ba9)] gap-[var(--eip-spacing-6,6px)] items-center justify-center min-w-px px-[var(--eip-spacing-28,28px)] py-[var(--eip-spacing-19,19px)] relative rounded-[var(--eip-full,999px)] self-stretch to-[var(--eip-cta-coral,#f36289)] via-[57%] via-[var(--eip-cta-pink,#c7309a)]" data-node-id="141:364" data-name="Button / Content">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[14px] text-[color:var(--eip-color-white,white)] text-left whitespace-nowrap" data-node-id="I141:364;29:307" style={{ fontVariationSettings: '"wdth" 100' }}>
              Request a Demo
            </p>
            <div className="relative shrink-0 size-[20px]" data-node-id="I141:364;29:308" data-name="Trailing icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrailingIcon} />
            </div>
          </a>
          <a className="bg-[var(--eip-color-white,white)] border border-[#d8d5e4] border-solid content-stretch flex flex-[1_0_0] gap-[var(--eip-spacing-6,6px)] items-center justify-center min-w-px px-[var(--eip-spacing-28,28px)] py-[var(--eip-spacing-19,19px)] relative rounded-[var(--eip-full,999px)]" data-node-id="141:368" data-name="Button / Content">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I141:368;29:311" style={{ fontVariationSettings: '"wdth" 100' }}>
              See How It Works
            </p>
            <div className="relative shrink-0 size-[20px]" data-node-id="I141:368;29:312" data-name="Trailing icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrailingIcon1} />
            </div>
          </a>
        </div>
      </div>
      <div className="h-[408px] relative shrink-0 w-full" data-node-id="157:496" data-name="Experience intelligence engine">
        <div className="absolute left-[86.57px] size-[216.87px] top-[87.57px]" data-node-id="157:497" data-name="Engine">
          <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[216.87px_216.87px] size-[216.87px] top-0" data-node-id="157:499" style={{ maskImage: `url("${imgImageEngineGlowIllustration}")` }} data-name="Image / Engine glow illustration">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[129.77%] left-[1.26%] max-w-none top-[-21.16%] w-[100.81%]" src={imgImageEngineGlowIllustration1} />
            </div>
          </div>
        </div>
        <div className="absolute h-[408px] left-0 top-0 w-[390px]" data-node-id="157:500" data-name="Connectors">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgConnectors} />
        </div>
        <div className="absolute bg-[var(--eip-color-white,white)] content-stretch flex gap-[7px] h-[42px] items-center left-[8px] overflow-clip pl-[9px] pr-[6px] rounded-[12px] shadow-[0px_8px_30px_0px_rgba(96,75,169,0.06)] top-[20px] w-[116px]" data-node-id="157:505" data-name="Source / SMS Surveys">
          <div className="relative shrink-0 size-[24px]" data-node-id="157:506" data-name="Image / Channel icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageChannelIcon} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold'] font-bold leading-[15px] min-w-px relative text-[10px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="157:507" style={{ fontVariationSettings: '"wdth" 100' }}>
            SMS Surveys
          </p>
        </div>
        <div className="absolute bg-[var(--eip-color-white,white)] content-stretch flex gap-[7px] h-[42px] items-center left-[266px] overflow-clip pl-[9px] pr-[6px] rounded-[12px] shadow-[0px_8px_30px_0px_rgba(96,75,169,0.06)] top-[20px] w-[116px]" data-node-id="157:508" data-name="Result / Real-Time Insights">
          <div className="relative shrink-0 size-[24px]" data-node-id="157:509" data-name="Image / Result icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageResultIcon} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold'] font-bold leading-[15px] min-w-px relative text-[10px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="157:510" style={{ fontVariationSettings: '"wdth" 100' }}>
            Real-Time Insights
          </p>
        </div>
        <div className="absolute bg-[var(--eip-color-white,white)] content-stretch flex gap-[7px] h-[42px] items-center left-[8px] overflow-clip pl-[9px] pr-[6px] rounded-[12px] shadow-[0px_8px_30px_0px_rgba(96,75,169,0.06)] top-[82px] w-[116px]" data-node-id="157:515" data-name="Source / AI Calls">
          <div className="relative shrink-0 size-[24px]" data-node-id="157:516" data-name="Image / Channel icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageChannelIcon1} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold'] font-bold leading-[15px] min-w-px relative text-[10px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="157:517" style={{ fontVariationSettings: '"wdth" 100' }}>
            AI Calls
          </p>
        </div>
        <div className="absolute bg-[var(--eip-color-white,white)] content-stretch flex gap-[7px] h-[42px] items-center left-[266px] overflow-clip pl-[9px] pr-[6px] rounded-[12px] shadow-[0px_8px_30px_0px_rgba(96,75,169,0.06)] top-[82px] w-[116px]" data-node-id="157:518" data-name="Result / Sentiment Analysis">
          <div className="relative shrink-0 size-[24px]" data-node-id="157:519" data-name="Image / Result icon">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImageResultIcon1} />
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold'] font-bold leading-[15px] min-w-px relative text-[10px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="157:520" style={{ fontVariationSettings: '"wdth" 100' }}>
            Sentiment Analysis
          </p>
        </div>
        <div className="absolute bg-[var(--eip-color-white,white)] content-stretch flex gap-[7px] h-[42px] items-center left-[8px] overflow-clip pl-[9px] pr-[6px] rounded-[12px] shadow-[0px_8px_30px_0px_rgba(96,75,169,0.06)] top-[144px] w-[116px]" data-node-id="157:525" data-name="Source / QR Feedback">
          <div className="relative shrink-0 size-[24px]" data-node-id="157:526" data-name="Image / Channel icon">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[92.59%] left-0 max-w-none top-[3.7%] w-full" src={imgImageChannelIcon2} />
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold'] font-bold leading-[15px] min-w-px relative text-[10px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="157:527" style={{ fontVariationSettings: '"wdth" 100' }}>
            QR Feedback
          </p>
        </div>
        <div className="absolute bg-[var(--eip-color-white,white)] content-stretch flex gap-[7px] h-[42px] items-center left-[266px] overflow-clip pl-[9px] pr-[6px] rounded-[12px] shadow-[0px_8px_30px_0px_rgba(96,75,169,0.06)] top-[144px] w-[116px]" data-node-id="157:528" data-name="Result / Trend Detection">
          <div className="relative shrink-0 size-[24px]" data-node-id="157:529" data-name="Image / Result icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageResultIcon2} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold'] font-bold leading-[15px] min-w-px relative text-[10px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="157:530" style={{ fontVariationSettings: '"wdth" 100' }}>
            Trend Detection
          </p>
        </div>
        <div className="absolute bg-[var(--eip-color-white,white)] content-stretch flex gap-[7px] h-[42px] items-center left-[8px] overflow-clip pl-[9px] pr-[6px] rounded-[12px] shadow-[0px_8px_30px_0px_rgba(96,75,169,0.06)] top-[206px] w-[116px]" data-node-id="157:535" data-name="Source / Web & App">
          <div className="relative shrink-0 size-[24px]" data-node-id="157:536" data-name="Image / Channel icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageChannelIcon3} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold'] font-bold leading-[15px] min-w-px relative text-[10px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="157:537" style={{ fontVariationSettings: '"wdth" 100' }}>{`Web & App`}</p>
        </div>
        <div className="absolute bg-[var(--eip-color-white,white)] content-stretch flex gap-[7px] h-[42px] items-center left-[266px] overflow-clip pl-[9px] pr-[6px] rounded-[12px] shadow-[0px_8px_30px_0px_rgba(96,75,169,0.06)] top-[206px] w-[116px]" data-node-id="157:538" data-name="Result / Benchmarking & Ranking">
          <div className="relative shrink-0 size-[24px]" data-node-id="157:539" data-name="Image / Result icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageResultIcon3} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold'] font-bold leading-[15px] min-w-px relative text-[10px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="157:540" style={{ fontVariationSettings: '"wdth" 100' }}>{`Benchmarking & Ranking`}</p>
        </div>
        <div className="absolute bg-[var(--eip-color-white,white)] content-stretch flex gap-[7px] h-[42px] items-center left-[8px] overflow-clip pl-[9px] pr-[6px] rounded-[12px] shadow-[0px_8px_30px_0px_rgba(96,75,169,0.06)] top-[268px] w-[116px]" data-node-id="157:545" data-name="Source / Email Surveys">
          <div className="relative shrink-0 size-[24px]" data-node-id="157:546" data-name="Image / Channel icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageChannelIcon4} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold'] font-bold leading-[15px] min-w-px relative text-[10px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="157:547" style={{ fontVariationSettings: '"wdth" 100' }}>
            Email Surveys
          </p>
        </div>
        <div className="absolute bg-[var(--eip-color-white,white)] content-stretch flex gap-[7px] h-[42px] items-center left-[266px] overflow-clip pl-[9px] pr-[6px] rounded-[12px] shadow-[0px_8px_30px_0px_rgba(96,75,169,0.06)] top-[268px] w-[116px]" data-node-id="157:548" data-name="Result / Automated Actions">
          <div className="relative shrink-0 size-[24px]" data-node-id="157:549" data-name="Image / Result icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageResultIcon4} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold'] font-bold leading-[15px] min-w-px relative text-[10px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="157:550" style={{ fontVariationSettings: '"wdth" 100' }}>
            Automated Actions
          </p>
        </div>
        <div className="absolute bg-[var(--eip-color-white,white)] content-stretch flex gap-[7px] h-[42px] items-center left-[8px] overflow-clip pl-[9px] pr-[6px] rounded-[12px] shadow-[0px_8px_30px_0px_rgba(96,75,169,0.06)] top-[330px] w-[116px]" data-node-id="157:555" data-name="Source / In-Person">
          <div className="relative shrink-0 size-[24px]" data-node-id="157:556" data-name="Image / Channel icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageChannelIcon5} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold'] font-bold leading-[15px] min-w-px relative text-[10px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="157:557" style={{ fontVariationSettings: '"wdth" 100' }}>
            In-Person
          </p>
        </div>
        <div className="absolute bg-[var(--eip-color-white,white)] content-stretch flex gap-[7px] h-[42px] items-center left-[266px] overflow-clip pl-[9px] pr-[6px] rounded-[12px] shadow-[0px_8px_30px_0px_rgba(96,75,169,0.06)] top-[330px] w-[116px]" data-node-id="157:558" data-name="Result / Executive Reports">
          <div className="relative shrink-0 size-[24px]" data-node-id="157:559" data-name="Image / Result icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageResultIcon5} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold'] font-bold leading-[15px] min-w-px relative text-[10px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="157:560" style={{ fontVariationSettings: '"wdth" 100' }}>
            Executive Reports
          </p>
        </div>
      </div>
      <div className="bg-[var(--eip-custom-ececf3,#ececf3)] h-px relative shrink-0 w-full" data-node-id="141:419" data-name="Divider" />
      <div className="content-stretch flex flex-col gap-[16px] h-[879.889px] items-start overflow-clip px-[var(--eip-spacing-20,20px)] py-[40px] relative shrink-0 w-full" data-node-id="141:420" data-name="From feedback to meaningful action">
        <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--eip-custom-6321cc,#604ba9)] tracking-[1px] w-[min-content]" data-node-id="141:421" style={{ fontVariationSettings: '"wdth" 100' }}>
          ONE PLATFORM. ENDLESS POSSIBILITIES.
        </p>
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Roboto:Bold'] font-bold items-start overflow-clip relative shrink-0 tracking-[-0.3px] w-full" data-node-id="141:454" data-name="Process heading">
          <p className="leading-[34px] relative shrink-0 text-[28px] text-[color:var(--eip-custom-09092c,#09092c)] w-full" data-node-id="141:422" style={{ fontVariationSettings: '"wdth" 100' }}>
            From Feedback
          </p>
          <p className="bg-clip-text leading-[0] relative shrink-0 text-[0px] text-[transparent] w-full" data-node-id="141:423" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(90deg, var(--eip-gradient-blue,rgb(62, 74, 240)) 0%, var(--eip-gradient-violet,rgb(141, 34, 213)) 43%, var(--eip-gradient-pink,rgb(231, 54, 144)) 86%, var(--eip-gradient-coral,rgb(239, 87, 100)) 100%)" }}>
            <span className="leading-[34px] text-[#09092c] text-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`to Meaningful `}</span>
            <span className="leading-[34px] text-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Action.
            </span>
          </p>
        </div>
        <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] h-[3px] items-start relative shrink-0 w-[33px]" data-node-id="141:424" data-name="Accent underline">
          <div className="bg-[var(--eip-custom-3566df,#487eb2)] h-[3px] relative shrink-0 w-[12px]" data-node-id="141:425" data-name="Blue accent" />
          <div className="bg-[var(--eip-custom-f0c13a,#f57915)] h-[3px] relative shrink-0 w-[21px]" data-node-id="141:426" data-name="Yellow accent" />
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[24px] min-h-px min-w-full relative text-[15px] text-[color:var(--eip-custom-151537,#151537)] w-[min-content]" data-node-id="141:427" style={{ fontVariationSettings: '"wdth" 100' }}>
          A complete experience intelligence platform that helps you listen, understand, benchmark and act — all in one place.
        </p>
        <div className="content-stretch flex flex-col gap-[30px] items-start overflow-clip pt-[8px] relative shrink-0 w-full" data-node-id="141:428" data-name="Steps">
          <div className="content-stretch flex gap-[16px] items-center overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="141:429" data-name="Step 1 / Capture">
            <div className="h-[73.778px] relative shrink-0 w-[72px]" data-node-id="141:430" data-name="Image / Step illustration">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageStepIllustration} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" data-node-id="141:431" data-name="Copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-08082a,#08082a)] w-full" data-node-id="141:432" style={{ fontVariationSettings: '"wdth" 100' }}>
                Capture
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[13px] text-[color:var(--eip-custom-151537,#151537)] w-full" data-node-id="141:433" style={{ fontVariationSettings: '"wdth" 100' }}>
                Collect feedback from any channel, anywhere.
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="141:434" data-name="Step 2 / Understand">
            <div className="h-[73.778px] relative shrink-0 w-[72px]" data-node-id="141:435" data-name="Image / Step illustration">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageStepIllustration1} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[46px] items-start min-w-px overflow-clip relative" data-node-id="141:436" data-name="Copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-08082a,#08082a)] w-full" data-node-id="141:437" style={{ fontVariationSettings: '"wdth" 100' }}>
                Understand
              </p>
              <p className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-h-px relative text-[13px] text-[color:var(--eip-custom-151537,#151537)] w-full" data-node-id="141:438" style={{ fontVariationSettings: '"wdth" 100' }}>
                AI analyzes sentiment, themes and intent.
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="141:439" data-name="Step 3 / Benchmark">
            <div className="h-[73.778px] relative shrink-0 w-[72px]" data-node-id="141:440" data-name="Image / Step illustration">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageStepIllustration2} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" data-node-id="141:441" data-name="Copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-08082a,#08082a)] w-full" data-node-id="141:442" style={{ fontVariationSettings: '"wdth" 100' }}>
                Benchmark
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[13px] text-[color:var(--eip-custom-151537,#151537)] w-full" data-node-id="141:443" style={{ fontVariationSettings: '"wdth" 100' }}>
                Compare performance across locations, regions and industries.
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="141:444" data-name="Step 4 / Act">
            <div className="h-[73.778px] relative shrink-0 w-[72px]" data-node-id="141:445" data-name="Image / Step illustration">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageStepIllustration3} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" data-node-id="141:446" data-name="Copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-08082a,#08082a)] w-full" data-node-id="141:447" style={{ fontVariationSettings: '"wdth" 100' }}>
                Act
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[13px] text-[color:var(--eip-custom-151537,#151537)] w-full" data-node-id="141:448" style={{ fontVariationSettings: '"wdth" 100' }}>
                Automate actions and drive meaningful improvement.
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="141:449" data-name="Step 5 / Improve">
            <div className="h-[73.778px] relative shrink-0 w-[72px]" data-node-id="141:450" data-name="Image / Step illustration">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageStepIllustration4} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[66px] items-start min-w-px overflow-clip relative" data-node-id="141:451" data-name="Copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-08082a,#08082a)] w-full" data-node-id="141:452" style={{ fontVariationSettings: '"wdth" 100' }}>
                Improve
              </p>
              <p className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-h-px relative text-[13px] text-[color:var(--eip-custom-151537,#151537)] w-full" data-node-id="141:453" style={{ fontVariationSettings: '"wdth" 100' }}>
                Track results and close the loop continuously.
              </p>
            </div>
          </div>
          <div className="absolute h-[58px] left-[30px] top-[83.78px] w-[4.619px]" data-node-id="151:553" data-name="Step connector 0">
            <div className="absolute inset-[-1.03%_-12.98%]">
              <img alt="" className="block max-w-none size-full" src={imgStepConnector0} />
            </div>
          </div>
          <div className="absolute left-[33.5px] size-[5px] top-[110.28px]" data-node-id="151:554" data-name="Signal dot">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSignalDot} />
          </div>
          <div className="absolute h-[58px] left-[30px] top-[203.56px] w-[4.619px]" data-node-id="151:555" data-name="Step connector 1">
            <div className="absolute inset-[-1.03%_-12.98%]">
              <img alt="" className="block max-w-none size-full" src={imgStepConnector1} />
            </div>
          </div>
          <div className="absolute left-[33.5px] size-[5px] top-[230.06px]" data-node-id="151:556" data-name="Signal dot">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSignalDot1} />
          </div>
          <div className="absolute h-[58px] left-[30px] top-[323.33px] w-[4.619px]" data-node-id="151:557" data-name="Step connector 2">
            <div className="absolute inset-[-1.03%_-12.98%]">
              <img alt="" className="block max-w-none size-full" src={imgStepConnector2} />
            </div>
          </div>
          <div className="absolute left-[33.5px] size-[5px] top-[349.83px]" data-node-id="151:558" data-name="Signal dot">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSignalDot2} />
          </div>
          <div className="absolute h-[58px] left-[30px] top-[443.11px] w-[4.619px]" data-node-id="151:559" data-name="Step connector 3">
            <div className="absolute inset-[-1.03%_-12.98%]">
              <img alt="" className="block max-w-none size-full" src={imgStepConnector3} />
            </div>
          </div>
          <div className="absolute left-[33.5px] size-[5px] top-[469.61px]" data-node-id="151:560" data-name="Signal dot">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSignalDot3} />
          </div>
        </div>
      </div>
      <div className="bg-[var(--eip-custom-ececf3,#ececf3)] h-px relative shrink-0 w-full" data-node-id="142:348" data-name="Divider" />
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[var(--eip-spacing-20,20px)] py-[40px] relative shrink-0 w-full" data-node-id="142:349" data-name="Everything you need">
        <div className="absolute h-[73.47px] left-[220.74px] top-0 w-[169.26px]" data-node-id="142:350" data-name="Image / Upper pink decorative brush">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageUpperPinkDecorativeBrush} />
        </div>
        <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--eip-custom-6625cf,#604ba9)] tracking-[1px] w-[min-content]" data-node-id="142:351" style={{ fontVariationSettings: '"wdth" 100' }}>
          BUILT FOR IMPACT.
        </p>
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="142:352" data-name="Headline">
          <div className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[0] min-w-full relative shrink-0 text-[36px] text-[color:var(--eip-custom-070727,#070727)] tracking-[-0.5px] w-[min-content]" data-node-id="142:353" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[42px] mb-0">Everything</p>
            <p className="leading-[42px]">You Need</p>
          </div>
          <div className="h-[56px] relative shrink-0 w-[157.4px]" data-node-id="142:354" data-name="to Drive">
            <p className="[word-break:break-word] absolute font-['Dancing_Script:Regular'] font-normal leading-[52px] left-0 text-[46px] text-[color:var(--eip-custom-6550e8,#5157b0)] top-0 whitespace-nowrap" data-node-id="142:355">
              to Drive
            </p>
            <div className="absolute h-[9.3px] left-[52px] top-[44px] w-[105.4px]" data-node-id="142:356" data-name="Hand drawn to Drive underline">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHandDrawnToDriveUnderline} />
            </div>
          </div>
          <div className="[word-break:break-word] bg-clip-text font-['Roboto:Bold'] font-bold leading-[0] min-w-full relative shrink-0 text-[36px] text-[transparent] tracking-[-0.5px] w-[min-content]" data-node-id="142:358" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(90deg, rgb(56, 71, 255) 0%, rgb(128, 20, 232) 35%, rgb(224, 28, 150) 65%, rgb(255, 97, 77) 94%, rgb(255, 107, 77) 100%)" }}>
            <p className="leading-[42px] mb-0">Better</p>
            <p className="leading-[42px]">Experiences.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip pt-[20px] relative shrink-0 w-full" data-node-id="142:359" data-name="Features">
          <div className="content-stretch flex gap-[var(--eip-spacing-16_5,16.5px)] items-start relative shrink-0 w-full" data-node-id="142:360" data-name="Feature / Unified Data">
            <div className="h-[49.029px] relative shrink-0 w-[44px]" data-node-id="142:361" data-name="Image / Feature icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFeatureIcon} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-9,9px)] items-start min-w-px relative" data-node-id="142:362" data-name="Feature copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-101032,#101032)] w-full" data-node-id="142:363" style={{ fontVariationSettings: '"wdth" 100' }}>
                Unified Data
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[13px] text-[color:var(--eip-custom-151537,#151537)] w-full" data-node-id="142:364" style={{ fontVariationSettings: '"wdth" 100' }}>
                All feedback in one connected view.
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[var(--eip-spacing-16_5,16.5px)] items-start relative shrink-0 w-full" data-node-id="142:365" data-name="Feature / AI-Powered Insights">
            <div className="h-[49.029px] relative shrink-0 w-[44px]" data-node-id="142:366" data-name="Image / Feature icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFeatureIcon1} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-9,9px)] items-start min-w-px relative" data-node-id="142:367" data-name="Feature copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-101032,#101032)] w-full" data-node-id="142:368" style={{ fontVariationSettings: '"wdth" 100' }}>
                AI-Powered Insights
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[13px] text-[color:var(--eip-custom-151537,#151537)] w-full" data-node-id="142:369" style={{ fontVariationSettings: '"wdth" 100' }}>
                Smarter analysis that finds what matters.
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[var(--eip-spacing-16_5,16.5px)] items-start relative shrink-0 w-full" data-node-id="142:370" data-name="Feature / Automation That Works">
            <div className="h-[49.029px] relative shrink-0 w-[44px]" data-node-id="142:371" data-name="Image / Feature icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFeatureIcon2} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-9,9px)] items-start min-w-px relative" data-node-id="142:372" data-name="Feature copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-101032,#101032)] w-full" data-node-id="142:373" style={{ fontVariationSettings: '"wdth" 100' }}>
                Automation That Works
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[13px] text-[color:var(--eip-custom-151537,#151537)] w-full" data-node-id="142:374" style={{ fontVariationSettings: '"wdth" 100' }}>
                Trigger actions and close the loop automatically.
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[var(--eip-spacing-16_5,16.5px)] items-start relative shrink-0 w-full" data-node-id="142:375" data-name="Feature / Custom Benchmarks">
            <div className="h-[49.029px] relative shrink-0 w-[44px]" data-node-id="142:376" data-name="Image / Feature icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFeatureIcon3} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-9,9px)] items-start min-w-px relative" data-node-id="142:377" data-name="Feature copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-101032,#101032)] w-full" data-node-id="142:378" style={{ fontVariationSettings: '"wdth" 100' }}>
                Custom Benchmarks
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[13px] text-[color:var(--eip-custom-151537,#151537)] w-full" data-node-id="142:379" style={{ fontVariationSettings: '"wdth" 100' }}>
                Industry, region, and location comparisons.
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[var(--eip-spacing-16_5,16.5px)] items-start relative shrink-0 w-full" data-node-id="142:380" data-name="Feature / Role-Based Reporting">
            <div className="h-[49.029px] relative shrink-0 w-[44px]" data-node-id="142:381" data-name="Image / Feature icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFeatureIcon4} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-9,9px)] items-start min-w-px relative" data-node-id="142:382" data-name="Feature copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-101032,#101032)] w-full" data-node-id="142:383" style={{ fontVariationSettings: '"wdth" 100' }}>
                Role-Based Reporting
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[13px] text-[color:var(--eip-custom-151537,#151537)] w-full" data-node-id="142:384" style={{ fontVariationSettings: '"wdth" 100' }}>
                The right insights for every decision maker.
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[var(--eip-spacing-16_5,16.5px)] items-start relative shrink-0 w-full" data-node-id="142:385" data-name="Feature / Secure & Compliant">
            <div className="h-[49.029px] relative shrink-0 w-[44px]" data-node-id="142:386" data-name="Image / Feature icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFeatureIcon5} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-9,9px)] items-start min-w-px relative" data-node-id="142:387" data-name="Feature copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-101032,#101032)] w-full" data-node-id="142:388" style={{ fontVariationSettings: '"wdth" 100' }}>{`Secure & Compliant`}</p>
              <p className="font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[13px] text-[color:var(--eip-custom-151537,#151537)] w-full" data-node-id="142:389" style={{ fontVariationSettings: '"wdth" 100' }}>
                Enterprise-grade security and data privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--eip-custom-ececf3,#ececf3)] h-px relative shrink-0 w-full" data-node-id="142:390" data-name="Divider" />
      <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-[40px] pt-[24px] relative shrink-0 w-full" data-node-id="142:391" data-name="Real impact every time">
        <div className="h-[148.253px] relative shrink-0 w-[390px]" data-node-id="142:392" data-name="Image / Customer voices decorative illustration">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCustomerVoicesDecorativeIllustration} />
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[var(--eip-spacing-20,20px)] relative shrink-0 w-full" data-node-id="142:393" data-name="Copy">
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[12px] text-[color:var(--eip-custom-6321c8,#604ba9)] tracking-[1px] w-full" data-node-id="142:394" style={{ fontVariationSettings: '"wdth" 100' }}>
            REAL IMPACT. EVERY TIME.
          </p>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Roboto:Bold'] font-bold gap-[2px] items-start overflow-clip relative shrink-0 tracking-[-0.3px] w-full" data-node-id="142:395" data-name="Headline">
            <p className="leading-[34px] relative shrink-0 text-[28px] text-[color:var(--eip-custom-08082a,#08082a)] w-full" data-node-id="142:396" style={{ fontVariationSettings: '"wdth" 100' }}>
              Turn Every Voice
            </p>
            <p className="bg-clip-text leading-[0] relative shrink-0 text-[0px] text-[transparent] w-full" data-node-id="142:397" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(90deg, var(--eip-gradient-blue,rgb(62, 74, 240)) 0%, var(--eip-gradient-violet,rgb(141, 34, 213)) 43%, var(--eip-gradient-pink,rgb(231, 54, 144)) 86%, var(--eip-gradient-coral,rgb(239, 87, 100)) 100%)" }}>
              <span className="leading-[34px] text-[#08082a] text-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`Into Your `}</span>
              <span className="leading-[34px] text-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                Competitive Edge.
              </span>
            </p>
          </div>
          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[15px] text-[color:var(--eip-custom-131332,#131332)] w-full" data-node-id="142:398" style={{ fontVariationSettings: '"wdth" 100' }}>
            Organizations that listen, understand and act on feedback build stronger relationships, drive loyalty and grow faster.
          </p>
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pt-[6px] relative shrink-0 w-full" data-node-id="142:399" data-name="Outcomes">
            <div className="content-stretch flex gap-[var(--eip-spacing-15,15px)] h-[42px] items-start relative shrink-0 w-full" data-node-id="142:400" data-name="Outcome / Stronger Relationships">
              <div className="bg-[var(--eip-custom-823bed,#604ba9)] content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-start justify-center px-[var(--eip-spacing-8,8px)] py-[var(--eip-spacing-5,5px)] relative rounded-[var(--eip-radius-30,30px)] shrink-0 size-[37.5px]" data-node-id="142:401" data-name="Outcome badge">
                <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[27px] relative shrink-0 text-[23px] text-[color:var(--eip-color-white,white)] text-center w-[22px]" data-node-id="142:402" style={{ fontVariationSettings: '"wdth" 100' }}>
                  ♥
                </p>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Bold'] font-bold h-full justify-center leading-[0] min-w-px relative text-[12.5px] text-[color:var(--eip-custom-131332,#131332)]" data-node-id="142:403" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[18px]">Stronger Relationships</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--eip-spacing-15,15px)] h-[42px] items-start relative shrink-0 w-full" data-node-id="142:404" data-name="Outcome / Better Performance Every Day">
              <div className="bg-[var(--eip-custom-2767ea,#487eb2)] content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-start px-[var(--eip-spacing-8,8px)] py-[var(--eip-spacing-5,5px)] relative rounded-[var(--eip-radius-30,30px)] shrink-0 size-[37.5px]" data-node-id="142:405" data-name="Outcome badge">
                <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[27px] relative shrink-0 text-[23px] text-[color:var(--eip-color-white,white)] text-center w-[22px]" data-node-id="142:406" style={{ fontVariationSettings: '"wdth" 100' }}>
                  ↗
                </p>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold'] font-bold h-full justify-center leading-[0] relative shrink-0 text-[12.5px] text-[color:var(--eip-custom-131332,#131332)] w-[169px]" data-node-id="142:407" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[18px]">Better Performance Every Day</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--eip-spacing-15,15px)] h-[42px] items-start relative shrink-0 w-full" data-node-id="142:408" data-name="Outcome / Sustainable Growth">
              <div className="bg-[var(--eip-custom-ec429a,#e31e84)] content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-start px-[var(--eip-spacing-8,8px)] py-[var(--eip-spacing-5,5px)] relative rounded-[var(--eip-radius-30,30px)] shrink-0 size-[37.5px]" data-node-id="142:409" data-name="Outcome badge">
                <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[27px] relative shrink-0 text-[23px] text-[color:var(--eip-color-white,white)] text-center w-[22px]" data-node-id="142:410" style={{ fontVariationSettings: '"wdth" 100' }}>
                  ★
                </p>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Bold'] font-bold h-full justify-center leading-[0] min-w-px relative text-[12.5px] text-[color:var(--eip-custom-131332,#131332)]" data-node-id="142:411" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[18px]">Sustainable Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[40px] pt-[8px] px-[var(--eip-spacing-20,20px)] relative shrink-0 w-full" data-node-id="142:412" data-name="Elevate every experience">
        <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip px-[22px] py-[28px] relative rounded-[var(--eip-radius-24,24px)] shrink-0 w-full" data-node-id="142:413" style={{ backgroundImage: "linear-gradient(90deg, rgb(134, 138, 200) 0%, rgb(148, 64, 165) 35%, rgb(227, 30, 132) 66%, rgb(245, 121, 21) 100%)" }} data-name="Demo call to action">
          <div className="h-[102.222px] relative rounded-[51.111px] shrink-0 w-[110px]" data-node-id="142:414" data-name="Image / Rocket illustration">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[51.111px] size-full" src={imgImageRocketIllustration} />
          </div>
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[26px] min-w-full relative shrink-0 text-[20px] text-[color:var(--eip-color-white,white)] text-center w-[min-content]" data-node-id="142:415" style={{ fontVariationSettings: '"wdth" 100' }}>
            Ready to Elevate Every Experience?
          </p>
          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] min-w-full relative shrink-0 text-[15px] text-[color:var(--eip-color-white,white)] text-center w-[min-content]" data-node-id="142:416" style={{ fontVariationSettings: '"wdth" 100' }}>
            Book a personalized demo and discover how our platform can help you listen smarter, understand deeper and act faster.
          </p>
          <ButtonContent className="bg-[var(--eip-color-white,white)] content-stretch cursor-pointer flex gap-[var(--eip-spacing-12,12px)] items-center justify-center px-[var(--eip-spacing-28,28px)] py-[var(--eip-spacing-19,19px)] relative rounded-[var(--eip-full,999px)] shrink-0 w-full" theme="Inverse" />
        </div>
      </div>
      <div className="bg-[var(--eip-color-white,white)] border-[var(--eip-custom-ececf3,#ececf3)] border-solid border-t content-stretch flex flex-col gap-[40px] items-start pb-[44px] pt-[52px] px-[24px] relative shrink-0 w-full" data-node-id="173:993" data-name="Footer">
        <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I173:993;171:631" data-name="Footer brand">
          <LogoExperio className="h-[28px] relative shrink-0 w-[169.13px]" />
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Roboto:Bold'] font-bold items-start leading-[0] overflow-clip relative shrink-0 text-[26px] whitespace-nowrap" data-node-id="I173:993;171:634" data-name="Tagline">
            <div className="relative shrink-0 text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="I173:993;171:635" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[32px] mb-0">Every experience</p>
              <p className="leading-[32px]">has a voice.</p>
            </div>
            <div className="bg-clip-text relative shrink-0 text-[transparent]" data-node-id="I173:993;171:636" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(90deg, rgb(81, 87, 176) 0%, rgb(96, 75, 169) 35%, rgb(227, 30, 132) 65%, rgb(242, 89, 131) 94%, rgb(242, 89, 131) 100%)" }}>
              <p className="leading-[32px] mb-0">We turn it into</p>
              <p className="leading-[32px]">intelligence.</p>
            </div>
          </div>
          <a className="bg-gradient-to-r content-stretch cursor-pointer flex from-[var(--eip-cta-violet,#604ba9)] gap-[var(--eip-spacing-12,12px)] items-center justify-center px-[var(--eip-spacing-28,28px)] py-[var(--eip-spacing-19,19px)] relative rounded-[var(--eip-full,999px)] shrink-0 to-[var(--eip-cta-coral,#f36289)] via-[57%] via-[var(--eip-cta-pink,#c7309a)] w-full" data-node-id="I173:993;172:786" data-name="Button / Request a Demo">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[18px] text-[color:var(--eip-color-white,white)] text-left whitespace-nowrap" data-node-id="I173:993;172:786;29:307" style={{ fontVariationSettings: '"wdth" 100' }}>
              Request a Demo
            </p>
            <div className="relative shrink-0 size-[20px]" data-node-id="I173:993;172:786;29:308" data-name="Trailing icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrailingIcon} />
            </div>
          </a>
        </div>
        <div className="content-stretch flex gap-[24px] items-center overflow-clip relative shrink-0" data-node-id="I173:993;171:622" data-name="Socials">
          <div className="relative shrink-0 size-[26px]" data-node-id="I173:993;171:623" data-name="Social / Instagram">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocialInstagram} />
          </div>
          <div className="relative shrink-0 size-[26px]" data-node-id="I173:993;171:625" data-name="Social / X">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocialX} />
          </div>
          <div className="relative shrink-0 size-[26px]" data-node-id="I173:993;171:627" data-name="Social / TikTok">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocialTikTok} />
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Roboto:Medium'] font-medium gap-[22px] items-start leading-[20px] overflow-clip relative shrink-0 text-[16px] text-[color:var(--eip-custom-595878,#595878)] whitespace-nowrap" data-node-id="I173:993;171:637" data-name="Footer links">
          <p className="relative shrink-0" data-node-id="I173:993;171:638" style={{ fontVariationSettings: '"wdth" 100' }}>
            Contact Us
          </p>
          <p className="relative shrink-0" data-node-id="I173:993;171:639" style={{ fontVariationSettings: '"wdth" 100' }}>
            Privacy
          </p>
          <p className="relative shrink-0" data-node-id="I173:993;171:640" style={{ fontVariationSettings: '"wdth" 100' }}>
            Marketing
          </p>
          <p className="relative shrink-0" data-node-id="I173:993;171:641" style={{ fontVariationSettings: '"wdth" 100' }}>
            Support
          </p>
          <p className="relative shrink-0" data-node-id="I173:993;171:642" style={{ fontVariationSettings: '"wdth" 100' }}>
            Copyright
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I173:993;171:643" data-name="Footer bottom">
          <div className="bg-[var(--eip-custom-ececf3,#ececf3)] h-px relative shrink-0 w-full" data-node-id="I173:993;171:644" data-name="Divider" />
          <div className="h-[28px] relative shrink-0 w-[10px]" data-node-id="I173:993;171:645" data-name="Spacer" />
          <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[0] relative shrink-0 text-[11px] text-[color:var(--eip-custom-77748e,#77748e)] tracking-[1.2px] whitespace-nowrap" data-node-id="I173:993;171:646" style={{ fontVariationSettings: '"wdth" 100' }}>
            <span className="leading-[14px]">{`DEVELOPED AND DESIGNED BY `}</span>
            <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid font-['Roboto:Bold'] font-bold leading-[14px] text-[#9440a5] underline" href="https://www.udtech-sa.com/ar/home" style={{ fontVariationSettings: '"wdth" 100' }} target="_blank">
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid underline" href="https://www.udtech-sa.com/ar/home" style={{ fontVariationSettings: '"wdth" 100' }} target="_blank">
                UD-TECH
              </span>
            </a>
          </p>
          <div className="relative shrink-0 size-[10px]" data-node-id="I173:993;171:647" data-name="Spacer" />
          <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[14px] relative shrink-0 text-[11px] text-[color:var(--eip-custom-77748e,#77748e)] tracking-[1.2px] whitespace-nowrap" data-node-id="I173:993;171:648" style={{ fontVariationSettings: '"wdth" 100' }}>
            © 2026 EXPERIO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </div>
  );
}