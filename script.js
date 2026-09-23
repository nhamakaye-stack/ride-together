document.addEventListener('DOMContentLoaded', () => {
  const chips = document.querySelectorAll('.chip');
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((item) => item.classList.remove('active'));
      chip.classList.add('active');
    });
  });

  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('btn-primary')) {
        button.animate(
          [
            { transform: 'scale(1)' },
            { transform: 'scale(0.98)' },
            { transform: 'scale(1)' }
          ],
          { duration: 180, easing: 'ease-out' }
        );
      }
    });
  });
});
