const assetPathPrefix = "https://www.figma.com/api/mcp/asset/53357026-036b-49f2-a5ea-99bf31d4ba67";
const imgIconArrowRight = `${assetPathPrefix}/c7347.svg`;
const imgBrandSymbolImage = `${assetPathPrefix}/774d0.png`;
const imgImageDecorativeJourneyAssembly2 = `${assetPathPrefix}/7f8a4.png`;
const imgImageLaunchPaperPlane2 = `${assetPathPrefix}/42f6d.png`;
const imgImageWorldMapWesternHemisphere2 = `${assetPathPrefix}/fbfa7.png`;
const imgImageWorldMapEasternHemisphere2 = `${assetPathPrefix}/84df8.png`;
const imgImageRealTimeInsightsIcon = `${assetPathPrefix}/59f09.png`;
const imgImageActionableIntelligenceIcon = `${assetPathPrefix}/a61fc.png`;
const imgImageEnterpriseSecurityIcon = `${assetPathPrefix}/b87db.png`;
const imgImageRoleBasedAccessIcon = `${assetPathPrefix}/d7dc5.png`;
const imgImageMeasurableImpactIcon = `${assetPathPrefix}/43a83.png`;
const imgDropdownChevron = `${assetPathPrefix}/c717e.svg`;
const imgImageDecorativeJourneyAssembly = `${assetPathPrefix}/67a58.svg`;
const imgImageDecorativeJourneyAssembly1 = `${assetPathPrefix}/be509.svg`;
const imgImageLaunchPaperPlane = `${assetPathPrefix}/8165b.svg`;
const imgImageLaunchPaperPlane1 = `${assetPathPrefix}/65560.svg`;
const imgBenchmarkingOrbit = `${assetPathPrefix}/a9f32.svg`;
const imgImageWorldMapWesternHemisphere = `${assetPathPrefix}/4331e.svg`;
const imgImageWorldMapWesternHemisphere1 = `${assetPathPrefix}/920d4.svg`;
const imgImageWorldMapEasternHemisphere = `${assetPathPrefix}/1fe14.svg`;
const imgImageWorldMapEasternHemisphere1 = `${assetPathPrefix}/67f94.svg`;
const imgRankingPodiumBase = `${assetPathPrefix}/90c1d.svg`;
const imgRankingPodiumInset = `${assetPathPrefix}/43c59.svg`;
const imgColumnEllipseCap = `${assetPathPrefix}/c0309.svg`;
const imgRankBadge = `${assetPathPrefix}/e8731.svg`;
const imgColumnEllipseCap1 = `${assetPathPrefix}/7ff9c.svg`;
const imgColumnEllipseCap2 = `${assetPathPrefix}/a15b3.svg`;
const imgColumnEllipseCap3 = `${assetPathPrefix}/c7e2b.svg`;
const imgColumnEllipseCap4 = `${assetPathPrefix}/9a26a.svg`;
const imgRankBadge1 = `${assetPathPrefix}/edeed.svg`;
const imgColumnEllipseCap5 = `${assetPathPrefix}/0b0e3.svg`;
const imgColumnEllipseCap6 = `${assetPathPrefix}/710e8.svg`;
const imgColumnEllipseCap7 = `${assetPathPrefix}/53402.svg`;
const imgColumnEllipseCap8 = `${assetPathPrefix}/65814.svg`;

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

export default function HowItWorksDesktop() {
  return (
    <div className="bg-[var(--eip-color-white,white)] content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-start relative size-full" data-node-id="33:1193" data-name="How it works / Desktop">
      <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] h-[90px] items-center pl-[var(--eip-spacing-46,46px)] pr-[var(--eip-spacing-41,41px)] py-[var(--eip-spacing-24,24px)] relative shrink-0 w-[1536px]" data-node-id="33:1194" data-name="Header">
        <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-13,13px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0 w-[245px]" data-node-id="I33:1194;29:88" data-name="Brand">
          <div className="content-stretch flex h-[42px] items-start relative shrink-0 w-[40px]" data-node-id="I33:1194;29:89" data-name="Brand symbol">
            <div className="absolute h-[48px] left-[-6px] top-[-2px] w-[50px]" data-node-id="I33:1194;29:90" data-name="Brand symbol / Image">
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBrandSymbolImage} />
            </div>
          </div>
          <div className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[0] relative shrink-0 text-[18px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:1194;29:91" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[21px] mb-0">Experience</p>
            <p className="leading-[21px]">Intelligence Platform</p>
          </div>
        </a>
        <div className="flex-[1_0_0] h-[42px] min-w-px relative" data-node-id="I33:1194;29:115" data-name="Flexible spacing / Before navigation" />
        <div className="content-stretch flex gap-[var(--eip-spacing-53_2,53.2px)] h-[42px] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0 w-[694px]" data-node-id="I33:1194;29:92" data-name="Navigation">
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:1194;29:93" data-name="Navigation / Platform">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-violet,#7816ba)] text-left whitespace-nowrap" data-node-id="I33:1194;29:94" style={{ fontVariationSettings: '"wdth" 100' }}>
              Platform
            </p>
            <div className="absolute h-[2px] left-px top-[29px] w-[54px]" data-node-id="I33:1194;29:117" style={{ backgroundImage: "linear-gradient(90deg, var(--eip-gradient-blue,rgb(62, 74, 240)) 0%, var(--eip-gradient-violet,rgb(141, 34, 213)) 43%, var(--eip-gradient-pink,rgb(231, 54, 144)) 86%, var(--eip-gradient-coral,rgb(239, 87, 100)) 100%)" }} data-name="Active indicator" />
          </a>
          <div className="content-stretch flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:1194;29:96" data-name="Navigation / Solutions">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] whitespace-nowrap" data-node-id="I33:1194;29:97" style={{ fontVariationSettings: '"wdth" 100' }}>
              Solutions
            </p>
            <div className="relative shrink-0 size-[10px]" data-node-id="I33:1194;29:98" data-name="Dropdown chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDropdownChevron} />
            </div>
          </div>
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:1194;29:100" data-name="Navigation / Features">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:1194;29:101" style={{ fontVariationSettings: '"wdth" 100' }}>
              Features
            </p>
          </a>
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:1194;29:102" data-name="Navigation / Benchmarking">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:1194;29:103" style={{ fontVariationSettings: '"wdth" 100' }}>
              Benchmarking
            </p>
          </a>
          <div className="content-stretch flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:1194;29:104" data-name="Navigation / Resources">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] whitespace-nowrap" data-node-id="I33:1194;29:105" style={{ fontVariationSettings: '"wdth" 100' }}>
              Resources
            </p>
            <div className="relative shrink-0 size-[10px]" data-node-id="I33:1194;29:106" data-name="Dropdown chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDropdownChevron} />
            </div>
          </div>
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:1194;29:108" data-name="Navigation / About Us">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:1194;29:109" style={{ fontVariationSettings: '"wdth" 100' }}>
              About Us
            </p>
          </a>
        </div>
        <div className="flex-[1_0_0] h-[42px] min-w-px relative" data-node-id="I33:1194;29:116" data-name="Flexible spacing / Before actions" />
        <div className="content-stretch flex gap-[var(--eip-spacing-14,14px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:1194;29:110" data-name="Actions">
          <Button className="border border-[var(--eip-color-violet,#7816ba)] border-solid content-stretch flex gap-[var(--eip-spacing-12,12px)] items-center justify-center pl-[var(--eip-spacing-24,24px)] pr-[var(--eip-spacing-23,23px)] py-[var(--eip-spacing-12,12px)] relative rounded-[var(--eip-full,999px)] shrink-0" label="Log In" showTrailingIcon={false} style="Outline" />
          <a className="bg-gradient-to-r content-stretch cursor-pointer flex from-[var(--eip-cta-violet,#7c23f8)] gap-[var(--eip-spacing-12,12px)] items-center justify-center pl-[var(--eip-spacing-24,24px)] pr-[var(--eip-spacing-25,25px)] py-[var(--eip-spacing-11,11px)] relative rounded-[var(--eip-full,999px)] shrink-0 to-[var(--eip-cta-coral,#fe6c57)] via-[57%] via-[var(--eip-cta-pink,#e024a7)]" data-node-id="I33:1194;29:112" data-name="Button / Request demo">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-white,white)] text-left whitespace-nowrap" data-node-id="I33:1194;29:112;13:13456" style={{ fontVariationSettings: '"wdth" 100' }}>
              Request a Demo
            </p>
            <IconArrowRight className="relative shrink-0 size-[20px]" />
          </a>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[934px] items-start relative shrink-0 w-full" data-node-id="33:1227" data-name="Intelligent journey">
        <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Roboto:Bold'] font-bold gap-[var(--eip-spacing-7,7px)] h-[185px] items-center left-[439px] text-center top-[10px] w-[650px]" data-node-id="33:1228" data-name="Journey introduction">
          <p className="leading-[20px] relative shrink-0 text-[15px] text-[color:var(--eip-custom-6220d7,#6220d7)] w-[650px]" data-node-id="33:1230" style={{ fontVariationSettings: '"wdth" 100' }}>
            HOW IT WORKS
          </p>
          <p className="leading-[47px] relative shrink-0 text-[39px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[650px]" data-node-id="33:1234" style={{ fontVariationSettings: '"wdth" 100' }}>
            Every experience. Every signal.
          </p>
          <p className="bg-clip-text leading-[49px] relative shrink-0 text-[40px] text-[transparent] whitespace-nowrap" data-node-id="33:1236" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(90deg, rgb(56, 71, 255) 0%, rgb(128, 20, 232) 35%, rgb(224, 28, 150) 65%, rgb(255, 97, 77) 94%, rgb(255, 107, 77) 100%)" }}>
            One intelligent journey.
          </p>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[65px] items-start left-[554px] top-[146px] w-[420px]" data-node-id="33:1237" data-name="Journey subtitle">
          <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[16px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center w-[420px]" data-node-id="33:1239" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[26px] mb-0">See how experience data is captured, understood,</p>
            <p className="leading-[26px]">benchmarked, and turned into impact.</p>
          </div>
        </div>
        <div className="absolute h-[392px] left-[281px] overflow-clip top-[195px] w-[927px]" data-node-id="34:578" data-name="Artwork / Decorative journey assembly / feather">
          <div className="absolute contents left-0 top-0" data-node-id="37:365" data-name="horizontal edge fade / mask group">
            <div className="absolute contents left-0 top-0" data-node-id="37:364" data-name="vertical edge fade / mask group">
              <div className="absolute h-[392px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[927px_392px,_927px_392px] top-0 w-[927px]" data-node-id="33:1240" style={{ maskImage: `url("${imgImageDecorativeJourneyAssembly}"), url("${imgImageDecorativeJourneyAssembly1}")` }} data-name="Image / Decorative journey assembly">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageDecorativeJourneyAssembly2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[48px] left-[398px] overflow-clip top-[147px] w-[53px]" data-node-id="34:593" data-name="Artwork / Launch paper plane / feather">
          <div className="absolute contents left-0 top-0" data-node-id="37:363" data-name="horizontal edge fade / mask group">
            <div className="absolute contents left-0 top-0" data-node-id="37:362" data-name="vertical edge fade / mask group">
              <div className="absolute h-[48px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[53px_48px,_53px_48px] top-0 w-[53px]" data-node-id="33:1241" style={{ maskImage: `url("${imgImageLaunchPaperPlane}"), url("${imgImageLaunchPaperPlane1}")` }} data-name="Image / Launch paper plane">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLaunchPaperPlane2} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex font-['Roboto:Bold'] font-bold gap-[var(--eip-spacing-2,2px)] h-[37px] items-start leading-[25px] left-[344px] px-[var(--eip-spacing-10,10px)] py-[var(--eip-spacing-6,6px)] rounded-[var(--eip-radius-20,20px)] text-[23px] text-center top-[570px] w-[143px] whitespace-nowrap" data-node-id="33:1242" data-name="Editable response rating">
          <p className="relative shrink-0 text-[color:var(--eip-custom-c525d4,#c525d4)]" data-node-id="33:1244" style={{ fontVariationSettings: '"wdth" 100' }}>
            ★
          </p>
          <p className="relative shrink-0 text-[color:var(--eip-custom-c525d4,#c525d4)]" data-node-id="33:1247" style={{ fontVariationSettings: '"wdth" 100' }}>
            ★
          </p>
          <p className="relative shrink-0 text-[color:var(--eip-custom-c525d4,#c525d4)]" data-node-id="33:1248" style={{ fontVariationSettings: '"wdth" 100' }}>
            ★
          </p>
          <p className="relative shrink-0 text-[color:var(--eip-custom-c525d4,#c525d4)]" data-node-id="33:1249" style={{ fontVariationSettings: '"wdth" 100' }}>
            ★
          </p>
          <p className="relative shrink-0 text-[color:var(--eip-custom-deccec,#deccec)]" data-node-id="33:1250" style={{ fontVariationSettings: '"wdth" 100' }}>
            ☆
          </p>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-2,2px)] h-[173px] items-start left-[128px] top-[156px] w-[190px]" data-node-id="33:1253" data-name="01 Launch">
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[37px] relative shrink-0 text-[31px] text-[color:var(--eip-custom-3d66ef,#3d66ef)] whitespace-nowrap" data-node-id="33:1255" style={{ fontVariationSettings: '"wdth" 100' }}>
            01
          </p>
          <div className="content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] items-start relative shrink-0 w-[190px]" data-node-id="33:1258" data-name="Launch copy">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[25px] relative shrink-0 text-[18px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[190px]" data-node-id="33:1260" style={{ fontVariationSettings: '"wdth" 100' }}>
              Launch
            </p>
            <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[190px]" data-node-id="33:1262" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-0">Create your survey, choose</p>
              <p className="leading-[20px] mb-0">the audience and channels,</p>
              <p className="leading-[20px]">and set it live in minutes.</p>
            </div>
            <div className="bg-[var(--eip-custom-3d66ef,#3d66ef)] h-[2px] relative shrink-0 w-[36px]" data-node-id="33:1263" data-name="Launch accent" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-2,2px)] h-[173px] items-start left-[143px] top-[340px] w-[183px]" data-node-id="33:1264" data-name="02 Reach">
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[37px] relative shrink-0 text-[31px] text-[color:var(--eip-custom-5951e9,#5951e9)] whitespace-nowrap" data-node-id="33:1265" style={{ fontVariationSettings: '"wdth" 100' }}>
            02
          </p>
          <div className="content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] items-start relative shrink-0 w-[183px]" data-node-id="33:1268" data-name="Reach copy">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[25px] relative shrink-0 text-[18px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[183px]" data-node-id="33:1269" style={{ fontVariationSettings: '"wdth" 100' }}>
              Reach
            </p>
            <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[183px]" data-node-id="33:1270" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-0">We reach your audience</p>
              <p className="leading-[20px] mb-0">through AI Call or SMS via</p>
              <p className="leading-[20px]">our trusted providers.</p>
            </div>
            <div className="bg-[var(--eip-custom-5951e9,#5951e9)] h-[2px] relative shrink-0 w-[36px]" data-node-id="33:1271" data-name="Reach accent" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-2,2px)] h-[173px] items-start left-[165px] top-[533px] w-[200px]" data-node-id="33:1272" data-name="03 Respond">
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[37px] relative shrink-0 text-[31px] text-[color:var(--eip-custom-7c20dc,#7c20dc)] whitespace-nowrap" data-node-id="33:1273" style={{ fontVariationSettings: '"wdth" 100' }}>
            03
          </p>
          <div className="content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] items-start relative shrink-0 w-[200px]" data-node-id="33:1276" data-name="Respond copy">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[25px] relative shrink-0 text-[18px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[200px]" data-node-id="33:1277" style={{ fontVariationSettings: '"wdth" 100' }}>
              Respond
            </p>
            <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[200px]" data-node-id="33:1278" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-0">People share their experience</p>
              <p className="leading-[20px] mb-0">by answering questions and</p>
              <p className="leading-[20px]">rating from 1 to 5.</p>
            </div>
            <div className="bg-[var(--eip-custom-7c20dc,#7c20dc)] h-[2px] relative shrink-0 w-[36px]" data-node-id="33:1279" data-name="Respond accent" />
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[var(--eip-spacing-15,15px)] h-[110px] items-start left-[670px] top-[585px] w-[278px]" data-node-id="33:1280" data-name="04 Understand">
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[37px] relative shrink-0 text-[31px] text-[color:var(--eip-custom-9320d7,#9320d7)] whitespace-nowrap" data-node-id="33:1281" style={{ fontVariationSettings: '"wdth" 100' }}>
            04
          </p>
          <div className="content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] items-start relative shrink-0 w-[224px]" data-node-id="33:1284" data-name="Understand copy">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[25px] relative shrink-0 text-[18px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[224px]" data-node-id="33:1285" style={{ fontVariationSettings: '"wdth" 100' }}>
              Understand
            </p>
            <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[224px]" data-node-id="33:1286" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-0">Our AI understands sentiment,</p>
              <p className="leading-[20px] mb-0">topics, and patterns from every</p>
              <p className="leading-[20px]">response in real time.</p>
            </div>
            <div className="bg-[var(--eip-custom-9320d7,#9320d7)] h-[2px] relative shrink-0 w-[36px]" data-node-id="33:1287" data-name="Understand accent" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-2,2px)] h-[173px] items-start left-[1228px] top-[413px] w-[228px]" data-node-id="33:1288" data-name="05 Compare">
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[37px] relative shrink-0 text-[31px] text-[color:var(--eip-custom-e832a9,#e832a9)] whitespace-nowrap" data-node-id="33:1289" style={{ fontVariationSettings: '"wdth" 100' }}>
            05
          </p>
          <div className="content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] items-start relative shrink-0 w-[228px]" data-node-id="33:1292" data-name="Compare copy">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[25px] relative shrink-0 text-[18px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[228px]" data-node-id="33:1293" style={{ fontVariationSettings: '"wdth" 100' }}>
              Compare
            </p>
            <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[228px]" data-node-id="33:1294" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-0">We benchmark facilities against</p>
              <p className="leading-[20px] mb-0">each other to reveal strengths,</p>
              <p className="leading-[20px] mb-0">weaknesses and performance</p>
              <p className="leading-[20px]">gaps.</p>
            </div>
            <div className="bg-[var(--eip-custom-e832a9,#e832a9)] h-[2px] relative shrink-0 w-[36px]" data-node-id="33:1295" data-name="Compare accent" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-2,2px)] items-start left-[1228px] top-[159px] w-[235px]" data-node-id="33:1296" data-name="06 Discover">
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[37px] relative shrink-0 text-[31px] text-[color:var(--eip-custom-fa7430,#fa7430)] whitespace-nowrap" data-node-id="33:1297" style={{ fontVariationSettings: '"wdth" 100' }}>
            06
          </p>
          <div className="content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] items-start relative shrink-0 w-[235px]" data-node-id="33:1300" data-name="Discover copy">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[25px] relative shrink-0 text-[18px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[235px]" data-node-id="33:1301" style={{ fontVariationSettings: '"wdth" 100' }}>
              Discover
            </p>
            <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[12px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[235px]" data-node-id="33:1302" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-0">You get real-time intelligence</p>
              <p className="leading-[20px] mb-0">to act with confidence and</p>
              <p className="leading-[20px]">drive measurable impact.</p>
            </div>
            <div className="bg-[var(--eip-custom-fa7430,#fa7430)] h-[2px] relative shrink-0 w-[36px]" data-node-id="33:1303" data-name="Discover accent" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[258px] items-start left-[225px] top-[676px] w-[939px]" data-node-id="33:1304" data-name="Facility benchmarking chart">
          <div className="absolute h-[310px] left-0 top-[-14px] w-[939px]" data-node-id="33:1305" data-name="Benchmarking orbit">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBenchmarkingOrbit} />
          </div>
          <div className="absolute h-[82px] left-[175px] overflow-clip top-0 w-[236px]" data-node-id="34:583" data-name="Artwork / World map western hemisphere / feather">
            <div className="absolute contents left-0 top-0" data-node-id="37:361" data-name="horizontal edge fade / mask group">
              <div className="absolute contents left-0 top-0" data-node-id="37:360" data-name="vertical edge fade / mask group">
                <div className="absolute h-[82px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[236px_82px,_236px_82px] top-0 w-[236px]" data-node-id="33:1306" style={{ maskImage: `url("${imgImageWorldMapWesternHemisphere}"), url("${imgImageWorldMapWesternHemisphere1}")` }} data-name="Image / World map western hemisphere">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWorldMapWesternHemisphere2} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[92px] left-[575px] overflow-clip top-[2px] w-[290px]" data-node-id="34:588" data-name="Artwork / World map eastern hemisphere / feather">
            <div className="absolute contents left-0 top-0" data-node-id="37:359" data-name="horizontal edge fade / mask group">
              <div className="absolute contents left-0 top-0" data-node-id="37:358" data-name="vertical edge fade / mask group">
                <div className="absolute h-[92px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[290px_92px,_290px_92px] top-0 w-[290px]" data-node-id="33:1307" style={{ maskImage: `url("${imgImageWorldMapEasternHemisphere}"), url("${imgImageWorldMapEasternHemisphere1}")` }} data-name="Image / World map eastern hemisphere">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWorldMapEasternHemisphere2} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[20px] items-start left-[383px] top-[20px] w-[195px]" data-node-id="33:1308" data-name="Facility benchmarking label">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[15px] relative shrink-0 text-[10px] text-[color:var(--eip-custom-7520db,#7520db)] text-center w-[195px]" data-node-id="33:1310" style={{ fontVariationSettings: '"wdth" 100' }}>
              FACILITY BENCHMARKING
            </p>
          </div>
          <div className="absolute h-[49px] left-[389px] top-[179px] w-[169px]" data-node-id="33:1313" data-name="Ranking podium base">
            <div className="absolute inset-[-12.24%_-7.1%_-36.73%_-7.1%]">
              <img alt="" className="block max-w-none size-full" src={imgRankingPodiumBase} />
            </div>
          </div>
          <div className="absolute h-[27px] left-[415px] top-[184px] w-[114px]" data-node-id="33:1316" data-name="Ranking podium inset">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRankingPodiumInset} />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[85px] items-start left-[116px] top-[140px] w-[53px]" data-node-id="33:1317" data-name="Rank 7 column">
            <div className="absolute bg-gradient-to-b from-[rgba(176,166,238,0.77)] h-[69px] left-0 rounded-[var(--eip-radius-10,10px)] to-[rgba(176,166,238,0.04)] top-[16px] w-[53px]" data-node-id="33:1318" data-name="Editable ranking column" />
            <div className="absolute h-[22px] left-0 top-[6px] w-[53px]" data-node-id="33:1321" data-name="Column ellipse cap">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgColumnEllipseCap} />
            </div>
            <div className="absolute left-[12px] size-[30px] top-px" data-node-id="43:645">
              <div className="absolute left-0 size-[30px] top-0" data-node-id="43:646" data-name="Rank badge">
                <div className="absolute inset-[-6.67%_-13.33%_-20%_-13.33%]">
                  <img alt="" className="block max-w-none size-full" src={imgRankBadge} />
                </div>
              </div>
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Bold'] font-bold h-[22px] leading-[24px] left-[15px] text-[16px] text-[color:var(--eip-custom-281461,#281461)] text-center top-[4px] w-[10px]" data-node-id="43:647" style={{ fontVariationSettings: '"wdth" 100' }}>
                7
              </p>
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] h-[63px] items-start left-px text-center top-[35px] w-[51px]" data-node-id="33:1330" data-name="Native ranking metrics">
              <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[14px] text-[color:var(--eip-custom-431b74,#431b74)] w-[51px]" data-node-id="33:1332" style={{ fontVariationSettings: '"wdth" 100' }}>
                3.52
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[12px] relative shrink-0 text-[9px] text-[color:var(--eip-custom-685b96,#685b96)] w-[51px]" data-node-id="33:1336" style={{ fontVariationSettings: '"wdth" 100' }}>
                Facility G
              </p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[110px] items-start left-[198px] top-[116px] w-[54px]" data-node-id="33:1339" data-name="Rank 6 column">
            <div className="absolute bg-gradient-to-b from-[rgba(165,150,240,0.77)] h-[94px] left-0 rounded-[var(--eip-radius-10,10px)] to-[rgba(165,150,240,0.04)] top-[16px] w-[54px]" data-node-id="33:1340" data-name="Editable ranking column" />
            <div className="absolute h-[22px] left-0 top-[6px] w-[54px]" data-node-id="33:1343" data-name="Column ellipse cap">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgColumnEllipseCap1} />
            </div>
            <div className="absolute left-[12px] size-[30px] top-[2px]" data-node-id="43:641">
              <div className="absolute left-0 size-[30px] top-0" data-node-id="43:642" data-name="Rank badge">
                <div className="absolute inset-[-6.67%_-13.33%_-20%_-13.33%]">
                  <img alt="" className="block max-w-none size-full" src={imgRankBadge} />
                </div>
              </div>
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Bold'] font-bold h-[22px] leading-[24px] left-[15px] text-[16px] text-[color:var(--eip-custom-281461,#281461)] text-center top-[4px] w-[10px]" data-node-id="43:643" style={{ fontVariationSettings: '"wdth" 100' }}>
                6
              </p>
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] h-[63px] items-start left-px text-center top-[35px] w-[52px]" data-node-id="33:1347" data-name="Native ranking metrics">
              <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[14px] text-[color:var(--eip-custom-431b74,#431b74)] w-[52px]" data-node-id="33:1348" style={{ fontVariationSettings: '"wdth" 100' }}>
                3.78
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[12px] relative shrink-0 text-[9px] text-[color:var(--eip-custom-685b96,#685b96)] w-[52px]" data-node-id="33:1349" style={{ fontVariationSettings: '"wdth" 100' }}>
                Facility F
              </p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[118px] items-start left-[280px] top-[108px] w-[54px]" data-node-id="33:1350" data-name="Rank 5 column">
            <div className="absolute bg-gradient-to-b from-[rgba(196,144,237,0.77)] h-[102px] left-0 rounded-[var(--eip-radius-10,10px)] to-[rgba(196,144,237,0.04)] top-[16px] w-[54px]" data-node-id="33:1351" data-name="Editable ranking column" />
            <div className="absolute h-[22px] left-0 top-[6px] w-[54px]" data-node-id="33:1354" data-name="Column ellipse cap">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgColumnEllipseCap2} />
            </div>
            <div className="absolute left-[12px] size-[30px] top-[2px]" data-node-id="43:637">
              <div className="absolute left-0 size-[30px] top-0" data-node-id="43:638" data-name="Rank badge">
                <div className="absolute inset-[-6.67%_-13.33%_-20%_-13.33%]">
                  <img alt="" className="block max-w-none size-full" src={imgRankBadge} />
                </div>
              </div>
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Bold'] font-bold h-[22px] leading-[24px] left-[15px] text-[16px] text-[color:var(--eip-custom-281461,#281461)] text-center top-[4px] w-[10px]" data-node-id="43:639" style={{ fontVariationSettings: '"wdth" 100' }}>
                5
              </p>
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] h-[63px] items-start left-px text-center top-[35px] w-[52px]" data-node-id="33:1358" data-name="Native ranking metrics">
              <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[14px] text-[color:var(--eip-custom-431b74,#431b74)] w-[52px]" data-node-id="33:1359" style={{ fontVariationSettings: '"wdth" 100' }}>
                4.01
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[12px] relative shrink-0 text-[9px] text-[color:var(--eip-custom-685b96,#685b96)] w-[52px]" data-node-id="33:1360" style={{ fontVariationSettings: '"wdth" 100' }}>
                Facility E
              </p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[138px] items-start left-[361px] top-[88px] w-[54px]" data-node-id="33:1361" data-name="Rank 4 column">
            <div className="absolute bg-gradient-to-b from-[rgba(232,139,234,0.77)] h-[122px] left-0 rounded-[var(--eip-radius-10,10px)] to-[rgba(232,139,234,0.04)] top-[16px] w-[54px]" data-node-id="33:1362" data-name="Editable ranking column" />
            <div className="absolute h-[22px] left-0 top-[6px] w-[54px]" data-node-id="33:1365" data-name="Column ellipse cap">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgColumnEllipseCap3} />
            </div>
            <div className="absolute left-[12px] size-[30px] top-px" data-node-id="43:633">
              <div className="absolute left-0 size-[30px] top-0" data-node-id="43:634" data-name="Rank badge">
                <div className="absolute inset-[-6.67%_-13.33%_-20%_-13.33%]">
                  <img alt="" className="block max-w-none size-full" src={imgRankBadge} />
                </div>
              </div>
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Bold'] font-bold h-[22px] leading-[24px] left-[15px] text-[16px] text-[color:var(--eip-custom-281461,#281461)] text-center top-[4px] w-[10px]" data-node-id="43:635" style={{ fontVariationSettings: '"wdth" 100' }}>
                4
              </p>
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] h-[63px] items-start left-px text-center top-[35px] w-[52px]" data-node-id="33:1369" data-name="Native ranking metrics">
              <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[14px] text-[color:var(--eip-custom-431b74,#431b74)] w-[52px]" data-node-id="33:1370" style={{ fontVariationSettings: '"wdth" 100' }}>
                4.21
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[12px] relative shrink-0 text-[9px] text-[color:var(--eip-custom-685b96,#685b96)] w-[52px]" data-node-id="33:1371" style={{ fontVariationSettings: '"wdth" 100' }}>
                Facility D
              </p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[159px] items-start left-[441px] top-[53px] w-[58px]" data-node-id="33:1372" data-name="Rank 1 column">
            <div className="absolute bg-gradient-to-b from-[#9120ed] h-[143px] left-0 rounded-[var(--eip-radius-10,10px)] to-[rgba(145,32,237,0.85)] top-[16px] w-[58px]" data-node-id="33:1373" data-name="Editable ranking column" />
            <div className="absolute h-[22px] left-0 top-[6px] w-[58px]" data-node-id="33:1376" data-name="Column ellipse cap">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgColumnEllipseCap4} />
            </div>
            <div className="absolute left-[11px] size-[36px] top-[-2px]" data-node-id="43:625">
              <div className="absolute left-0 size-[36px] top-0" data-node-id="43:626" data-name="Rank badge">
                <div className="absolute inset-[-6.67%_-13.33%_-20%_-13.33%]">
                  <img alt="" className="block max-w-none size-full" src={imgRankBadge1} />
                </div>
              </div>
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Bold'] font-bold h-[26.4px] leading-[28.8px] left-[18px] text-[19.2px] text-[color:var(--eip-color-white,white)] text-center top-[4.8px] w-[12px]" data-node-id="43:627" style={{ fontVariationSettings: '"wdth" 100' }}>
                1
              </p>
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] h-[63px] items-start left-px text-[color:var(--eip-color-white,white)] text-center top-[52px] w-[56px]" data-node-id="33:1383" data-name="Native ranking metrics">
              <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[16px] w-[56px]" data-node-id="33:1384" style={{ fontVariationSettings: '"wdth" 100' }}>
                4.68
              </p>
              <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[10px] w-[56px]" data-node-id="33:1386" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[12px] mb-0">Your</p>
                <p className="leading-[12px]">Facility</p>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[158px] items-start left-[526px] top-[68px] w-[54px]" data-node-id="33:1387" data-name="Rank 2 column">
            <div className="absolute bg-gradient-to-b from-[rgba(215,133,237,0.77)] h-[142px] left-0 rounded-[var(--eip-radius-10,10px)] to-[rgba(215,133,237,0.04)] top-[16px] w-[54px]" data-node-id="33:1388" data-name="Editable ranking column" />
            <div className="absolute h-[22px] left-0 top-[6px] w-[54px]" data-node-id="33:1391" data-name="Column ellipse cap">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgColumnEllipseCap5} />
            </div>
            <div className="absolute left-[12px] size-[30px] top-[2px]" data-node-id="43:620">
              <div className="absolute left-0 size-[30px] top-0" data-node-id="43:621" data-name="Rank badge">
                <div className="absolute inset-[-6.67%_-13.33%_-20%_-13.33%]">
                  <img alt="" className="block max-w-none size-full" src={imgRankBadge} />
                </div>
              </div>
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Bold'] font-bold h-[22px] leading-[24px] left-[15px] text-[16px] text-[color:var(--eip-custom-281461,#281461)] text-center top-[4px] w-[10px]" data-node-id="43:622" style={{ fontVariationSettings: '"wdth" 100' }}>
                2
              </p>
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] h-[63px] items-start left-px text-center top-[35px] w-[52px]" data-node-id="33:1395" data-name="Native ranking metrics">
              <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[14px] text-[color:var(--eip-custom-431b74,#431b74)] w-[52px]" data-node-id="33:1396" style={{ fontVariationSettings: '"wdth" 100' }}>
                4.48
              </p>
              <div className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[9px] text-[color:var(--eip-custom-685b96,#685b96)] w-[52px]" data-node-id="33:1397" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[12px] mb-0">Your</p>
                <p className="leading-[12px]">Facility</p>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[128px] items-start left-[607px] top-[98px] w-[54px]" data-node-id="33:1398" data-name="Rank 3 column">
            <div className="absolute bg-gradient-to-b from-[rgba(237,152,216,0.77)] h-[112px] left-0 rounded-[var(--eip-radius-10,10px)] to-[rgba(237,152,216,0.04)] top-[16px] w-[54px]" data-node-id="33:1399" data-name="Editable ranking column" />
            <div className="absolute h-[22px] left-0 top-[6px] w-[54px]" data-node-id="33:1402" data-name="Column ellipse cap">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgColumnEllipseCap6} />
            </div>
            <div className="absolute left-[12px] size-[30px] top-[2px]" data-node-id="43:616">
              <div className="absolute left-0 size-[30px] top-0" data-node-id="43:617" data-name="Rank badge">
                <div className="absolute inset-[-6.67%_-13.33%_-20%_-13.33%]">
                  <img alt="" className="block max-w-none size-full" src={imgRankBadge} />
                </div>
              </div>
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Bold'] font-bold h-[22px] leading-[24px] left-[15px] text-[16px] text-[color:var(--eip-custom-281461,#281461)] text-center top-[4px] w-[10px]" data-node-id="43:618" style={{ fontVariationSettings: '"wdth" 100' }}>
                3
              </p>
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] h-[63px] items-start left-px text-center top-[35px] w-[52px]" data-node-id="33:1406" data-name="Native ranking metrics">
              <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[14px] text-[color:var(--eip-custom-431b74,#431b74)] w-[52px]" data-node-id="33:1407" style={{ fontVariationSettings: '"wdth" 100' }}>
                4.32
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[12px] relative shrink-0 text-[9px] text-[color:var(--eip-custom-685b96,#685b96)] w-[52px]" data-node-id="33:1408" style={{ fontVariationSettings: '"wdth" 100' }}>
                Facility C
              </p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[108px] items-center left-[689px] top-[118px] w-[54px]" data-node-id="33:1409" data-name="Rank 8 column">
            <div className="absolute bg-gradient-to-b from-[rgba(246,194,175,0.77)] h-[92px] left-0 rounded-[var(--eip-radius-10,10px)] to-[rgba(246,194,175,0.04)] top-[16px] w-[54px]" data-node-id="33:1410" data-name="Editable ranking column" />
            <div className="absolute h-[22px] left-0 top-[6px] w-[54px]" data-node-id="33:1413" data-name="Column ellipse cap">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgColumnEllipseCap7} />
            </div>
            <div className="absolute left-[12px] size-[30px] top-px" data-node-id="43:612">
              <div className="absolute left-0 size-[30px] top-0" data-node-id="43:613" data-name="Rank badge">
                <div className="absolute inset-[-6.67%_-13.33%_-20%_-13.33%]">
                  <img alt="" className="block max-w-none size-full" src={imgRankBadge} />
                </div>
              </div>
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Bold'] font-bold h-[22px] leading-[24px] left-[15px] text-[16px] text-[color:var(--eip-custom-281461,#281461)] text-center top-[4px] w-[10px]" data-node-id="43:614" style={{ fontVariationSettings: '"wdth" 100' }}>
                8
              </p>
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] h-[63px] items-start left-px text-center top-[35px] w-[52px]" data-node-id="33:1417" data-name="Native ranking metrics">
              <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[14px] text-[color:var(--eip-custom-431b74,#431b74)] w-[52px]" data-node-id="33:1418" style={{ fontVariationSettings: '"wdth" 100' }}>
                3.31
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[12px] relative shrink-0 text-[9px] text-[color:var(--eip-custom-685b96,#685b96)] w-[52px]" data-node-id="33:1419" style={{ fontVariationSettings: '"wdth" 100' }}>
                Facility H
              </p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[88px] items-center left-[771px] top-[138px] w-[54px]" data-node-id="33:1420" data-name="Rank 9 column">
            <div className="absolute bg-gradient-to-b from-[rgba(246,215,195,0.77)] h-[72px] left-0 rounded-[var(--eip-radius-10,10px)] to-[rgba(246,215,195,0.04)] top-[16px] w-[54px]" data-node-id="33:1421" data-name="Editable ranking column" />
            <div className="absolute h-[22px] left-0 top-[6px] w-[54px]" data-node-id="33:1424" data-name="Column ellipse cap">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgColumnEllipseCap8} />
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-5,5px)] h-[63px] items-start left-px text-center top-[35px] w-[52px]" data-node-id="33:1428" data-name="Native ranking metrics">
              <p className="font-['Roboto:Bold'] font-bold leading-[21px] relative shrink-0 text-[14px] text-[color:var(--eip-custom-431b74,#431b74)] w-[52px]" data-node-id="33:1429" style={{ fontVariationSettings: '"wdth" 100' }}>
                3.12
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[12px] relative shrink-0 text-[9px] text-[color:var(--eip-custom-685b96,#685b96)] w-[52px]" data-node-id="33:1430" style={{ fontVariationSettings: '"wdth" 100' }}>
                Facility I
              </p>
            </div>
            <div className="relative shrink-0 size-[30px]" data-node-id="43:611">
              <div className="absolute left-0 size-[30px] top-0" data-node-id="33:1425" data-name="Rank badge">
                <div className="absolute inset-[-6.67%_-13.33%_-20%_-13.33%]">
                  <img alt="" className="block max-w-none size-full" src={imgRankBadge} />
                </div>
              </div>
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Bold'] font-bold h-[22px] leading-[24px] left-[15px] text-[16px] text-[color:var(--eip-custom-281461,#281461)] text-center top-[4px] w-[10px]" data-node-id="33:1427" style={{ fontVariationSettings: '"wdth" 100' }}>
                9
              </p>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-9,9px)] h-[258px] items-start left-[1204px] top-[637px] w-[232px]" data-node-id="33:1431" data-name="Journey benefits">
          <div className="content-stretch flex gap-[var(--eip-spacing-15,15px)] items-center relative shrink-0 w-[232px]" data-node-id="33:1432" data-name="Real-time insights">
            <div className="h-[42px] relative rounded-[var(--eip-radius-21,21px)] shrink-0 w-[43px]" data-node-id="33:1433" data-name="Image / Real-time insights icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-21,21px)] size-full" src={imgImageRealTimeInsightsIcon} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[13px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[173px]" data-node-id="33:1435" style={{ fontVariationSettings: '"wdth" 100' }}>
              Real-time insights
            </p>
          </div>
          <div className="content-stretch flex gap-[var(--eip-spacing-15,15px)] items-center relative shrink-0 w-[232px]" data-node-id="33:1436" data-name="Actionable intelligence">
            <div className="h-[42px] relative rounded-[var(--eip-radius-21,21px)] shrink-0 w-[43px]" data-node-id="33:1437" data-name="Image / Actionable intelligence icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-21,21px)] size-full" src={imgImageActionableIntelligenceIcon} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[13px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[173px]" data-node-id="33:1438" style={{ fontVariationSettings: '"wdth" 100' }}>
              Actionable intelligence
            </p>
          </div>
          <div className="content-stretch flex gap-[var(--eip-spacing-15,15px)] items-center relative shrink-0 w-[232px]" data-node-id="33:1439" data-name="Enterprise security">
            <div className="h-[42px] relative rounded-[var(--eip-radius-21,21px)] shrink-0 w-[43px]" data-node-id="33:1440" data-name="Image / Enterprise security icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-21,21px)] size-full" src={imgImageEnterpriseSecurityIcon} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[13px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[173px]" data-node-id="33:1441" style={{ fontVariationSettings: '"wdth" 100' }}>
              Enterprise security
            </p>
          </div>
          <div className="content-stretch flex gap-[var(--eip-spacing-15,15px)] items-center relative shrink-0 w-[232px]" data-node-id="33:1442" data-name="Role-based access">
            <div className="h-[42px] relative rounded-[var(--eip-radius-21,21px)] shrink-0 w-[43px]" data-node-id="33:1443" data-name="Image / Role-based access icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-21,21px)] size-full" src={imgImageRoleBasedAccessIcon} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[13px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[173px]" data-node-id="33:1444" style={{ fontVariationSettings: '"wdth" 100' }}>
              Role-based access
            </p>
          </div>
          <div className="content-stretch flex gap-[var(--eip-spacing-15,15px)] items-center relative shrink-0 w-[232px]" data-node-id="33:1445" data-name="Measurable impact">
            <div className="h-[42px] relative rounded-[var(--eip-radius-21,21px)] shrink-0 w-[43px]" data-node-id="33:1446" data-name="Image / Measurable impact icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-21,21px)] size-full" src={imgImageMeasurableImpactIcon} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[13px] text-[color:var(--eip-color-ink,#0b0b2c)] w-[173px]" data-node-id="33:1447" style={{ fontVariationSettings: '"wdth" 100' }}>
              Measurable impact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}