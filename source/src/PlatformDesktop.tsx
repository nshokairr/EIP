const assetPathPrefix = "https://www.figma.com/api/mcp/asset/132f4139-f229-44f1-91af-8aeb4b9c817b";
const imgImagePlaceholderAlerts = `${assetPathPrefix}/84d89.png`;
const imgImagePlaceholderUnifiedData = `${assetPathPrefix}/40c51.png`;
const imgIconArrowRight = `${assetPathPrefix}/c7347.svg`;
const imgArtworkSignalsAndWaveFields = `${assetPathPrefix}/92ef3.png`;
const imgBrandSymbolImage = `${assetPathPrefix}/19069.png`;
const imgImagePlaceholderAiBrain = `${assetPathPrefix}/0756d.png`;
const imgImagePlaceholderBenchmark = `${assetPathPrefix}/05eab.png`;
const imgImagePlaceholderSecurity = `${assetPathPrefix}/e8995.png`;
const imgImagePlaceholderRole = `${assetPathPrefix}/49584.png`;
const imgImagePlaceholderLanguage = `${assetPathPrefix}/8286b.png`;
const imgImagePlaceholderCompare = `${assetPathPrefix}/e71fe.png`;
const imgImagePlaceholderIntegrate = `${assetPathPrefix}/53f31.png`;
const imgImagePlaceholderRealTime = `${assetPathPrefix}/acf34.png`;
const imgImagePlaceholderAiInsights = `${assetPathPrefix}/cd7da.png`;
const imgImagePlaceholderExperience = `${assetPathPrefix}/4f422.png`;
const imgImagePlaceholderRank = `${assetPathPrefix}/57a0c.png`;
const imgImagePlaceholderImpact = `${assetPathPrefix}/c69e4.png`;
const imgDropdownChevron = `${assetPathPrefix}/c717e.svg`;
const imgStatusIndicators = `${assetPathPrefix}/64e09.svg`;

function IconAlerts({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex gap-[var(--eip-spacing-0,0px)] items-start p-[var(--eip-spacing-0,0px)] relative size-[72px]"} data-node-id="13:5885" data-name="Icon / Alerts">
      <div className="absolute left-0 size-[72px] top-0" data-node-id="27:95" data-name="Image placeholder / Alerts">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImagePlaceholderAlerts} />
      </div>
    </div>
  );
}

function IconUnifiedData({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex gap-[var(--eip-spacing-0,0px)] items-start p-[var(--eip-spacing-0,0px)] relative size-[72px]"} data-node-id="13:49" data-name="Icon / Unified data">
      <div className="absolute h-[83px] left-[-4px] top-[-12px] w-[78px]" data-node-id="27:87" data-name="Image placeholder / Unified data">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImagePlaceholderUnifiedData} />
      </div>
    </div>
  );
}

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

export default function PlatformDesktop() {
  return (
    <div className="bg-[var(--eip-color-white,white)] content-stretch flex flex-col items-start relative size-full" data-node-id="14:4" data-name="Platform / Desktop">
      <div className="h-[1024px] relative shrink-0 w-full" data-node-id="14:5" data-name="Artwork / Signals and wave fields">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtworkSignalsAndWaveFields} />
        <div className="absolute content-stretch flex gap-[var(--eip-spacing-0,0px)] h-[90px] items-center left-0 pl-[var(--eip-spacing-46,46px)] pr-[var(--eip-spacing-41,41px)] py-[var(--eip-spacing-24,24px)] top-0 w-[1536px]" data-node-id="29:266" data-name="Header">
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-13,13px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0 w-[245px]" data-node-id="I29:266;29:88" data-name="Brand">
            <div className="content-stretch flex h-[42px] items-start relative shrink-0 w-[40px]" data-node-id="I29:266;29:89" data-name="Brand symbol">
              <div className="absolute h-[48px] left-[-6px] top-[-2px] w-[50px]" data-node-id="I29:266;29:90" data-name="Brand symbol / Image">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBrandSymbolImage} />
              </div>
            </div>
            <div className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[0] relative shrink-0 text-[18px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I29:266;29:91" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[21px] mb-0">Experience</p>
              <p className="leading-[21px]">Intelligence Platform</p>
            </div>
          </a>
          <div className="flex-[1_0_0] h-[42px] min-w-px relative" data-node-id="I29:266;29:115" data-name="Flexible spacing / Before navigation" />
          <div className="content-stretch flex gap-[var(--eip-spacing-53_2,53.2px)] h-[42px] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0 w-[694px]" data-node-id="I29:266;29:92" data-name="Navigation">
            <div className="content-stretch flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I29:266;29:93" data-name="Navigation / Platform">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-violet,#7816ba)] whitespace-nowrap" data-node-id="I29:266;29:94" style={{ fontVariationSettings: '"wdth" 100' }}>
                Platform
              </p>
              <div className="absolute h-[2px] left-px top-[29px] w-[54px]" data-node-id="I29:266;29:117" style={{ backgroundImage: "linear-gradient(90deg, var(--eip-gradient-blue,rgb(62, 74, 240)) 0%, var(--eip-gradient-violet,rgb(141, 34, 213)) 43%, var(--eip-gradient-pink,rgb(231, 54, 144)) 86%, var(--eip-gradient-coral,rgb(239, 87, 100)) 100%)" }} data-name="Active indicator" />
            </div>
            <div className="content-stretch flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I29:266;29:96" data-name="Navigation / Solutions">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] whitespace-nowrap" data-node-id="I29:266;29:97" style={{ fontVariationSettings: '"wdth" 100' }}>
                Solutions
              </p>
              <div className="relative shrink-0 size-[10px]" data-node-id="I29:266;29:98" data-name="Dropdown chevron">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDropdownChevron} />
              </div>
            </div>
            <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I29:266;29:100" data-name="Navigation / Features">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I29:266;29:101" style={{ fontVariationSettings: '"wdth" 100' }}>
                Features
              </p>
            </a>
            <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I29:266;29:102" data-name="Navigation / Benchmarking">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I29:266;29:103" style={{ fontVariationSettings: '"wdth" 100' }}>
                Benchmarking
              </p>
            </a>
            <div className="content-stretch flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I29:266;29:104" data-name="Navigation / Resources">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] whitespace-nowrap" data-node-id="I29:266;29:105" style={{ fontVariationSettings: '"wdth" 100' }}>
                Resources
              </p>
              <div className="relative shrink-0 size-[10px]" data-node-id="I29:266;29:106" data-name="Dropdown chevron">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDropdownChevron} />
              </div>
            </div>
            <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I29:266;29:108" data-name="Navigation / About Us">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I29:266;29:109" style={{ fontVariationSettings: '"wdth" 100' }}>
                About Us
              </p>
            </a>
          </div>
          <div className="flex-[1_0_0] h-[42px] min-w-px relative" data-node-id="I29:266;29:116" data-name="Flexible spacing / Before actions" />
          <div className="content-stretch flex gap-[var(--eip-spacing-14,14px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I29:266;29:110" data-name="Actions">
            <Button className="border border-[var(--eip-color-violet,#7816ba)] border-solid content-stretch flex gap-[var(--eip-spacing-12,12px)] items-center justify-center pl-[var(--eip-spacing-24,24px)] pr-[var(--eip-spacing-23,23px)] py-[var(--eip-spacing-12,12px)] relative rounded-[var(--eip-full,999px)] shrink-0" label="Log In" showTrailingIcon={false} style="Outline" />
            <a className="bg-gradient-to-r content-stretch cursor-pointer flex from-[var(--eip-cta-violet,#7c23f8)] gap-[var(--eip-spacing-12,12px)] items-center justify-center pl-[var(--eip-spacing-24,24px)] pr-[var(--eip-spacing-25,25px)] py-[var(--eip-spacing-11,11px)] relative rounded-[var(--eip-full,999px)] shrink-0 to-[var(--eip-cta-coral,#fe6c57)] via-[57%] via-[var(--eip-cta-pink,#e024a7)]" data-node-id="I29:266;29:112" data-name="Button / Request demo">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-white,white)] text-left whitespace-nowrap" data-node-id="I29:266;29:112;13:13456" style={{ fontVariationSettings: '"wdth" 100' }}>
                Request a Demo
              </p>
              <IconArrowRight className="relative shrink-0 size-[20px]" />
            </a>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-13,13px)] items-center left-0 pb-[var(--eip-spacing-9,9px)] pt-[var(--eip-spacing-28,28px)] px-[var(--eip-spacing-0,0px)] right-0 top-[90px]" data-node-id="14:33510" data-name="Hero">
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-violet,#7816ba)] text-center tracking-[1px] whitespace-nowrap" data-node-id="14:33511" style={{ fontVariationSettings: '"wdth" 100' }}>
            THE PLATFORM
          </p>
          <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-center pb-[var(--eip-spacing-0,0px)] pt-[var(--eip-spacing-2,2px)] px-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="14:33512" data-name="Headline">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[50px] relative shrink-0 text-[43.5px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center whitespace-nowrap" data-node-id="14:33513" style={{ fontVariationSettings: '"wdth" 100' }}>
              The intelligence layer behind
            </p>
            <div className="content-stretch flex items-start overflow-clip pl-[var(--eip-spacing-8,8px)] relative shrink-0" data-node-id="22:87" data-name="Headline / Gradient line">
              <p className="[word-break:break-word] bg-clip-text font-['Roboto:Bold'] font-bold leading-[50px] relative shrink-0 text-[45.6px] text-[transparent] text-center whitespace-nowrap" data-node-id="14:33514" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(90deg, var(--eip-gradient-blue,rgb(62, 74, 240)) 0%, var(--eip-gradient-violet,rgb(141, 34, 213)) 43%, var(--eip-gradient-pink,rgb(231, 54, 144)) 86%, var(--eip-gradient-coral,rgb(239, 87, 100)) 100%)" }}>
                experience excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[var(--eip-spacing-0,0px)] h-[472px] items-start left-0 pl-[var(--eip-spacing-124,124px)] pr-[var(--eip-spacing-136,136px)] py-[var(--eip-spacing-0,0px)] right-0 top-[258px]" data-node-id="14:33515" data-name="Intelligence map">
          <div className="content-stretch flex flex-col gap-[var(--eip-spacing-32,32px)] items-start pb-[var(--eip-spacing-0,0px)] pt-[var(--eip-spacing-12,12px)] px-[var(--eip-spacing-0,0px)] relative shrink-0 w-[256px]" data-node-id="14:33516" data-name="Capabilities / Left">
            <div className="content-stretch flex gap-[var(--eip-spacing-1,1px)] items-center px-[var(--eip-spacing-0,0px)] py-[var(--eip-spacing-2,2px)] relative shrink-0 w-[256px]" data-node-id="14:33517" data-name="Unified Experience Data">
              <IconUnifiedData className="content-stretch flex gap-[var(--eip-spacing-0,0px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0 size-[72px]" />
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-10,10px)] items-start min-w-px p-[var(--eip-spacing-0,0px)] relative text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="I14:33517;13:13467" data-name="Copy">
                <p className="font-['Roboto:Bold'] font-bold leading-[14px] relative shrink-0 text-[12px] w-[183px]" data-node-id="I14:33517;13:13468" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Unified Experience Data
                </p>
                <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[11px] w-[183px]" data-node-id="I14:33517;13:13469" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[18px] mb-0">All feedback, across every channel,</p>
                  <p className="leading-[18px]">in one intelligent layer.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--eip-spacing-1,1px)] items-center px-[var(--eip-spacing-0,0px)] py-[var(--eip-spacing-2,2px)] relative shrink-0 w-[256px]" data-node-id="14:33525" data-name="AI-Powered Intelligence">
              <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0 size-[72px]" data-node-id="I14:33525;13:13465" data-name="Icon">
                <div className="absolute h-[83px] left-[-4px] top-[-12px] w-[78px]" data-node-id="I14:33525;13:13465;27:88" data-name="Image placeholder / AI brain">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImagePlaceholderAiBrain} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-10,10px)] items-start min-w-px p-[var(--eip-spacing-0,0px)] relative text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="I14:33525;13:13467" data-name="Copy">
                <p className="font-['Roboto:Bold'] font-bold leading-[14px] relative shrink-0 text-[12px] w-[183px]" data-node-id="I14:33525;13:13468" style={{ fontVariationSettings: '"wdth" 100' }}>
                  AI-Powered Intelligence
                </p>
                <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[11px] w-[183px]" data-node-id="I14:33525;13:13469" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[18px] mb-0">Understand sentiment, topics,</p>
                  <p className="leading-[18px]">patterns and drivers instantly.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--eip-spacing-1,1px)] items-center px-[var(--eip-spacing-0,0px)] py-[var(--eip-spacing-2,2px)] relative shrink-0 w-[256px]" data-node-id="14:33532" data-name="Benchmarking Engine">
              <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0 size-[72px]" data-node-id="I14:33532;13:13465" data-name="Icon">
                <div className="absolute h-[83px] left-[-4px] top-[-12px] w-[78px]" data-node-id="I14:33532;13:13465;27:89" data-name="Image placeholder / Benchmark">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImagePlaceholderBenchmark} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-10,10px)] items-start min-w-px p-[var(--eip-spacing-0,0px)] relative text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="I14:33532;13:13467" data-name="Copy">
                <p className="font-['Roboto:Bold'] font-bold leading-[14px] relative shrink-0 text-[12px] w-[183px]" data-node-id="I14:33532;13:13468" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Benchmarking Engine
                </p>
                <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[11px] w-[183px]" data-node-id="I14:33532;13:13469" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[18px] mb-0">Compare facilities, reveal strengths,</p>
                  <p className="leading-[18px]">weaknesses and performance gaps.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--eip-spacing-1,1px)] items-center px-[var(--eip-spacing-0,0px)] py-[var(--eip-spacing-2,2px)] relative shrink-0 w-[256px]" data-node-id="14:33539" data-name="Privacy & Security by Design">
              <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0 size-[72px]" data-node-id="I14:33539;13:13465" data-name="Icon">
                <div className="absolute h-[83px] left-[-4px] top-[-11px] w-[78px]" data-node-id="I14:33539;13:13465;27:90" data-name="Image placeholder / Security">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImagePlaceholderSecurity} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-10,10px)] items-start min-w-px p-[var(--eip-spacing-0,0px)] relative text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="I14:33539;13:13467" data-name="Copy">
                <p className="font-['Roboto:Bold'] font-bold leading-[14px] relative shrink-0 text-[12px] w-[183px]" data-node-id="I14:33539;13:13468" style={{ fontVariationSettings: '"wdth" 100' }}>{`Privacy & Security by Design`}</p>
                <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[11px] w-[183px]" data-node-id="I14:33539;13:13469" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[18px] mb-0">Enterprise-grade protection for</p>
                  <p className="leading-[18px]">sensitive experience data.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[472px] items-center pb-[var(--eip-spacing-6,6px)] pl-[var(--eip-spacing-20,20px)] pr-[var(--eip-spacing-0,0px)] pt-[var(--eip-spacing-9,9px)] relative shrink-0 w-[756px]" data-node-id="14:33546" data-name="Engine and alerts">
            <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[14.2px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center w-[412px]" data-node-id="14:33547" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[24px] mb-0">A powerful, real-time platform that transforms experience data</p>
              <p className="leading-[24px]">into comparative intelligence and actionable impact.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-center pb-[var(--eip-spacing-53,53px)] pt-[var(--eip-spacing-76,76px)] px-[var(--eip-spacing-0,0px)] relative shrink-0 w-full" data-node-id="14:33548" data-name="Engine placement">
              <div className="content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] items-center pb-[var(--eip-spacing-0,0px)] pt-[var(--eip-spacing-56,56px)] px-[var(--eip-spacing-0,0px)] relative shrink-0 size-[208px]" data-node-id="14:33549" data-name="Intelligence engine">
                <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[14px] relative shrink-0 text-[12px] text-[color:var(--eip-color-violet,#7816ba)] text-center whitespace-nowrap" data-node-id="14:33550" style={{ fontVariationSettings: '"wdth" 100' }}>
                  REAL-TIME
                </p>
                <div className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[0] relative shrink-0 text-[25px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center tracking-[-0.5px] whitespace-nowrap" data-node-id="14:33551" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[30px] mb-0">Intelligence</p>
                  <p className="leading-[30px]">Engine</p>
                </div>
                <div className="h-[17px] relative shrink-0 w-[38px]" data-node-id="14:33552" data-name="Status indicators">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStatusIndicators} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--eip-spacing-6,6px)] h-[72px] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0 w-[262px]" data-node-id="14:33556" data-name="Real-time alerts">
              <IconAlerts className="content-stretch flex gap-[var(--eip-spacing-0,0px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0 size-[72px]" />
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--eip-spacing-7,7px)] items-start pb-[var(--eip-spacing-0,0px)] pt-[var(--eip-spacing-3,3px)] px-[var(--eip-spacing-0,0px)] relative shrink-0 text-[color:var(--eip-color-ink,#0b0b2c)] w-[178px]" data-node-id="14:33559" data-name="Copy">
                <p className="font-['Roboto:Bold'] font-bold leading-[14px] relative shrink-0 text-[12px] w-[178px]" data-node-id="14:33560" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Real-Time Alerts
                </p>
                <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[11px] w-[178px]" data-node-id="14:33561" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[18px] mb-0">Detect issues and changes</p>
                  <p className="leading-[18px]">as they happen.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--eip-spacing-32,32px)] items-start pb-[var(--eip-spacing-0,0px)] pt-[var(--eip-spacing-12,12px)] px-[var(--eip-spacing-0,0px)] relative shrink-0 w-[264px]" data-node-id="14:33562" data-name="Capabilities / Right">
            <div className="content-stretch flex gap-[var(--eip-spacing-1,1px)] items-center px-[var(--eip-spacing-0,0px)] py-[var(--eip-spacing-2,2px)] relative shrink-0 w-[264px]" data-node-id="14:33563" data-name="Role-Based Intelligence">
              <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0 size-[72px]" data-node-id="I14:33563;13:13465" data-name="Icon">
                <div className="absolute h-[83px] left-[-4px] top-[-10px] w-[78px]" data-node-id="I14:33563;13:13465;27:91" data-name="Image placeholder / Role">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImagePlaceholderRole} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-8,8px)] items-start min-w-px pb-[var(--eip-spacing-0,0px)] pt-[var(--eip-spacing-2,2px)] px-[var(--eip-spacing-0,0px)] relative text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="I14:33563;13:13467" data-name="Copy">
                <p className="font-['Roboto:Bold'] font-bold leading-[14px] relative shrink-0 text-[12px] w-[183px]" data-node-id="I14:33563;13:13468" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Role-Based Intelligence
                </p>
                <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[11px] w-[183px]" data-node-id="I14:33563;13:13469" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[18px] mb-0">The right insights for the</p>
                  <p className="leading-[18px]">right people.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--eip-spacing-1,1px)] items-center px-[var(--eip-spacing-0,0px)] py-[var(--eip-spacing-2,2px)] relative shrink-0 w-[264px]" data-node-id="14:33570" data-name="Natural Language Intelligence">
              <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0 size-[72px]" data-node-id="I14:33570;13:13465" data-name="Icon">
                <div className="absolute h-[83px] left-[-4px] top-[-14px] w-[78px]" data-node-id="I14:33570;13:13465;27:92" data-name="Image placeholder / Language">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImagePlaceholderLanguage} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-8,8px)] items-start min-w-px pb-[var(--eip-spacing-6,6px)] pt-[var(--eip-spacing-0,0px)] px-[var(--eip-spacing-0,0px)] relative text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="I14:33570;13:13467" data-name="Copy">
                <p className="font-['Roboto:Bold'] font-bold leading-[14px] relative shrink-0 text-[12px] w-[183px]" data-node-id="I14:33570;13:13468" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Natural Language Intelligence
                </p>
                <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[11px] w-[183px]" data-node-id="I14:33570;13:13469" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[18px] mb-0">Automatic analysis of open text</p>
                  <p className="leading-[18px]">feedback at scale.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--eip-spacing-1,1px)] items-center px-[var(--eip-spacing-0,0px)] py-[var(--eip-spacing-2,2px)] relative shrink-0 w-[264px]" data-node-id="14:33577" data-name="Advanced Comparisons">
              <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0 size-[72px]" data-node-id="I14:33577;13:13465" data-name="Icon">
                <div className="absolute h-[83px] left-[-4px] top-[-13px] w-[78px]" data-node-id="I14:33577;13:13465;27:93" data-name="Image placeholder / Compare">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImagePlaceholderCompare} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-10,10px)] items-start min-w-px pb-[var(--eip-spacing-4,4px)] pt-[var(--eip-spacing-0,0px)] px-[var(--eip-spacing-0,0px)] relative text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="I14:33577;13:13467" data-name="Copy">
                <p className="font-['Roboto:Bold'] font-bold leading-[14px] relative shrink-0 text-[12px] w-[183px]" data-node-id="I14:33577;13:13468" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Advanced Comparisons
                </p>
                <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[11px] w-[183px]" data-node-id="I14:33577;13:13469" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[18px] mb-0">Drill down, filter and compare</p>
                  <p className="leading-[18px]">what matters most.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--eip-spacing-1,1px)] items-center px-[var(--eip-spacing-0,0px)] py-[var(--eip-spacing-2,2px)] relative shrink-0 w-[264px]" data-node-id="14:33584" data-name="Seamless Integrations">
              <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0 size-[72px]" data-node-id="I14:33584;13:13465" data-name="Icon">
                <div className="absolute h-[83px] left-[-4px] top-[-12px] w-[78px]" data-node-id="I14:33584;13:13465;27:94" data-name="Image placeholder / Integrate">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImagePlaceholderIntegrate} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-10,10px)] items-start min-w-px pb-[var(--eip-spacing-2,2px)] pt-[var(--eip-spacing-0,0px)] px-[var(--eip-spacing-0,0px)] relative text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="I14:33584;13:13467" data-name="Copy">
                <p className="font-['Roboto:Bold'] font-bold leading-[14px] relative shrink-0 text-[12px] w-[183px]" data-node-id="I14:33584;13:13468" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Seamless Integrations
                </p>
                <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[11px] w-[183px]" data-node-id="I14:33584;13:13469" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[18px] mb-0">Connect call center, SMS and</p>
                  <p className="leading-[18px]">other systems effortlessly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[var(--eip-spacing-0,0px)] h-[294px] items-start left-0 pb-[var(--eip-spacing-49,49px)] pl-[var(--eip-spacing-67_5,67.5px)] pr-[var(--eip-spacing-97_5,97.5px)] pt-[var(--eip-spacing-70,70px)] right-0 top-[730px]" data-node-id="14:33591" data-name="Metrics">
          <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0 w-[285px]" data-node-id="14:33592" data-name="Metric / 100%">
            <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0 size-[72px]" data-node-id="I14:33592;13:13472" data-name="Icon">
              <div className="absolute h-[83px] left-[-7px] top-[-7px] w-[86px]" data-node-id="I14:33592;13:13472;27:96" data-name="Image placeholder / Real-time">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImagePlaceholderRealTime} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-center pb-[var(--eip-spacing-0,0px)] pt-[var(--eip-spacing-2,2px)] px-[var(--eip-spacing-0,0px)] relative shrink-0 w-full" data-node-id="I14:33592;13:13474" data-name="Value">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[40px] relative shrink-0 text-[34px] text-[color:var(--eip-metric-100percent,#412bde)] text-center tracking-[1.8px] whitespace-nowrap" data-node-id="I14:33592;13:13475" style={{ fontVariationSettings: '"wdth" 100' }}>
                100%
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] items-center pb-[var(--eip-spacing-0,0px)] pt-[var(--eip-spacing-4,4px)] px-[var(--eip-spacing-0,0px)] relative shrink-0 text-[color:var(--eip-color-ink,#0b0b2c)] text-center w-full" data-node-id="I14:33592;13:13476" data-name="Copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[13px] w-[220px]" data-node-id="I14:33592;13:13477" style={{ fontVariationSettings: '"wdth" 100' }}>
                Real-Time Processing
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[18px] relative shrink-0 text-[11px] w-[220px]" data-node-id="I14:33592;13:13478" style={{ fontVariationSettings: '"wdth" 100' }}>
                No delays. No batch.
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0 w-[285px]" data-node-id="14:33602" data-name="Metric / AI">
            <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0 size-[72px]" data-node-id="I14:33602;13:13472" data-name="Icon">
              <div className="absolute h-[83px] left-[-7px] top-[-7px] w-[86px]" data-node-id="I14:33602;13:13472;27:97" data-name="Image placeholder / AI insights">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImagePlaceholderAiInsights} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-center pb-[var(--eip-spacing-0,0px)] pt-[var(--eip-spacing-2,2px)] px-[var(--eip-spacing-0,0px)] relative shrink-0 w-full" data-node-id="I14:33602;13:13474" data-name="Value">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[40px] relative shrink-0 text-[34px] text-[color:var(--eip-metric-AI,#6d17c1)] text-center whitespace-nowrap" data-node-id="I14:33602;13:13475" style={{ fontVariationSettings: '"wdth" 100' }}>
                AI
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] items-center pb-[var(--eip-spacing-0,0px)] pt-[var(--eip-spacing-4,4px)] px-[var(--eip-spacing-0,0px)] relative shrink-0 text-[color:var(--eip-color-ink,#0b0b2c)] text-center w-full" data-node-id="I14:33602;13:13476" data-name="Copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[13px] w-[220px]" data-node-id="I14:33602;13:13477" style={{ fontVariationSettings: '"wdth" 100' }}>
                Powered Insights
              </p>
              <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[11px] w-[220px]" data-node-id="I14:33602;13:13478" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[18px] mb-0">Deep understanding</p>
                <p className="leading-[18px]">that drives action.</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0 w-[265px]" data-node-id="14:33611" data-name="Metric / 360°">
            <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0 size-[72px]" data-node-id="I14:33611;13:13472" data-name="Icon">
              <div className="absolute h-[83px] left-[-7px] top-[-7px] w-[86px]" data-node-id="I14:33611;13:13472;27:98" data-name="Image placeholder / Experience">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImagePlaceholderExperience} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-center pb-[var(--eip-spacing-0,0px)] pt-[var(--eip-spacing-2,2px)] px-[var(--eip-spacing-0,0px)] relative shrink-0 w-full" data-node-id="I14:33611;13:13474" data-name="Value">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[40px] relative shrink-0 text-[34px] text-[color:var(--eip-metric-360degrees,#d7219a)] text-center whitespace-nowrap" data-node-id="I14:33611;13:13475" style={{ fontVariationSettings: '"wdth" 100' }}>
                360°
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] items-center pb-[var(--eip-spacing-0,0px)] pt-[var(--eip-spacing-4,4px)] px-[var(--eip-spacing-0,0px)] relative shrink-0 text-[color:var(--eip-color-ink,#0b0b2c)] text-center w-full" data-node-id="I14:33611;13:13476" data-name="Copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[13px] w-[220px]" data-node-id="I14:33611;13:13477" style={{ fontVariationSettings: '"wdth" 100' }}>
                Experience View
              </p>
              <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[11px] w-[220px]" data-node-id="I14:33611;13:13478" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[18px] mb-0">Every touchpoint.</p>
                <p className="leading-[18px]">Every voice.</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0 w-[263px]" data-node-id="14:33620" data-name="Metric / Rank">
            <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0 size-[72px]" data-node-id="I14:33620;13:13472" data-name="Icon">
              <div className="absolute h-[83px] left-[-7px] top-[-7px] w-[86px]" data-node-id="I14:33620;13:13472;27:99" data-name="Image placeholder / Rank">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImagePlaceholderRank} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-center pb-[var(--eip-spacing-0,0px)] pt-[var(--eip-spacing-2,2px)] px-[var(--eip-spacing-0,0px)] relative shrink-0 w-full" data-node-id="I14:33620;13:13474" data-name="Value">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[40px] relative shrink-0 text-[34px] text-[color:var(--eip-metric-Rank,#ee6c34)] text-center whitespace-nowrap" data-node-id="I14:33620;13:13475" style={{ fontVariationSettings: '"wdth" 100' }}>
                Rank
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] items-center pb-[var(--eip-spacing-0,0px)] pt-[var(--eip-spacing-4,4px)] px-[var(--eip-spacing-0,0px)] relative shrink-0 text-[color:var(--eip-color-ink,#0b0b2c)] text-center w-full" data-node-id="I14:33620;13:13476" data-name="Copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[13px] w-[220px]" data-node-id="I14:33620;13:13477" style={{ fontVariationSettings: '"wdth" 100' }}>
                Facilities Benchmarking
              </p>
              <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[11px] w-[220px]" data-node-id="I14:33620;13:13478" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[18px] mb-0">Know where you stand.</p>
                <p className="leading-[18px]">Improve what matters.</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0 w-[273px]" data-node-id="14:33629" data-name="Metric / Impact">
            <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0 size-[72px]" data-node-id="I14:33629;13:13472" data-name="Icon">
              <div className="absolute h-[83px] left-[-7px] top-[-7px] w-[86px]" data-node-id="I14:33629;13:13472;27:100" data-name="Image placeholder / Impact">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImagePlaceholderImpact} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-center pb-[var(--eip-spacing-0,0px)] pt-[var(--eip-spacing-2,2px)] px-[var(--eip-spacing-0,0px)] relative shrink-0 w-full" data-node-id="I14:33629;13:13474" data-name="Value">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[40px] relative shrink-0 text-[34px] text-[color:var(--eip-metric-Impact,#f08b32)] text-center tracking-[-0.9px] whitespace-nowrap" data-node-id="I14:33629;13:13475" style={{ fontVariationSettings: '"wdth" 100' }}>
                Impact
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] items-center pb-[var(--eip-spacing-0,0px)] pt-[var(--eip-spacing-4,4px)] px-[var(--eip-spacing-0,0px)] relative shrink-0 text-[color:var(--eip-color-ink,#0b0b2c)] text-center w-full" data-node-id="I14:33629;13:13476" data-name="Copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[13px] w-[220px]" data-node-id="I14:33629;13:13477" style={{ fontVariationSettings: '"wdth" 100' }}>
                Action That Matters
              </p>
              <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[11px] w-[220px]" data-node-id="I14:33629;13:13478" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[18px] mb-0">From insights to measurable</p>
                <p className="leading-[18px]">improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}