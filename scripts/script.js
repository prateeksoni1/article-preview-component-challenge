const toggleShare = () => {
  const share = document.querySelector(".share");
  const tooltip = document.querySelector(".share-buttons-container");
  share.classList.toggle("showTooltip");
  tooltip.classList.toggle("show-tooltip");
};
