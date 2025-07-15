const cursos = [
  // ▸▸ CICLO 1
  { ciclo: 1, codigo: "U625", nombre: "Comprensión y Producción de Lenguaje I", requisitos: [], tipo: "admin" },
  { ciclo: 1, codigo: "HU548", nombre: "Ética y Ciudadanía", requisitos: [], tipo: "admin" },
  { ciclo: 1, codigo: "AD2511", nombre: "Introducción a la Administración", requisitos: [], tipo: "admin" },
  { ciclo: 1, codigo: "MA384", nombre: "Fundamentos para el Cálculo", requisitos: [], tipo: "admin" },
  { ciclo: 1, codigo: "AF103", nombre: "Fundamentos de las Finanzas", requisitos: [], tipo: "admin" },
  { ciclo: 1, codigo: "AM216", nombre: "Marketing I", requisitos: [], tipo: "marketing" },

  // ▸▸ CICLO 2
  { ciclo: 2, codigo: "MA459", nombre: "Cálculo", requisitos: ["MA384"], tipo: "admin" },
  { ciclo: 2, codigo: "HU626", nombre: "Comprensión y Producción de Lenguaje II", requisitos: ["U625"], tipo: "admin" },
  { ciclo: 2, codigo: "AF141", nombre: "Matemática Financiera", requisitos: ["AF103"], tipo: "admin" },
  { ciclo: 2, codigo: "AF133", nombre: "Macroeconomía", requisitos: ["AD2511"], tipo: "admin" },
  { ciclo: 2, codigo: "AM217", nombre: "Marketing II", requisitos: ["AM216"], tipo: "marketing" },

  // ▸▸ CICLO 3
  { ciclo: 3, codigo: "HU318", nombre: "Fund. de la Investigación Académica", requisitos: ["HU626"], tipo: "admin" },
  { ciclo: 3, codigo: "MA460", nombre: "Estadística Descriptiva", requisitos: ["MA459"], tipo: "admin" },
  { ciclo: 3, codigo: "CA142", nombre: "Contabilidad Financiera", requisitos: ["AF103"], tipo: "admin" },
  { ciclo: 3, codigo: "AD2510", nombre: "Realidad Peruana y Global", requisitos: [], tipo: "admin" },
  { ciclo: 3, codigo: "AF142", nombre: "Teoría Microeconómica", requisitos: ["MA384", "AF133"], tipo: "admin" },
  { ciclo: 3, codigo: "AM218", nombre: "Marketing III", requisitos: ["AM217"], tipo: "marketing" },

  // ▸▸ CICLO 4
  { ciclo: 4, codigo: "MA461", nombre: "Estadística Inferencial", requisitos: ["MA460"], tipo: "admin" },
  { ciclo: 4, codigo: "AF140", nombre: "Finanzas Corporativas", requisitos: ["CA142", "AF141"], tipo: "admin" },
  { ciclo: 4, codigo: "AM222", nombre: "Investigación de mercados Cualitativa", requisitos: ["AM218", "MA460"], tipo: "marketing" },
  { ciclo: 4, codigo: "CA143", nombre: "Contabilidad Gerencial", requisitos: ["CA142"], tipo: "admin" },
  { ciclo: 4, codigo: "AM231", nombre: "Derecho Comercial y Publicitario", requisitos: ["AM217", "HU626"], tipo: "marketing" },
  { ciclo: 4, codigo: "AM34", nombre: "Comportamiento del consumidor", requisitos: ["AM217"], tipo: "marketing" },

  // ▸▸ CICLO 5
  { ciclo: 5, codigo: "MA368", nombre: "Métodos Cuantitativos", requisitos: ["MA460"], tipo: "admin" },
  { ciclo: 5, codigo: "AM225", nombre: "Investigación de mercados Cuantitativa", requisitos: ["AM222", "MA461"], tipo: "marketing" },
  { ciclo: 5, codigo: "AD170", nombre: "Diseño Organizacional", requisitos: ["AD2511"], tipo: "admin" },
  { ciclo: 5, codigo: "AH87", nombre: "Gestión del Capital Humano", requisitos: ["AD2511"], tipo: "admin" },
  { ciclo: 5, codigo: "AM220", nombre: "Product Management", requisitos: ["AM218"], tipo: "marketing" },
  { ciclo: 5, codigo: "AM224", nombre: "Branding", requisitos: ["AM34"], tipo: "marketing" },

  // ▸▸ CICLO 6
  { ciclo: 6, codigo: "CA177", nombre: "Análisis e Interpretación de EE.FF.", requisitos: ["CA143"], tipo: "admin" },
  { ciclo: 6, codigo: "AD213", nombre: "Administración de Operaciones", requisitos: ["MA368"], tipo: "admin" },
  { ciclo: 6, codigo: "AM219", nombre: "Marketing digital I", requisitos: ["AM224"], tipo: "marketing" },
  { ciclo: 6, codigo: "AM221", nombre: "Canales de Distribución", requisitos: ["AM220"], tipo: "marketing" },
  { ciclo: 6, codigo: "ELEC1", nombre: "Electivo", requisitos: [], tipo: "admin" },
  { ciclo: 6, codigo: "ELEC2", nombre: "Electivo", requisitos: [], tipo: "admin" },

  // ▸▸ CICLO 7
  { ciclo: 7, codigo: "AD2508", nombre: "Comunicación para el Liderazgo", requisitos: [], tipo: "admin" },
  { ciclo: 7, codigo: "AF176", nombre: "Evaluación de Proyectos", requisitos: ["AF140"], tipo: "admin" },
  { ciclo: 7, codigo: "AH14", nombre: "Comportamiento Organizacional", requisitos: ["AH87"], tipo: "admin" },
  { ciclo: 7, codigo: "AM223", nombre: "Marketing digital II", requisitos: ["AM219"], tipo: "marketing" },
  { ciclo: 7, codigo: "AM226", nombre: "Ventas y Negociación", requisitos: ["AM221"], tipo: "marketing" },
  { ciclo: 7, codigo: "AM232", nombre: "Comunicaciones Integradas de Mkt", requisitos: ["AM224", "AM221", "AM219", "AM225"], tipo: "marketing" },
  { ciclo: 7, codigo: "ELEC3", nombre: "Electivo", requisitos: [], tipo: "admin" },

  // ▸▸ CICLO 8
  { ciclo: 8, codigo: "AD2443", nombre: "Liderazgo y Estrategias de Negociación", requisitos: [], tipo: "admin" },
  { ciclo: 8, codigo: "AD2454", nombre: "Gestión de Proyectos", requisitos: ["AD213"], tipo: "admin" },
  { ciclo: 8, codigo: "AM116", nombre: "Marketing CRM & Services", requisitos: ["AM232"], tipo: "marketing" },
  { ciclo: 8, codigo: "AM227", nombre: "Pricing", requisitos: ["AF142", "CA143", "AM220", "AM221"], tipo: "marketing" },
  { ciclo: 8, codigo: "AM228", nombre: "Trade Mkt & Retail", requisitos: ["AM221", "AM217"], tipo: "marketing" },
  { ciclo: 8, codigo: "AM229", nombre: "Dirección de Ventas", requisitos: ["AM226"], tipo: "marketing" },
  { ciclo: 8, codigo: "ELEC4", nombre: "Electivo", requisitos: [], tipo: "admin" },

  // ▸▸ CICLO 9
  { ciclo: 9, codigo: "AD2509", nombre: "Gerencia Estratégica", requisitos: [], tipo: "admin" },
  { ciclo: 9, codigo: "AM57", nombre: "Diseño del Plan de Mkt", requisitos: ["AM227", "AM116", "AM228", "AM229", "CA177"], tipo: "marketing" },
  { ciclo: 9, codigo: "AD2507", nombre: "Metodología de la Investigación", requisitos: [], tipo: "admin" },
  { ciclo: 9, codigo: "ELEC5", nombre: "Electivo", requisitos: [], tipo: "admin" },
  { ciclo: 9, codigo: "ELEC6", nombre: "Electivo", requisitos: [], tipo: "admin" },
  { ciclo: 9, codigo: "ELEC7", nombre: "Electivo", requisitos: [], tipo: "admin" },

  // ▸▸ CICLO 10
  { ciclo: 10, codigo: "AH45", nombre: "Ética y Responsabilidad Social", requisitos: [], tipo: "admin" },
  { ciclo: 10, codigo: "AM230", nombre: "Seminario de Tesis", requisitos: ["AD2507"], tipo: "marketing" },
  { ciclo: 10, codigo: "AM92", nombre: "Dirección Comercial y Mkt", requisitos: ["AM227", "AM116", "AM228", "AM229", "CA177"], tipo: "marketing" },
  { ciclo: 10, codigo: "ELEC8", nombre: "Electivo", requisitos: [], tipo: "admin" },
  { ciclo: 10, codigo: "ELEC9", nombre: "Electivo", requisitos: [], tipo: "admin" },
  { ciclo: 10, codigo: "ELEC10", nombre: "Electivo", requisitos: [], tipo: "admin" },
  ];

// GUARDAR Y RENDERIZAR
const estado = JSON.parse(localStorage.getItem("cursos_aprobados") || "{}");

function renderMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  for (let ciclo = 1; ciclo <= 10; ciclo++) {
    const div = document.createElement("div");
    div.className = "ciclo";

    const encabezado = document.createElement("div");
    encabezado.className = "ciclo-header";
    encabezado.textContent = ciclo.toString().padStart(2, "0");
    div.appendChild(encabezado);

    const cursosDelCiclo = cursos.filter(c => c.ciclo === ciclo);
    cursosDelCiclo.forEach(curso => {
      const celda = document.createElement("div");
      celda.className = `curso ${curso.tipo}`;

      const aprobado = estado[curso.codigo];
      const requisitosCumplidos = curso.requisitos.every(r => estado[r]);

      if (!aprobado && curso.requisitos.length > 0 && !requisitosCumplidos) {
        celda.classList.add("bloqueado");
      } else if (aprobado) {
        celda.classList.add("aprobado");
      }

      celda.textContent = curso.nombre;
      celda.onclick = () => {
        if (!celda.classList.contains("bloqueado")) {
          estado[curso.codigo] = !estado[curso.codigo];
          localStorage.setItem("cursos_aprobados", JSON.stringify(estado));
          renderMalla();
        }
      };

      div.appendChild(celda);
    });

    container.appendChild(div);
  }
}

renderMalla();
