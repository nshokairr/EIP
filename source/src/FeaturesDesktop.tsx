const assetPathPrefix = "https://www.figma.com/api/mcp/asset/dbf07e65-64ac-41de-b396-51dcdc5f9035";
const imgIconArrowRight = `${assetPathPrefix}/c7347.svg`;
const imgBrandSymbolImage = `${assetPathPrefix}/ca2fa.png`;
const imgImageSphereAndFlowingSignalTrails2 = `${assetPathPrefix}/aee30.png`;
const imgImageSuppliedCentralBrandMark = `${assetPathPrefix}/0bddc.png`;
const imgImageAiCallsSmsIcon2 = `${assetPathPrefix}/5a868.png`;
const imgImageAiPoweredAnalysisIcon2 = `${assetPathPrefix}/e508e.png`;
const imgImageRealTimeDashboardsIcon2 = `${assetPathPrefix}/864cf.png`;
const imgImageCustomSurveysIcon2 = `${assetPathPrefix}/bf95e.png`;
const imgImageAdvancedFilteringIcon2 = `${assetPathPrefix}/03f35.png`;
const imgImageMultiChannelCollectionIcon = `${assetPathPrefix}/7f113.png`;
const imgImageMultiLanguageSupportIcon = `${assetPathPrefix}/2f7a8.png`;
const imgImageSecureCompliantIcon2 = `${assetPathPrefix}/4d4c4.png`;
const imgImageBenchmarkingRankingIcon2 = `${assetPathPrefix}/70f97.png`;
const imgDropdownChevron = `${assetPathPrefix}/c717e.svg`;
const imgImageSphereAndFlowingSignalTrails = `${assetPathPrefix}/b84cd.svg`;
const imgImageSphereAndFlowingSignalTrails1 = `${assetPathPrefix}/492d2.svg`;
const imgOrbitRadius172 = `${assetPathPrefix}/d654d.svg`;
const imgOrbitRadius149 = `${assetPathPrefix}/a18a7.svg`;
const imgOrbitRadius128 = `${assetPathPrefix}/74a8f.svg`;
const imgOrbitRadius108 = `${assetPathPrefix}/df842.svg`;
const imgIntelligenceHub = `${assetPathPrefix}/5b4cd.svg`;
const imgOrbitalSignalConnectors = `${assetPathPrefix}/71e43.svg`;
const imgImageAiCallsSmsIcon = `${assetPathPrefix}/a96bf.svg`;
const imgImageAiCallsSmsIcon1 = `${assetPathPrefix}/ab18f.svg`;
const imgAiCallsSmsConnector = `${assetPathPrefix}/bfada.svg`;
const imgImageAiPoweredAnalysisIcon = `${assetPathPrefix}/2ec22.svg`;
const imgImageAiPoweredAnalysisIcon1 = `${assetPathPrefix}/69336.svg`;
const imgAiPoweredAnalysisConnector = `${assetPathPrefix}/3466b.svg`;
const imgImageRealTimeDashboardsIcon = `${assetPathPrefix}/20187.svg`;
const imgImageRealTimeDashboardsIcon1 = `${assetPathPrefix}/d07ca.svg`;
const imgRealTimeDashboardsConnector = `${assetPathPrefix}/996b7.svg`;
const imgImageCustomSurveysIcon = `${assetPathPrefix}/1ad16.svg`;
const imgImageCustomSurveysIcon1 = `${assetPathPrefix}/19e0d.svg`;
const imgCustomSurveysConnector = `${assetPathPrefix}/3310e.svg`;
const imgImageAdvancedFilteringIcon = `${assetPathPrefix}/f8bfa.svg`;
const imgImageAdvancedFilteringIcon1 = `${assetPathPrefix}/79825.svg`;
const imgAdvancedFilteringConnector = `${assetPathPrefix}/1e941.svg`;
const imgMultiChannelCollectionConnector = `${assetPathPrefix}/11b09.svg`;
const imgMultiLanguageSupportConnector = `${assetPathPrefix}/9a949.svg`;
const imgImageSecureCompliantIcon = `${assetPathPrefix}/d326e.svg`;
const imgImageSecureCompliantIcon1 = `${assetPathPrefix}/739c2.svg`;
const imgSecureCompliantConnector = `${assetPathPrefix}/822e2.svg`;
const imgImageBenchmarkingRankingIcon = `${assetPathPrefix}/967d3.svg`;
const imgImageBenchmarkingRankingIcon1 = `${assetPathPrefix}/fe23b.svg`;
const imgBenchmarkingRankingConnector = `${assetPathPrefix}/e58ef.svg`;
const imgSignalDotMatrix = `${assetPathPrefix}/92b18.svg`;

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

export default function FeaturesDesktop() {
  return (
    <div className="bg-[var(--eip-color-white,white)] content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-start relative size-full" data-node-id="33:948" data-name="Features / Desktop">
      <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] h-[90px] items-center pl-[var(--eip-spacing-46,46px)] pr-[var(--eip-spacing-41,41px)] py-[var(--eip-spacing-24,24px)] relative shrink-0 w-[1536px]" data-node-id="33:949" data-name="Header">
        <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-13,13px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0 w-[245px]" data-node-id="I33:949;29:147" data-name="Brand">
          <div className="content-stretch flex h-[42px] items-start relative shrink-0 w-[40px]" data-node-id="I33:949;29:148" data-name="Brand symbol">
            <div className="absolute h-[48px] left-[-6px] top-[-2px] w-[50px]" data-node-id="I33:949;29:149" data-name="Brand symbol / Image">
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBrandSymbolImage} />
            </div>
          </div>
          <div className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[0] relative shrink-0 text-[18px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:949;29:150" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[21px] mb-0">Experience</p>
            <p className="leading-[21px]">Intelligence Platform</p>
          </div>
        </a>
        <div className="flex-[1_0_0] h-[42px] min-w-px relative" data-node-id="I33:949;29:151" data-name="Flexible spacing / Before navigation" />
        <div className="content-stretch flex gap-[var(--eip-spacing-53_2,53.2px)] h-[42px] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0 w-[694px]" data-node-id="I33:949;29:152" data-name="Navigation">
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:949;29:153" data-name="Navigation / Platform">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:949;29:154" style={{ fontVariationSettings: '"wdth" 100' }}>
              Platform
            </p>
          </a>
          <div className="content-stretch flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:949;29:156" data-name="Navigation / Solutions">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] whitespace-nowrap" data-node-id="I33:949;29:157" style={{ fontVariationSettings: '"wdth" 100' }}>
              Solutions
            </p>
            <div className="relative shrink-0 size-[10px]" data-node-id="I33:949;29:158" data-name="Dropdown chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDropdownChevron} />
            </div>
          </div>
          <div className="content-stretch flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:949;29:160" data-name="Navigation / Features">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-violet,#7816ba)] whitespace-nowrap" data-node-id="I33:949;29:161" style={{ fontVariationSettings: '"wdth" 100' }}>
              Features
            </p>
            <div className="absolute h-[2px] left-px top-[29px] w-[53px]" data-node-id="I33:949;29:174" style={{ backgroundImage: "linear-gradient(90deg, var(--eip-gradient-blue,rgb(62, 74, 240)) 0%, var(--eip-gradient-violet,rgb(141, 34, 213)) 43%, var(--eip-gradient-pink,rgb(231, 54, 144)) 86%, var(--eip-gradient-coral,rgb(239, 87, 100)) 100%)" }} data-name="Active indicator" />
          </div>
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:949;29:162" data-name="Navigation / Benchmarking">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:949;29:163" style={{ fontVariationSettings: '"wdth" 100' }}>
              Benchmarking
            </p>
          </a>
          <div className="content-stretch flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:949;29:164" data-name="Navigation / Resources">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] whitespace-nowrap" data-node-id="I33:949;29:165" style={{ fontVariationSettings: '"wdth" 100' }}>
              Resources
            </p>
            <div className="relative shrink-0 size-[10px]" data-node-id="I33:949;29:166" data-name="Dropdown chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDropdownChevron} />
            </div>
          </div>
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:949;29:168" data-name="Navigation / About Us">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:949;29:169" style={{ fontVariationSettings: '"wdth" 100' }}>
              About Us
            </p>
          </a>
        </div>
        <div className="flex-[1_0_0] h-[42px] min-w-px relative" data-node-id="I33:949;29:170" data-name="Flexible spacing / Before actions" />
        <div className="content-stretch flex gap-[var(--eip-spacing-14,14px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:949;29:171" data-name="Actions">
          <Button className="border border-[var(--eip-color-violet,#7816ba)] border-solid content-stretch flex gap-[var(--eip-spacing-12,12px)] items-center justify-center pl-[var(--eip-spacing-24,24px)] pr-[var(--eip-spacing-23,23px)] py-[var(--eip-spacing-12,12px)] relative rounded-[var(--eip-full,999px)] shrink-0" label="Log In" showTrailingIcon={false} style="Outline" />
          <a className="bg-gradient-to-r content-stretch cursor-pointer flex from-[var(--eip-cta-violet,#7c23f8)] gap-[var(--eip-spacing-12,12px)] items-center justify-center pl-[var(--eip-spacing-24,24px)] pr-[var(--eip-spacing-25,25px)] py-[var(--eip-spacing-11,11px)] relative rounded-[var(--eip-full,999px)] shrink-0 to-[var(--eip-cta-coral,#fe6c57)] via-[57%] via-[var(--eip-cta-pink,#e024a7)]" data-node-id="I33:949;29:173" data-name="Button / Request demo">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-white,white)] text-left whitespace-nowrap" data-node-id="I33:949;29:173;13:13456" style={{ fontVariationSettings: '"wdth" 100' }}>
              Request a Demo
            </p>
            <IconArrowRight className="relative shrink-0 size-[20px]" />
          </a>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[934px] items-start relative shrink-0 w-full" data-node-id="33:987" data-name="Capabilities overview">
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-16,16px)] h-[340px] items-start left-[88px] top-[39px] w-[456px]" data-node-id="33:988" data-name="Feature introduction">
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[84px] items-start left-px top-[261px]" data-node-id="33:999" data-name="Introduction description">
            <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-h-px relative text-[17px] text-[color:var(--eip-color-ink,#0b0b2c)] w-full" data-node-id="33:1001" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[28px] mb-0">Everything you need to capture feedback,</p>
              <p className="leading-[28px] mb-0">turn it into intelligence, and drive</p>
              <p className="leading-[28px]">measurable improvement.</p>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[17px] text-[color:var(--eip-custom-631bdf,#631bdf)] w-[456px]" data-node-id="33:990" style={{ fontVariationSettings: '"wdth" 100' }}>
            FEATURES
          </p>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Roboto:Bold'] font-bold items-start overflow-clip relative shrink-0 w-full" data-node-id="37:351" data-name="Feature headline">
            <div className="leading-[0] relative shrink-0 text-[64px] text-[color:var(--eip-custom-090a2d,#090a2d)] w-[456px]" data-node-id="33:994" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[62px] mb-0">Powerful</p>
              <p className="leading-[62px]">capabilities.</p>
            </div>
            <p className="bg-clip-text leading-[66px] relative shrink-0 text-[60px] text-[transparent] tracking-[-1px] whitespace-nowrap" data-node-id="33:998" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(90deg, rgb(56, 71, 255) 0%, rgb(128, 20, 232) 35%, rgb(224, 28, 150) 65%, rgb(255, 97, 77) 94%, rgb(255, 107, 77) 100%)" }}>
              Zero guesswork.
            </p>
          </div>
        </div>
        <div className="absolute bg-gradient-to-r from-[#691aeb] h-[3px] left-[89px] to-[#ff6e29] top-[410px] w-[52px]" data-node-id="33:1002" data-name="Intro accent" />
        <div className="absolute h-[212px] left-0 overflow-clip top-[722px] w-[750px]" data-node-id="34:567" data-name="Artwork / Sphere and flowing signal trails / feather">
          <div className="absolute contents left-0 top-0" data-node-id="37:381" data-name="horizontal edge fade / mask group">
            <div className="absolute contents left-0 top-0" data-node-id="37:380" data-name="vertical edge fade / mask group">
              <div className="absolute h-[212px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[750px_212px,_750px_212px] top-0 w-[750px]" data-node-id="33:1005" style={{ maskImage: `url("${imgImageSphereAndFlowingSignalTrails}"), url("${imgImageSphereAndFlowingSignalTrails1}")` }} data-name="Image / Sphere and flowing signal trails">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSphereAndFlowingSignalTrails2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[366px] items-start left-[660px] top-[200px] w-[362px]" data-node-id="33:1006" data-name="Native feature orbit">
          <div className="absolute left-[9px] size-[344px] top-[11px]" data-node-id="33:1007" data-name="Orbit radius 172">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgOrbitRadius172} />
          </div>
          <div className="absolute left-[32px] size-[298px] top-[34px]" data-node-id="33:1008" data-name="Orbit radius 149">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgOrbitRadius149} />
          </div>
          <div className="absolute left-[53px] size-[256px] top-[55px]" data-node-id="33:1009" data-name="Orbit radius 128">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgOrbitRadius128} />
          </div>
          <div className="absolute left-[73px] size-[216px] top-[75px]" data-node-id="33:1010" data-name="Orbit radius 108">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgOrbitRadius108} />
          </div>
          <div className="absolute left-[94px] size-[174px] top-[96px]" data-node-id="33:1011" data-name="Intelligence hub">
            <div className="absolute inset-[-8.05%_-12.64%_-17.24%_-12.64%]">
              <img alt="" className="block max-w-none size-full" src={imgIntelligenceHub} />
            </div>
          </div>
          <div className="absolute h-[110px] left-[126px] rounded-[20px] top-[133px] w-[111px]" data-node-id="39:351" data-name="Image / Supplied central brand mark">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImageSuppliedCentralBrandMark} />
          </div>
        </div>
        <div className="absolute h-[562px] left-[565px] top-[139px] w-[606px]" data-node-id="33:1024" data-name="Orbital signal connectors">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgOrbitalSignalConnectors} />
        </div>
        <div className="absolute h-[117px] left-[571px] overflow-clip top-[71px] w-[120px]" data-node-id="34:532" data-name="Artwork / AI Calls & SMS icon / feather">
          <div className="absolute contents left-0 top-0" data-node-id="37:379" data-name="horizontal edge fade / mask group">
            <div className="absolute contents left-0 top-0" data-node-id="37:378" data-name="vertical edge fade / mask group">
              <div className="absolute h-[117px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[120px_117px,_120px_117px] rounded-[58.5px] top-0 w-[120px]" data-node-id="33:1037" style={{ maskImage: `url("${imgImageAiCallsSmsIcon}"), url("${imgImageAiCallsSmsIcon1}")` }} data-name="Image / AI Calls & SMS icon">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[58.5px] size-full" src={imgImageAiCallsSmsIcon2} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-10,10px)] h-[150px] items-start left-[713px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[64px] w-[279px]" data-node-id="33:1038" data-name="AI Calls & SMS callout">
          <p className="font-['Roboto:Bold'] font-bold leading-[29px] relative shrink-0 text-[24px] w-[279px]" data-node-id="33:1040" style={{ fontVariationSettings: '"wdth" 100' }}>{`AI Calls & SMS`}</p>
          <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[14px] w-[279px]" data-node-id="33:1042" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[24px] mb-0">Reach your audience at scale with</p>
            <p className="leading-[24px] mb-0">AI-powered calls and SMS via</p>
            <p className="leading-[24px]">trusted providers.</p>
          </div>
        </div>
        <div className="absolute h-[27px] left-[674px] top-[83px] w-[30px]" data-node-id="33:1043" data-name="AI Calls & SMS connector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAiCallsSmsConnector} />
        </div>
        <div className="absolute h-[119px] left-[986px] overflow-clip top-[140px] w-[117px]" data-node-id="34:537" data-name="Artwork / AI-Powered Analysis icon / feather">
          <div className="absolute contents left-0 top-0" data-node-id="37:377" data-name="horizontal edge fade / mask group">
            <div className="absolute contents left-0 top-0" data-node-id="37:376" data-name="vertical edge fade / mask group">
              <div className="absolute h-[119px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[117px_119px,_117px_119px] rounded-[58.5px] top-0 w-[117px]" data-node-id="33:1046" style={{ maskImage: `url("${imgImageAiPoweredAnalysisIcon}"), url("${imgImageAiPoweredAnalysisIcon1}")` }} data-name="Image / AI-Powered Analysis icon">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[58.5px] size-full" src={imgImageAiPoweredAnalysisIcon2} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-10,10px)] h-[150px] items-start left-[1138px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[145px] w-[300px]" data-node-id="33:1047" data-name="AI-Powered Analysis callout">
          <p className="font-['Roboto:Bold'] font-bold leading-[28px] relative shrink-0 text-[23px] w-[300px]" data-node-id="33:1049" style={{ fontVariationSettings: '"wdth" 100' }}>
            AI-Powered Analysis
          </p>
          <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[14px] w-[300px]" data-node-id="33:1050" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[24px] mb-0">Automatically analyze sentiment,</p>
            <p className="leading-[24px] mb-0">topics, and intent from open text</p>
            <p className="leading-[24px]">feedback with advanced AI models.</p>
          </div>
        </div>
        <div className="absolute h-[27px] left-[1099px] top-[164px] w-[30px]" data-node-id="33:1051" data-name="AI-Powered Analysis connector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAiPoweredAnalysisConnector} />
        </div>
        <div className="absolute h-[105px] left-[1068px] overflow-clip top-[356px] w-[98px]" data-node-id="34:542" data-name="Artwork / Real-Time Dashboards icon / feather">
          <div className="absolute contents left-0 top-0" data-node-id="37:375" data-name="horizontal edge fade / mask group">
            <div className="absolute contents left-0 top-0" data-node-id="37:374" data-name="vertical edge fade / mask group">
              <div className="absolute h-[105px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[98px_105px,_98px_105px] rounded-[49px] top-0 w-[98px]" data-node-id="33:1054" style={{ maskImage: `url("${imgImageRealTimeDashboardsIcon}"), url("${imgImageRealTimeDashboardsIcon1}")` }} data-name="Image / Real-Time Dashboards icon">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[49px] size-full" src={imgImageRealTimeDashboardsIcon2} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-10,10px)] h-[150px] items-start left-[1209px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[368px] w-[297px]" data-node-id="33:1055" data-name="Real-Time Dashboards callout">
          <p className="font-['Roboto:Bold'] font-bold leading-[28px] relative shrink-0 text-[23px] w-[297px]" data-node-id="33:1056" style={{ fontVariationSettings: '"wdth" 100' }}>
            Real-Time Dashboards
          </p>
          <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[14px] w-[297px]" data-node-id="33:1057" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[24px] mb-0">Live dashboards with key metrics,</p>
            <p className="leading-[24px] mb-0">trends, and alerts to keep you</p>
            <p className="leading-[24px]">ahead—always.</p>
          </div>
        </div>
        <div className="absolute h-[27px] left-[1170px] top-[387px] w-[30px]" data-node-id="33:1058" data-name="Real-Time Dashboards connector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRealTimeDashboardsConnector} />
        </div>
        <div className="absolute h-[115px] left-[277px] overflow-clip top-[389px] w-[111px]" data-node-id="34:547" data-name="Artwork / Custom Surveys icon / feather">
          <div className="absolute contents left-0 top-0" data-node-id="37:373" data-name="horizontal edge fade / mask group">
            <div className="absolute contents left-0 top-0" data-node-id="37:372" data-name="vertical edge fade / mask group">
              <div className="absolute h-[115px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[111px_115px,_111px_115px] rounded-[55.5px] top-0 w-[111px]" data-node-id="33:1061" style={{ maskImage: `url("${imgImageCustomSurveysIcon}"), url("${imgImageCustomSurveysIcon1}")` }} data-name="Image / Custom Surveys icon">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[55.5px] size-full" src={imgImageCustomSurveysIcon2} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-10,10px)] h-[150px] items-start left-[428px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[391px] w-[257px]" data-node-id="33:1062" data-name="Custom Surveys callout">
          <p className="font-['Roboto:Bold'] font-bold leading-[29px] relative shrink-0 text-[24px] w-[257px]" data-node-id="33:1063" style={{ fontVariationSettings: '"wdth" 100' }}>
            Custom Surveys
          </p>
          <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[14px] w-[257px]" data-node-id="33:1064" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[24px] mb-0">Create tailored surveys for any</p>
            <p className="leading-[24px] mb-0">department, service, or journey</p>
            <p className="leading-[24px]">in minutes—no coding required.</p>
          </div>
        </div>
        <div className="absolute h-[27px] left-[389px] top-[410px] w-[30px]" data-node-id="33:1065" data-name="Custom Surveys connector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomSurveysConnector} />
        </div>
        <div className="absolute h-[100px] left-[90px] overflow-clip top-[591px] w-[96px]" data-node-id="34:552" data-name="Artwork / Advanced Filtering icon / feather">
          <div className="absolute contents left-0 top-0" data-node-id="37:371" data-name="horizontal edge fade / mask group">
            <div className="absolute contents left-0 top-0" data-node-id="37:370" data-name="vertical edge fade / mask group">
              <div className="absolute h-[100px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[96px_100px,_96px_100px] rounded-[48px] top-0 w-[96px]" data-node-id="33:1068" style={{ maskImage: `url("${imgImageAdvancedFilteringIcon}"), url("${imgImageAdvancedFilteringIcon1}")` }} data-name="Image / Advanced Filtering icon">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[48px] size-full" src={imgImageAdvancedFilteringIcon2} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-10,10px)] h-[150px] items-start left-[219px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[582px] w-[250px]" data-node-id="33:1069" data-name="Advanced Filtering callout">
          <p className="font-['Roboto:Bold'] font-bold leading-[26px] relative shrink-0 text-[21px] w-[250px]" data-node-id="33:1071" style={{ fontVariationSettings: '"wdth" 100' }}>
            Advanced Filtering
          </p>
          <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[14px] w-[250px]" data-node-id="33:1072" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[24px] mb-0">Drill down by time, department,</p>
            <p className="leading-[24px] mb-0">service, channel, and more to</p>
            <p className="leading-[24px]">find what matters.</p>
          </div>
        </div>
        <div className="absolute h-[27px] left-[180px] top-[601px] w-[30px]" data-node-id="33:1073" data-name="Advanced Filtering connector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdvancedFilteringConnector} />
        </div>
        <div
          className="absolute h-[109px] left-[434px] rounded-[51.5px] top-[574px] w-[103px]"
          data-node-id="33:1076"
          data-name="Image / Multi-Channel
Collection icon"
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[51.5px] size-full" src={imgImageMultiChannelCollectionIcon} />
        </div>
        <div
          className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-10,10px)] h-[150px] items-start leading-[0] left-[567px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[577px] w-[256px]"
          data-node-id="33:1077"
          data-name="Multi-Channel
Collection callout"
        >
          <div className="font-['Roboto:Bold'] font-bold relative shrink-0 text-[22px] w-[256px]" data-node-id="33:1079" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[27px] mb-0">Multi-Channel</p>
            <p className="leading-[27px]">Collection</p>
          </div>
          <div className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[14px] w-[256px]" data-node-id="33:1080" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[24px] mb-0">Collect feedback across voice,</p>
            <p className="leading-[24px] mb-0">SMS, web, email, and more in</p>
            <p className="leading-[24px]">one unified platform.</p>
          </div>
        </div>
        <div
          className="absolute h-[27px] left-[528px] top-[596px] w-[30px]"
          data-node-id="33:1081"
          data-name="Multi-Channel
Collection connector"
        >
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMultiChannelCollectionConnector} />
        </div>
        <div
          className="absolute h-[101px] left-[753px] rounded-[50.5px] top-[648px] w-[106px]"
          data-node-id="33:1084"
          data-name="Image / Multi-Language
Support icon"
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50.5px] size-full" src={imgImageMultiLanguageSupportIcon} />
        </div>
        <div
          className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-10,10px)] h-[150px] items-start leading-[0] left-[876px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[656px] w-[252px]"
          data-node-id="33:1085"
          data-name="Multi-Language
Support callout"
        >
          <div className="font-['Roboto:Bold'] font-bold relative shrink-0 text-[21px] w-[252px]" data-node-id="33:1086" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[26px] mb-0">Multi-Language</p>
            <p className="leading-[26px]">Support</p>
          </div>
          <div className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[14px] w-[252px]" data-node-id="33:1087" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[24px] mb-0">Engage everyone in their</p>
            <p className="leading-[24px] mb-0">preferred language for higher</p>
            <p className="leading-[24px]">response and inclusivity.</p>
          </div>
        </div>
        <div
          className="absolute h-[27px] left-[837px] top-[675px] w-[30px]"
          data-node-id="33:1088"
          data-name="Multi-Language
Support connector"
        >
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMultiLanguageSupportConnector} />
        </div>
        <div className="absolute h-[114px] left-[1101px] overflow-clip top-[616px] w-[102px]" data-node-id="34:557" data-name="Artwork / Secure & Compliant icon / feather">
          <div className="absolute contents left-0 top-0" data-node-id="37:369" data-name="horizontal edge fade / mask group">
            <div className="absolute contents left-0 top-0" data-node-id="37:368" data-name="vertical edge fade / mask group">
              <div className="absolute h-[114px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[102px_114px,_102px_114px] rounded-[51px] top-0 w-[102px]" data-node-id="33:1091" style={{ maskImage: `url("${imgImageSecureCompliantIcon}"), url("${imgImageSecureCompliantIcon1}")` }} data-name="Image / Secure & Compliant icon">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[51px] size-full" src={imgImageSecureCompliantIcon2} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-10,10px)] h-[150px] items-start left-[1236px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[622px] w-[260px]" data-node-id="33:1092" data-name="Secure & Compliant callout">
          <p className="font-['Roboto:Bold'] font-bold leading-[26px] relative shrink-0 text-[21px] w-[260px]" data-node-id="33:1093" style={{ fontVariationSettings: '"wdth" 100' }}>{`Secure & Compliant`}</p>
          <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[14px] w-[260px]" data-node-id="33:1094" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[24px] mb-0">Enterprise-grade security with</p>
            <p className="leading-[24px] mb-0">role-based access and full</p>
            <p className="leading-[24px]">data privacy compliance.</p>
          </div>
        </div>
        <div className="absolute h-[27px] left-[1197px] top-[641px] w-[30px]" data-node-id="33:1095" data-name="Secure & Compliant connector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSecureCompliantConnector} />
        </div>
        <div className="absolute h-[92px] left-[927px] overflow-clip top-[822px] w-[79px]" data-node-id="34:562" data-name="Artwork / Benchmarking & Ranking icon / feather">
          <div className="absolute contents left-0 top-0" data-node-id="37:367" data-name="horizontal edge fade / mask group">
            <div className="absolute contents left-0 top-0" data-node-id="37:366" data-name="vertical edge fade / mask group">
              <div className="absolute h-[92px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[79px_92px,_79px_92px] rounded-[39.5px] top-0 w-[79px]" data-node-id="33:1098" style={{ maskImage: `url("${imgImageBenchmarkingRankingIcon}"), url("${imgImageBenchmarkingRankingIcon1}")` }} data-name="Image / Benchmarking & Ranking icon">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[39.5px] size-full" src={imgImageBenchmarkingRankingIcon2} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-10,10px)] h-[150px] items-start left-[1056px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[816px] w-[431px]" data-node-id="33:1099" data-name="Benchmarking & Ranking callout">
          <p className="font-['Roboto:Bold'] font-bold leading-[26px] relative shrink-0 text-[21px] w-[431px]" data-node-id="33:1100" style={{ fontVariationSettings: '"wdth" 100' }}>{`Benchmarking & Ranking`}</p>
          <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[14px] w-[431px]" data-node-id="33:1101" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[24px] mb-0">Compare facilities, view rankings, identify strengths</p>
            <p className="leading-[24px]">and weaknesses, and close performance gaps.</p>
          </div>
        </div>
        <div className="absolute h-[27px] left-[1017px] top-[835px] w-[30px]" data-node-id="33:1102" data-name="Benchmarking & Ranking connector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBenchmarkingRankingConnector} />
        </div>
        <div className="absolute h-[65px] left-[53px] top-[523px] w-[60px]" data-node-id="33:1105" data-name="Signal dot matrix">
          <div className="absolute inset-[0_0_-1.54%_0]">
            <img alt="" className="block max-w-none size-full" src={imgSignalDotMatrix} />
          </div>
        </div>
        <div className="absolute h-[65px] left-[1034px] top-[561px] w-[60px]" data-node-id="33:1130" data-name="Signal dot matrix">
          <div className="absolute inset-[0_0_-1.54%_0]">
            <img alt="" className="block max-w-none size-full" src={imgSignalDotMatrix} />
          </div>
        </div>
        <div className="absolute h-[65px] left-[1423px] top-[256px] w-[60px]" data-node-id="33:1151" data-name="Signal dot matrix">
          <div className="absolute inset-[0_0_-1.54%_0]">
            <img alt="" className="block max-w-none size-full" src={imgSignalDotMatrix} />
          </div>
        </div>
        <div className="absolute h-[65px] left-[1002px] top-[284px] w-[60px]" data-node-id="33:1172" data-name="Signal dot matrix">
          <div className="absolute inset-[0_0_-1.54%_0]">
            <img alt="" className="block max-w-none size-full" src={imgSignalDotMatrix} />
          </div>
        </div>
      </div>
    </div>
  );
}