const data = JSON.parse(localStorage.getItem("data")) || [];

const lista = document.getElementById("lista");

data.map((contato) => {
  const li = document.createElement("li");

  li.innerHTML = `
    <strong>${contato.name}</strong>
    <span class="info">
      <span><strong>Email:</strong> ${contato.email}</span>
      <span><strong>Telefone:</strong> ${contato.phone}</span>
    </span>
  `;

  lista.appendChild(li);
});