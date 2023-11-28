document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const footer = document.querySelector('.footer-jogo');
    const limiteRolagem = 15;
  
    window.addEventListener('scroll', () => {
      const posicaoAtual = window.scrollY;
  
      if (posicaoAtual > limiteRolagem) {
        header.style.transform = 'translateY(-100%)';
        footer.style.transform = 'translateY(0)';
      } else {
        header.style.transform = 'translateY(0)';
        footer.style.transform = 'translateY(100%)';
      }
    });
  
    var mainContent = document.getElementById('content');
    var fullscreenButton = document.querySelector("#unity-fullscreen-button");
  
    function toggleFooterVisibility() {
      var alturaDocumento = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      var alturaJanela = window.innerHeight;
      var posicaoScroll = window.scrollY;
  
      var distanciaDoRodape = 20;
  
      if (posicaoScroll + alturaJanela >= alturaDocumento - distanciaDoRodape) {
        footer.style.transform = 'translateY(0)';
      } else {
        footer.style.transform = 'translateY(100%)';
      }
    }
  
    window.addEventListener('scroll', toggleFooterVisibility);
  
    fullscreenButton.addEventListener('click', function () {
      unityInstance.SetFullscreen(1);
      fullscreenButton.style.display = 'none';
    });
  
    toggleFooterVisibility();
  });
  