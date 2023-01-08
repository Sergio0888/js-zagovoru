(() => {
  const btnOpen = document.querySelectorAll("[data-modal-open]")
  .forEach(el => el.addEventListener("click", openModal));

  const refs = {
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
  refs.closeModalBtn.addEventListener("click", closeModal);
  
    function openModal() {
      refs.modal.classList.remove("is-hidden");
    }

    function closeModal() {
      refs.modal.classList.add("is-hidden");
    }
  })();