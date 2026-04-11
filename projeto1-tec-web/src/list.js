const contatos = [
  { nome: "João Silva", email: "joao@email.com", telefone: "(11) 98765-4321" },
  { nome: "Maria Souza", email: "maria@email.com", telefone: "(21) 91234-5678" },
  { nome: "Carlos Lima", email: "carlos@email.com", telefone: "(31) 99876-1234" },
  { nome: "Ana Oliveira", email: "ana@email.com", telefone: "(41) 98888-7777" },
  { nome: "Pedro Santos", email: "pedro@email.com", telefone: "(51) 97777-6666" },
  { nome: "Lucas Ferreira", email: "lucas@email.com", telefone: "(61) 96666-5555" }
];

localStorage.setItem("dados", JSON.stringify(contatos));

const data = JSON.parse(localStorage.getItem("dados")) || [];

const lista = document.getElementById("lista");

data.map((contato) => {
  const li = document.createElement("li");

  li.innerHTML = `
    <strong>${contato.nome}</strong>
    <span class="info">
      <span><strong>Email:</strong> ${contato.email}</span>
      <span><strong>Telefone:</strong> ${contato.telefone}</span>
    </span>
  `;

  lista.appendChild(li);
});