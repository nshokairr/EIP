const assetPathPrefix = "https://www.figma.com/api/mcp/asset/28b1640d-f309-47b7-bf1b-7269c5655883";
const imgIconArrowRight = `${assetPathPrefix}/c7347.svg`;
const imgBrandSymbolImage = `${assetPathPrefix}/c3dd8.png`;
const imgImageLeftDottedWaveDecoration2 = `${assetPathPrefix}/d3942.png`;
const imgImageRightDottedWaveDecoration2 = `${assetPathPrefix}/89833.png`;
const imgImageLowerWaveDecoration2 = `${assetPathPrefix}/24bd1.png`;
const imgImagePromiseTemporaryIcon = `${assetPathPrefix}/3ea67.png`;
const imgImagePromiseTemporaryIcon1 = `${assetPathPrefix}/b9266.png`;
const imgImagePromiseTemporaryIcon2 = `${assetPathPrefix}/7eadc.png`;
const imgImageFormHeadingTemporaryPaperPlane = `${assetPathPrefix}/91c33.png`;
const imgImageSendMessageTemporaryWhitePlaneIcon1 = `${assetPathPrefix}/72676.png`;
const imgImageOurLocationTemporaryIcon = `${assetPathPrefix}/1abeb.png`;
const imgImageEmailUsTemporaryIcon = `${assetPathPrefix}/16969.png`;
const imgImageCallUsTemporaryIcon = `${assetPathPrefix}/01bec.png`;
const imgDropdownChevron = `${assetPathPrefix}/c717e.svg`;
const imgImageLeftDottedWaveDecoration = `${assetPathPrefix}/cf8b4.svg`;
const imgImageLeftDottedWaveDecoration1 = `${assetPathPrefix}/07e01.svg`;
const imgImageRightDottedWaveDecoration = `${assetPathPrefix}/be122.svg`;
const imgImageRightDottedWaveDecoration1 = `${assetPathPrefix}/d8647.svg`;
const imgImageLowerWaveDecoration = `${assetPathPrefix}/85963.svg`;
const imgImageLowerWaveDecoration1 = `${assetPathPrefix}/4e589.svg`;
const imgImageSendMessageTemporaryWhitePlaneIcon = `${assetPathPrefix}/90a18.svg`;

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

export default function ContactUsDesktop() {
  return (
    <div className="bg-[var(--eip-color-white,white)] content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] items-start relative size-full" data-node-id="33:772" data-name="Contact us / Desktop">
      <div className="content-stretch flex gap-[var(--eip-spacing-0,0px)] h-[90px] items-center pl-[var(--eip-spacing-46,46px)] pr-[var(--eip-spacing-41,41px)] py-[var(--eip-spacing-24,24px)] relative shrink-0 w-[1536px]" data-node-id="33:773" data-name="Header">
        <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-13,13px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0 w-[245px]" data-node-id="I33:773;29:234" data-name="Brand">
          <div className="content-stretch flex h-[42px] items-start relative shrink-0 w-[40px]" data-node-id="I33:773;29:235" data-name="Brand symbol">
            <div className="absolute h-[48px] left-[-6px] top-[-2px] w-[50px]" data-node-id="I33:773;29:236" data-name="Brand symbol / Image">
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBrandSymbolImage} />
            </div>
          </div>
          <div className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[0] relative shrink-0 text-[18px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:773;29:237" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[21px] mb-0">Experience</p>
            <p className="leading-[21px]">Intelligence Platform</p>
          </div>
        </a>
        <div className="flex-[1_0_0] h-[42px] min-w-px relative" data-node-id="I33:773;29:238" data-name="Flexible spacing / Before navigation" />
        <div className="content-stretch flex gap-[var(--eip-spacing-47,47px)] h-[42px] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0 w-[780px]" data-node-id="I33:773;29:239" data-name="Navigation">
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:773;29:240" data-name="Navigation / Platform">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:773;29:241" style={{ fontVariationSettings: '"wdth" 100' }}>
              Platform
            </p>
          </a>
          <div className="content-stretch flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:773;29:243" data-name="Navigation / Solutions">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] whitespace-nowrap" data-node-id="I33:773;29:244" style={{ fontVariationSettings: '"wdth" 100' }}>
              Solutions
            </p>
            <div className="relative shrink-0 size-[10px]" data-node-id="I33:773;29:245" data-name="Dropdown chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDropdownChevron} />
            </div>
          </div>
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:773;29:247" data-name="Navigation / Features">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:773;29:248" style={{ fontVariationSettings: '"wdth" 100' }}>
              Features
            </p>
          </a>
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:773;29:249" data-name="Navigation / Benchmarking">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:773;29:250" style={{ fontVariationSettings: '"wdth" 100' }}>
              Benchmarking
            </p>
          </a>
          <div className="content-stretch flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:773;29:251" data-name="Navigation / Resources">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] whitespace-nowrap" data-node-id="I33:773;29:252" style={{ fontVariationSettings: '"wdth" 100' }}>
              Resources
            </p>
            <div className="relative shrink-0 size-[10px]" data-node-id="I33:773;29:253" data-name="Dropdown chevron">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDropdownChevron} />
            </div>
          </div>
          <a className="content-stretch cursor-pointer flex gap-[var(--eip-spacing-10,10px)] items-center p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:773;29:255" data-name="Navigation / About Us">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-ink,#0b0b2c)] text-left whitespace-nowrap" data-node-id="I33:773;29:256" style={{ fontVariationSettings: '"wdth" 100' }}>
              About Us
            </p>
          </a>
          <div className="content-stretch flex items-start relative shrink-0" data-node-id="I33:773;29:261" data-name="Navigation / Contact Us">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] relative shrink-0 text-[14px] text-[color:var(--eip-color-violet,#7816ba)] whitespace-nowrap" data-node-id="I33:773;29:262" style={{ fontVariationSettings: '"wdth" 100' }}>
              Contact Us
            </p>
            <div className="absolute h-[2px] left-px top-[29px] w-[68px]" data-node-id="I33:773;29:264" style={{ backgroundImage: "linear-gradient(90deg, var(--eip-gradient-blue,rgb(62, 74, 240)) 0%, var(--eip-gradient-violet,rgb(141, 34, 213)) 43%, var(--eip-gradient-pink,rgb(231, 54, 144)) 86%, var(--eip-gradient-coral,rgb(239, 87, 100)) 100%)" }} data-name="Active indicator" />
          </div>
        </div>
        <div className="flex-[1_0_0] h-[42px] min-w-px relative" data-node-id="I33:773;29:257" data-name="Flexible spacing / Before actions" />
        <div className="content-stretch flex gap-[var(--eip-spacing-14,14px)] items-start p-[var(--eip-spacing-0,0px)] relative shrink-0" data-node-id="I33:773;29:258" data-name="Actions">
          <Button className="border border-[var(--eip-color-violet,#7816ba)] border-solid content-stretch flex gap-[var(--eip-spacing-12,12px)] items-center justify-center pl-[var(--eip-spacing-24,24px)] pr-[var(--eip-spacing-23,23px)] py-[var(--eip-spacing-12,12px)] relative rounded-[var(--eip-full,999px)] shrink-0" label="Log In" showTrailingIcon={false} style="Outline" />
          <Button className="bg-gradient-to-r content-stretch flex from-[var(--eip-cta-violet,#7c23f8)] gap-[var(--eip-spacing-12,12px)] items-center justify-center pl-[var(--eip-spacing-24,24px)] pr-[var(--eip-spacing-25,25px)] py-[var(--eip-spacing-11,11px)] relative rounded-[var(--eip-full,999px)] shrink-0 to-[var(--eip-cta-coral,#fe6c57)] via-[57%] via-[var(--eip-cta-pink,#e024a7)]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[704px] items-start relative shrink-0 w-full" data-node-id="33:813" data-name="Contact us / Hero and enquiry form">
        <div className="absolute h-[533px] left-0 overflow-clip top-[135px] w-[128px]" data-node-id="34:506" data-name="Artwork / Left dotted wave decoration / feather">
          <div className="absolute contents left-0 top-0" data-node-id="37:387" data-name="horizontal edge fade / mask group">
            <div className="absolute contents left-0 top-0" data-node-id="37:386" data-name="vertical edge fade / mask group">
              <div className="absolute h-[533px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[128px_533px,_128px_533px] top-0 w-[128px]" data-node-id="33:814" style={{ maskImage: `url("${imgImageLeftDottedWaveDecoration}"), url("${imgImageLeftDottedWaveDecoration1}")` }} data-name="Image / Left dotted wave decoration">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLeftDottedWaveDecoration2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[533px] left-[1420px] overflow-clip top-[135px] w-[116px]" data-node-id="34:511" data-name="Artwork / Right dotted wave decoration / feather">
          <div className="absolute contents left-0 top-0" data-node-id="37:385" data-name="horizontal edge fade / mask group">
            <div className="absolute contents left-0 top-0" data-node-id="37:384" data-name="vertical edge fade / mask group">
              <div className="absolute h-[533px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[116px_533px,_116px_533px] top-0 w-[116px]" data-node-id="33:815" style={{ maskImage: `url("${imgImageRightDottedWaveDecoration}"), url("${imgImageRightDottedWaveDecoration1}")` }} data-name="Image / Right dotted wave decoration">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRightDottedWaveDecoration2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[161px] left-0 overflow-clip top-[554px] w-[630px]" data-node-id="34:516" data-name="Artwork / Lower wave decoration / feather">
          <div className="absolute contents left-0 top-0" data-node-id="37:383" data-name="horizontal edge fade / mask group">
            <div className="absolute contents left-0 top-0" data-node-id="37:382" data-name="vertical edge fade / mask group">
              <div className="absolute h-[161px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[630px_161px,_630px_161px] top-0 w-[630px]" data-node-id="33:816" style={{ maskImage: `url("${imgImageLowerWaveDecoration}"), url("${imgImageLowerWaveDecoration1}")` }} data-name="Image / Lower wave decoration">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLowerWaveDecoration2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[410px] items-start left-[133px] top-[63px] w-[466px]" data-node-id="33:817" data-name="Contact introduction">
          <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[23px] relative shrink-0 text-[15px] text-[color:var(--eip-custom-6517df,#6517df)] w-[466px]" data-node-id="33:819" style={{ fontVariationSettings: '"wdth" 100' }}>
            CONTACT US
          </p>
          <div className="absolute bg-[var(--eip-custom-7221e4,#7221e4)] h-[3px] left-0 top-[34px] w-[48px]" data-node-id="33:822" data-name="Contact eyebrow underline" />
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Roboto:Bold'] font-bold gap-[var(--eip-spacing-0,0px)] h-[187px] items-start leading-[62px] left-[133px] text-[51px] top-[121px] w-[480px]" data-node-id="33:825" data-name="Contact headline">
          <p className="relative shrink-0 text-[color:var(--eip-custom-0a092e,#0a092e)] w-[480px]" data-node-id="33:827" style={{ fontVariationSettings: '"wdth" 100' }}>
            Let’s make
          </p>
          <p className="relative shrink-0 text-[color:var(--eip-custom-0a092e,#0a092e)] w-[480px]" data-node-id="33:830" style={{ fontVariationSettings: '"wdth" 100' }}>
            great experiences
          </p>
          <div className="content-stretch flex gap-[var(--eip-spacing-13,13px)] items-center relative shrink-0 w-[480px] whitespace-nowrap" data-node-id="33:831" data-name="Headline together">
            <p className="relative shrink-0 text-[color:var(--eip-custom-0a092e,#0a092e)]" data-node-id="33:832" style={{ fontVariationSettings: '"wdth" 100' }}>
              happen
            </p>
            <p className="bg-clip-text bg-gradient-to-r from-[#d91bae] relative shrink-0 text-[transparent] to-[#ff704c] via-1/2 via-[#f6387d]" data-node-id="33:833" style={{ fontVariationSettings: '"wdth" 100' }}>
              together.
            </p>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[84px] items-start left-[133px] top-[327px] w-[466px]" data-node-id="33:834" data-name="Contact introductory description">
          <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[20px] text-[color:var(--eip-custom-4d4d70,#4d4d70)] w-[466px]" data-node-id="33:836" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[27px] mb-0">Get in touch with our team to learn more about the</p>
            <p className="leading-[27px] mb-0">Experience Intelligence Platform and how it can</p>
            <p className="leading-[27px]">help your organization listen, understand and act.</p>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[119px] items-start left-[131px] top-[434px] w-[431px]" data-node-id="33:839" data-name="Support promises">
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-6,6px)] h-[119px] items-center left-0 top-0 w-[111px]" data-node-id="33:840" data-name="Our team is ready to help / promise">
            <div className="relative rounded-[var(--eip-radius-34_5,34.5px)] shrink-0 size-[69px]" data-node-id="33:841" data-name="Image / Promise / temporary icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-34_5,34.5px)] size-full" src={imgImagePromiseTemporaryIcon} />
            </div>
            <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[14px] text-[color:var(--eip-custom-111135,#111135)] text-center w-[111px]" data-node-id="33:843" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-0">Our team is</p>
              <p className="leading-[20px]">ready to help</p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-6,6px)] h-[119px] items-center left-[148px] top-0 w-[111px]" data-node-id="33:846" data-name="We reply quickly / promise">
            <div className="relative rounded-[var(--eip-radius-34_5,34.5px)] shrink-0 size-[69px]" data-node-id="33:847" data-name="Image / Promise / temporary icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-34_5,34.5px)] size-full" src={imgImagePromiseTemporaryIcon1} />
            </div>
            <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[14px] text-[color:var(--eip-custom-111135,#111135)] text-center w-[111px]" data-node-id="33:848" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-0">We reply</p>
              <p className="leading-[20px]">quickly</p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-6,6px)] h-[119px] items-center left-[294px] top-0 w-[111px]" data-node-id="33:849" data-name="Let’s build better experiences / promise">
            <div className="relative rounded-[var(--eip-radius-34_5,34.5px)] shrink-0 size-[69px]" data-node-id="33:850" data-name="Image / Promise / temporary icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-34_5,34.5px)] size-full" src={imgImagePromiseTemporaryIcon2} />
            </div>
            <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[14px] text-[color:var(--eip-custom-111135,#111135)] text-center w-[111px]" data-node-id="33:851" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-0">Let’s build better</p>
              <p className="leading-[20px]">experiences</p>
            </div>
          </div>
          <div className="absolute bg-[var(--eip-custom-e3deee,#e3deee)] h-[106px] left-[123px] top-[5px] w-px" data-node-id="33:852" data-name="Support promise divider / first" />
          <div className="absolute bg-[var(--eip-custom-e3deee,#e3deee)] h-[106px] left-[270px] top-[5px] w-px" data-node-id="33:855" data-name="Support promise divider / second" />
        </div>
        <div className="absolute bg-[var(--eip-color-white,white)] content-stretch drop-shadow-[0px_8px_15px_rgba(89,41,166,0.06)] flex flex-col gap-[var(--eip-spacing-0,0px)] h-[614px] items-start left-[631px] rounded-[var(--eip-radius-24,24px)] top-[53px] w-[787px]" data-node-id="33:856" data-name="Contact Information / enquiry form">
          <div className="absolute content-stretch flex gap-[var(--eip-spacing-21,21px)] h-[66px] items-center left-[27px] top-[23px] w-[731px]" data-node-id="33:857" data-name="Form heading">
            <div className="relative rounded-[var(--eip-radius-33,33px)] shrink-0 size-[66px]" data-node-id="33:859" data-name="Image / Form heading / temporary paper plane">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-33,33px)] size-full" src={imgImageFormHeadingTemporaryPaperPlane} />
            </div>
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[36px] relative shrink-0 text-[29px] text-[color:var(--eip-custom-0a092f,#0a092f)] w-[628px]" data-node-id="33:861" style={{ fontVariationSettings: '"wdth" 100' }}>
              Contact Information
            </p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[var(--eip-spacing-25,25px)] h-[383px] items-start left-[28px] top-[112px] w-[731px]" data-node-id="33:864" data-name="Contact fields / two-column grid">
            <div className="content-stretch flex gap-[var(--eip-spacing-30,30px)] items-start relative shrink-0 w-[731px]" data-node-id="33:865" data-name="Contact fields / row 1">
              <div className="content-stretch flex flex-col gap-[var(--eip-spacing-7,7px)] items-start relative shrink-0 w-[350px]" data-node-id="33:867" data-name="Facility name / field">
                <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--eip-custom-0c0b31,#0c0b31)] w-[350px]" data-node-id="33:869" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Facility name
                </p>
                <div className="bg-white border border-[#d5d3e1] border-solid content-stretch flex gap-[var(--eip-spacing-10,10px)] h-[46px] items-center justify-between pl-[15px] pr-[16px] relative rounded-[10px] shrink-0 w-[350px]" data-node-id="33:872" data-name="Facility name / input">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[23px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-686686,#686686)] w-[293px]" data-node-id="33:874" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Enter facility name
                  </p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--eip-spacing-7,7px)] items-start relative shrink-0 w-[350px]" data-node-id="33:877" data-name="Type / field">
                <p className="font-['Roboto:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--eip-custom-0c0b31,#0c0b31)] w-[350px]" data-node-id="33:878" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Type
                </p>
                <div className="bg-white border border-[#d5d3e1] border-solid content-stretch flex gap-[var(--eip-spacing-10,10px)] h-[46px] items-center justify-between leading-[23px] pl-[15px] pr-[16px] relative rounded-[10px] shrink-0 w-[350px]" data-node-id="33:879" data-name="Type / input">
                  <p className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[16px] text-[color:var(--eip-custom-686686,#686686)] w-[293px]" data-node-id="33:880" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Select type
                  </p>
                  <p className="font-['Roboto:Bold'] font-bold relative shrink-0 text-[22px] text-[color:var(--eip-custom-10103b,#10103b)] text-center whitespace-nowrap" data-node-id="33:882" style={{ fontVariationSettings: '"wdth" 100' }}>
                    ⌄
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--eip-spacing-30,30px)] items-start relative shrink-0 w-[731px]" data-node-id="33:885" data-name="Contact fields / row 2">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--eip-spacing-7,7px)] items-start relative shrink-0 w-[350px]" data-node-id="33:886" data-name="Sector / field">
                <p className="font-['Roboto:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--eip-custom-0c0b31,#0c0b31)] w-[350px]" data-node-id="33:887" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Sector
                </p>
                <div className="bg-white border border-[#d5d3e1] border-solid content-stretch flex gap-[var(--eip-spacing-10,10px)] h-[46px] items-center justify-between leading-[23px] pl-[15px] pr-[16px] relative rounded-[10px] shrink-0 w-[350px]" data-node-id="33:888" data-name="Sector / input">
                  <p className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[16px] text-[color:var(--eip-custom-686686,#686686)] w-[293px]" data-node-id="33:889" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Select sector
                  </p>
                  <p className="font-['Roboto:Bold'] font-bold relative shrink-0 text-[22px] text-[color:var(--eip-custom-10103b,#10103b)] text-center whitespace-nowrap" data-node-id="33:890" style={{ fontVariationSettings: '"wdth" 100' }}>
                    ⌄
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[var(--eip-spacing-7,7px)] items-start relative shrink-0 w-[350px]" data-node-id="33:891" data-name="Contact person / field">
                <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--eip-custom-0c0b31,#0c0b31)] w-[350px]" data-node-id="33:892" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Contact person
                </p>
                <div className="bg-white border border-[#d5d3e1] border-solid content-stretch flex gap-[var(--eip-spacing-10,10px)] h-[46px] items-center justify-between pl-[15px] pr-[16px] relative rounded-[10px] shrink-0 w-[350px]" data-node-id="33:893" data-name="Contact person / input">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[23px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-686686,#686686)] w-[293px]" data-node-id="33:894" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Enter contact person
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--eip-spacing-30,30px)] items-start relative shrink-0 w-[731px]" data-node-id="33:895" data-name="Contact fields / row 3">
              <div className="content-stretch flex flex-col gap-[var(--eip-spacing-7,7px)] items-start relative shrink-0 w-[350px]" data-node-id="33:896" data-name="Telephone number / field">
                <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--eip-custom-0c0b31,#0c0b31)] w-[350px]" data-node-id="33:897" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Telephone number
                </p>
                <div className="bg-white border border-[#d5d3e1] border-solid content-stretch flex gap-[var(--eip-spacing-10,10px)] h-[46px] items-center justify-between pl-[15px] pr-[16px] relative rounded-[10px] shrink-0 w-[350px]" data-node-id="33:898" data-name="Telephone number / input">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[23px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-686686,#686686)] w-[293px]" data-node-id="33:899" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Enter telephone number
                  </p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--eip-spacing-7,7px)] items-start relative shrink-0 w-[350px]" data-node-id="33:900" data-name="Choose city / field">
                <p className="font-['Roboto:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--eip-custom-0c0b31,#0c0b31)] w-[350px]" data-node-id="33:901" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Choose city
                </p>
                <div className="bg-white border border-[#d5d3e1] border-solid content-stretch flex gap-[var(--eip-spacing-10,10px)] h-[46px] items-center justify-between leading-[23px] pl-[15px] pr-[16px] relative rounded-[10px] shrink-0 w-[350px]" data-node-id="33:902" data-name="Choose city / input">
                  <p className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[16px] text-[color:var(--eip-custom-686686,#686686)] w-[293px]" data-node-id="33:903" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Select city
                  </p>
                  <p className="font-['Roboto:Bold'] font-bold relative shrink-0 text-[22px] text-[color:var(--eip-custom-10103b,#10103b)] text-center whitespace-nowrap" data-node-id="33:904" style={{ fontVariationSettings: '"wdth" 100' }}>
                    ⌄
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--eip-spacing-30,30px)] items-start relative shrink-0 w-[731px]" data-node-id="33:905" data-name="Contact fields / row 4">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--eip-spacing-7,7px)] items-start relative shrink-0 w-[350px]" data-node-id="33:906" data-name="Choose country / field">
                <p className="font-['Roboto:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--eip-custom-0c0b31,#0c0b31)] w-[350px]" data-node-id="33:907" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Choose country
                </p>
                <div className="bg-white border border-[#d5d3e1] border-solid content-stretch flex gap-[var(--eip-spacing-10,10px)] h-[46px] items-center justify-between leading-[23px] pl-[15px] pr-[16px] relative rounded-[10px] shrink-0 w-[350px]" data-node-id="33:908" data-name="Choose country / input">
                  <p className="font-['Roboto:Regular'] font-normal relative shrink-0 text-[16px] text-[color:var(--eip-custom-686686,#686686)] w-[293px]" data-node-id="33:909" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Select country
                  </p>
                  <p className="font-['Roboto:Bold'] font-bold relative shrink-0 text-[22px] text-[color:var(--eip-custom-10103b,#10103b)] text-center whitespace-nowrap" data-node-id="33:910" style={{ fontVariationSettings: '"wdth" 100' }}>
                    ⌄
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[var(--eip-spacing-7,7px)] items-start relative shrink-0 w-[350px]" data-node-id="33:911" data-name="E-mail / field">
                <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--eip-custom-0c0b31,#0c0b31)] w-[350px]" data-node-id="33:912" style={{ fontVariationSettings: '"wdth" 100' }}>
                  E-mail
                </p>
                <div className="bg-white border border-[#d5d3e1] border-solid content-stretch flex gap-[var(--eip-spacing-10,10px)] h-[46px] items-center justify-between pl-[15px] pr-[16px] relative rounded-[10px] shrink-0 w-[350px]" data-node-id="33:913" data-name="E-mail / input">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[23px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-686686,#686686)] w-[293px]" data-node-id="33:914" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Enter e-mail
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gradient-to-r content-stretch flex from-[var(--eip-cta-violet,#7c23f8)] gap-[var(--eip-spacing-12,12px)] h-[55px] items-center justify-center left-[27px] pl-[var(--eip-spacing-66,66px)] pr-[var(--eip-spacing-28,28px)] py-[var(--eip-spacing-12_5,12.5px)] rounded-[var(--eip-radius-12,12px)] to-[var(--eip-cta-coral,#fe6c57)] top-[532px] via-[57%] via-[var(--eip-cta-pink,#e024a7)] w-[732px]" data-node-id="33:915" data-name="Button / Send Message">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[30px] relative shrink-0 text-[24px] text-[color:var(--eip-color-white,white)] whitespace-nowrap" data-node-id="I33:915;29:307" style={{ fontVariationSettings: '"wdth" 100' }}>
              Send Message
            </p>
          </div>
          <div className="absolute contents left-[295px] top-[544.5px]" data-node-id="34:531" data-name="Image / Send Message plane masked">
            <div className="absolute left-[295px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[30px_30px] size-[30px] top-[544.5px]" data-node-id="33:919" style={{ maskImage: `url("${imgImageSendMessageTemporaryWhitePlaneIcon}")` }} data-name="Image / Send Message / temporary white plane icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSendMessageTemporaryWhitePlaneIcon1} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[230px] items-start relative shrink-0 w-full" data-node-id="33:920" data-name="Contact us / Direct contact details">
        <div className="absolute bg-[var(--eip-custom-f8f3fd,#f8f3fd)] content-stretch flex flex-col gap-[var(--eip-spacing-0,0px)] h-[129px] items-start left-[92px] rounded-[var(--eip-radius-24,24px)] top-[33px] w-[1352px]" data-node-id="33:921" data-name="Direct contact details / strip">
          <div className="absolute content-stretch flex gap-[var(--eip-spacing-25,25px)] h-[79px] items-center left-[42px] top-[26px] w-[360px]" data-node-id="33:924" data-name="Our Location / detail">
            <div className="relative rounded-[var(--eip-radius-39_5,39.5px)] shrink-0 size-[79px]" data-node-id="33:925" data-name="Image / Our Location / temporary icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-39_5,39.5px)] size-full" src={imgImageOurLocationTemporaryIcon} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-7,7px)] items-start min-w-px relative" data-node-id="33:926" data-name="Our Location / copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[33px] relative shrink-0 text-[26px] text-[color:var(--eip-custom-0d0b35,#0d0b35)] w-[268px]" data-node-id="33:928" style={{ fontVariationSettings: '"wdth" 100' }}>
                Our Location
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[27px] relative shrink-0 text-[20px] text-[color:var(--eip-custom-111038,#111038)] w-[268px]" data-node-id="33:931" style={{ fontVariationSettings: '"wdth" 100' }}>
                Jeddah, Saudi Arabia
              </p>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[var(--eip-spacing-25,25px)] h-[79px] items-center left-[479px] top-[26px] w-[360px]" data-node-id="33:934" data-name="Email Us / detail">
            <div className="relative rounded-[var(--eip-radius-39_5,39.5px)] shrink-0 size-[79px]" data-node-id="33:935" data-name="Image / Email Us / temporary icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-39_5,39.5px)] size-full" src={imgImageEmailUsTemporaryIcon} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-7,7px)] items-start min-w-px relative" data-node-id="33:936" data-name="Email Us / copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[33px] relative shrink-0 text-[26px] text-[color:var(--eip-custom-0d0b35,#0d0b35)] w-[268px]" data-node-id="33:937" style={{ fontVariationSettings: '"wdth" 100' }}>
                Email Us
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[27px] relative shrink-0 text-[20px] text-[color:var(--eip-custom-111038,#111038)] w-[268px]" data-node-id="33:938" style={{ fontVariationSettings: '"wdth" 100' }}>
                info@ud-tech.sa
              </p>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[var(--eip-spacing-25,25px)] h-[79px] items-center left-[863px] top-[26px] w-[360px]" data-node-id="33:939" data-name="Call Us / detail">
            <div className="relative rounded-[var(--eip-radius-39_5,39.5px)] shrink-0 size-[79px]" data-node-id="33:940" data-name="Image / Call Us / temporary icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--eip-radius-39_5,39.5px)] size-full" src={imgImageCallUsTemporaryIcon} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-7,7px)] items-start min-w-px relative" data-node-id="33:941" data-name="Call Us / copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[33px] relative shrink-0 text-[26px] text-[color:var(--eip-custom-0d0b35,#0d0b35)] w-[268px]" data-node-id="33:942" style={{ fontVariationSettings: '"wdth" 100' }}>
                Call Us
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[27px] relative shrink-0 text-[20px] text-[color:var(--eip-custom-111038,#111038)] w-[268px]" data-node-id="33:943" style={{ fontVariationSettings: '"wdth" 100' }}>
                +966 12 345 6789
              </p>
            </div>
          </div>
          <div className="absolute bg-[var(--eip-custom-cfc4e4,#cfc4e4)] h-[81px] left-[419px] top-[24px] w-px" data-node-id="33:944" data-name="Contact detail divider / first" />
          <div className="absolute bg-[var(--eip-custom-cfc4e4,#cfc4e4)] h-[81px] left-[814px] top-[24px] w-px" data-node-id="33:947" data-name="Contact detail divider / second" />
        </div>
      </div>
    </div>
  );
}