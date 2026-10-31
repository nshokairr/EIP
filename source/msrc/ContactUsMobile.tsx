const assetPathPrefix = "https://www.figma.com/api/mcp/asset/33b8f2ae-2d42-4871-9f80-1defdf8339ce";
const imgTrailingIcon = `${assetPathPrefix}/ef05f.svg`;
const imgStyleSpectrum = `${assetPathPrefix}/3316a.svg`;
const imgSocialInstagram = `${assetPathPrefix}/491be.svg`;
const imgSocialX = `${assetPathPrefix}/f8b5d.svg`;
const imgSocialTikTok = `${assetPathPrefix}/6abcc.svg`;
const imgImageRightDottedWaveDecoration2 = `${assetPathPrefix}/89833.png`;
const imgImagePromiseTemporaryIcon = `${assetPathPrefix}/3ea67.png`;
const imgImagePromiseTemporaryIcon1 = `${assetPathPrefix}/b9266.png`;
const imgImagePromiseTemporaryIcon2 = `${assetPathPrefix}/7eadc.png`;
const imgImageFormHeadingTemporaryPaperPlane = `${assetPathPrefix}/91c33.png`;
const imgImageSendMessageTemporaryWhitePlaneIcon1 = `${assetPathPrefix}/72676.png`;
const imgImageOurLocationTemporaryIcon = `${assetPathPrefix}/1abeb.png`;
const imgImageEmailUsTemporaryIcon = `${assetPathPrefix}/16969.png`;
const imgImageCallUsTemporaryIcon = `${assetPathPrefix}/01bec.png`;
const imgExperioLogo = `${assetPathPrefix}/01d11.svg`;
const imgIconMenu = `${assetPathPrefix}/5653a.svg`;
const imgImageRightDottedWaveDecoration = `${assetPathPrefix}/0ce35.svg`;
const imgImageRightDottedWaveDecoration1 = `${assetPathPrefix}/28103.svg`;
const imgImageSendMessageTemporaryWhitePlaneIcon = `${assetPathPrefix}/0852e.svg`;

type ButtonContentProps = {
  className?: string;
  label?: string;
  theme?: "Primary";
};

function ButtonContent({ className, label = "Request a Demo", theme = "Primary" }: ButtonContentProps) {
  return (
    <div className={className || "bg-gradient-to-r content-stretch flex from-[var(--eip-cta-violet,#604ba9)] gap-[var(--eip-spacing-12,12px)] items-center justify-center px-[var(--eip-spacing-28,28px)] py-[var(--eip-spacing-19,19px)] relative rounded-[var(--eip-full,999px)] to-[var(--eip-cta-coral,#f36289)] via-[57%] via-[var(--eip-cta-pink,#c7309a)]"} data-node-id="29:305">
      <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[18px] text-[color:var(--eip-color-white,white)] whitespace-nowrap" data-node-id="29:307" style={{ fontVariationSettings: '"wdth" 100' }}>
        {label}
      </p>
      <div className="relative shrink-0 size-[20px]" data-node-id="29:308" data-name="Trailing icon">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrailingIcon} />
      </div>
    </div>
  );
}

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

function FooterMobile({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[var(--eip-color-white,white)] border-[var(--eip-custom-ececf3,#ececf3)] border-solid border-t content-stretch flex flex-col gap-[40px] items-start pb-[44px] pt-[52px] px-[24px] relative w-[390px]"} data-node-id="170:782" data-name="Footer / Mobile">
      <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip relative shrink-0 w-full" data-node-id="171:631" data-name="Footer brand">
        <LogoExperio className="h-[28px] relative shrink-0 w-[169.13px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Roboto:Bold'] font-bold items-start leading-[0] overflow-clip relative shrink-0 text-[26px] whitespace-nowrap" data-node-id="171:634" data-name="Tagline">
          <div className="relative shrink-0 text-[color:var(--eip-color-ink,#0b0b2c)]" data-node-id="171:635" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[32px] mb-0">Every experience</p>
            <p className="leading-[32px]">has a voice.</p>
          </div>
          <div className="bg-clip-text relative shrink-0 text-[transparent]" data-node-id="171:636" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(90deg, rgb(81, 87, 176) 0%, rgb(96, 75, 169) 35%, rgb(227, 30, 132) 65%, rgb(242, 89, 131) 94%, rgb(242, 89, 131) 100%)" }}>
            <p className="leading-[32px] mb-0">We turn it into</p>
            <p className="leading-[32px]">intelligence.</p>
          </div>
        </div>
        <ButtonContent className="bg-gradient-to-r content-stretch flex from-[var(--eip-cta-violet,#604ba9)] gap-[var(--eip-spacing-12,12px)] items-center justify-center px-[var(--eip-spacing-28,28px)] py-[var(--eip-spacing-19,19px)] relative rounded-[var(--eip-full,999px)] shrink-0 to-[var(--eip-cta-coral,#f36289)] via-[57%] via-[var(--eip-cta-pink,#c7309a)] w-full" />
      </div>
      <div className="content-stretch flex gap-[24px] items-center overflow-clip relative shrink-0" data-node-id="171:622" data-name="Socials">
        <div className="relative shrink-0 size-[26px]" data-node-id="171:623" data-name="Social / Instagram">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocialInstagram} />
        </div>
        <div className="relative shrink-0 size-[26px]" data-node-id="171:625" data-name="Social / X">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocialX} />
        </div>
        <div className="relative shrink-0 size-[26px]" data-node-id="171:627" data-name="Social / TikTok">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocialTikTok} />
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Roboto:Medium'] font-medium gap-[22px] items-start leading-[20px] overflow-clip relative shrink-0 text-[16px] text-[color:var(--eip-custom-595878,#595878)] whitespace-nowrap" data-node-id="171:637" data-name="Footer links">
        <p className="relative shrink-0" data-node-id="171:638" style={{ fontVariationSettings: '"wdth" 100' }}>
          Contact Us
        </p>
        <p className="relative shrink-0" data-node-id="171:639" style={{ fontVariationSettings: '"wdth" 100' }}>
          Privacy
        </p>
        <p className="relative shrink-0" data-node-id="171:640" style={{ fontVariationSettings: '"wdth" 100' }}>
          Marketing
        </p>
        <p className="relative shrink-0" data-node-id="171:641" style={{ fontVariationSettings: '"wdth" 100' }}>
          Support
        </p>
        <p className="relative shrink-0" data-node-id="171:642" style={{ fontVariationSettings: '"wdth" 100' }}>
          Copyright
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="171:643" data-name="Footer bottom">
        <div className="bg-[var(--eip-custom-ececf3,#ececf3)] h-px relative shrink-0 w-full" data-node-id="171:644" data-name="Divider" />
        <div className="h-[28px] relative shrink-0 w-[10px]" data-node-id="171:645" data-name="Spacer" />
        <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[0] relative shrink-0 text-[11px] text-[color:var(--eip-custom-77748e,#77748e)] tracking-[1.2px] whitespace-nowrap" data-node-id="171:646" style={{ fontVariationSettings: '"wdth" 100' }}>
          <span className="leading-[14px]">{`DEVELOPED AND DESIGNED BY `}</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid font-['Roboto:Bold'] font-bold leading-[14px] text-[#9440a5] underline" href="https://www.udtech-sa.com/ar/home" style={{ fontVariationSettings: '"wdth" 100' }} target="_blank">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid underline" href="https://www.udtech-sa.com/ar/home" style={{ fontVariationSettings: '"wdth" 100' }} target="_blank">
              UD-TECH
            </span>
          </a>
        </p>
        <div className="relative shrink-0 size-[10px]" data-node-id="171:647" data-name="Spacer" />
        <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[14px] relative shrink-0 text-[11px] text-[color:var(--eip-custom-77748e,#77748e)] tracking-[1.2px] whitespace-nowrap" data-node-id="171:648" style={{ fontVariationSettings: '"wdth" 100' }}>
          © 2026 EXPERIO. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
}

export default function ContactUsMobile() {
  return (
    <div className="bg-[var(--eip-color-white,white)] content-stretch flex flex-col gap-[20px] items-start relative size-full" data-node-id="146:560" data-name="Contact us / Mobile">
      <div className="bg-[var(--eip-color-white,white)] content-stretch cursor-pointer flex h-[64px] items-center justify-between px-[20px] relative shrink-0 w-full" data-node-id="146:561" data-name="Header / Mobile">
        <a className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="I146:561;140:394" data-name="Brand">
          <div className="h-[24px] relative shrink-0 w-[144.97px]" data-node-id="I146:561;169:678" data-name="Experio logo">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExperioLogo} />
          </div>
        </a>
        <a className="content-stretch flex items-center justify-center overflow-clip relative rounded-[22px] shrink-0 size-[44px]" data-node-id="I146:561;140:398" data-name="Open menu">
          <div className="relative shrink-0 size-[24px]" data-node-id="I146:561;140:399" data-name="icon/menu">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconMenu} />
          </div>
        </a>
      </div>
      <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-[24px] pt-[32px] px-[var(--eip-spacing-20,20px)] relative shrink-0 w-full" data-node-id="146:569" data-name="Hero">
        <div className="absolute h-[293.15px] left-[336.2px] overflow-clip top-[20px] w-[63.8px]" data-node-id="146:570" data-name="Artwork / Right dotted wave decoration / feather">
          <div className="absolute contents left-0 top-0" data-node-id="146:571" data-name="horizontal edge fade / mask group">
            <div className="absolute contents left-0 top-0" data-node-id="146:573" data-name="vertical edge fade / mask group">
              <div className="absolute h-[293.15px] left-0 mask-position-[0px_0px,_0px_0px] mask-size-[63.8px_293.15px,_63.8px_293.15px] top-0 w-[63.8px]" data-node-id="146:575" style={{ maskImage: `url("${imgImageRightDottedWaveDecoration}"), url("${imgImageRightDottedWaveDecoration1}")` }} data-name="Image / Right dotted wave decoration">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRightDottedWaveDecoration2} />
              </div>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[16px] min-w-full relative shrink-0 text-[12px] text-[color:var(--eip-custom-6517df,#604ba9)] tracking-[1px] w-[min-content]" data-node-id="146:576" style={{ fontVariationSettings: '"wdth" 100' }}>
          CONTACT US
        </p>
        <div className="bg-[var(--eip-custom-7221e4,#604ba9)] h-[3px] relative shrink-0 w-[48px]" data-node-id="146:577" data-name="Contact eyebrow underline" />
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Roboto:Bold'] font-bold items-start leading-[42px] overflow-clip relative shrink-0 text-[36px] tracking-[-0.5px] w-full" data-node-id="146:578" data-name="Contact headline">
          <p className="relative shrink-0 text-[color:var(--eip-custom-0a092e,#0a092e)] w-full" data-node-id="146:579" style={{ fontVariationSettings: '"wdth" 100' }}>
            Let’s make
          </p>
          <p className="relative shrink-0 text-[color:var(--eip-custom-0a092e,#0a092e)] w-full" data-node-id="146:580" style={{ fontVariationSettings: '"wdth" 100' }}>
            great experiences
          </p>
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full whitespace-nowrap" data-node-id="146:581" data-name="Headline together">
            <p className="relative shrink-0 text-[color:var(--eip-custom-0a092e,#0a092e)]" data-node-id="146:582" style={{ fontVariationSettings: '"wdth" 100' }}>
              happen
            </p>
            <p className="bg-clip-text bg-gradient-to-r from-[#d91bae] relative shrink-0 text-[transparent] to-[#ff704c] via-1/2 via-[#f6387d]" data-node-id="146:583" style={{ fontVariationSettings: '"wdth" 100' }}>
              together.
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] min-w-full relative shrink-0 text-[15px] text-[color:var(--eip-custom-4d4d70,#4d4d70)] w-[min-content]" data-node-id="146:584" style={{ fontVariationSettings: '"wdth" 100' }}>
          Get in touch with our team to learn more about Experio and how it can help your organization listen, understand and act.
        </p>
        <div className="content-stretch flex items-center justify-between overflow-clip pt-[6px] relative shrink-0 w-full" data-node-id="146:585" data-name="Support promises">
          <div className="content-stretch flex flex-col gap-[var(--eip-spacing-6,6px)] items-center relative shrink-0 w-[104px]" data-node-id="146:586" data-name="Our team is ready to help / promise">
            <div className="relative rounded-[28px] shrink-0 size-[56px]" data-node-id="146:587" data-name="Image / Promise / temporary icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[28px] size-full" src={imgImagePromiseTemporaryIcon} />
            </div>
            <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[13px] text-[color:var(--eip-custom-111135,#111135)] text-center w-[min-content]" data-node-id="146:588" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-0">Our team is</p>
              <p className="leading-[20px]">ready to help</p>
            </div>
          </div>
          <div className="bg-[var(--eip-custom-eceaf2,#eceaf2)] h-[90px] relative shrink-0 w-px" data-node-id="146:589" data-name="Divider" />
          <div className="content-stretch flex flex-col gap-[var(--eip-spacing-6,6px)] items-center relative shrink-0 w-[104px]" data-node-id="146:590" data-name="We reply quickly / promise">
            <div className="relative rounded-[28px] shrink-0 size-[56px]" data-node-id="146:591" data-name="Image / Promise / temporary icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[28px] size-full" src={imgImagePromiseTemporaryIcon1} />
            </div>
            <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[13px] text-[color:var(--eip-custom-111135,#111135)] text-center w-[min-content]" data-node-id="146:592" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-0">We reply</p>
              <p className="leading-[20px]">quickly</p>
            </div>
          </div>
          <div className="bg-[var(--eip-custom-eceaf2,#eceaf2)] h-[90px] relative shrink-0 w-px" data-node-id="146:593" data-name="Divider" />
          <div className="content-stretch flex flex-col gap-[var(--eip-spacing-6,6px)] items-center relative shrink-0 w-[104px]" data-node-id="146:594" data-name="Let’s build better experiences / promise">
            <div className="relative rounded-[28px] shrink-0 size-[56px]" data-node-id="146:595" data-name="Image / Promise / temporary icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[28px] size-full" src={imgImagePromiseTemporaryIcon2} />
            </div>
            <div className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[13px] text-[color:var(--eip-custom-111135,#111135)] text-center w-[min-content]" data-node-id="146:596" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px] mb-0">Let’s build better</p>
              <p className="leading-[20px]">experiences</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[24px] pt-[8px] px-[var(--eip-spacing-20,20px)] relative shrink-0 w-full" data-node-id="146:597" data-name="Enquiry form">
        <div className="bg-[var(--eip-color-white,white)] content-stretch flex flex-col gap-[18px] items-start overflow-clip px-[20px] py-[24px] relative rounded-[20px] shadow-[0px_8px_30px_0px_rgba(89,41,166,0.06)] shrink-0 w-full" data-node-id="146:598" data-name="Contact Information / enquiry form">
          <div className="content-stretch flex gap-[14px] h-[66px] items-center relative shrink-0 w-full" data-node-id="146:599" data-name="Form heading">
            <div className="relative rounded-[26px] shrink-0 size-[52px]" data-node-id="146:600" data-name="Image / Form heading / temporary paper plane">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[26px] size-full" src={imgImageFormHeadingTemporaryPaperPlane} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold'] font-bold leading-[26px] min-w-px relative text-[20px] text-[color:var(--eip-custom-0a092f,#0a092f)]" data-node-id="146:601" style={{ fontVariationSettings: '"wdth" 100' }}>
              Contact Information
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="146:602" data-name="Facility name / field">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-0c0b31,#0c0b31)] w-full" data-node-id="146:603" style={{ fontVariationSettings: '"wdth" 100' }}>
              Facility name
            </p>
            <div className="bg-white border border-[#d5d3e1] border-solid content-stretch flex gap-[var(--eip-spacing-10,10px)] h-[46px] items-center justify-between pl-[15px] pr-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="146:604" data-name="Facility name / input">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[23px] min-w-px relative text-[16px] text-[color:var(--eip-custom-686686,#686686)]" data-node-id="146:605" style={{ fontVariationSettings: '"wdth" 100' }}>
                Enter facility name
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="146:606" data-name="Type / field">
            <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-0c0b31,#0c0b31)] w-full" data-node-id="146:607" style={{ fontVariationSettings: '"wdth" 100' }}>
              Type
            </p>
            <div className="bg-white border border-[#d5d3e1] border-solid content-stretch flex gap-[var(--eip-spacing-10,10px)] h-[46px] items-center justify-between leading-[23px] pl-[15px] pr-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="146:608" data-name="Type / input">
              <p className="flex-[1_0_0] font-['Roboto:Regular'] font-normal min-w-px relative text-[16px] text-[color:var(--eip-custom-686686,#686686)]" data-node-id="146:609" style={{ fontVariationSettings: '"wdth" 100' }}>
                Select type
              </p>
              <p className="font-['Roboto:Bold'] font-bold relative shrink-0 text-[22px] text-[color:var(--eip-custom-10103b,#10103b)] text-center whitespace-nowrap" data-node-id="146:610" style={{ fontVariationSettings: '"wdth" 100' }}>
                ⌄
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="146:611" data-name="Sector / field">
            <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-0c0b31,#0c0b31)] w-full" data-node-id="146:612" style={{ fontVariationSettings: '"wdth" 100' }}>
              Sector
            </p>
            <div className="bg-white border border-[#d5d3e1] border-solid content-stretch flex gap-[var(--eip-spacing-10,10px)] h-[46px] items-center pl-[15px] pr-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="146:613" data-name="Sector / input">
              <p className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[23px] min-w-px relative text-[16px] text-[color:var(--eip-custom-686686,#686686)]" data-node-id="146:614" style={{ fontVariationSettings: '"wdth" 100' }}>
                Select sector
              </p>
              <div className="flex flex-col font-['Roboto:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[22px] text-[color:var(--eip-custom-10103b,#10103b)] text-center whitespace-nowrap" data-node-id="146:615" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[23px]">⌄</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="146:616" data-name="Contact person / field">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-0c0b31,#0c0b31)] w-full" data-node-id="146:617" style={{ fontVariationSettings: '"wdth" 100' }}>
              Contact person
            </p>
            <div className="bg-white border border-[#d5d3e1] border-solid content-stretch flex gap-[var(--eip-spacing-10,10px)] h-[46px] items-center justify-between pl-[15px] pr-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="146:618" data-name="Contact person / input">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[23px] min-w-px relative text-[16px] text-[color:var(--eip-custom-686686,#686686)]" data-node-id="146:619" style={{ fontVariationSettings: '"wdth" 100' }}>
                Enter contact person
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="146:620" data-name="Telephone number / field">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-0c0b31,#0c0b31)] w-full" data-node-id="146:621" style={{ fontVariationSettings: '"wdth" 100' }}>
              Telephone number
            </p>
            <div className="bg-white border border-[#d5d3e1] border-solid content-stretch flex gap-[var(--eip-spacing-10,10px)] h-[46px] items-center justify-between pl-[15px] pr-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="146:622" data-name="Telephone number / input">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[23px] min-w-px relative text-[16px] text-[color:var(--eip-custom-686686,#686686)]" data-node-id="146:623" style={{ fontVariationSettings: '"wdth" 100' }}>
                Enter telephone number
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="146:624" data-name="Choose city / field">
            <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-0c0b31,#0c0b31)] w-full" data-node-id="146:625" style={{ fontVariationSettings: '"wdth" 100' }}>
              Choose city
            </p>
            <div className="bg-white border border-[#d5d3e1] border-solid content-stretch flex gap-[var(--eip-spacing-10,10px)] h-[46px] items-center justify-between leading-[23px] pl-[15px] pr-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="146:626" data-name="Choose city / input">
              <p className="flex-[1_0_0] font-['Roboto:Regular'] font-normal min-w-px relative text-[16px] text-[color:var(--eip-custom-686686,#686686)]" data-node-id="146:627" style={{ fontVariationSettings: '"wdth" 100' }}>
                Select city
              </p>
              <p className="font-['Roboto:Bold'] font-bold relative shrink-0 text-[22px] text-[color:var(--eip-custom-10103b,#10103b)] text-center whitespace-nowrap" data-node-id="146:628" style={{ fontVariationSettings: '"wdth" 100' }}>
                ⌄
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="146:629" data-name="Choose country / field">
            <p className="font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-0c0b31,#0c0b31)] w-full" data-node-id="146:630" style={{ fontVariationSettings: '"wdth" 100' }}>
              Choose country
            </p>
            <div className="bg-white border border-[#d5d3e1] border-solid content-stretch flex gap-[var(--eip-spacing-10,10px)] h-[46px] items-center justify-between leading-[23px] pl-[15px] pr-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="146:631" data-name="Choose country / input">
              <p className="flex-[1_0_0] font-['Roboto:Regular'] font-normal min-w-px relative text-[16px] text-[color:var(--eip-custom-686686,#686686)]" data-node-id="146:632" style={{ fontVariationSettings: '"wdth" 100' }}>
                Select country
              </p>
              <p className="font-['Roboto:Bold'] font-bold relative shrink-0 text-[22px] text-[color:var(--eip-custom-10103b,#10103b)] text-center whitespace-nowrap" data-node-id="146:633" style={{ fontVariationSettings: '"wdth" 100' }}>
                ⌄
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="146:634" data-name="E-mail / field">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--eip-custom-0c0b31,#0c0b31)] w-full" data-node-id="146:635" style={{ fontVariationSettings: '"wdth" 100' }}>
              E-mail
            </p>
            <div className="bg-white border border-[#d5d3e1] border-solid content-stretch flex gap-[var(--eip-spacing-10,10px)] h-[46px] items-center justify-between pl-[15px] pr-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="146:636" data-name="E-mail / input">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[23px] min-w-px relative text-[16px] text-[color:var(--eip-custom-686686,#686686)]" data-node-id="146:637" style={{ fontVariationSettings: '"wdth" 100' }}>
                Enter e-mail
              </p>
            </div>
          </div>
          <div className="h-[55px] relative shrink-0 w-full" data-node-id="146:638" data-name="Send message">
            <div className="absolute bg-gradient-to-r content-stretch flex from-[var(--eip-cta-violet,#7c23f8)] gap-[var(--eip-spacing-12,12px)] h-[55px] items-center justify-center left-0 pl-[48px] pr-[20px] py-[var(--eip-spacing-12_5,12.5px)] right-0 rounded-[var(--eip-radius-12,12px)] to-[var(--eip-cta-coral,#fe6c57)] top-0 via-[57%] via-[var(--eip-cta-pink,#e024a7)]" data-node-id="146:639" data-name="Button / Send Message">
              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[30px] relative shrink-0 text-[24px] text-[color:var(--eip-color-white,white)] whitespace-nowrap" data-node-id="I146:639;29:307" style={{ fontVariationSettings: '"wdth" 100' }}>
                Send Message
              </p>
            </div>
            <div className="-translate-x-1/2 absolute contents left-[calc(50%-82px)] top-[12.5px]" data-node-id="146:642" data-name="Image / Send Message plane masked">
              <div className="-translate-x-1/2 absolute left-[calc(50%-82px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[30px_30px] size-[30px] top-[12.5px]" data-node-id="146:645" style={{ maskImage: `url("${imgImageSendMessageTemporaryWhitePlaneIcon}")` }} data-name="Image / Send Message / temporary white plane icon">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSendMessageTemporaryWhitePlaneIcon1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[40px] px-[var(--eip-spacing-20,20px)] relative shrink-0 w-full" data-node-id="146:646" data-name="Direct contact details">
        <div className="bg-[var(--eip-custom-f8f3fd,#f8f3fd)] content-stretch flex flex-col gap-[18px] items-start overflow-clip px-[20px] py-[24px] relative rounded-[20px] shrink-0 w-full" data-node-id="146:647" data-name="Direct contact details">
          <div className="content-stretch flex gap-[16px] h-[79px] items-center relative shrink-0 w-full" data-node-id="146:648" data-name="Our Location / detail">
            <div className="relative rounded-[30px] shrink-0 size-[60px]" data-node-id="146:649" data-name="Image / Our Location / temporary icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={imgImageOurLocationTemporaryIcon} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-7,7px)] items-start min-w-px relative" data-node-id="146:650" data-name="Our Location / copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px] text-[color:var(--eip-custom-0d0b35,#0d0b35)] w-full" data-node-id="146:651" style={{ fontVariationSettings: '"wdth" 100' }}>
                Our Location
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[15px] text-[color:var(--eip-custom-111038,#111038)] w-full" data-node-id="146:652" style={{ fontVariationSettings: '"wdth" 100' }}>
                Jeddah, Saudi Arabia
              </p>
            </div>
          </div>
          <div className="bg-[var(--eip-custom-eceaf2,#eceaf2)] h-px relative shrink-0 w-full" data-node-id="146:653" data-name="Divider" />
          <div className="content-stretch flex gap-[16px] h-[79px] items-center relative shrink-0 w-full" data-node-id="146:654" data-name="Email Us / detail">
            <div className="relative rounded-[30px] shrink-0 size-[60px]" data-node-id="146:655" data-name="Image / Email Us / temporary icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={imgImageEmailUsTemporaryIcon} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-7,7px)] items-start min-w-px relative" data-node-id="146:656" data-name="Email Us / copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px] text-[color:var(--eip-custom-0d0b35,#0d0b35)] w-full" data-node-id="146:657" style={{ fontVariationSettings: '"wdth" 100' }}>
                Email Us
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[15px] text-[color:var(--eip-custom-111038,#111038)] w-full" data-node-id="146:658" style={{ fontVariationSettings: '"wdth" 100' }}>
                info@ud-tech.sa
              </p>
            </div>
          </div>
          <div className="bg-[var(--eip-custom-eceaf2,#eceaf2)] h-px relative shrink-0 w-full" data-node-id="146:659" data-name="Divider" />
          <div className="content-stretch flex gap-[16px] h-[79px] items-center relative shrink-0 w-full" data-node-id="146:660" data-name="Call Us / detail">
            <div className="relative rounded-[30px] shrink-0 size-[60px]" data-node-id="146:661" data-name="Image / Call Us / temporary icon">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={imgImageCallUsTemporaryIcon} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[var(--eip-spacing-7,7px)] items-start min-w-px relative" data-node-id="146:662" data-name="Call Us / copy">
              <p className="font-['Roboto:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px] text-[color:var(--eip-custom-0d0b35,#0d0b35)] w-full" data-node-id="146:663" style={{ fontVariationSettings: '"wdth" 100' }}>
                Call Us
              </p>
              <p className="font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[15px] text-[color:var(--eip-custom-111038,#111038)] w-full" data-node-id="146:664" style={{ fontVariationSettings: '"wdth" 100' }}>
                +966 12 345 6789
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterMobile className="bg-[var(--eip-color-white,white)] border-[var(--eip-custom-ececf3,#ececf3)] border-solid border-t content-stretch flex flex-col gap-[40px] items-start pb-[44px] pt-[52px] px-[24px] relative shrink-0 w-full" />
    </div>
  );
}