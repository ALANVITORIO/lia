document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.carrosel-track');
  const items = document.querySelectorAll('.carrosel-item');
  const firstItemClone = items[0].cloneNode(true);
  track.appendChild(firstItemClone);

  let moving = false;
  const moveCarousel = () => {
    // Se já estiver movendo, não faz nada para evitar sobreposições
    if (moving) return;
    moving = true;

    // Muda o track para a esquerda
    track.style.transition = 'transform 2s ease-in-out';
    track.style.transform = 'translateX(-' + items[0].offsetWidth + 'px)';

    // Espera a transição terminar
    track.addEventListener(
      'transitionend',
      () => {
        // Move o primeiro item para o final e reseta a transformação
        track.appendChild(items[0]);
        track.style.transition = 'none';
        track.style.transform = 'translateX(0)';
        moving = false;
      },
      { once: true },
    ); // Ouve uma vez e remove
  };

  // Chama moveCarousel a cada 3 segundos para um loop contínuo
  setInterval(moveCarousel, 3000);
});
