function DataValidator (data) {
  const { name, email, reasons, agreeTwo } = data;
  let message = '';

  if (name.length < 10 || name.length > 40) {
    message = 'O campo nome deve ter entre 10 e 40 caracteres';
    alert(`Dados Inválidos!!! \n ${message}`);

    return false;
  }

  if (email.length < 10 || email.length > 50) {
    message = 'O campo email deve ter entre 10 e 50 caracteres';
    alert(`Dados Inválidos!!! \n ${message}`);
    return false;
  }

  if (reasons.length < 10 || reasons.length > 500) {
    message = 'O campo resposta deve ter entre 10 e 500 caracteres';
    alert(`Dados Inválidos!!! \n ${message}`);
    return false;
  }

  if (!agreeTwo) {
    alert('Precisamos muito das suas imagens para divulgação.');
    return false;
  }

  return true;
}

function sendForm(event) {
  event.preventDefault();

  const fullName = document.getElementById('full-name');
  const email = document.getElementById('email');
  const options = document.querySelector('input[name="options"]:checked');
  const reasons = document.getElementById('reasons');
  const date = document.getElementById('date');
  const agreeOne = document.getElementById('agree-one');
  const agreeTwo = document.getElementById('agree-two');

  const data = {
    name: fullName.value,
    email: email.value,
    options: options?.value,
    reasons: reasons.value,
    date: date.value,
    agreeOne: agreeOne.checked,
    agreeTwo: agreeTwo.checked
  }

  const isValid = DataValidator(data);

  if (isValid) {
    // Envia os dados
    console.log(data);
  }
}

const btnSend = document.getElementById('send');
btnSend.addEventListener('click', sendForm);
