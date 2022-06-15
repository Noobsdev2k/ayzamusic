import React, { useEffect, useState } from "react";

export const useToggle = () => {
  const [open, setOpen] = useState(false);

  const handleWindowSizeChange = () =>
    window.screen.width >= 700 && setOpen(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, [open]);

  return {
    setOpen,
    open,
  };
};
