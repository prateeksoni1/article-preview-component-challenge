const toggleShare = () => {
  const shareBtn = document.querySelector(".share-btn");
  const tooltip = document.querySelector(".share-buttons-container");
  shareBtn.classList.toggle("showTooltip");
  tooltip.classList.toggle("show-tooltip");
};
