let accordionContent = document.querySelector(".faq_content");

accordionContent.addEventListener("click", (e) => {
  const groupHeader = e.target.closest(".faq_dropdown_header");
  if (!groupHeader) return;

  const group = groupHeader.parentElement;
  const groupBody = group.querySelector(".faq_dropdown_body");
  const icon = group.querySelector(".faq_icon");

  groupBody.classList.toggle("open");
  icon.src = "assets/images/icon-minus.svg";

  const othersGroup = accordionContent.querySelectorAll(".faq_dropdown");
  othersGroup.forEach((others) => {
    if (others !== group) {
      const otherBody = others.querySelector(".faq_dropdown_body");
      const otherIcon = others.querySelector(".faq_icon");

      otherBody.classList.remove("open");
      otherIcon.src = "assets/images/icon-plus.svg";
    }
  });
});
