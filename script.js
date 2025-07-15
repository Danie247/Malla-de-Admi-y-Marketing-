const cursos = [
  {
    ciclo: 1,
    codigo: "U625",
    nombre: "Comprensión y Producción de Lenguaje I",
    requisitos: [],
    tipo: "admin"
  },
  {
    ciclo: 1,
    codigo: "HU548",
    nombre: "Ética y Ciudadanía",
    requisitos: [],
    tipo: "admin"
  },
  {
    ciclo: 1,
    codigo: "AD2511",
    nombre: "Introducción a la Administración en la Glob.",
    requisitos: [],
    tipo: "admin"
  },
  {
    ciclo: 1,
    codigo: "MA384",
    nombre: "Fundamentos para el Cálculo",
    requisitos: [],
    tipo: "admin"
  },
  {
    ciclo: 1,
    codigo: "AF103",
    nombre: "Fundamentos de las Finanzas",
    requisitos: [],
    tipo: "admin"
  },
  {
    ciclo: 1,
    codigo: "AM216",
    nombre: "Marketing I",
    requisitos: [],
    tipo: "marketing"
  }
  // Aquí seguirás añadiendo los cursos del ciclo 2 al 10
];

const container = document.getElementById(\"malla-container\");
const estado = JSON.parse(localStorage.getItem(\"estadoCursos\")) || {};

function guardarEstado() {
  localStorage.setItem(\"estadoCursos\", JSON.stringify(estado));
}

function puedeDesbloquear(curso) {
  return curso.requisitos.every(req => estado[req]);
}

function renderizarCursos() {
  container.innerHTML = \"\";
  for (let ciclo = 1; ciclo <= 10; ciclo++) {
    const col = document.createElement(\"div\");
    col.className = \"ciclo\";
    const header = document.createElement(\"div\");
    header.className = \"ciclo-header\";
    header.textContent = `Ciclo ${ciclo}`;
    col.appendChild(header);

    cursos.filter(c => c.ciclo === ciclo).forEach(curso => {
      const box = document.createElement(\"div\");
      box.className = `curso ${curso.tipo}`;
      box.textContent = curso.nombre;
      box.dataset.codigo = curso.codigo;

      const aprobado = estado[curso.codigo];
      const desbloqueado = puedeDesbloquear(curso);

      if (aprobado) {
        box.classList.add(\"aprobado\");
      } else if (!desbloqueado && curso.requisitos.length > 0) {
        box.classList.add(\"bloqueado\");
      }

      box.addEventListener(\"click\", () => {
        if (box.classList.contains(\"bloqueado\")) return;

        estado[curso.codigo] = !estado[curso.codigo];
        guardarEstado();
        renderizarCursos();
      });

      col.appendChild(box);
    });

    container.appendChild(col);
  }
}

renderizarCursos();
