const assetPathPrefix = "https://www.figma.com/api/mcp/asset/f953a0db-e3f3-49e8-a7f4-8a017ba11ca2";
const imgStyleSpectrum = `${assetPathPrefix}/3316a.svg`;
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
const imgExperioLogo = `${assetPathPrefix}/01d11.svg`;
const imgIconMenu = `${assetPathPrefix}/5653a.svg`;
const imgFilterChevron = `${assetPathPrefix}/5a38b.svg`;
const imgOverallScoreGauge = `${assetPathPrefix}/94f26.svg`;
const imgYourFacilitySwatch = `${assetPathPrefix}/8a760.svg`;
const imgIndustrySwatch = `${assetPathPrefix}/aeb7b.svg`;
const imgEditablePerformanceLines = `${assetPathPrefix}/9d150.svg`;
const imgTooltipMarker = `${assetPathPrefix}/d5ee6.svg`;
const imgFacilitySwatch = `${assetPathPrefix}/a2820.svg`;
const imgIndustrySwatch1 = `${assetPathPrefix}/bffe5.svg`;
const imgTopFifteenPercentGauge = `${assetPathPrefix}/7bcf6.svg`;
const imgImageGrowthIllustration = `${assetPathPrefix}/04ccc.svg`;
const imgImageGrowthIllustration1 = `${assetPathPrefix}/555d1.svg`;
const imgTrailingIcon = `${assetPathPrefix}/ef05f.svg`;
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

export default function BenchmarkingMobile() {
  return (
    <div className="bg-[var(--eip-color-white,white)] content-stretch flex flex-col gap-[20px] items-start relative size-full" data-node-id="144:461" data-name="Benchmarking / Mobile">
      <div className="bg-[var(--eip-color-white,white)] content-stretch cursor-pointer flex h-[64px] items-center justify-between px-[20px] relative shrink-0 w-full" data-node-id="144:462" data-name="Header / Mobile">
        <a className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="I144:462;140:394" data-name="Brand">
          <div className="h-[24px] relative shrink-0 w-[144.97px]" data-node-id="I144:462;169:678" data-name="Experio logo">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExperioLogo} />
          </div>
        </a>
        <a className="content-stretch flex items-center justify-center overflow-clip relative rounded-[22px] shrink-0 size-[44px]" data-node-id="I144:462;140:398" data-name="Open menu">
          <div className="relative shrink-0 size-[24px]" data-node-id="I144:462;140:399" data-name="icon/menu">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconMenu} />
          </div>
        </a>
      </div>
      <div className="content-stretch flex flex-col gap-[14px] h-[423px] items-start overflow-clip pb-[24px] pt-[32px] px-[var(--eip-spacing-20,20px)] relative shrink-0 w-full" data-node-id="144:470" data-name="Hero">
        <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--eip-custom-6220df,#604ba9)] tracking-[1px] w-[min-content]" data-node-id="144:471" style={{ fontVariationSettings: '"wdth" 100' }}>
          BENCHMARKING
        </p>
        <div className="bg-gradient-to-r from-[#604ba9] h-[3px] relative shrink-0 to-[#f35b85] w-[60px]" data-node-id="144:472" data-name="Eyebrow accent" />
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Roboto:Bold'] font-bold items-start overflow-clip relative shrink-0 text-[36px] tracking-[-0.5px] w-full" data-node-id="144:473" data-name="Headline">
          <div className="leading-[0] relative shrink-0 text-[color:var(--eip-custom-090a2d,#090a2d)] w-full" data-node-id="144:474" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[42px] mb-0">Compare.</p>
            <p className="leading-[42px]">Measure. Improve.</p>
          </div>
          <p className="bg-clip-text leading-[42px] relative shrink-0 text-[transparent] w-full" data-node-id="144:475" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(90deg, rgb(56, 71, 255) 0%, rgb(128, 20, 232) 35%, rgb(224, 28, 150) 65%, rgb(255, 97, 77) 94%, rgb(255, 107, 77) 100%)" }}>
            Stay ahead.
          </p>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[24px] min-h-px min-w-full relative text-[15px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[min-content]" data-node-id="144:476" style={{ fontVariationSettings: '"wdth" 100' }}>
          Benchmark your facilities, departments, and services against industry standards and top performers.
        </p>
        <div className="content-stretch flex flex-col gap-[var(--eip-spacing-7,7px)] h-[94px] items-start relative shrink-0 w-full" data-node-id="144:477" data-name="Benchmarking benefits">
          <div className="content-stretch flex gap-[var(--eip-spacing-8,8px)] items-center relative shrink-0 w-full" data-node-id="144:478" data-name="Data-driven comparisons">
            <div className="relative shrink-0 size-[24px]" data-node-id="144:479" data-name="Image / Check icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCheckIcon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[22px] min-w-px relative text-[16px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="144:480" style={{ fontVariationSettings: '"wdth" 100' }}>
              Data-driven comparisons
            </p>
          </div>
          <div className="content-stretch flex gap-[var(--eip-spacing-8,8px)] items-center relative shrink-0 w-full" data-node-id="144:481" data-name="Clear performance insights">
            <div className="relative shrink-0 size-[24px]" data-node-id="144:482" data-name="Image / Check icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCheckIcon1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[22px] min-w-px relative text-[16px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="144:483" style={{ fontVariationSettings: '"wdth" 100' }}>
              Clear performance insights
            </p>
          </div>
          <div className="content-stretch flex gap-[var(--eip-spacing-8,8px)] items-center relative shrink-0 w-full" data-node-id="144:484" data-name="Actionable improvement plans">
            <div className="relative shrink-0 size-[24px]" data-node-id="144:485" data-name="Image / Check icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCheckIcon2} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[22px] min-w-px relative text-[16px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="144:486" style={{ fontVariationSettings: '"wdth" 100' }}>
              Actionable improvement plans
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[32px] pt-[8px] px-[var(--eip-spacing-20,20px)] relative shrink-0 w-full" data-node-id="144:487" data-name="Dashboard">
        <div className="bg-[var(--eip-color-white,white)] content-stretch flex flex-col gap-[14px] items-center overflow-clip px-[20px] py-[22px] relative rounded-[20px] shadow-[0px_8px_30px_0px_rgba(89,41,166,0.06)] shrink-0 w-full" data-node-id="144:488" data-name="Overall performance">
          <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="144:489" data-name="Title row">
            <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[22px] items-start relative shrink-0" data-node-id="144:490" data-name="Performance title">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-color-ink,#0b0b2c)] whitespace-nowrap" data-node-id="144:491" style={{ fontVariationSettings: '"wdth" 100' }}>
                Overall Performance Score
              </p>
            </div>
            <div className="bg-[var(--eip-color-white,white)] border-[0.696px] border-[var(--eip-custom-eeeaf5,#eeeaf5)] border-solid content-stretch drop-shadow-[0px_5.57px_10.443px_rgba(96,75,169,0.06)] flex gap-[8.354px] h-[22.975px] items-center px-[8.354px] py-[5.57px] relative rounded-[5.57px] shrink-0 w-[110px]" data-node-id="144:492" data-name="Period filter">
              <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[11.139px] relative shrink-0 text-[8.354px] text-[color:var(--eip-custom-6b6581,#6b6581)] w-[76.582px]" data-node-id="144:493" style={{ fontVariationSettings: '"wdth" 100' }}>
                Last 12 Months
              </p>
              <div className="relative shrink-0 size-[6.962px]" data-node-id="144:494" data-name="Filter chevron">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFilterChevron} />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[195px]" data-node-id="144:496" data-name="Score gauge">
            <div className="absolute left-0 size-[195px] top-0" data-node-id="144:497" data-name="Overall score gauge">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgOverallScoreGauge} />
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[84px] items-start left-[49px] text-[color:var(--eip-custom-090a2d,#090a2d)] text-center top-[49px] w-[100px]" data-node-id="144:499" data-name="Overall score">
              <p className="font-['Roboto:Bold'] font-bold leading-[64px] relative shrink-0 text-[60px] w-[100px]" data-node-id="144:500" style={{ fontVariationSettings: '"wdth" 100' }}>
                87
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[25px] relative shrink-0 text-[20px] w-[100px]" data-node-id="144:501" style={{ fontVariationSettings: '"wdth" 100' }}>
                /100
              </p>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[25px] items-start left-[45px] top-[150px] w-[112px]" data-node-id="144:502" data-name="Score assessment">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[15px] text-[color:var(--eip-custom-2bae68,#2bae68)] text-center w-[112px]" data-node-id="144:503" style={{ fontVariationSettings: '"wdth" 100' }}>
                Excellent ⊙
              </p>
            </div>
          </div>
          <div className="h-[166px] overflow-x-auto overflow-y-clip relative shrink-0 w-full" data-node-id="144:582" data-name="Swipe / Monthly chart">
            <div className="absolute h-[163.4px] left-0 top-0 w-[490.2px]" data-node-id="144:504" data-name="Monthly chart">
              <div className="absolute content-stretch flex gap-[10.32px] h-[17.2px] items-center left-[30.1px] top-0 w-[322.5px]" data-node-id="144:505" data-name="Performance legend">
                <div className="relative shrink-0 size-[8.6px]" data-node-id="144:506" data-name="Your facility swatch">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgYourFacilitySwatch} />
                </div>
                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[15.48px] relative shrink-0 text-[10.32px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[70.52px]" data-node-id="144:507" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Your Facility
                </p>
                <div className="relative shrink-0 size-[8.6px]" data-node-id="144:508" data-name="Industry swatch">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIndustrySwatch} />
                </div>
                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[15.48px] relative shrink-0 text-[10.32px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[105.78px]" data-node-id="144:509" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Industry Average
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[113.52px] items-start left-[30.1px] top-[27.52px] w-[455.8px]" data-node-id="144:510" data-name="Monthly performance chart">
                <div className="absolute bg-[var(--eip-custom-ede8f6,#ede8f6)] h-[0.602px] left-0 top-0 w-[455.8px]" data-node-id="144:511" data-name="Chart grid 0" />
                <div className="absolute bg-[var(--eip-custom-ede8f6,#ede8f6)] h-[0.602px] left-0 top-[27.95px] w-[455.8px]" data-node-id="144:512" data-name="Chart grid 1" />
                <div className="absolute bg-[var(--eip-custom-ede8f6,#ede8f6)] h-[0.602px] left-0 top-[55.9px] w-[455.8px]" data-node-id="144:513" data-name="Chart grid 2" />
                <div className="absolute bg-[var(--eip-custom-ede8f6,#ede8f6)] h-[0.602px] left-0 top-[83.85px] w-[455.8px]" data-node-id="144:514" data-name="Chart grid 3" />
                <div className="absolute bg-[var(--eip-custom-ede8f6,#ede8f6)] h-[0.602px] left-0 top-[111.8px] w-[455.8px]" data-node-id="144:515" data-name="Chart grid 4" />
                <div className="absolute h-[113.52px] left-0 top-0 w-[455.8px]" data-node-id="144:516" data-name="Editable performance lines">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEditablePerformanceLines} />
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[13.76px] items-start left-0 top-[20.64px] w-[24.94px]" data-node-id="144:544" data-name="Axis label 0">
                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[13.76px] relative shrink-0 text-[9.46px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-right w-[24.94px]" data-node-id="144:545" style={{ fontVariationSettings: '"wdth" 100' }}>
                  100
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[13.76px] items-start left-0 top-[48.59px] w-[24.94px]" data-node-id="144:546" data-name="Axis label 1">
                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[13.76px] relative shrink-0 text-[9.46px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-right w-[24.94px]" data-node-id="144:547" style={{ fontVariationSettings: '"wdth" 100' }}>
                  75
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[13.76px] items-start left-0 top-[76.54px] w-[24.94px]" data-node-id="144:548" data-name="Axis label 2">
                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[13.76px] relative shrink-0 text-[9.46px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-right w-[24.94px]" data-node-id="144:549" style={{ fontVariationSettings: '"wdth" 100' }}>
                  50
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[13.76px] items-start left-0 top-[104.49px] w-[24.94px]" data-node-id="144:550" data-name="Axis label 3">
                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[13.76px] relative shrink-0 text-[9.46px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-right w-[24.94px]" data-node-id="144:551" style={{ fontVariationSettings: '"wdth" 100' }}>
                  25
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[13.76px] items-start left-0 top-[132.44px] w-[24.94px]" data-node-id="144:552" data-name="Axis label 4">
                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[13.76px] relative shrink-0 text-[9.46px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-right w-[24.94px]" data-node-id="144:553" style={{ fontVariationSettings: '"wdth" 100' }}>
                  0
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[13.76px] items-start left-[30.1px] top-[145.34px] w-[27.52px]" data-node-id="144:554" data-name="Month Jan">
                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[13.76px] relative shrink-0 text-[10.32px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[27.52px]" data-node-id="144:555" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Jan
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[13.76px] items-start left-[68.8px] top-[145.34px] w-[27.52px]" data-node-id="144:556" data-name="Month Feb">
                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[13.76px] relative shrink-0 text-[10.32px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[27.52px]" data-node-id="144:557" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Feb
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[13.76px] items-start left-[107.5px] top-[145.34px] w-[27.52px]" data-node-id="144:558" data-name="Month Mar">
                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[13.76px] relative shrink-0 text-[10.32px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[27.52px]" data-node-id="144:559" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Mar
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[13.76px] items-start left-[146.2px] top-[145.34px] w-[27.52px]" data-node-id="144:560" data-name="Month Apr">
                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[13.76px] relative shrink-0 text-[10.32px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[27.52px]" data-node-id="144:561" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Apr
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[13.76px] items-start left-[184.9px] top-[145.34px] w-[27.52px]" data-node-id="144:562" data-name="Month May">
                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[13.76px] relative shrink-0 text-[10.32px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[27.52px]" data-node-id="144:563" style={{ fontVariationSettings: '"wdth" 100' }}>
                  May
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[13.76px] items-start left-[223.6px] top-[145.34px] w-[27.52px]" data-node-id="144:564" data-name="Month Jun">
                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[13.76px] relative shrink-0 text-[10.32px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[27.52px]" data-node-id="144:565" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Jun
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[13.76px] items-start left-[262.3px] top-[145.34px] w-[27.52px]" data-node-id="144:566" data-name="Month Jul">
                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[13.76px] relative shrink-0 text-[10.32px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[27.52px]" data-node-id="144:567" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Jul
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[13.76px] items-start left-[301px] top-[145.34px] w-[27.52px]" data-node-id="144:568" data-name="Month Aug">
                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[13.76px] relative shrink-0 text-[10.32px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[27.52px]" data-node-id="144:569" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Aug
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[13.76px] items-start left-[339.7px] top-[145.34px] w-[27.52px]" data-node-id="144:570" data-name="Month Sep">
                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[13.76px] relative shrink-0 text-[10.32px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[27.52px]" data-node-id="144:571" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Sep
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[13.76px] items-start left-[378.4px] top-[145.34px] w-[27.52px]" data-node-id="144:572" data-name="Month Oct">
                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[13.76px] relative shrink-0 text-[10.32px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[27.52px]" data-node-id="144:573" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Oct
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[13.76px] items-start left-[417.1px] top-[145.34px] w-[27.52px]" data-node-id="144:574" data-name="Month Nov">
                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[13.76px] relative shrink-0 text-[10.32px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[27.52px]" data-node-id="144:575" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Nov
                </p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[13.76px] items-start left-[455.8px] top-[145.34px] w-[27.52px]" data-node-id="144:576" data-name="Month Dec">
                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[13.76px] relative shrink-0 text-[10.32px] text-[color:var(--eip-custom-7b738f,#7b738f)] text-center w-[27.52px]" data-node-id="144:577" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Dec
                </p>
              </div>
              <div className="[word-break:break-word] absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_6.88px_12.9px_rgba(96,75,169,0.06)] flex flex-col gap-[var(--eip-spacing-0,0px)] h-[54.18px] items-start left-[404.2px] pb-[6.88px] pt-[8.6px] px-[6.88px] rounded-[10.32px] text-center top-[54.18px] w-[77.4px]" data-node-id="144:578" data-name="Your facility tooltip">
                <p className="font-['Roboto:Bold'] font-bold leading-[24.94px] relative shrink-0 text-[20.64px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[63.64px]" data-node-id="144:579" style={{ fontVariationSettings: '"wdth" 100' }}>
                  87
                </p>
                <p className="font-['Roboto:Regular'] font-normal leading-[13.76px] relative shrink-0 text-[9.46px] text-[color:var(--eip-custom-777087,#777087)] w-[63.64px]" data-node-id="144:580" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Your Facility
                </p>
              </div>
              <div className="absolute left-[438.6px] size-[6.88px] top-[49.88px]" data-node-id="144:581" data-name="Tooltip marker">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTooltipMarker} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--eip-color-white,white)] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[20px] py-[22px] relative rounded-[20px] shadow-[0px_8px_30px_0px_rgba(89,41,166,0.06)] shrink-0 w-full" data-node-id="144:583" data-name="Department comparison">
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[24px] min-w-full relative shrink-0 text-[16px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[min-content]" data-node-id="144:584" style={{ fontVariationSettings: '"wdth" 100' }}>
            Department Comparison
          </p>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="144:585" data-name="Patient Experience">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="144:586" data-name="Label row">
              <div className="relative shrink-0 size-[28px]" data-node-id="144:587" data-name="Image / Patient Experience image icon">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePatientExperienceImageIcon} />
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[22px] min-w-px relative text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="144:588" style={{ fontVariationSettings: '"wdth" 100' }}>
                Patient Experience
              </p>
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[23px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center whitespace-nowrap" data-node-id="144:589" style={{ fontVariationSettings: '"wdth" 100' }}>
                92
              </p>
            </div>
            <div className="h-[16px] relative shrink-0 w-full" data-node-id="144:590" data-name="Bar">
              <div className="-translate-y-1/2 absolute bg-[var(--eip-custom-f0eaf7,#f0eaf7)] h-[10px] left-0 right-0 rounded-[var(--eip-radius-5,5px)] top-1/2" data-node-id="144:591" data-name="Comparison track" />
              <div className="-translate-y-1/2 absolute bg-gradient-to-r from-[#604ba9] h-[10px] left-0 right-[8%] rounded-[var(--eip-radius-5,5px)] to-[#c7309a] top-1/2" data-node-id="144:592" data-name="Patient Experience progress" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="144:593" data-name="Service Quality">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="144:594" data-name="Label row">
              <div className="relative shrink-0 size-[28px]" data-node-id="144:595" data-name="Image / Service Quality image icon">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageServiceQualityImageIcon} />
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[22px] min-w-px relative text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="144:596" style={{ fontVariationSettings: '"wdth" 100' }}>
                Service Quality
              </p>
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[23px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center whitespace-nowrap" data-node-id="144:597" style={{ fontVariationSettings: '"wdth" 100' }}>
                85
              </p>
            </div>
            <div className="h-[16px] relative shrink-0 w-full" data-node-id="144:598" data-name="Bar">
              <div className="-translate-y-1/2 absolute bg-[var(--eip-custom-f0eaf7,#f0eaf7)] h-[10px] left-0 right-0 rounded-[var(--eip-radius-5,5px)] top-1/2" data-node-id="144:599" data-name="Comparison track" />
              <div className="-translate-y-1/2 absolute bg-gradient-to-r from-[#604ba9] h-[10px] left-0 right-[15%] rounded-[var(--eip-radius-5,5px)] to-[#c7309a] top-1/2" data-node-id="144:600" data-name="Service Quality progress" />
              <div className="-translate-y-1/2 absolute bg-[var(--eip-custom-b99ee7,#b6abda)] h-[17px] left-[70.52%] right-[28.52%] top-1/2" data-node-id="144:601" data-name="Service Quality industry marker" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="144:602" data-name="Efficiency">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="144:603" data-name="Label row">
              <div className="relative shrink-0 size-[28px]" data-node-id="144:604" data-name="Image / Efficiency image icon">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageEfficiencyImageIcon} />
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[22px] min-w-px relative text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="144:605" style={{ fontVariationSettings: '"wdth" 100' }}>
                Efficiency
              </p>
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[23px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center whitespace-nowrap" data-node-id="144:606" style={{ fontVariationSettings: '"wdth" 100' }}>
                78
              </p>
            </div>
            <div className="h-[16px] relative shrink-0 w-full" data-node-id="144:607" data-name="Bar">
              <div className="-translate-y-1/2 absolute bg-[var(--eip-custom-f0eaf7,#f0eaf7)] h-[10px] left-0 right-0 rounded-[var(--eip-radius-5,5px)] top-1/2" data-node-id="144:608" data-name="Comparison track" />
              <div className="-translate-y-1/2 absolute bg-gradient-to-r from-[#604ba9] h-[10px] left-0 right-[22%] rounded-[var(--eip-radius-5,5px)] to-[#c7309a] top-1/2" data-node-id="144:609" data-name="Efficiency progress" />
              <div className="-translate-y-1/2 absolute bg-[var(--eip-custom-b99ee7,#b6abda)] h-[17px] left-[85.52%] right-[13.52%] top-1/2" data-node-id="144:610" data-name="Efficiency industry marker" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="144:611" data-name="Safety & Compliance">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="144:612" data-name="Label row">
              <div className="relative shrink-0 size-[28px]" data-node-id="144:613" data-name="Image / Safety & Compliance image icon">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSafetyComplianceImageIcon} />
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[22px] min-w-px relative text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="144:614" style={{ fontVariationSettings: '"wdth" 100' }}>{`Safety & Compliance`}</p>
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[23px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center whitespace-nowrap" data-node-id="144:615" style={{ fontVariationSettings: '"wdth" 100' }}>
                90
              </p>
            </div>
            <div className="h-[16px] relative shrink-0 w-full" data-node-id="144:616" data-name="Bar">
              <div className="-translate-y-1/2 absolute bg-[var(--eip-custom-f0eaf7,#f0eaf7)] h-[10px] left-0 right-0 rounded-[var(--eip-radius-5,5px)] top-1/2" data-node-id="144:617" data-name="Comparison track" />
              <div className="-translate-y-1/2 absolute bg-gradient-to-r from-[#604ba9] h-[10px] left-0 right-[8%] rounded-[var(--eip-radius-5,5px)] to-[#c7309a] top-1/2" data-node-id="144:618" data-name="Safety & Compliance progress" />
              <div className="-translate-y-1/2 absolute bg-[var(--eip-custom-b99ee7,#b6abda)] h-[17px] left-[77.52%] right-[21.52%] top-1/2" data-node-id="144:619" data-name="Safety & Compliance industry marker" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="144:620" data-name="Communication">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="144:621" data-name="Label row">
              <div className="relative shrink-0 size-[28px]" data-node-id="144:622" data-name="Image / Communication image icon">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCommunicationImageIcon} />
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[22px] min-w-px relative text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="144:623" style={{ fontVariationSettings: '"wdth" 100' }}>
                Communication
              </p>
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[23px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center whitespace-nowrap" data-node-id="144:624" style={{ fontVariationSettings: '"wdth" 100' }}>
                83
              </p>
            </div>
            <div className="h-[16px] relative shrink-0 w-full" data-node-id="144:625" data-name="Bar">
              <div className="-translate-y-1/2 absolute bg-[var(--eip-custom-f0eaf7,#f0eaf7)] h-[10px] left-0 right-0 rounded-[var(--eip-radius-5,5px)] top-1/2" data-node-id="144:626" data-name="Comparison track" />
              <div className="-translate-y-1/2 absolute bg-gradient-to-r from-[#604ba9] h-[10px] left-0 right-[16%] rounded-[var(--eip-radius-5,5px)] to-[#c7309a] top-1/2" data-node-id="144:627" data-name="Communication progress" />
              <div className="-translate-y-1/2 absolute bg-[var(--eip-custom-b99ee7,#b6abda)] h-[17px] left-[68.52%] right-[30.52%] top-1/2" data-node-id="144:628" data-name="Communication industry marker" />
            </div>
          </div>
          <div className="content-stretch flex gap-[var(--eip-spacing-10,10px)] h-[22px] items-center relative shrink-0 w-[430px]" data-node-id="144:629" data-name="Department legend">
            <div className="relative shrink-0 size-[11px]" data-node-id="144:630" data-name="Facility swatch">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFacilitySwatch} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[94px]" data-node-id="144:631" style={{ fontVariationSettings: '"wdth" 100' }}>
              Your Facility
            </p>
            <div className="relative shrink-0 size-[11px]" data-node-id="144:632" data-name="Industry swatch">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIndustrySwatch1} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[134px]" data-node-id="144:633" style={{ fontVariationSettings: '"wdth" 100' }}>
              Industry Average
            </p>
          </div>
        </div>
        <div className="bg-[var(--eip-color-white,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[20px] shadow-[0px_8px_30px_0px_rgba(89,41,166,0.06)] shrink-0 w-full" data-node-id="144:634" data-name="Benchmark position">
          <div className="h-[284px] relative shrink-0 w-full" data-node-id="144:635" data-name="Benchmark position content">
            <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[24px] items-start justify-center left-[87px] top-[19px] w-[185px]" data-node-id="144:636" data-name="Benchmark position title">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[15px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[185px]" data-node-id="144:637" style={{ fontVariationSettings: '"wdth" 100' }}>
                Benchmark Position
              </p>
            </div>
            <div className="absolute left-[89px] size-[174px] top-[40px]" data-node-id="144:638" data-name="Top fifteen percent gauge">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTopFifteenPercentGauge} />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[70px] items-start justify-center left-[99px] top-[109px] w-[154px]" data-node-id="144:640" data-name="Percentile score">
              <div className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[0] relative shrink-0 text-[29px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center w-[154px]" data-node-id="144:641" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[32px] mb-0">Top</p>
                <p className="leading-[32px]">15%</p>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[51px] items-start left-[85px] top-[208px] w-[180px]" data-node-id="144:642" data-name="Position explanation">
              <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center w-[180px]" data-node-id="144:643" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="mb-0">
                  <span className="leading-[21px]">{`Better than `}</span>
                  <span className="leading-[21px] text-[#604ba9]">85%</span>
                  <span className="leading-[21px]">{` of`}</span>
                </p>
                <p className="leading-[21px]">facilities in your category</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--eip-color-white,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[20px] shadow-[0px_8px_30px_0px_rgba(89,41,166,0.06)] shrink-0 w-full" data-node-id="144:644" data-name="Key highlights">
          <div className="h-[286px] relative shrink-0 w-full" data-node-id="144:645" data-name="Key highlights content">
            <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[24px] items-start left-[40px] top-[17px] w-[160px]" data-node-id="144:646" data-name="Highlights title">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[15px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[160px]" data-node-id="144:647" style={{ fontVariationSettings: '"wdth" 100' }}>
                Key Highlights
              </p>
            </div>
            <div className="absolute h-[43px] left-[30px] top-[58px] w-[41px]" data-node-id="144:648" data-name="Image / Highlight icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHighlightIcon} />
            </div>
            <div className="absolute h-[43px] left-[30px] top-[118px] w-[41px]" data-node-id="144:649" data-name="Image / Highlight icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHighlightIcon1} />
            </div>
            <div className="absolute h-[43px] left-[30px] top-[182px] w-[41px]" data-node-id="144:650" data-name="Image / Highlight icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHighlightIcon2} />
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-1,1px)] h-[48px] items-start left-[79px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[58px] w-[137px]" data-node-id="144:651" data-name="Highlight copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16px] w-[137px]" data-node-id="144:652" style={{ fontVariationSettings: '"wdth" 100' }}>
                +12%
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] w-[137px]" data-node-id="144:653" style={{ fontVariationSettings: '"wdth" 100' }}>
                vs Last Quarter
              </p>
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-1,1px)] h-[48px] items-start left-[79px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[119px] w-[137px]" data-node-id="144:654" data-name="Highlight copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16px] w-[137px]" data-node-id="144:655" style={{ fontVariationSettings: '"wdth" 100' }}>
                4.6/5
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] w-[137px]" data-node-id="144:656" style={{ fontVariationSettings: '"wdth" 100' }}>
                Patient Satisfaction
              </p>
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-1,1px)] h-[48px] items-start left-[79px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[180px] w-[137px]" data-node-id="144:657" data-name="Highlight copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16px] w-[137px]" data-node-id="144:658" style={{ fontVariationSettings: '"wdth" 100' }}>
                Top 15%
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] w-[137px]" data-node-id="144:659" style={{ fontVariationSettings: '"wdth" 100' }}>
                Industry Ranking
              </p>
            </div>
            <div className="absolute h-[43px] left-[30px] top-[58px] w-[41px]" data-node-id="144:660" data-name="Image / Highlight icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHighlightIcon} />
            </div>
            <div className="absolute h-[43px] left-[30px] top-[118px] w-[41px]" data-node-id="144:661" data-name="Image / Highlight icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHighlightIcon1} />
            </div>
            <div className="absolute h-[43px] left-[30px] top-[182px] w-[41px]" data-node-id="144:662" data-name="Image / Highlight icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHighlightIcon2} />
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-1,1px)] h-[48px] items-start left-[79px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[58px] w-[137px]" data-node-id="144:663" data-name="Highlight copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16px] w-[137px]" data-node-id="144:664" style={{ fontVariationSettings: '"wdth" 100' }}>
                +12%
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] w-[137px]" data-node-id="144:665" style={{ fontVariationSettings: '"wdth" 100' }}>
                vs Last Quarter
              </p>
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-1,1px)] h-[48px] items-start left-[79px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[119px] w-[137px]" data-node-id="144:666" data-name="Highlight copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16px] w-[137px]" data-node-id="144:667" style={{ fontVariationSettings: '"wdth" 100' }}>
                4.6/5
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] w-[137px]" data-node-id="144:668" style={{ fontVariationSettings: '"wdth" 100' }}>
                Patient Satisfaction
              </p>
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-1,1px)] h-[48px] items-start left-[79px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[180px] w-[137px]" data-node-id="144:669" data-name="Highlight copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16px] w-[137px]" data-node-id="144:670" style={{ fontVariationSettings: '"wdth" 100' }}>
                Top 15%
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] w-[137px]" data-node-id="144:671" style={{ fontVariationSettings: '"wdth" 100' }}>
                Industry Ranking
              </p>
            </div>
            <div className="absolute h-[43px] left-[30px] top-[58px] w-[41px]" data-node-id="144:672" data-name="Image / Highlight icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHighlightIcon} />
            </div>
            <div className="absolute h-[43px] left-[30px] top-[118px] w-[41px]" data-node-id="144:673" data-name="Image / Highlight icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHighlightIcon1} />
            </div>
            <div className="absolute h-[43px] left-[30px] top-[182px] w-[41px]" data-node-id="144:674" data-name="Image / Highlight icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHighlightIcon2} />
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-1,1px)] h-[48px] items-start left-[79px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[58px] w-[137px]" data-node-id="144:675" data-name="Highlight copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16px] w-[137px]" data-node-id="144:676" style={{ fontVariationSettings: '"wdth" 100' }}>
                +12%
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] w-[137px]" data-node-id="144:677" style={{ fontVariationSettings: '"wdth" 100' }}>
                vs Last Quarter
              </p>
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-1,1px)] h-[48px] items-start left-[79px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[119px] w-[137px]" data-node-id="144:678" data-name="Highlight copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16px] w-[137px]" data-node-id="144:679" style={{ fontVariationSettings: '"wdth" 100' }}>
                4.6/5
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] w-[137px]" data-node-id="144:680" style={{ fontVariationSettings: '"wdth" 100' }}>
                Patient Satisfaction
              </p>
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-1,1px)] h-[48px] items-start left-[79px] text-[color:var(--eip-color-ink,#0b0b2c)] top-[180px] w-[137px]" data-node-id="144:681" data-name="Highlight copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16px] w-[137px]" data-node-id="144:682" style={{ fontVariationSettings: '"wdth" 100' }}>
                Top 15%
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[18px] relative shrink-0 text-[12px] w-[137px]" data-node-id="144:683" style={{ fontVariationSettings: '"wdth" 100' }}>
                Industry Ranking
              </p>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[25px] items-start justify-center left-[46px] top-[244px] w-[170px]" data-node-id="144:684" data-name="Full report link">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[20px] relative shrink-0 text-[12px] text-[color:var(--eip-custom-7020d8,#604ba9)] text-center w-[170px] whitespace-pre-wrap" data-node-id="144:685" style={{ fontVariationSettings: '"wdth" 100' }}>{`View Full Report  →`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[24px] px-[var(--eip-spacing-20,20px)] relative shrink-0 w-full" data-node-id="144:686" data-name="Capabilities">
        <div className="content-start flex flex-wrap gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="144:687" data-name="Capability grid">
          <div className="bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex flex-col gap-[var(--eip-spacing-0,0px)] h-[240px] items-start relative rounded-[var(--eip-radius-21,21px)] shrink-0 w-[169px]" data-node-id="144:688" data-name="Compare Facilities">
            <div className="absolute left-[48px] size-[74px] top-[16px]" data-node-id="144:689" data-name="Image / Compare Facilities icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCompareFacilitiesIcon} />
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] h-[98px] items-start left-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center top-[98px] w-[145px]" data-node-id="144:690" data-name="Capability copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[17px] w-full" data-node-id="144:691" style={{ fontVariationSettings: '"wdth" 100' }}>
                Compare Facilities
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[19px] relative shrink-0 text-[12px] w-full" data-node-id="144:692" style={{ fontVariationSettings: '"wdth" 100' }}>
                Benchmark multiple facilities side by side with ease.
              </p>
            </div>
            <div className="absolute bg-[var(--eip-custom-7021d8,#604ba9)] h-[2px] left-[65px] top-[214px] w-[36px]" data-node-id="144:693" data-name="Accent underline" />
          </div>
          <div className="bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex flex-col gap-[var(--eip-spacing-0,0px)] h-[240px] items-start relative rounded-[var(--eip-radius-21,21px)] shrink-0 w-[169px]" data-node-id="144:694" data-name="Department Insights">
            <div className="absolute left-[48px] size-[74px] top-[16px]" data-node-id="144:695" data-name="Image / Department Insights icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageDepartmentInsightsIcon} />
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] h-[98px] items-start left-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center top-[98px] w-[145px]" data-node-id="144:696" data-name="Capability copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[17px] w-full" data-node-id="144:697" style={{ fontVariationSettings: '"wdth" 100' }}>
                Department Insights
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[19px] relative shrink-0 text-[12px] w-full" data-node-id="144:698" style={{ fontVariationSettings: '"wdth" 100' }}>
                Dive deep into each department’s performance and contribution.
              </p>
            </div>
            <div className="absolute bg-[var(--eip-custom-fb792d,#f57915)] h-[2px] left-[65px] top-[214px] w-[36px]" data-node-id="144:699" data-name="Accent underline" />
          </div>
          <div
            className="bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex flex-col gap-[var(--eip-spacing-0,0px)] h-[240px] items-start relative rounded-[var(--eip-radius-21,21px)] shrink-0 w-[169px]"
            data-node-id="144:700"
            data-name="Identify Strengths
& Weaknesses"
          >
            <div
              className="absolute left-[48px] size-[74px] top-[16px]"
              data-node-id="144:701"
              data-name="Image / Identify Strengths
& Weaknesses icon"
            >
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageIdentifyStrengthsWeaknessesIcon} />
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] h-[98px] items-start left-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center top-[98px] w-[145px]" data-node-id="144:702" data-name="Capability copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[17px] w-full" data-node-id="144:703" style={{ fontVariationSettings: '"wdth" 100' }}>{`Identify Strengths & Weaknesses`}</p>
              <p className="font-['Roboto:Regular'] font-normal leading-[19px] relative shrink-0 text-[12px] w-full" data-node-id="144:704" style={{ fontVariationSettings: '"wdth" 100' }}>
                Understand what drives success and what to fix.
              </p>
            </div>
            <div className="absolute bg-[var(--eip-custom-4b6dde,#5157b0)] h-[2px] left-[65px] top-[214px] w-[36px]" data-node-id="144:705" data-name="Accent underline" />
          </div>
          <div
            className="bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex flex-col gap-[var(--eip-spacing-0,0px)] h-[240px] items-start relative rounded-[var(--eip-radius-21,21px)] shrink-0 w-[169px]"
            data-node-id="144:706"
            data-name="Actionable
Recommendations"
          >
            <div
              className="absolute left-[48px] size-[74px] top-[16px]"
              data-node-id="144:707"
              data-name="Image / Actionable
Recommendations icon"
            >
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageActionableRecommendationsIcon} />
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] h-[98px] items-start left-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center top-[98px] w-[145px]" data-node-id="144:708" data-name="Capability copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[17px] w-full" data-node-id="144:709" style={{ fontVariationSettings: '"wdth" 100' }}>
                Actionable Recommendations
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[19px] relative shrink-0 text-[12px] w-full" data-node-id="144:710" style={{ fontVariationSettings: '"wdth" 100' }}>
                Get intelligent suggestions to improve outcomes.
              </p>
            </div>
            <div className="absolute bg-[var(--eip-custom-d930b4,#c7309a)] h-[2px] left-[65px] top-[214px] w-[36px]" data-node-id="144:711" data-name="Accent underline" />
          </div>
          <div
            className="bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex flex-col gap-[var(--eip-spacing-0,0px)] h-[240px] items-start relative rounded-[var(--eip-radius-21,21px)] shrink-0 w-[350px]"
            data-node-id="144:712"
            data-name="Track & Improve
Continuously"
          >
            <div
              className="absolute left-[138.5px] size-[74px] top-[16px]"
              data-node-id="144:713"
              data-name="Image / Track & Improve
Continuously icon"
            >
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTrackImproveContinuouslyIcon} />
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] h-[98px] items-start left-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center top-[98px] w-[326px]" data-node-id="144:714" data-name="Capability copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[17px] w-full" data-node-id="144:715" style={{ fontVariationSettings: '"wdth" 100' }}>{`Track & Improve Continuously`}</p>
              <p className="font-['Roboto:Regular'] font-normal leading-[19px] relative shrink-0 text-[12px] w-full" data-node-id="144:716" style={{ fontVariationSettings: '"wdth" 100' }}>
                Monitor progress over time and stay ahead.
              </p>
            </div>
            <div className="absolute bg-[var(--eip-custom-27c4c2,#49c0a1)] h-[2px] left-[155.5px] top-[214px] w-[36px]" data-node-id="144:717" data-name="Accent underline" />
          </div>
        </div>
      </div>
      <div className="h-[346.436px] overflow-clip relative shrink-0 w-[390px]" data-node-id="144:718" data-name="Artwork / Growth illustration / feather">
        <div className="absolute contents left-0 top-0" data-node-id="144:719" data-name="horizontal edge fade / mask group">
          <div className="absolute contents left-0 top-0" data-node-id="144:721" data-name="vertical edge fade / mask group">
            <div className="absolute h-[346.436px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[390px_346.436px,_390px_346.436px] top-0 w-[390px]" data-node-id="144:723" style={{ maskImage: `url("${imgImageGrowthIllustration}"), url("${imgImageGrowthIllustration1}")` }} data-name="Image / Growth illustration">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGrowthIllustration2} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--eip-color-white,white)] border-[var(--eip-custom-ececf3,#ececf3)] border-solid border-t content-stretch flex flex-col gap-[40px] items-start pb-[44px] pt-[52px] px-[24px] relative shrink-0 w-full" data-node-id="173:1125" data-name="Footer">
        <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I173:1125;171:631" data-name="Footer brand">
          <LogoExperio className="h-[28px] relative shrink-0 w-[169.13px]" />
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Roboto:Bold'] font-bold items-start leading-[0] overflow-clip relative shrink-0 text-[26px] whitespace-nowrap" data-node-id="I173:1125;171:634" data-name="Tagline">
            <div className="relative shrink-0 text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="I173:1125;171:635" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[32px] mb-0">Every experience</p>
              <p className="leading-[32px]">has a voice.</p>
            </div>
            <div className="bg-clip-text relative shrink-0 text-[transparent]" data-node-id="I173:1125;171:636" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(90deg, rgb(81, 87, 176) 0%, rgb(96, 75, 169) 35%, rgb(227, 30, 132) 65%, rgb(242, 89, 131) 94%, rgb(242, 89, 131) 100%)" }}>
              <p className="leading-[32px] mb-0">We turn it into</p>
              <p className="leading-[32px]">intelligence.</p>
            </div>
          </div>
          <a className="bg-gradient-to-r content-stretch cursor-pointer flex from-[var(--eip-cta-violet,#604ba9)] gap-[var(--eip-spacing-12,12px)] items-center justify-center px-[var(--eip-spacing-28,28px)] py-[var(--eip-spacing-19,19px)] relative rounded-[var(--eip-full,999px)] shrink-0 to-[var(--eip-cta-coral,#f36289)] via-[57%] via-[var(--eip-cta-pink,#c7309a)] w-full" data-node-id="I173:1125;172:786" data-name="Button / Request a Demo">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[18px] text-[color:var(--eip-color-white,white)] text-left whitespace-nowrap" data-node-id="I173:1125;172:786;29:307" style={{ fontVariationSettings: '"wdth" 100' }}>
              Request a Demo
            </p>
            <div className="relative shrink-0 size-[20px]" data-node-id="I173:1125;172:786;29:308" data-name="Trailing icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrailingIcon} />
            </div>
          </a>
        </div>
        <div className="content-stretch flex gap-[24px] items-center overflow-clip relative shrink-0" data-node-id="I173:1125;171:622" data-name="Socials">
          <div className="relative shrink-0 size-[26px]" data-node-id="I173:1125;171:623" data-name="Social / Instagram">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocialInstagram} />
          </div>
          <div className="relative shrink-0 size-[26px]" data-node-id="I173:1125;171:625" data-name="Social / X">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocialX} />
          </div>
          <div className="relative shrink-0 size-[26px]" data-node-id="I173:1125;171:627" data-name="Social / TikTok">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocialTikTok} />
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Roboto:Medium'] font-medium gap-[22px] items-start leading-[20px] overflow-clip relative shrink-0 text-[16px] text-[color:var(--eip-custom-595878,#595878)] whitespace-nowrap" data-node-id="I173:1125;171:637" data-name="Footer links">
          <p className="relative shrink-0" data-node-id="I173:1125;171:638" style={{ fontVariationSettings: '"wdth" 100' }}>
            Contact Us
          </p>
          <p className="relative shrink-0" data-node-id="I173:1125;171:639" style={{ fontVariationSettings: '"wdth" 100' }}>
            Privacy
          </p>
          <p className="relative shrink-0" data-node-id="I173:1125;171:640" style={{ fontVariationSettings: '"wdth" 100' }}>
            Marketing
          </p>
          <p className="relative shrink-0" data-node-id="I173:1125;171:641" style={{ fontVariationSettings: '"wdth" 100' }}>
            Support
          </p>
          <p className="relative shrink-0" data-node-id="I173:1125;171:642" style={{ fontVariationSettings: '"wdth" 100' }}>
            Copyright
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I173:1125;171:643" data-name="Footer bottom">
          <div className="bg-[var(--eip-custom-ececf3,#ececf3)] h-px relative shrink-0 w-full" data-node-id="I173:1125;171:644" data-name="Divider" />
          <div className="h-[28px] relative shrink-0 w-[10px]" data-node-id="I173:1125;171:645" data-name="Spacer" />
          <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[0] relative shrink-0 text-[11px] text-[color:var(--eip-custom-77748e,#77748e)] tracking-[1.2px] whitespace-nowrap" data-node-id="I173:1125;171:646" style={{ fontVariationSettings: '"wdth" 100' }}>
            <span className="leading-[14px]">{`DEVELOPED AND DESIGNED BY `}</span>
            <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid font-['Roboto:Bold'] font-bold leading-[14px] text-[#9440a5] underline" href="https://www.udtech-sa.com/ar/home" style={{ fontVariationSettings: '"wdth" 100' }} target="_blank">
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid underline" href="https://www.udtech-sa.com/ar/home" style={{ fontVariationSettings: '"wdth" 100' }} target="_blank">
                UD-TECH
              </span>
            </a>
          </p>
          <div className="relative shrink-0 size-[10px]" data-node-id="I173:1125;171:647" data-name="Spacer" />
          <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[14px] relative shrink-0 text-[11px] text-[color:var(--eip-custom-77748e,#77748e)] tracking-[1.2px] whitespace-nowrap" data-node-id="I173:1125;171:648" style={{ fontVariationSettings: '"wdth" 100' }}>
            © 2026 EXPERIO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </div>
  );
}