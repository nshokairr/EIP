const assetPathPrefix = "https://www.figma.com/api/mcp/asset/63396ee4-5184-46f1-bdff-a2bfe6129e93";
const imgTrailingIcon = `${assetPathPrefix}/ef05f.svg`;
const imgChevron = `${assetPathPrefix}/d34ff.svg`;
const imgExperioLogo = `${assetPathPrefix}/01d11.svg`;
const imgIconClose = `${assetPathPrefix}/23e42.svg`;

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

type NavLinkMobileProps = {
  className?: string;
  hasChevron?: boolean;
  label?: string;
  state?: "Default";
};

function NavLinkMobile({ className, hasChevron = false, label = "Platform", state = "Default" }: NavLinkMobileProps) {
  return (
    <div className={className || "border-[var(--eip-custom-ececf3,#ececf3)] border-b border-solid content-stretch flex items-center justify-between py-[18px] relative w-[350px]"} data-node-id="140:410">
      <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--eip-color-ink,#0b0b2c)] whitespace-nowrap" data-node-id="140:411" style={{ fontVariationSettings: '"wdth" 100' }}>
        {label}
      </p>
      {hasChevron && (
        <div className="relative shrink-0 size-[20px]" data-node-id="140:412" data-name="Chevron">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevron} />
        </div>
      )}
    </div>
  );
}

export default function MenuMobile() {
  return (
    <div className="bg-[var(--eip-color-white,white)] content-stretch flex flex-col items-start py-[10px] relative size-full" data-node-id="147:538" data-name="Menu / Mobile">
      <div className="bg-[var(--eip-color-white,white)] content-stretch cursor-pointer flex h-[64px] items-center justify-between px-[20px] relative shrink-0 w-full" data-node-id="147:539" data-name="Header / Mobile">
        <a className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="I147:539;140:402" data-name="Brand">
          <div className="h-[24px] relative shrink-0 w-[144.97px]" data-node-id="I147:539;169:680" data-name="Experio logo">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExperioLogo} />
          </div>
        </a>
        <button className="bg-[#f5f0ff] content-stretch flex items-center justify-center overflow-clip relative rounded-[22px] shrink-0 size-[44px]" data-node-id="I147:539;140:406" data-name="Close menu">
          <div className="relative shrink-0 size-[24px]" data-node-id="I147:539;140:407" data-name="icon/close">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconClose} />
          </div>
        </button>
      </div>
      <div className="content-stretch cursor-pointer flex flex-col items-start overflow-clip pt-[12px] px-[var(--eip-spacing-20,20px)] relative shrink-0 w-full" data-node-id="147:547" data-name="Navigation">
        <NavLinkMobile className="border-[var(--eip-custom-ececf3,#ececf3)] border-b border-solid content-stretch flex items-center justify-between py-[18px] relative shrink-0 w-full" label="Home" />
        <NavLinkMobile className="border-[var(--eip-custom-ececf3,#ececf3)] border-b border-solid content-stretch flex items-center justify-between py-[18px] relative shrink-0 w-full" label="About Us" />
        <NavLinkMobile className="border-[var(--eip-custom-ececf3,#ececf3)] border-b border-solid content-stretch flex items-center justify-between py-[18px] relative shrink-0 w-full" />
        <NavLinkMobile className="border-[var(--eip-custom-ececf3,#ececf3)] border-b border-solid content-stretch flex items-center justify-between py-[18px] relative shrink-0 w-full" hasChevron label="How It Works" />
        <NavLinkMobile className="border-[var(--eip-custom-ececf3,#ececf3)] border-b border-solid content-stretch flex items-center justify-between py-[18px] relative shrink-0 w-full" label="Benchmarking" />
        <NavLinkMobile className="border-[var(--eip-custom-ececf3,#ececf3)] border-b border-solid content-stretch flex items-center justify-between py-[18px] relative shrink-0 w-full" label="Contact Us" />
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pt-[28px] px-[var(--eip-spacing-20,20px)] relative shrink-0 w-full" data-node-id="147:576" data-name="Actions">
        <ButtonContent className="bg-gradient-to-r content-stretch cursor-pointer flex from-[var(--eip-cta-violet,#604ba9)] gap-[var(--eip-spacing-12,12px)] items-center justify-center px-[var(--eip-spacing-28,28px)] py-[var(--eip-spacing-19,19px)] relative rounded-[var(--eip-full,999px)] shrink-0 to-[var(--eip-cta-coral,#f36289)] via-[57%] via-[var(--eip-cta-pink,#c7309a)] w-full" />
        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[11px] text-[color:var(--eip-custom-686686,#686686)] text-center w-full whitespace-pre-wrap" data-node-id="147:585" style={{ fontVariationSettings: '"wdth" 100' }}>{`info@ud-tech.sa  ·  +966 12 345 6789`}</p>
      </div>
    </div>
  );
}