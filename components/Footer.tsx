import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="border-t border-emerald-500/20 flex items-center text-white justify-center p-5">
      <Image
        width={40}
        height={40}
        className="filter hue-rotate-90 opacity-20 rounded-full"
        src="/profile.png"
        alt="Profile Picture"
      />
      <p className="text-xs text-emerald-900 pl-5">
        DISCLAIMER: Please be aware that engaging in online gambling activities using this app carries inherent risks, and you assume all responsibility for any consequences that may arise. We do not accept any liability for losses incurred or issues encountered at online casinos or any other platforms.
      </p>
    </footer>
  );
}

export default Footer;
