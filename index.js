// Mostrar/Ocultar Senha
function togglePassword(inputId, eyeIconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(eyeIconId);
  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    input.type = 'password';
    icon.classList.replace('fa-eye-slash', 'fa-eye');
  }
}

// Máscaras de Entrada
function maskCPF(i) {
  let v = i.value.replace(/\D/g, "");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  i.value = v;
}

function maskPhone(i) {
  let v = i.value.replace(/\D/g, "");
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
  v = v.replace(/(\d)(\d{4})$/, "$1-$2");
  i.value = v;
}

function maskCEP(i) {
  let v = i.value.replace(/\D/g, "");
  v = v.replace(/^(\d{5})(\d)/, "$1-$2");
  i.value = v;
}

// Busca de CEP via API ViaCEP
function buscarCEP(cepRaw) {
  const cep = cepRaw.replace(/\D/g, '');
  if (cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data => {
        if (!data.erro) {
          document.getElementById('reg-rua').value = data.logradouro;
          document.getElementById('reg-bairro').value = data.bairro;
          document.getElementById('reg-cidade').value = data.localidade;
          document.getElementById('reg-uf').value = data.uf;
          document.getElementById('reg-numero').focus();
        }
      })
      .catch(() => {});
  }
}

// Handlers de Envio dos Formulários
function handleLogin(e) {
  e.preventDefault();
  alert('Login efetuado com sucesso!');
}

function handleRegister(e) {
  e.preventDefault();
  const p1 = document.getElementById('reg-password').value;
  const p2 = document.getElementById('reg-confirm-password').value;

  if (p1 !== p2) {
    alert('As senhas não coincidem. Verifique novamente.');
    return;
  }
  alert('Cadastro de cliente efetuado com sucesso!');
}