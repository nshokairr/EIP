const assetPathPrefix = "https://www.figma.com/api/mcp/asset/52618442-7abc-456a-b9f7-de1b734556d2";
const imgIconArrowRight = `${assetPathPrefix}/c7347.svg`;
const imgBrandSymbolImage = `${assetPathPrefix}/19069.png`;
const imgImageBenchmarkingWave2 = `${assetPathPrefix}/52eda.png`;
const imgImageCheckIcon = `${assetPathPrefix}/95f4b.png`;
const imgImageCheckIcon1 = `${assetPathPrefix}/3f82e.png`;
const imgImageCheckIcon2 = `${assetPathPrefix}/129ad.png`;
const imgImagePatientExperienceImageIcon = `${assetPathPrefix}/2520e.png`;
const imgImageServiceQualityImageIcon = `${assetPathPrefix}/6f02d.png`;
const imgImageEfficiencyImageIcon = `${assetPathPrefix}/b63a0.png`;
const imgImageSafetyComplianceImageIcon = `${assetPathPrefix}/71b89.png`;
const imgImageCommunicationImageIcon = `${assetPathPrefix}/4f223.png`;
const imgImageHighlightIcon = `${assetPathPrefix}/5c4fb.png`;
const imgImageHighlightIcon1 = `${assetPathPrefix}/4dabc.png`;
const imgImageHighlightIcon2 = `${assetPathPrefix}/d5f14.png`;
const imgImageCompareFacilitiesIcon = `${assetPathPrefix}/b3823.png`;
const imgImageDepartmentInsightsIcon = `${assetPathPrefix}/759cd.png`;
const imgImageIdentifyStrengthsWeaknessesIcon = `${assetPathPrefix}/17e7b.png`;
const imgImageActionableRecommendationsIcon = `${assetPathPrefix}/291ee.png`;
const imgImageTrackImproveContinuouslyIcon = `${assetPathPrefix}/a2742.png`;
const imgImageGrowthIllustration2 = `${assetPathPrefix}/7f144.png`;
const imgDropdownChevron = `${assetPathPrefix}/c717e.svg`;
const imgImageBenchmarkingWave = `${assetPathPrefix}/18d02.svg`;
const imgImageBenchmarkingWave1 = `${assetPathPrefix}/418ba.svg`;
const imgInformationBadge = `${assetPathPrefix}/aad6e.svg`;
const imgFilterChevron = `${assetPathPrefix}/fb6e5.svg`;
const imgOverallScoreGauge = `${assetPathPrefix}/c5fbe.svg`;
const imgYourFacilitySwatch = `${assetPathPrefix}/bc770.svg`;
const imgIndustrySwatch = `${assetPathPrefix}/45806.svg`;
const imgEditablePerformanceLines = `${assetPathPrefix}/4d06c.svg`;
const imgTooltipMarker = `${assetPathPrefix}/0ac84.svg`;
const imgFacilitySwatch = `${assetPathPrefix}/ad4ca.svg`;
const imgIndustrySwatch1 = `${assetPathPrefix}/5c0a4.svg`;
const imgTopFifteenPercentGauge = `${assetPathPrefix}/c7e4c.svg`;
const imgImageGrowthIllustration = `${assetPathPrefix}/17330.svg`;
const imgImageGrowthIllustration1 = `${assetPathPrefix}/01736.svg`;

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

export default function BenchmarkingDesktop() {
  return (
    <div className="bg-[var(--eip-color-white,white)] content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-start relative size-full" data-node-id="33:1448" data-name="Benchmarking / Desktop">
      <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] h-[90px] items-center pl-[var(--eip-spacing-46,46px)] pr-[var(--eip-spacing-41,41px)] py-[var(--eip-spacing-24,24px)] relative shrink-0 w-[1536px]" data-node-id="33:1449" data-name="Header">
        <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-13,13px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0 w-[245px]" data-node-id="I33:1449;29:176" data-name="Brand">
          <div className="content-stretch flex h-[42px] items-start relative shrink-0 w-[40px]" data-node-id="I33:1449;29:177" data-name="Brand symbol">
            <div className="absolute h-[48px] left-[-6px] top-[-2px] w-[50px]" data-node-id="I33:1449;29:178" data-name="Brand symbol / Image">
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBrandSymbolImage} />
            </div>
          </div>
          <div className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[0] relative shrink-0 text-[18px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:1449;29:179" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[21px] mb-0">Experience</p>
            <p className="leading-[21px]">Intelligence Platform</p>
          </div>
        </a>
        <div className="flex-[1_0_0] h-[42px] min-w-px relative" data-node-id="I33:1449;29:180" data-name="Flexible spacing / Before navigation" />
        <div className="content-stretch flex gap-[var(--eip-spacing-53_2,53.2px)] h-[42px] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0 w-[694px]" data-node-id="I33:1449;29:181" data-name="Navigation">
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:1449;29:182" data-name="Navigation / Platform">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:1449;29:183" style={{ fontVariationSettings: '"wdth" 100' }}>
              Platform
            </p>
          </a>
          <div className="content-stretch flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:1449;29:185" data-name="Navigation / Solutions">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] whitespace-nowrap" data-node-id="I33:1449;29:186" style={{ fontVariationSettings: '"wdth" 100' }}>
              Solutions
            </p>
            <div className="relative shrink-0 size-[10px]" data-node-id="I33:1449;29:187" data-name="Dropdown chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDropdownChevron} />
            </div>
          </div>
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:1449;29:189" data-name="Navigation / Features">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:1449;29:190" style={{ fontVariationSettings: '"wdth" 100' }}>
              Features
            </p>
          </a>
          <div className="content-stretch flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:1449;29:191" data-name="Navigation / Benchmarking">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-violet,#7816ba)] whitespace-nowrap" data-node-id="I33:1449;29:192" style={{ fontVariationSettings: '"wdth" 100' }}>
              Benchmarking
            </p>
            <div className="absolute h-[2px] left-[8.5px] top-[29px] w-[75px]" data-node-id="I33:1449;29:203" style={{ backgroundImage: "linear-gradient(90deg, var(--eip-gradient-blue,rgb(62, 74, 240)) 0%, var(--eip-gradient-violet,rgb(141, 34, 213)) 43%, var(--eip-gradient-pink,rgb(231, 54, 144)) 86%, var(--eip-gradient-coral,rgb(239, 87, 100)) 100%)" }} data-name="Active indicator" />
          </div>
          <div className="content-stretch flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:1449;29:193" data-name="Navigation / Resources">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] whitespace-nowrap" data-node-id="I33:1449;29:194" style={{ fontVariationSettings: '"wdth" 100' }}>
              Resources
            </p>
            <div className="relative shrink-0 size-[10px]" data-node-id="I33:1449;29:195" data-name="Dropdown chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDropdownChevron} />
            </div>
          </div>
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:1449;29:197" data-name="Navigation / About Us">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:1449;29:198" style={{ fontVariationSettings: '"wdth" 100' }}>
              About Us
            </p>
          </a>
        </div>
        <div className="flex-[1_0_0] h-[42px] min-w-px relative" data-node-id="I33:1449;29:199" data-name="Flexible spacing / Before actions" />
        <div className="content-stretch flex gap-[var(--eip-spacing-14,14px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:1449;29:200" data-name="Actions">
          <Button className="border border-[var(--eip-color-violet,#7816ba)] border-solid content-stretch flex gap-[var(--eip-spacing-12,12px)] items-center justify-center pl-[var(--eip-spacing-24,24px)] pr-[var(--eip-spacing-23,23px)] py-[var(--eip-spacing-12,12px)] relative rounded-[var(--eip-full,999px)] shrink-0" label="Log In" showTrailingIcon={false} style="Outline" />
          <a className="bg-gradient-to-r content-stretch cursor-pointer flex from-[var(--eip-cta-violet,#7c23f8)] gap-[var(--eip-spacing-12,12px)] items-center justify-center pl-[var(--eip-spacing-24,24px)] pr-[var(--eip-spacing-25,25px)] py-[var(--eip-spacing-11,11px)] relative rounded-[var(--eip-full,999px)] shrink-0 to-[var(--eip-cta-coral,#fe6c57)] via-[57%] via-[var(--eip-cta-pink,#e024a7)]" data-node-id="I33:1449;29:202" data-name="Button / Request demo">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-white,white)] text-left whitespace-nowrap" data-node-id="I33:1449;29:202;13:13456" style={{ fontVariationSettings: '"wdth" 100' }}>
              Request a Demo
            </p>
            <IconArrowRight className="relative shrink-0 size-[20px]" />
          </a>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[934px] items-start relative shrink-0 w-full" data-node-id="33:1487" data-name="Benchmarking overview">
        <div className="absolute h-[128px] left-0 overflow-clip top-[561px] w-[438px]" data-node-id="34:603" data-name="Artwork / Benchmarking wave / feather">
          <div className="absolute contents left-0 top-0" data-node-id="37:355" data-name="horizontal edge fade / mask group">
            <div className="absolute contents left-0 top-0" data-node-id="37:354" data-name="vertical edge fade / mask group">
              <div className="absolute h-[128px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[438px_128px,_438px_128px] top-0 w-[438px]" data-node-id="33:1488" style={{ maskImage: `url("${imgImageBenchmarkingWave}"), url("${imgImageBenchmarkingWave1}")` }} data-name="Image / Benchmarking wave">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageBenchmarkingWave2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[25px] items-start left-[83px] top-[74px] w-[350px]" data-node-id="33:1490" data-name="Benchmarking eyebrow">
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[15px] text-[color:var(--eip-custom-6220df,#6220df)] tracking-[3px] w-[350px]" data-node-id="33:1492" style={{ fontVariationSettings: '"wdth" 100' }}>
            BENCHMARKING
          </p>
        </div>
        <div className="absolute bg-gradient-to-r from-[#6112f2] h-[3px] left-[84px] to-[#ff614f] top-[110px] w-[60px]" data-node-id="33:1495" data-name="Eyebrow accent" />
        <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Roboto:Bold'] font-bold gap-[var(--eip-spacing-0,0px)] h-[225px] items-start left-[83px] top-[131px] w-[520px]" data-node-id="33:1498" data-name="Benchmarking headline">
          <div className="leading-[0] relative shrink-0 text-[59px] text-[color:var(--eip-custom-090a2d,#090a2d)] w-[520px]" data-node-id="33:1500" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[62px] mb-0">Compare.</p>
            <p className="leading-[62px]">Measure. Improve.</p>
          </div>
          <p className="bg-clip-text leading-[74px] relative shrink-0 text-[64px] text-[transparent] whitespace-nowrap" data-node-id="33:1502" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(90deg, rgb(56, 71, 255) 0%, rgb(128, 20, 232) 35%, rgb(224, 28, 150) 65%, rgb(255, 97, 77) 94%, rgb(255, 107, 77) 100%)" }}>
            Stay ahead.
          </p>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[90px] items-start left-[83px] top-[348px] w-[375px]" data-node-id="33:1503" data-name="Benchmarking description">
          <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-h-px relative text-[18px] text-[color:var(--eip-color-ink,#0b0b2c)] w-full" data-node-id="33:1505" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[29px] mb-0">Benchmark your facilities, departments,</p>
            <p className="leading-[29px] mb-0">and services against industry standards</p>
            <p className="leading-[29px]">and top performers.</p>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-7,7px)] h-[94px] items-start left-[83px] top-[460px] w-[345px]" data-node-id="33:1506" data-name="Benchmarking benefits">
          <div className="content-stretch flex gap-[var(--eip-spacing-8,8px)] items-center relative shrink-0 w-[345px]" data-node-id="33:1507" data-name="Data-driven comparisons">
            <div className="relative shrink-0 size-[24px]" data-node-id="33:1508" data-name="Image / Check icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCheckIcon} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[311px]" data-node-id="33:1510" style={{ fontVariationSettings: '"wdth" 100' }}>
              Data-driven comparisons
            </p>
          </div>
          <div className="content-stretch flex gap-[var(--eip-spacing-8,8px)] items-center relative shrink-0 w-[345px]" data-node-id="33:1511" data-name="Clear performance insights">
            <div className="relative shrink-0 size-[24px]" data-node-id="33:1512" data-name="Image / Check icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCheckIcon1} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[311px]" data-node-id="33:1513" style={{ fontVariationSettings: '"wdth" 100' }}>
              Clear performance insights
            </p>
          </div>
          <div className="content-stretch flex gap-[var(--eip-spacing-8,8px)] items-center relative shrink-0 w-[345px]" data-node-id="33:1514" data-name="Actionable improvement plans">
            <div className="relative shrink-0 size-[24px]" data-node-id="33:1515" data-name="Image / Check icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCheckIcon2} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[311px]" data-node-id="33:1516" style={{ fontVariationSettings: '"wdth" 100' }}>
              Actionable improvement plans
            </p>
          </div>
        </div>
        <div className="absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex flex-col gap-[var(--eip-spacing-0,0px)] h-[563px] items-start left-[598px] rounded-[var(--eip-radius-34,34px)] top-[55px] w-[858px]" data-node-id="33:1517" data-name="Performance dashboard">
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[22px] items-start left-[36px] top-[17px] w-[252px]" data-node-id="33:1519" data-name="Performance title">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[252px]" data-node-id="33:1521" style={{ fontVariationSettings: '"wdth" 100' }}>
              Overall Performance Score
            </p>
          </div>
          <div className="absolute left-[238px] size-[12px] top-[21px]" data-node-id="33:1522" data-name="Information badge">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInformationBadge} />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-start left-[238px] size-[12px] top-[21px]" data-node-id="33:1525" data-name="Information label">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[14px] relative shrink-0 text-[10px] text-[color:var(--eip-custom-a8a3bc,#a8a3bc)] text-center w-[12px]" data-node-id="33:1527" style={{ fontVariationSettings: '"wdth" 100' }}>
              i
            </p>
          </div>
          <div className="absolute bg-[var(--eip-color-white,white)] border border-[var(--eip-custom-eeeaf5,#eeeaf5)] border-solid content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex gap-[var(--eip-spacing-12,12px)] h-[33px] items-center left-[664px] px-[var(--eip-spacing-12,12px)] py-[var(--eip-spacing-8,8px)] rounded-[var(--eip-radius-8,8px)] top-[16px] w-[158px]" data-node-id="33:1528" data-name="Period filter">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--eip-custom-6b6581,#6b6581)] w-[110px]" data-node-id="33:1533" style={{ fontVariationSettings: '"wdth" 100' }}>
              Last 12 Months
            </p>
            <div className="relative shrink-0 size-[10px]" data-node-id="33:1536" data-name="Filter chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFilterChevron} />
            </div>
          </div>
          <div className="absolute left-[32px] size-[195px] top-[54px]" data-node-id="33:1538" data-name="Overall score gauge">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgOverallScoreGauge} />
          </div>
          <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[84px] items-start left-[81px] text-[color:var(--eip-custom-090a2d,#090a2d)] text-center top-[103px] w-[100px]" data-node-id="33:1540" data-name="Overall score">
            <p className="font-['Roboto:Bold'] font-bold leading-[64px] relative shrink-0 text-[60px] w-[100px]" data-node-id="33:1542" style={{ fontVariationSettings: '"wdth" 100' }}>
              87
            </p>
            <p className="font-['Roboto:Regular'] font-normal leading-[25px] relative shrink-0 text-[20px] w-[100px]" data-node-id="33:1544" style={{ fontVariationSettings: '"wdth" 100' }}>
              /100
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[25px] items-start left-[77px] top-[204px] w-[112px]" data-node-id="33:1545" data-name="Score assessment">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[15px] text-[color:var(--eip-custom-2bae68,#2bae68)] text-center w-[112px]" data-node-id="33:1546" style={{ fontVariationSettings: '"wdth" 100' }}>
              Excellent ⊙
            </p>
          </div>
          <div className="absolute content-stretch flex gap-[var(--eip-spacing-12,12px)] h-[20px] items-center left-[292px] top-[57px] w-[375px]" data-node-id="33:1549" data-name="Performance legend">
            <div className="relative shrink-0 size-[10px]" data-node-id="33:1550" data-name="Your facility swatch">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgYourFacilitySwatch} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[82px]" data-node-id="33:1554" style={{ fontVariationSettings: '"wdth" 100' }}>
              Your Facility
            </p>
            <div className="relative shrink-0 size-[10px]" data-node-id="33:1555" data-name="Industry swatch">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIndustrySwatch} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[123px]" data-node-id="33:1558" style={{ fontVariationSettings: '"wdth" 100' }}>
              Industry Average
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[132px] items-start left-[292px] top-[89px] w-[530px]" data-node-id="33:1559" data-name="Monthly performance chart">
            <div className="absolute bg-[var(--eip-custom-ede8f6,#ede8f6)] h-[0.7px] left-0 top-0 w-[530px]" data-node-id="33:1560" data-name="Chart grid 0" />
            <div className="absolute bg-[var(--eip-custom-ede8f6,#ede8f6)] h-[0.7px] left-0 top-[32.5px] w-[530px]" data-node-id="33:1568" data-name="Chart grid 1" />
            <div className="absolute bg-[var(--eip-custom-ede8f6,#ede8f6)] h-[0.7px] left-0 top-[65px] w-[530px]" data-node-id="33:1571" data-name="Chart grid 2" />
            <div className="absolute bg-[var(--eip-custom-ede8f6,#ede8f6)] h-[0.7px] left-0 top-[97.5px] w-[530px]" data-node-id="33:1574" data-name="Chart grid 3" />
            <div className="absolute bg-[var(--eip-custom-ede8f6,#ede8f6)] h-[0.7px] left-0 top-[130px] w-[530px]" data-node-id="33:1577" data-name="Chart grid 4" />
            <div className="absolute h-[132px] left-0 top-0 w-[530px]" data-node-id="33:1580" data-name="Editable performance lines">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEditablePerformanceLines} />
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[16px] items-start left-[257px] top-[81px] w-[29px]" data-node-id="33:1563" data-name="Axis label 0">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[11px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-right w-[29px]" data-node-id="33:1565" style={{ fontVariationSettings: '"wdth" 100' }}>
              100
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[16px] items-start left-[257px] top-[113.5px] w-[29px]" data-node-id="33:1569" data-name="Axis label 1">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[11px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-right w-[29px]" data-node-id="33:1570" style={{ fontVariationSettings: '"wdth" 100' }}>
              75
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[16px] items-start left-[257px] top-[146px] w-[29px]" data-node-id="33:1572" data-name="Axis label 2">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[11px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-right w-[29px]" data-node-id="33:1573" style={{ fontVariationSettings: '"wdth" 100' }}>
              50
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[16px] items-start left-[257px] top-[178.5px] w-[29px]" data-node-id="33:1575" data-name="Axis label 3">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[11px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-right w-[29px]" data-node-id="33:1576" style={{ fontVariationSettings: '"wdth" 100' }}>
              25
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[16px] items-start left-[257px] top-[211px] w-[29px]" data-node-id="33:1578" data-name="Axis label 4">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[11px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-right w-[29px]" data-node-id="33:1579" style={{ fontVariationSettings: '"wdth" 100' }}>
              0
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[16px] items-start left-[292px] top-[226px] w-[32px]" data-node-id="33:1608" data-name="Month Jan">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[32px]" data-node-id="33:1609" style={{ fontVariationSettings: '"wdth" 100' }}>
              Jan
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[16px] items-start left-[337px] top-[226px] w-[32px]" data-node-id="33:1610" data-name="Month Feb">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[32px]" data-node-id="33:1611" style={{ fontVariationSettings: '"wdth" 100' }}>
              Feb
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[16px] items-start left-[382px] top-[226px] w-[32px]" data-node-id="33:1612" data-name="Month Mar">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[32px]" data-node-id="33:1613" style={{ fontVariationSettings: '"wdth" 100' }}>
              Mar
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[16px] items-start left-[427px] top-[226px] w-[32px]" data-node-id="33:1614" data-name="Month Apr">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[32px]" data-node-id="33:1615" style={{ fontVariationSettings: '"wdth" 100' }}>
              Apr
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[16px] items-start left-[472px] top-[226px] w-[32px]" data-node-id="33:1616" data-name="Month May">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[32px]" data-node-id="33:1617" style={{ fontVariationSettings: '"wdth" 100' }}>
              May
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[16px] items-start left-[517px] top-[226px] w-[32px]" data-node-id="33:1618" data-name="Month Jun">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[32px]" data-node-id="33:1619" style={{ fontVariationSettings: '"wdth" 100' }}>
              Jun
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[16px] items-start left-[562px] top-[226px] w-[32px]" data-node-id="33:1620" data-name="Month Jul">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[32px]" data-node-id="33:1621" style={{ fontVariationSettings: '"wdth" 100' }}>
              Jul
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[16px] items-start left-[607px] top-[226px] w-[32px]" data-node-id="33:1622" data-name="Month Aug">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[32px]" data-node-id="33:1623" style={{ fontVariationSettings: '"wdth" 100' }}>
              Aug
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[16px] items-start left-[652px] top-[226px] w-[32px]" data-node-id="33:1624" data-name="Month Sep">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[32px]" data-node-id="33:1625" style={{ fontVariationSettings: '"wdth" 100' }}>
              Sep
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[16px] items-start left-[697px] top-[226px] w-[32px]" data-node-id="33:1626" data-name="Month Oct">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[32px]" data-node-id="33:1627" style={{ fontVariationSettings: '"wdth" 100' }}>
              Oct
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[16px] items-start left-[742px] top-[226px] w-[32px]" data-node-id="33:1628" data-name="Month Nov">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[32px]" data-node-id="33:1629" style={{ fontVariationSettings: '"wdth" 100' }}>
              Nov
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[16px] items-start left-[787px] top-[226px] w-[32px]" data-node-id="33:1630" data-name="Month Dec">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[32px]" data-node-id="33:1631" style={{ fontVariationSettings: '"wdth" 100' }}>
              Dec
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex flex-col gap-[var(--eip-spacing-0,0px)] h-[63px] items-start left-[727px] pb-[var(--eip-spacing-8,8px)] pt-[var(--eip-spacing-10,10px)] px-[var(--eip-spacing-8,8px)] rounded-[var(--eip-radius-12,12px)] text-center top-[120px] w-[90px]" data-node-id="33:1632" data-name="Your facility tooltip">
            <p className="font-['Roboto:Bold'] font-bold leading-[29px] relative shrink-0 text-[24px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[74px]" data-node-id="33:1634" style={{ fontVariationSettings: '"wdth" 100' }}>
              87
            </p>
            <p className="font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[11px] text-[color:var(--eip-custom-777087,#777087)] w-[74px]" data-node-id="33:1635" style={{ fontVariationSettings: '"wdth" 100' }}>
              Your Facility
            </p>
          </div>
          <div className="absolute left-[767px] size-[8px] top-[115px]" data-node-id="33:1638" data-name="Tooltip marker">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTooltipMarker} />
          </div>
        </div>
        <div className="absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex flex-col gap-[var(--eip-spacing-0,0px)] h-[291px] items-start left-[686px] rounded-[var(--eip-radius-24,24px)] top-[329px] w-[566px]" data-node-id="33:1641" data-name="Department comparison">
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[24px] items-start left-[27px] top-[12px] w-[360px]" data-node-id="33:1642" data-name="Department title">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[360px]" data-node-id="33:1643" style={{ fontVariationSettings: '"wdth" 100' }}>
              Department Comparison
            </p>
          </div>
          <div className="absolute left-[25px] size-[32px] top-[50px]" data-node-id="33:1644" data-name="Image / Patient Experience image icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePatientExperienceImageIcon} />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[22px] items-start left-[65px] top-[55px] w-[140px]" data-node-id="33:1645" data-name="Patient Experience label">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[22px] relative shrink-0 text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[140px]" data-node-id="33:1647" style={{ fontVariationSettings: '"wdth" 100' }}>
              Patient Experience
            </p>
          </div>
          <div className="absolute bg-[var(--eip-custom-f0eaf7,#f0eaf7)] h-[10px] left-[200px] rounded-[var(--eip-radius-5,5px)] top-[62px] w-[300px]" data-node-id="33:1648" data-name="Comparison track" />
          <div className="absolute bg-gradient-to-r from-[#5914f7] h-[10px] left-[200px] rounded-[var(--eip-radius-5,5px)] to-[#f029b8] top-[62px] w-[276px]" data-node-id="33:1652" data-name="Patient Experience progress" />
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[23px] items-start left-[509px] top-[55px] w-[28px]" data-node-id="33:1655" data-name="Patient Experience score">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[23px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center w-[28px]" data-node-id="33:1657" style={{ fontVariationSettings: '"wdth" 100' }}>
              92
            </p>
          </div>
          <div className="absolute left-[25px] size-[32px] top-[87.5px]" data-node-id="33:1658" data-name="Image / Service Quality image icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageServiceQualityImageIcon} />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[22px] items-start left-[65px] top-[92.5px] w-[140px]" data-node-id="33:1659" data-name="Service Quality label">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[22px] relative shrink-0 text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[140px]" data-node-id="33:1660" style={{ fontVariationSettings: '"wdth" 100' }}>
              Service Quality
            </p>
          </div>
          <div className="absolute bg-[var(--eip-custom-f0eaf7,#f0eaf7)] h-[10px] left-[200px] rounded-[var(--eip-radius-5,5px)] top-[99.5px] w-[300px]" data-node-id="33:1661" data-name="Comparison track" />
          <div className="absolute bg-gradient-to-r from-[#5914f7] h-[10px] left-[200px] rounded-[var(--eip-radius-5,5px)] to-[#f029b8] top-[99.5px] w-[255px]" data-node-id="33:1662" data-name="Service Quality progress" />
          <div className="absolute bg-[var(--eip-custom-b99ee7,#b99ee7)] h-[17px] left-[413px] top-[95.5px] w-[3px]" data-node-id="33:1663" data-name="Service Quality industry marker" />
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[23px] items-start left-[509px] top-[92.5px] w-[28px]" data-node-id="33:1666" data-name="Service Quality score">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[23px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center w-[28px]" data-node-id="33:1667" style={{ fontVariationSettings: '"wdth" 100' }}>
              85
            </p>
          </div>
          <div className="absolute left-[25px] size-[32px] top-[125px]" data-node-id="33:1668" data-name="Image / Efficiency image icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageEfficiencyImageIcon} />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[22px] items-start left-[65px] top-[130px] w-[140px]" data-node-id="33:1669" data-name="Efficiency label">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[22px] relative shrink-0 text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[140px]" data-node-id="33:1670" style={{ fontVariationSettings: '"wdth" 100' }}>
              Efficiency
            </p>
          </div>
          <div className="absolute bg-[var(--eip-custom-f0eaf7,#f0eaf7)] h-[10px] left-[200px] rounded-[var(--eip-radius-5,5px)] top-[137px] w-[300px]" data-node-id="33:1671" data-name="Comparison track" />
          <div className="absolute bg-gradient-to-r from-[#5914f7] h-[10px] left-[200px] rounded-[var(--eip-radius-5,5px)] to-[#f029b8] top-[137px] w-[234px]" data-node-id="33:1672" data-name="Efficiency progress" />
          <div className="absolute bg-[var(--eip-custom-b99ee7,#b99ee7)] h-[17px] left-[458px] top-[133px] w-[3px]" data-node-id="33:1673" data-name="Efficiency industry marker" />
          <div className="absolute left-[25px] size-[32px] top-[162.5px]" data-node-id="33:1674" data-name="Image / Safety & Compliance image icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSafetyComplianceImageIcon} />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[22px] items-start left-[65px] top-[167.5px] w-[140px]" data-node-id="33:1675" data-name="Safety & Compliance label">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[22px] relative shrink-0 text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[140px]" data-node-id="33:1676" style={{ fontVariationSettings: '"wdth" 100' }}>{`Safety & Compliance`}</p>
          </div>
          <div className="absolute bg-[var(--eip-custom-f0eaf7,#f0eaf7)] h-[10px] left-[200px] rounded-[var(--eip-radius-5,5px)] top-[174.5px] w-[300px]" data-node-id="33:1677" data-name="Comparison track" />
          <div className="absolute bg-gradient-to-r from-[#5914f7] h-[10px] left-[200px] rounded-[var(--eip-radius-5,5px)] to-[#f029b8] top-[174.5px] w-[276px]" data-node-id="33:1678" data-name="Safety & Compliance progress" />
          <div className="absolute bg-[var(--eip-custom-b99ee7,#b99ee7)] h-[17px] left-[434px] top-[170.5px] w-[3px]" data-node-id="33:1679" data-name="Safety & Compliance industry marker" />
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[23px] items-start left-[509px] top-[167.5px] w-[28px]" data-node-id="33:1680" data-name="Safety & Compliance score">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[23px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center w-[28px]" data-node-id="33:1681" style={{ fontVariationSettings: '"wdth" 100' }}>
              90
            </p>
          </div>
          <div className="absolute left-[25px] size-[32px] top-[200px]" data-node-id="33:1682" data-name="Image / Communication image icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCommunicationImageIcon} />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[22px] items-start left-[65px] top-[205px] w-[140px]" data-node-id="33:1683" data-name="Communication label">
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[22px] relative shrink-0 text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[140px]" data-node-id="33:1684" style={{ fontVariationSettings: '"wdth" 100' }}>
              Communication
            </p>
          </div>
          <div className="absolute bg-[var(--eip-custom-f0eaf7,#f0eaf7)] h-[10px] left-[200px] rounded-[var(--eip-radius-5,5px)] top-[212px] w-[300px]" data-node-id="33:1685" data-name="Comparison track" />
          <div className="absolute bg-gradient-to-r from-[#5914f7] h-[10px] left-[200px] rounded-[var(--eip-radius-5,5px)] to-[#f029b8] top-[212px] w-[252px]" data-node-id="33:1686" data-name="Communication progress" />
          <div className="absolute bg-[var(--eip-custom-b99ee7,#b99ee7)] h-[17px] left-[407px] top-[208px] w-[3px]" data-node-id="33:1687" data-name="Communication industry marker" />
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[23px] items-start left-[509px] top-[205px] w-[28px]" data-node-id="33:1688" data-name="Communication score">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[23px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center w-[28px]" data-node-id="33:1689" style={{ fontVariationSettings: '"wdth" 100' }}>
              83
            </p>
          </div>
          <div className="absolute content-stretch flex gap-[var(--eip-spacing-10,10px)] h-[22px] items-center left-[28px] top-[254px] w-[430px]" data-node-id="33:1690" data-name="Department legend">
            <div className="relative shrink-0 size-[11px]" data-node-id="33:1691" data-name="Facility swatch">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFacilitySwatch} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[94px]" data-node-id="33:1694" style={{ fontVariationSettings: '"wdth" 100' }}>
              Your Facility
            </p>
            <div className="relative shrink-0 size-[11px]" data-node-id="33:1695" data-name="Industry swatch">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIndustrySwatch1} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[134px]" data-node-id="33:1698" style={{ fontVariationSettings: '"wdth" 100' }}>
              Industry Average
            </p>
          </div>
        </div>
        <div className="absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex flex-col gap-[var(--eip-spacing-0,0px)] h-[284px] items-start left-[1252px] rounded-[var(--eip-radius-24,24px)] top-[329px] w-[236px]" data-node-id="33:1699" data-name="Benchmark position">
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[24px] items-start justify-center left-[30px] top-[19px] w-[185px]" data-node-id="33:1700" data-name="Benchmark position title">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[15px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[185px]" data-node-id="33:1701" style={{ fontVariationSettings: '"wdth" 100' }}>
              Benchmark Position
            </p>
          </div>
          <div className="absolute left-[32px] size-[174px] top-[40px]" data-node-id="33:1702" data-name="Top fifteen percent gauge">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTopFifteenPercentGauge} />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[70px] items-start justify-center left-[42px] top-[109px] w-[154px]" data-node-id="33:1704" data-name="Percentile score">
            <div className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[0] relative shrink-0 text-[29px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center w-[154px]" data-node-id="33:1706" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[32px] mb-0">Top</p>
              <p className="leading-[32px]">15%</p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[51px] items-start left-[28px] top-[208px] w-[180px]" data-node-id="33:1707" data-name="Position explanation">
            <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center w-[180px]" data-node-id="33:1709" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="mb-0">
                <span className="leading-[21px]">{`Better than `}</span>
                <span className="leading-[21px] text-[#6521d8]">85%</span>
                <span className="leading-[21px]">{` of`}</span>
              </p>
              <p className="leading-[21px]">facilities in your category</p>
            </div>
          </div>
        </div>
        <div className="absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex flex-col gap-[var(--eip-spacing-0,0px)] h-[286px] items-start left-[439px] rounded-[var(--eip-radius-24,24px)] top-[362px] w-[230px]" data-node-id="33:1712" data-name="Key highlights">
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[24px] items-start left-[34px] top-[17px] w-[160px]" data-node-id="33:1713" data-name="Highlights title">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[15px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[160px]" data-node-id="33:1714" style={{ fontVariationSettings: '"wdth" 100' }}>
              Key Highlights
            </p>
          </div>
          <div className="absolute h-[43px] left-[24px] top-[58px] w-[41px]" data-node-id="33:1715" data-name="Image / Highlight icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHighlightIcon} />
          </div>
          <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-1,1px)] h-[48px] items-start left-[73px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[58px] w-[137px]" data-node-id="33:1716" data-name="Highlight copy">
            <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16px] w-[137px]" data-node-id="33:1717" style={{ fontVariationSettings: '"wdth" 100' }}>
              +12%
            </p>
            <p className="font-['Roboto:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] w-[137px]" data-node-id="33:1718" style={{ fontVariationSettings: '"wdth" 100' }}>
              vs Last Quarter
            </p>
          </div>
          <div className="absolute h-[43px] left-[24px] top-[118px] w-[41px]" data-node-id="33:1719" data-name="Image / Highlight icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHighlightIcon1} />
          </div>
          <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-1,1px)] h-[48px] items-start left-[73px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[119px] w-[137px]" data-node-id="33:1720" data-name="Highlight copy">
            <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16px] w-[137px]" data-node-id="33:1721" style={{ fontVariationSettings: '"wdth" 100' }}>
              4.6/5
            </p>
            <p className="font-['Roboto:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] w-[137px]" data-node-id="33:1722" style={{ fontVariationSettings: '"wdth" 100' }}>
              Patient Satisfaction
            </p>
          </div>
          <div className="absolute h-[43px] left-[24px] top-[182px] w-[41px]" data-node-id="33:1723" data-name="Image / Highlight icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHighlightIcon2} />
          </div>
          <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-1,1px)] h-[48px] items-start left-[73px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[180px] w-[137px]" data-node-id="33:1724" data-name="Highlight copy">
            <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16px] w-[137px]" data-node-id="33:1725" style={{ fontVariationSettings: '"wdth" 100' }}>
              Top 15%
            </p>
            <p className="font-['Roboto:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] w-[137px]" data-node-id="33:1726" style={{ fontVariationSettings: '"wdth" 100' }}>
              Industry Ranking
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[25px] items-start justify-center left-[40px] top-[244px] w-[170px]" data-node-id="33:1727" data-name="Full report link">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[20px] relative shrink-0 text-[12px] text-[color:var(--eip-custom-7020d8,#7020d8)] text-center w-[170px] whitespace-pre-wrap" data-node-id="33:1729" style={{ fontVariationSettings: '"wdth" 100' }}>{`View Full Report  →`}</p>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[var(--eip-spacing-3,3px)] h-[224px] items-start left-[60px] top-[688px] w-[1066px]" data-node-id="33:1732" data-name="Benchmarking capability cards">
          <div className="bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex flex-col gap-[var(--eip-spacing-0,0px)] h-[224px] items-start relative rounded-[var(--eip-radius-21,21px)] shrink-0 w-[211px]" data-node-id="33:1733" data-name="Compare Facilities">
            <div className="absolute left-[69px] size-[74px] top-[16px]" data-node-id="33:1735" data-name="Image / Compare Facilities icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCompareFacilitiesIcon} />
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] h-[98px] items-start left-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center top-[98px] w-[187px]" data-node-id="33:1736" data-name="Capability copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[17px] w-[187px]" data-node-id="33:1738" style={{ fontVariationSettings: '"wdth" 100' }}>
                Compare Facilities
              </p>
              <div className="font-['Roboto:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[12px] w-[min-content]" data-node-id="33:1740" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[19px] mb-0">Benchmark multiple</p>
                <p className="leading-[19px] mb-0">facilities side by side</p>
                <p className="leading-[19px]">with ease.</p>
              </div>
            </div>
            <div className="absolute bg-[var(--eip-custom-7021d8,#7021d8)] h-[2px] left-[86px] top-[202px] w-[36px]" data-node-id="33:1741" data-name="Accent underline" />
          </div>
          <div className="bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex flex-col gap-[var(--eip-spacing-0,0px)] h-[224px] items-start relative rounded-[var(--eip-radius-21,21px)] shrink-0 w-[211px]" data-node-id="33:1744" data-name="Department Insights">
            <div className="absolute left-[69px] size-[74px] top-[16px]" data-node-id="33:1745" data-name="Image / Department Insights icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageDepartmentInsightsIcon} />
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] h-[98px] items-start left-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center top-[98px] w-[187px]" data-node-id="33:1746" data-name="Capability copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[17px] w-[187px]" data-node-id="33:1747" style={{ fontVariationSettings: '"wdth" 100' }}>
                Department Insights
              </p>
              <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[12px] w-[187px]" data-node-id="33:1748" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[19px] mb-0">Dive deep into each</p>
                <p className="leading-[19px] mb-0">department’s performance</p>
                <p className="leading-[19px]">and contribution.</p>
              </div>
            </div>
            <div className="absolute bg-[var(--eip-custom-fb792d,#fb792d)] h-[2px] left-[86px] top-[202px] w-[36px]" data-node-id="33:1749" data-name="Accent underline" />
          </div>
          <div
            className="bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex flex-col gap-[var(--eip-spacing-0,0px)] h-[224px] items-start relative rounded-[var(--eip-radius-21,21px)] shrink-0 w-[211px]"
            data-node-id="33:1752"
            data-name="Identify Strengths
& Weaknesses"
          >
            <div
              className="absolute left-[69px] size-[74px] top-[16px]"
              data-node-id="33:1753"
              data-name="Image / Identify Strengths
& Weaknesses icon"
            >
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageIdentifyStrengthsWeaknessesIcon} />
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] h-[98px] items-start leading-[0] left-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center top-[98px] w-[187px]" data-node-id="33:1754" data-name="Capability copy">
              <div className="font-['Roboto:Bold'] font-bold relative shrink-0 text-[17px] w-[187px]" data-node-id="33:1755" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[22px] mb-0">Identify Strengths</p>
                <p className="leading-[22px]">{`& Weaknesses`}</p>
              </div>
              <div className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[12px] w-[187px]" data-node-id="33:1756" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[19px] mb-0">Understand what drives</p>
                <p className="leading-[19px]">success and what to fix.</p>
              </div>
            </div>
            <div className="absolute bg-[var(--eip-custom-4b6dde,#4b6dde)] h-[2px] left-[86px] top-[202px] w-[36px]" data-node-id="33:1757" data-name="Accent underline" />
          </div>
          <div
            className="bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex flex-col gap-[var(--eip-spacing-0,0px)] h-[224px] items-start relative rounded-[var(--eip-radius-21,21px)] shrink-0 w-[211px]"
            data-node-id="33:1760"
            data-name="Actionable
Recommendations"
          >
            <div
              className="absolute left-[69px] size-[74px] top-[16px]"
              data-node-id="33:1761"
              data-name="Image / Actionable
Recommendations icon"
            >
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageActionableRecommendationsIcon} />
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] h-[98px] items-start leading-[0] left-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center top-[98px] w-[187px]" data-node-id="33:1762" data-name="Capability copy">
              <div className="font-['Roboto:Bold'] font-bold relative shrink-0 text-[17px] w-[187px]" data-node-id="33:1763" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[22px] mb-0">Actionable</p>
                <p className="leading-[22px]">Recommendations</p>
              </div>
              <div className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[12px] w-[187px]" data-node-id="33:1764" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[19px] mb-0">Get intelligent suggestions</p>
                <p className="leading-[19px]">to improve outcomes.</p>
              </div>
            </div>
            <div className="absolute bg-[var(--eip-custom-d930b4,#d930b4)] h-[2px] left-[86px] top-[202px] w-[36px]" data-node-id="33:1765" data-name="Accent underline" />
          </div>
          <div
            className="bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex flex-col gap-[var(--eip-spacing-0,0px)] h-[224px] items-start relative rounded-[var(--eip-radius-21,21px)] shrink-0 w-[211px]"
            data-node-id="33:1768"
            data-name="Track & Improve
Continuously"
          >
            <div
              className="absolute left-[69px] size-[74px] top-[16px]"
              data-node-id="33:1769"
              data-name="Image / Track & Improve
Continuously icon"
            >
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTrackImproveContinuouslyIcon} />
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] h-[98px] items-start leading-[0] left-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center top-[98px] w-[187px]" data-node-id="33:1770" data-name="Capability copy">
              <div className="font-['Roboto:Bold'] font-bold relative shrink-0 text-[17px] w-[187px]" data-node-id="33:1771" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[22px] mb-0">{`Track & Improve`}</p>
                <p className="leading-[22px]">Continuously</p>
              </div>
              <div className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[12px] w-[187px]" data-node-id="33:1772" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[19px] mb-0">Monitor progress over time</p>
                <p className="leading-[19px]">and stay ahead.</p>
              </div>
            </div>
            <div className="absolute bg-[var(--eip-custom-27c4c2,#27c4c2)] h-[2px] left-[86px] top-[202px] w-[36px]" data-node-id="33:1773" data-name="Accent underline" />
          </div>
        </div>
        <div className="absolute h-[334px] left-[1160px] overflow-clip top-[600px] w-[376px]" data-node-id="34:598" data-name="Artwork / Growth illustration / feather">
          <div className="absolute contents left-0 top-0" data-node-id="37:353" data-name="horizontal edge fade / mask group">
            <div className="absolute contents left-0 top-0" data-node-id="37:352" data-name="vertical edge fade / mask group">
              <div className="absolute h-[334px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[376px_334px,_376px_334px] top-0 w-[376px]" data-node-id="33:1489" style={{ maskImage: `url("${imgImageGrowthIllustration}"), url("${imgImageGrowthIllustration1}")` }} data-name="Image / Growth illustration">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGrowthIllustration2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}