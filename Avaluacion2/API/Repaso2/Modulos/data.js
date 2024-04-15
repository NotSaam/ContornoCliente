export function obterData() {
    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1; // Lembrar que os meses comezan en 0
    let ano = data.getFullYear();
  
    return `${dia}/${mes < 10 ? '0' + mes : mes}/${ano}`;
  }
  