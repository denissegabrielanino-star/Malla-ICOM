// Base de datos de los ramos
const ramos = [
    // SEMESTRE 1
    { id: "fund_eco", name: "Fundamentos de la Economía", sem: 1, cat: "disciplinaria", req: [] },
    { id: "mat_gest", name: "Matemática para la Gestión", sem: 1, cat: "disciplinaria", req: [] },
    { id: "sost_emp", name: "Sostenibilidad Empresarial", sem: 1, cat: "profesional", req: [] },
    { id: "tec_neg_1", name: "Tecnología para los Negocios I", sem: 1, cat: "profesional", req: [] },
    { id: "antrop", name: "Antropología", sem: 1, cat: "identidad", req: [] },

    // SEMESTRE 2
    { id: "alge", name: "Álgebra", sem: 2, cat: "disciplinaria", req: ["mat_gest"] },
    { id: "micro_1", name: "Microeconomía I", sem: 2, cat: "disciplinaria", req: ["fund_eco"] },
    { id: "fund_mark", name: "Fundamentos de Marketing", sem: 2, cat: "profesional", req: [] },
    { id: "fund_cont", name: "Fundamentos de Contabilidad", sem: 2, cat: "profesional", req: [] },
    { id: "tec_neg_2", name: "Tecnología para los Negocios II", sem: 2, cat: "profesional", req: [] },
    { id: "gest_est", name: "Gestión Estratégica", sem: 2, cat: "profesional", req: [] },

    // SEMESTRE 3
    { id: "macro", name: "Macroeconomía", sem: 3, cat: "disciplinaria", req: ["fund_eco"] },
    { id: "calc_gest", name: "Cálculo Aplicado a la Gestión", sem: 3, cat: "disciplinaria", req: ["alge"] },
    { id: "mark_dig", name: "Marketing Digital", sem: 3, cat: "profesional", req: ["fund_mark"] },
    { id: "cont_ger", name: "Contabilidad Gerencial", sem: 3, cat: "profesional", req: ["fund_cont"] },
    { id: "bus_ana", name: "Business Analytics", sem: 3, cat: "profesional", req: ["tec_neg_2"] },
    { id: "etica", name: "Ética", sem: 3, cat: "identidad", req: ["antrop"] },

    // SEMESTRE 4
    { id: "prob_est", name: "Probabilidad y Estadística", sem: 4, cat: "disciplinaria", req: ["mat_gest"] },
    { id: "merc_lab", name: "Mercado Laboral y Gestión de Personas", sem: 4, cat: "profesional", req: [] },
    { id: "fina", name: "Finanzas", sem: 4, cat: "profesional", req: ["cont_ger"] },
    { id: "gest_pers", name: "Gestión Personal y Hab. Vida", sem: 4, cat: "gestion", req: [] },

    // SEMESTRE 5
    { id: "micro_2", name: "Microeconomía II", sem: 5, cat: "disciplinaria", req: ["micro_1"] },
    { id: "est_avan", name: "Estadística Avanzada", sem: 5, cat: "disciplinaria", req: ["prob_est"] },
    { id: "fina_ger", name: "Finanzas Gerenciales", sem: 5, cat: "profesional", req: ["fina"] },
    { id: "big_data", name: "Big Data Analytics", sem: 5, cat: "profesional", req: ["bus_ana"] },
    { id: "int_merc", name: "Inteligencia de Mercado", sem: 5, cat: "profesional", req: ["fund_mark"] },
    { id: "pers_soc", name: "Persona y Sociedad", sem: 5, cat: "identidad", req: ["etica"] },

    // SEMESTRE 6
    { id: "pol_macro", name: "Política Macroeconómica", sem: 6, cat: "disciplinaria", req: ["macro"] },
    { id: "lider", name: "Liderazgo y Trabajo Equipo", sem: 6, cat: "profesional", req: [] },
    { id: "econome", name: "Econometría", sem: 6, cat: "profesional", req: ["calc_gest", "est_avan"] },
    { id: "ger_est_sos", name: "Gerencia Estratégica y Sost.", sem: 6, cat: "profesional", req: [] },
    { id: "leg_emp", name: "Legislación Emprendimiento", sem: 6, cat: "profesional", req: [] },
    { id: "elec_iden_1", name: "Electivo I: Identidad", sem: 6, cat: "identidad", req: ["sem_1", "sem_2", "sem_3", "sem_4", "sem_5"] },

    // SEMESTRE 7
    { id: "pub_priv", name: "Alianzas Público - Privadas", sem: 7, cat: "profesional", req: [] },
    { id: "tall_inno", name: "Taller de Innovación", sem: 7, cat: "profesional", req: ["sem_1", "sem_2", "sem_3", "sem_4", "sem_5", "sem_6"] },
    { id: "data_sci", name: "Data Science", sem: 7, cat: "profesional", req: ["big_data"] },
    { id: "form_eval", name: "Formulación Proyectos", sem: 7, cat: "profesional", req: ["fina_ger"] },
    { id: "elec_iden_2", name: "Electivo II: Identidad", sem: 7, cat: "identidad", req: ["sem_1", "sem_2", "sem_3", "sem_4", "sem_5", "sem_6"] },
    { id: "gest_eq", name: "Gestión Equipos Alto Des.", sem: 7, cat: "gestion", req: [] },

    // SEMESTRE 8
    { id: "des_org", name: "Desarrollo Organizacional", sem: 8, cat: "profesional", req: [] },
    { id: "comp_etica", name: "Compliance y Ética", sem: 8, cat: "profesional", req: [] },
    { id: "tall_erp", name: "Taller de ERP", sem: 8, cat: "profesional", req: [] },
    { id: "tall_emp", name: "Taller Emprendimiento", sem: 8, cat: "profesional", req: ["tall_inno"] },
    { id: "elec_iden_3", name: "Electivo III: Identidad", sem: 8, cat: "identidad", req: ["sem_1", "sem_2", "sem_3", "sem_4", "sem_5", "sem_6", "sem_7"] },

    // SEMESTRE 9
    { id: "plan_neg", name: "Plan de Negocios", sem: 9, cat: "profesional", req: [] },
    { id: "trans_dig", name: "Transformación Digital", sem: 9, cat: "profesional", req: ["data_sci"] },
    { id: "elec_prof_1", name: "Electivo Prof I", sem: 9, cat: "profesional", req: [] },
    { id: "elec_prof_2", name: "Electivo Prof II", sem: 9, cat: "profesional", req: [] },
    { id: "elec_prof_3", name: "Electivo Prof III", sem: 9, cat: "profesional", req: [] },
    { id: "gest_carr", name: "Gestión de Carrera", sem: 9, cat: "gestion", req: [] },

    // SEMESTRE 10
    { id: "prac_prof", name: "Práctica Profesional", sem: 10, cat: "profesional", req: ["sem_1", "sem_2", "sem_3", "sem_4", "sem_5", "sem_6", "sem_7", "sem_8"] },
];

let approved = JSON.parse(localStorage.getItem('malla_progreso')) || [];

function init() {
    renderMalla();
}

function renderMalla() {
    const grid = document.getElementById('malla-grid');
    grid.innerHTML = '';

    // Crear columnas por semestre
    for (let s = 1; s <= 10; s++) {
        const col = document.createElement('div');
        col.className = 'semestre-col';
        
        const header = document.createElement('div');
        header.className = 'semestre-header';
        header.innerText = `Semestre ${s}`;
        col.appendChild(header);

        // Filtrar ramos de este semestre
        const ramosSemestre = ramos.filter(r => r.sem === s);
        
        // Ordenar por categoría para que se vean en "filas" consistentes
        const categoriasOrder = ["disciplinaria", "profesional", "identidad", "gestion"];
        ramosSemestre.sort((a, b) => categoriasOrder.indexOf(a.cat) - categoriasOrder.indexOf(b.cat));

        ramosSemestre.forEach(ramo => {
            const card = document.createElement('div');
            card.id = ramo.id;
            card.className = `ramo ${ramo.cat}`;
            card.innerText = ramo.name;

            if (approved.includes(ramo.id)) {
                card.classList.add('approved');
            } else if (!canApprove(ramo.id).status) {
                card.classList.add('locked');
            }

            card.onclick = () => toggleRamo(ramo.id);
            col.appendChild(card);
        });

        grid.appendChild(col);
    }
}

function canApprove(ramoId) {
    const ramo = ramos.find(r => r.id === ramoId);
    let missing = [];

    ramo.req.forEach(reqId => {
        // Caso requisito de semestre completo (ej: sem_1)
        if (reqId.startsWith("sem_")) {
            const semNum = parseInt(reqId.split("_")[1]);
            const ramosDelSemestre = ramos.filter(r => r.sem === semNum);
            const todoAprobado = ramosDelSemestre.every(r => approved.includes(r.id));
            if (!todoAprobado) missing.push(`Todo el Semestre ${semNum}`);
        } else {
            // Caso requisito de ramo único
            if (!approved.includes(reqId)) {
                const reqRamo = ramos.find(r => r.id === reqId);
                missing.push(reqRamo.name);
            }
        }
    });

    return { status: missing.length === 0, missing };
}

function toggleRamo(id) {
    const validation = canApprove(id);

    if (approved.includes(id)) {
        // Desmarcar
        approved = approved.filter(item => item !== id);
        showNotification(`Ramo "${ramos.find(r => r.id === id).name}" marcado como pendiente.`, "#718093");
    } else {
        // Intentar marcar como aprobado
        if (validation.status) {
            approved.push(id);
        } else {
            showNotification(`¡Bloqueado! Faltan: ${validation.missing.join(", ")}`, "#ff7675");
            return;
        }
    }

    localStorage.setItem('malla_progreso', JSON.stringify(approved));
    renderMalla();
}

function showNotification(msg, color) {
    const note = document.getElementById('notification');
    note.innerText = msg;
    note.style.backgroundColor = color;
    note.classList.remove('hidden');
    
    setTimeout(() => {
        note.classList.add('hidden');
    }, 4000);
}

// Iniciar aplicación
init();
