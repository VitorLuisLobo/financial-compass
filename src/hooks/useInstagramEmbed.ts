let scriptLoaded = false;
let scriptLoading = false;

export const useInstagramEmbed = () => {
  const loadScript = () => {
    if (scriptLoaded || scriptLoading) return;
    scriptLoading = true;
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      scriptLoaded = true;
      scriptLoading = false;
    };
    script.onerror = () => {
      scriptLoading = false;
    };
    document.body.appendChild(script);
  };

  const processEmbeds = () => {
    (window as any).instgrm?.Embeds?.process();
  };

  return { loadScript, processEmbeds };
};
