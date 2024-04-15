export function obterHora() {
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
  
    return `${hora}:${minutos < 10 ? '0' + minutos : minutos}`;
  }
  