const assetPathPrefix = "https://www.figma.com/api/mcp/asset/485edb86-cb7e-4a27-8a64-616e2ba8e408";
const imgIconArrowRight = `${assetPathPrefix}/c7347.svg`;
const imgBrandSymbolImage = `${assetPathPrefix}/b1f3e.png`;
const imgImageLeftDecorativeWave2 = `${assetPathPrefix}/87ef5.png`;
const imgImageRightDecorativeWave2 = `${assetPathPrefix}/f2fbc.png`;
const imgImageLowerDecorativeWave2 = `${assetPathPrefix}/08a53.png`;
const imgImageWhyWeExistTemporaryIcon = `${assetPathPrefix}/4e97c.png`;
const imgImageOurVisionTemporaryIcon = `${assetPathPrefix}/24888.png`;
const imgImageWhatWereBuildingTemporaryIcon = `${assetPathPrefix}/5af6c.png`;
const imgImageListenWithPurposeTemporaryIcon = `${assetPathPrefix}/43c31.png`;
const imgImageUnderstandWithClarityTemporaryIcon = `${assetPathPrefix}/3b064.png`;
const imgImageActWithConfidenceTemporaryIcon = `${assetPathPrefix}/824ae.png`;
const imgImageImproveContinuouslyTemporaryIcon = `${assetPathPrefix}/84995.png`;
const imgImageLowerInvitationWave = `${assetPathPrefix}/d1580.png`;
const imgImagePlatformBrandMarkDecorative = `${assetPathPrefix}/69736.png`;
const imgDropdownChevron = `${assetPathPrefix}/c717e.svg`;
const imgImageLeftDecorativeWave = `${assetPathPrefix}/0c579.svg`;
const imgImageLeftDecorativeWave1 = `${assetPathPrefix}/843a5.svg`;
const imgImageRightDecorativeWave = `${assetPathPrefix}/11e9e.svg`;
const imgImageRightDecorativeWave1 = `${assetPathPrefix}/2c90f.svg`;
const imgImageLowerDecorativeWave = `${assetPathPrefix}/9ff84.svg`;
const imgImageLowerDecorativeWave1 = `${assetPathPrefix}/a4fe7.svg`;
const imgQuietConcentricHalo = `${assetPathPrefix}/bc0af.svg`;
const imgQuietConcentricHalo1 = `${assetPathPrefix}/aab91.svg`;
const imgQuietConcentricHalo2 = `${assetPathPrefix}/5607b.svg`;
const imgPurposeAccentDivider = `${assetPathPrefix}/a5fa2.svg`;
const imgBeliefsAccentDivider = `${assetPathPrefix}/c537e.svg`;
const imgTrailingIcon = `${assetPathPrefix}/ef05f.svg`;

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

export default function AboutUsDesktop() {
  return (
    <div className="bg-[var(--eip-color-white,white)] content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-start relative size-full" data-node-id="33:594" data-name="About us / Desktop">
      <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] h-[90px] items-center pl-[var(--eip-spacing-46,46px)] pr-[var(--eip-spacing-41,41px)] py-[var(--eip-spacing-24,24px)] relative shrink-0 w-[1536px]" data-node-id="33:595" data-name="Header">
        <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-13,13px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0 w-[245px]" data-node-id="I33:595;29:205" data-name="Brand">
          <div className="content-stretch flex h-[42px] items-start relative shrink-0 w-[40px]" data-node-id="I33:595;29:206" data-name="Brand symbol">
            <div className="absolute h-[48px] left-[-6px] top-[-2px] w-[50px]" data-node-id="I33:595;29:207" data-name="Brand symbol / Image">
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBrandSymbolImage} />
            </div>
          </div>
          <div className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[0] relative shrink-0 text-[18px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:595;29:208" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[21px] mb-0">Experience</p>
            <p className="leading-[21px]">Intelligence Platform</p>
          </div>
        </a>
        <div className="flex-[1_0_0] h-[42px] min-w-px relative" data-node-id="I33:595;29:209" data-name="Flexible spacing / Before navigation" />
        <div className="content-stretch flex gap-[var(--eip-spacing-53_2,53.2px)] h-[42px] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0 w-[694px]" data-node-id="I33:595;29:210" data-name="Navigation">
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:595;29:211" data-name="Navigation / Platform">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:595;29:212" style={{ fontVariationSettings: '"wdth" 100' }}>
              Platform
            </p>
          </a>
          <div className="content-stretch flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:595;29:214" data-name="Navigation / Solutions">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] whitespace-nowrap" data-node-id="I33:595;29:215" style={{ fontVariationSettings: '"wdth" 100' }}>
              Solutions
            </p>
            <div className="relative shrink-0 size-[10px]" data-node-id="I33:595;29:216" data-name="Dropdown chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDropdownChevron} />
            </div>
          </div>
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:595;29:218" data-name="Navigation / Features">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:595;29:219" style={{ fontVariationSettings: '"wdth" 100' }}>
              Features
            </p>
          </a>
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:595;29:220" data-name="Navigation / Benchmarking">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:595;29:221" style={{ fontVariationSettings: '"wdth" 100' }}>
              Benchmarking
            </p>
          </a>
          <div className="content-stretch flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:595;29:222" data-name="Navigation / Resources">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] whitespace-nowrap" data-node-id="I33:595;29:223" style={{ fontVariationSettings: '"wdth" 100' }}>
              Resources
            </p>
            <div className="relative shrink-0 size-[10px]" data-node-id="I33:595;29:224" data-name="Dropdown chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDropdownChevron} />
            </div>
          </div>
          <div className="content-stretch flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:595;29:226" data-name="Navigation / About Us">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-violet,#7816ba)] whitespace-nowrap" data-node-id="I33:595;29:227" style={{ fontVariationSettings: '"wdth" 100' }}>
              About Us
            </p>
            <div className="absolute h-[2px] left-px top-[29px] w-[56px]" data-node-id="I33:595;29:232" style={{ backgroundImage: "linear-gradient(90deg, var(--eip-gradient-blue,rgb(62, 74, 240)) 0%, var(--eip-gradient-violet,rgb(141, 34, 213)) 43%, var(--eip-gradient-pink,rgb(231, 54, 144)) 86%, var(--eip-gradient-coral,rgb(239, 87, 100)) 100%)" }} data-name="Active indicator" />
          </div>
        </div>
        <div className="flex-[1_0_0] h-[42px] min-w-px relative" data-node-id="I33:595;29:228" data-name="Flexible spacing / Before actions" />
        <div className="content-stretch flex gap-[var(--eip-spacing-14,14px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:595;29:229" data-name="Actions">
          <Button className="border border-[var(--eip-color-violet,#7816ba)] border-solid content-stretch flex gap-[var(--eip-spacing-12,12px)] items-center justify-center pl-[var(--eip-spacing-24,24px)] pr-[var(--eip-spacing-23,23px)] py-[var(--eip-spacing-12,12px)] relative rounded-[var(--eip-full,999px)] shrink-0" label="Log In" showTrailingIcon={false} style="Outline" />
          <a className="bg-gradient-to-r content-stretch cursor-pointer flex from-[var(--eip-cta-violet,#7c23f8)] gap-[var(--eip-spacing-12,12px)] items-center justify-center pl-[var(--eip-spacing-24,24px)] pr-[var(--eip-spacing-25,25px)] py-[var(--eip-spacing-11,11px)] relative rounded-[var(--eip-full,999px)] shrink-0 to-[var(--eip-cta-coral,#fe6c57)] via-[57%] via-[var(--eip-cta-pink,#e024a7)]" data-node-id="I33:595;29:231" data-name="Button / Request demo">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-white,white)] text-left whitespace-nowrap" data-node-id="I33:595;29:231;13:13456" style={{ fontVariationSettings: '"wdth" 100' }}>
              Request a Demo
            </p>
            <IconArrowRight className="relative shrink-0 size-[20px]" />
          </a>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[650px] items-start overflow-clip relative shrink-0 w-full" data-node-id="33:633" data-name="About us / Purpose hero">
        <div className="absolute h-[184px] left-[-5px] overflow-clip top-[310px] w-[403px]" data-node-id="34:491" data-name="Artwork / Left decorative wave / feather">
          <div className="absolute contents left-0 top-0" data-node-id="37:393" data-name="horizontal edge fade / mask group">
            <div className="absolute contents left-0 top-0" data-node-id="37:392" data-name="vertical edge fade / mask group">
              <div className="absolute h-[184px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[403px_184px,_403px_184px] top-0 w-[403px]" data-node-id="33:634" style={{ maskImage: `url("${imgImageLeftDecorativeWave}"), url("${imgImageLeftDecorativeWave1}")` }} data-name="Image / Left decorative wave">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLeftDecorativeWave2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[184px] left-[1130px] overflow-clip top-[318px] w-[401px]" data-node-id="34:496" data-name="Artwork / Right decorative wave / feather">
          <div className="absolute contents left-0 top-0" data-node-id="37:391" data-name="horizontal edge fade / mask group">
            <div className="absolute contents left-0 top-0" data-node-id="37:390" data-name="vertical edge fade / mask group">
              <div className="absolute h-[184px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[401px_184px,_401px_184px] top-0 w-[401px]" data-node-id="33:635" style={{ maskImage: `url("${imgImageRightDecorativeWave}"), url("${imgImageRightDecorativeWave1}")` }} data-name="Image / Right decorative wave">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRightDecorativeWave2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[167px] left-0 overflow-clip top-[487px] w-[1536px]" data-node-id="34:501" data-name="Artwork / Lower decorative wave / feather">
          <div className="absolute contents left-0 top-0" data-node-id="37:389" data-name="horizontal edge fade / mask group">
            <div className="absolute contents left-0 top-0" data-node-id="37:388" data-name="vertical edge fade / mask group">
              <div className="absolute h-[167px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[1536px_167px,_1536px_167px] top-0 w-[1536px]" data-node-id="33:636" style={{ maskImage: `url("${imgImageLowerDecorativeWave}"), url("${imgImageLowerDecorativeWave1}")` }} data-name="Image / Lower decorative wave">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLowerDecorativeWave2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[208px] size-[1120px] top-[27px]" data-node-id="33:637" data-name="Quiet concentric halo">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgQuietConcentricHalo} />
        </div>
        <div className="absolute left-[263px] size-[1010px] top-[82px]" data-node-id="33:638" data-name="Quiet concentric halo">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgQuietConcentricHalo1} />
        </div>
        <div className="absolute left-[317px] size-[902px] top-[136px]" data-node-id="33:639" data-name="Quiet concentric halo">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgQuietConcentricHalo2} />
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-26,26px)] h-[374px] items-center left-[228px] top-[125px] w-[1080px]" data-node-id="33:640" data-name="Purpose / heading and introduction">
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[24px] relative shrink-0 text-[17px] text-[color:var(--eip-custom-6514e8,#6514e8)] text-center tracking-[2.2px] w-[1080px]" data-node-id="33:643" style={{ fontVariationSettings: '"wdth" 100' }}>
            ABOUT US
          </p>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Roboto:Bold'] font-bold gap-[var(--eip-spacing-0,0px)] items-start leading-[76px] relative shrink-0 text-[66px] w-[1080px]" data-node-id="33:646" data-name="Purpose headline">
            <p className="relative shrink-0 text-[color:var(--eip-custom-09092d,#09092d)] text-center w-[1080px]" data-node-id="33:648" style={{ fontVariationSettings: '"wdth" 100' }}>
              Built to make
            </p>
            <div className="content-stretch flex gap-[var(--eip-spacing-14,14px)] items-center justify-center relative shrink-0 w-[1080px] whitespace-nowrap" data-node-id="33:651" data-name="Headline / experience matters">
              <p className="relative shrink-0 text-[color:var(--eip-custom-09092d,#09092d)]" data-node-id="33:652" style={{ fontVariationSettings: '"wdth" 100' }}>
                every
              </p>
              <p className="bg-clip-text bg-gradient-to-r from-[#641aff] relative shrink-0 text-[transparent] to-[#ff6952] via-1/2 via-[#c323ca]" data-node-id="33:653" style={{ fontVariationSettings: '"wdth" 100' }}>
                experience
              </p>
              <p className="relative shrink-0 text-[color:var(--eip-custom-09092d,#09092d)]" data-node-id="33:654" style={{ fontVariationSettings: '"wdth" 100' }}>
                matter.
              </p>
            </div>
          </div>
          <div className="h-[5px] relative shrink-0 w-[84px]" data-node-id="33:655" data-name="Purpose accent divider">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPurposeAccentDivider} />
          </div>
          <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[20px] text-[color:var(--eip-custom-111133,#113)] text-center w-[890px]" data-node-id="33:663" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[33px] mb-0">We created the Experience Intelligence Platform to help organizations</p>
            <p className="leading-[33px] mb-0">truly understand the people they serve—turning feedback into</p>
            <p className="leading-[33px]">intelligence that drives meaningful improvement.</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[410px] items-start relative shrink-0 w-full" data-node-id="33:666" data-name="About us / Why vision and building">
        <div className="absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex flex-col gap-[var(--eip-spacing-0,0px)] h-[390px] items-start left-[96px] rounded-[var(--eip-radius-24,24px)] top-[14px] w-[1344px]" data-node-id="33:667" data-name="Purpose pillars card">
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-24,24px)] h-[296px] items-start left-[48px] top-[60px] w-[356px]" data-node-id="33:669" data-name="Why We Exist / column">
            <div className="content-stretch flex gap-[var(--eip-spacing-22,22px)] items-center relative shrink-0 w-[356px]" data-node-id="33:670" data-name="Why We Exist / heading">
              <div className="relative rounded-[var(--eip-radius-41,41px)] shrink-0 size-[82px]" data-node-id="33:672" data-name="Image / Why We Exist / temporary icon">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-41,41px)] size-full" src={imgImageWhyWeExistTemporaryIcon} />
              </div>
              <div className="content-stretch flex flex-col gap-[var(--eip-spacing-16,16px)] items-start relative shrink-0 w-[250px]" data-node-id="33:673" data-name="Why We Exist / title and accent">
                <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[30px] relative shrink-0 text-[24px] text-[color:var(--eip-custom-6218e8,#6218e8)] w-[250px]" data-node-id="33:675" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Why We Exist
                </p>
                <div className="bg-[var(--eip-custom-6218e8,#6218e8)] h-[3px] relative shrink-0 w-[46px]" data-node-id="33:678" data-name="Why We Exist / accent" />
              </div>
            </div>
            <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-[color:var(--eip-custom-121232,#121232)] w-[356px]" data-node-id="33:680" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[31px] mb-0">Data is everywhere. Feedback comes in</p>
              <p className="leading-[31px] mb-0">from many places. But too often, it sits</p>
              <p className="leading-[31px] mb-0">in silos, reports are late, and opportunities</p>
              <p className="leading-[31px] mb-0">are missed. We exist to close that gap—</p>
              <p className="leading-[31px] mb-0">by bringing clarity, speed, and context</p>
              <p className="leading-[31px]">to every voice.</p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-24,24px)] h-[296px] items-start left-[494px] top-[60px] w-[356px]" data-node-id="33:683" data-name="Our Vision / column">
            <div className="content-stretch flex gap-[var(--eip-spacing-22,22px)] items-center relative shrink-0 w-[356px]" data-node-id="33:684" data-name="Our Vision / heading">
              <div className="relative rounded-[var(--eip-radius-41,41px)] shrink-0 size-[82px]" data-node-id="33:685" data-name="Image / Our Vision / temporary icon">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-41,41px)] size-full" src={imgImageOurVisionTemporaryIcon} />
              </div>
              <div className="content-stretch flex flex-col gap-[var(--eip-spacing-16,16px)] items-start relative shrink-0 w-[250px]" data-node-id="33:686" data-name="Our Vision / title and accent">
                <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[30px] relative shrink-0 text-[24px] text-[color:var(--eip-custom-c72b9a,#c72b9a)] w-[250px]" data-node-id="33:687" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Our Vision
                </p>
                <div className="bg-[var(--eip-custom-c72b9a,#c72b9a)] h-[3px] relative shrink-0 w-[46px]" data-node-id="33:690" data-name="Our Vision / accent" />
              </div>
            </div>
            <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-[color:var(--eip-custom-121232,#121232)] w-[356px]" data-node-id="33:691" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[31px] mb-0">A future where every voice shapes</p>
              <p className="leading-[31px] mb-0">what happens next. Where organizations</p>
              <p className="leading-[31px] mb-0">continuously understand, adapt, and</p>
              <p className="leading-[31px] mb-0">elevate experiences—creating lasting</p>
              <p className="leading-[31px]">impact for the people they serve.</p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-24,24px)] h-[296px] items-start left-[940px] top-[60px] w-[356px]" data-node-id="33:692" data-name="What We’re Building / column">
            <div className="content-stretch flex gap-[var(--eip-spacing-22,22px)] items-center relative shrink-0 w-[356px]" data-node-id="33:693" data-name="What We’re Building / heading">
              <div className="relative rounded-[var(--eip-radius-41,41px)] shrink-0 size-[82px]" data-node-id="33:694" data-name="Image / What We’re Building / temporary icon">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-41,41px)] size-full" src={imgImageWhatWereBuildingTemporaryIcon} />
              </div>
              <div className="content-stretch flex flex-col gap-[var(--eip-spacing-16,16px)] items-start relative shrink-0 w-[250px]" data-node-id="33:695" data-name="What We’re Building / title and accent">
                <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[30px] relative shrink-0 text-[24px] text-[color:var(--eip-custom-f46b32,#f46b32)] w-[250px]" data-node-id="33:696" style={{ fontVariationSettings: '"wdth" 100' }}>
                  What We’re Building
                </p>
                <div className="bg-[var(--eip-custom-f46b32,#f46b32)] h-[3px] relative shrink-0 w-[46px]" data-node-id="33:699" data-name="What We’re Building / accent" />
              </div>
            </div>
            <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-[color:var(--eip-custom-121232,#121232)] w-[356px]" data-node-id="33:700" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[31px] mb-0">A complete Experience Intelligence</p>
              <p className="leading-[31px] mb-0">platform that captures feedback from</p>
              <p className="leading-[31px] mb-0">any channel, understands it with AI,</p>
              <p className="leading-[31px] mb-0">turns it into real-time intelligence,</p>
              <p className="leading-[31px] mb-0">benchmarks performance, and</p>
              <p className="leading-[31px]">empowers teams to take action.</p>
            </div>
          </div>
          <div className="absolute bg-[var(--eip-custom-eceaf2,#eceaf2)] h-[279px] left-[443px] top-[61px] w-px" data-node-id="33:701" data-name="Pillar divider / first" />
          <div className="absolute bg-[var(--eip-custom-eceaf2,#eceaf2)] h-[279px] left-[889px] top-[61px] w-px" data-node-id="33:704" data-name="Pillar divider / second" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[420px] items-start relative shrink-0 w-full" data-node-id="33:705" data-name="About us / Beliefs">
        <div className="absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex flex-col gap-[var(--eip-spacing-0,0px)] h-[390px] items-start left-[96px] rounded-[var(--eip-radius-24,24px)] top-[18px] w-[1344px]" data-node-id="33:706" data-name="What we believe / card">
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-12,12px)] h-[56px] items-center left-[320px] top-[27px] w-[704px]" data-node-id="33:707" data-name="Beliefs / heading">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[36px] relative shrink-0 text-[28px] text-[color:var(--eip-color-ink,#0b0b2c)] text-center w-[704px]" data-node-id="33:709" style={{ fontVariationSettings: '"wdth" 100' }}>
              What We Believe
            </p>
            <div className="h-[5px] relative shrink-0 w-[76px]" data-node-id="33:710" data-name="Beliefs accent divider">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBeliefsAccentDivider} />
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-19,19px)] h-[249px] items-center left-[23px] top-[103px] w-[297px]" data-node-id="33:717" data-name="Listen with purpose. / belief">
            <div className="relative rounded-[var(--eip-radius-49,49px)] shrink-0 size-[98px]" data-node-id="33:718" data-name="Image / Listen with purpose. / temporary icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-49,49px)] size-full" src={imgImageListenWithPurposeTemporaryIcon} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-10,10px)] items-start min-h-px relative text-center w-full" data-node-id="33:719" data-name="Listen with purpose. / copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[28px] relative shrink-0 text-[21px] text-[color:var(--eip-custom-6617e3,#6617e3)] w-full" data-node-id="33:721" style={{ fontVariationSettings: '"wdth" 100' }}>
                Listen with purpose.
              </p>
              <div className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-h-px relative text-[18px] text-[color:var(--eip-custom-151533,#151533)] w-full" data-node-id="33:725" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[30px] mb-0">Every voice holds value.</p>
                <p className="leading-[30px] mb-0">We make it easy to capture</p>
                <p className="leading-[30px]">what matters most.</p>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-19,19px)] h-[249px] items-center left-[349px] top-[103px] w-[297px]" data-node-id="33:728" data-name="Understand with clarity. / belief">
            <div className="relative rounded-[var(--eip-radius-49,49px)] shrink-0 size-[98px]" data-node-id="33:729" data-name="Image / Understand with clarity. / temporary icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-49,49px)] size-full" src={imgImageUnderstandWithClarityTemporaryIcon} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-10,10px)] items-start min-h-px relative text-center w-full" data-node-id="33:730" data-name="Understand with clarity. / copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[28px] relative shrink-0 text-[21px] text-[color:var(--eip-custom-cd329e,#cd329e)] w-full" data-node-id="33:731" style={{ fontVariationSettings: '"wdth" 100' }}>
                Understand with clarity.
              </p>
              <div className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-h-px relative text-[18px] text-[color:var(--eip-custom-151533,#151533)] w-full" data-node-id="33:734" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[30px] mb-0">We turn complexity into clear</p>
                <p className="leading-[30px] mb-0">insights you can trust</p>
                <p className="leading-[30px]">and act on.</p>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-19,19px)] h-[249px] items-center left-[675px] top-[103px] w-[297px]" data-node-id="33:735" data-name="Act with confidence. / belief">
            <div className="relative rounded-[var(--eip-radius-49,49px)] shrink-0 size-[98px]" data-node-id="33:736" data-name="Image / Act with confidence. / temporary icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-49,49px)] size-full" src={imgImageActWithConfidenceTemporaryIcon} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-10,10px)] items-start min-h-px relative text-center w-full" data-node-id="33:737" data-name="Act with confidence. / copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[28px] relative shrink-0 text-[21px] text-[color:var(--eip-custom-f36b31,#f36b31)] w-full" data-node-id="33:738" style={{ fontVariationSettings: '"wdth" 100' }}>
                Act with confidence.
              </p>
              <div className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-h-px relative text-[18px] text-[color:var(--eip-custom-151533,#151533)] w-full" data-node-id="33:741" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[30px] mb-0">Intelligence is only powerful</p>
                <p className="leading-[30px] mb-0">when it leads to the</p>
                <p className="leading-[30px]">right action.</p>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-19,19px)] h-[249px] items-center left-[1001px] top-[103px] w-[335px]" data-node-id="33:742" data-name="Improve continuously. / belief">
            <div className="relative rounded-[var(--eip-radius-49,49px)] shrink-0 size-[98px]" data-node-id="33:743" data-name="Image / Improve continuously. / temporary icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-49,49px)] size-full" src={imgImageImproveContinuouslyTemporaryIcon} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-10,10px)] items-start min-h-px relative text-center w-full" data-node-id="33:744" data-name="Improve continuously. / copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[28px] relative shrink-0 text-[21px] text-[color:var(--eip-custom-2946cf,#2946cf)] w-full" data-node-id="33:745" style={{ fontVariationSettings: '"wdth" 100' }}>
                Improve continuously.
              </p>
              <div className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-h-px relative text-[18px] text-[color:var(--eip-custom-151533,#151533)] w-full" data-node-id="33:748" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[30px] mb-0">Better experiences are not</p>
                <p className="leading-[30px] mb-0">a one-time project—</p>
                <p className="leading-[30px]">they are an ongoing journey.</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[var(--eip-custom-eceaf2,#eceaf2)] h-[237px] left-[328px] top-[105px] w-px" data-node-id="33:749" data-name="Belief divider" />
          <div className="absolute bg-[var(--eip-custom-eceaf2,#eceaf2)] h-[237px] left-[654px] top-[105px] w-px" data-node-id="33:750" data-name="Belief divider" />
          <div className="absolute bg-[var(--eip-custom-eceaf2,#eceaf2)] h-[237px] left-[980px] top-[105px] w-px" data-node-id="33:751" data-name="Belief divider" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[349px] items-start relative shrink-0 w-full" data-node-id="33:752" data-name="About us / Final invitation">
        <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#e7e0fd] gap-[var(--eip-spacing-0,0px)] h-[282px] items-start left-[96px] rounded-[var(--eip-radius-24,24px)] to-[#ffeef0] top-[18px] via-[#f4ebfc] via-[55%] w-[1344px]" data-node-id="33:753" data-name="Better experiences / invitation card">
          <div className="absolute h-[61px] left-[766px] top-[221px] w-[578px]" data-node-id="33:756" data-name="Image / Lower invitation wave">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLowerInvitationWave} />
          </div>
          <div className="absolute left-[69px] rounded-[var(--eip-radius-75_5,75.5px)] size-[151px] top-[60px]" data-node-id="33:757" data-name="Image / Platform brand mark / decorative">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-75_5,75.5px)] size-full" src={imgImagePlatformBrandMarkDecorative} />
          </div>
          <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[var(--eip-spacing-16,16px)] h-[164px] items-start leading-[0] left-[261px] top-[65px] w-[630px]" data-node-id="33:758" data-name="Invitation / copy">
            <div className="font-['Roboto:Bold'] font-bold relative shrink-0 text-[40px] text-[color:var(--eip-custom-0a0a2f,#0a0a2f)] w-[630px]" data-node-id="33:760" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[47px] mb-0">Better experiences start</p>
              <p className="leading-[47px]">with better understanding.</p>
            </div>
            <div className="flex-[1_0_0] font-['Roboto:Regular'] font-normal min-h-px min-w-full relative text-[19px] text-[color:var(--eip-custom-181837,#181837)] w-[min-content]" data-node-id="33:764" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[31px] mb-0">{`We're here to help you build a culture of listening,`}</p>
              <p className="leading-[31px]">intelligence, and continuous improvement.</p>
            </div>
          </div>
          <a className="absolute bg-gradient-to-r content-stretch cursor-pointer flex from-[var(--eip-cta-violet,#7c23f8)] gap-[var(--eip-spacing-12,12px)] h-[59px] items-center justify-center left-[915px] px-[var(--eip-spacing-28,28px)] py-[var(--eip-spacing-18_5,18.5px)] rounded-[var(--eip-full,999px)] to-[var(--eip-cta-coral,#fe6c57)] top-[108px] via-[57%] via-[var(--eip-cta-pink,#e024a7)] w-[283px]" data-node-id="33:767" data-name="Button / Request a Demo">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[18px] text-[color:var(--eip-color-white,white)] text-left whitespace-nowrap" data-node-id="I33:767;29:307" style={{ fontVariationSettings: '"wdth" 100' }}>
              Request a Demo
            </p>
            <div className="relative shrink-0 size-[20px]" data-node-id="I33:767;29:308" data-name="Trailing icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrailingIcon} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}