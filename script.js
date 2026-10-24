// Base de datos de los 22 Arcanos Mayores con interpretaciones únicas y orgánicas
const arcanosMayores = [
    { nombre: "0. El Loco", generarTexto: (pregunta) => `Ante tu inquietud sobre "${pregunta}", El Loco te impulsa a dar un salto de fe. Es momento de dejar atrás los miedos y atreverte a iniciar un camino totalmente nuevo sin mirar atrás.` },
    { nombre: "I. El Mago", generarTexto: (pregunta) => `Para resolver "${pregunta}", cuentas con todas las herramientas necesarias. El Mago te recuerda que tienes el poder de manifestar tus intenciones si actúas con seguridad y enfoque.` },
    { nombre: "II. La Sacerdotisa", generarTexto: (pregunta) => `En relación a "${pregunta}", las respuestas no están afuera, sino en tu interior. La Sacerdotisa te pide que confíes en tu intuición y guardes tus energías en este momento de misterio.` },
    { nombre: "III. La Emperatriz", generarTexto: (pregunta) => `Cuando consultas por "${pregunta}", La Emperatriz señala una etapa de gran fertilidad creativa y crecimiento. Es un llamado a conectar con la abundancia y a cuidar lo que estás construyendo.` },
    { nombre: "IV. El Emperador", generarTexto: (pregunta) => `Frente a "${pregunta}", este arcano exige orden, disciplina y estructura. El Emperador te aconseja tomar el control con firmeza y establecer bases sólidas para avanzar.` },
    { nombre: "V. El Hierofante", generarTexto: (pregunta) => `Sobre tu pregunta acerca de "${pregunta}", El Hierofante sugiere buscar consejo en la sabiduría tradicional o en tus valores más profundos para encontrar el equilibrio espiritual.` },
    { nombre: "VI. Los Enamorados", generarTexto: (pregunta) => `Tu dilema sobre "${pregunta}" te coloca ante una encrucijada importante. Los Enamorados te piden que elijas con el corazón y alinees tus decisiones con lo que realmente valoras.` },
    { nombre: "VII. El Carro", generarTexto: (pregunta) => `Para lograr lo que buscas en "${pregunta}", necesitarás férrea voluntad. El Carro te anuncia que la victoria llega si mantienes el timón firme ante cualquier obstáculo.` },
    { nombre: "VIII. La Justicia", generarTexto: (pregunta) => `Respecto a "${pregunta}", La Justicia marca que todo se acomodará según sus méritos. Actúa con total honestidad y busca la imparcialidad para hallar la armonía.` },
    { nombre: "IX. El Ermitaño", generarTexto: (pregunta) => `Tu interrogante sobre "${pregunta}" requiere un tiempo de introspección. El Ermitaño te invita a apartarte temporalmente del ruido exterior para iluminar tus propias respuestas.` },
    { nombre: "X. La Rueda de la Fortuna", generarTexto: (pregunta) => `En cuanto a "${pregunta}", los vientos del cambio soplan a tu favor. La Rueda de la Fortuna te indica que un giro inesperado del destino transformará positivamente tu situación.` },
    { nombre: "XI. La Fuerza", generarTexto: (pregunta) => `Para lidiar con "${pregunta}", la verdadera clave será la paciencia y el autocontrol. La Fuerza te recuerda que la suavidad vence a la agresividad cuando hay amor propio.` },
    { nombre: "XII. El Colgado", generarTexto: (pregunta) => `Si te preguntas sobre "${pregunta}", El Colgado te sugiere frenar y cambiar radicalmente de perspectiva. A veces, detenerse es la única forma de ver la verdad con otros ojos.` },
    { nombre: "XIII. La Muerte", generarTexto: (pregunta) => `Frente a "${pregunta}", se avecina un cierre de ciclo inevitable. La Muerte no habla de finales trágicos, sino de una limpieza profunda que te libera para renacer con más fuerza.` },
    { nombre: "XIV. La Templanza", generarTexto: (pregunta) => `Tu consulta sobre "${pregunta}" pide mesura y paz interior. La Templanza actúa como un bálsamo, invitándote a fusionar opuestos con paciencia para lograr una sanación duradera.` },
    { nombre: "XV. El Diablo", generarTexto: (pregunta) => `En torno a "${pregunta}", El Diablo expone aquellas ataduras mentales o miedos inconscientes que te frenan. Es hora de reconocer tus sombras para liberarte de ellas.` },
    { nombre: "XVI. La Torre", generarTexto: (pregunta) => `Sobre "${pregunta}", prepárate para una revelación imprevista. La Torre sacude estructuras que ya no servían, derribando falsas ilusiones para dejar espacio a lo auténtico.` },
    { nombre: "XVII. La Estrella", generarTexto: (pregunta) => `Para dar luz a "${pregunta}", La Estrella trae una ola renovada de esperanza e inspiración celeste. Tus deseos más profundos empiezan a alinearse con un futuro brillante.` },
    { nombre: "XVIII. La Luna", generarTexto: (pregunta) => `Tu duda sobre "${pregunta}" está rodeada de cierta confusión o incertidumbre pasajera. La Luna te pide que escuches tus sueños y no temas navegar por tus emociones profundas.` },
    { nombre: "XIX. El Sol", generarTexto: (pregunta) => `Ante "${pregunta}", El Sol ilumina todo con claridad absoluta y éxito rotundo. La alegría, la vitalidad y las respuestas claras se instalan firmemente en tu camino.` },
    { nombre: "XX. El Juicio", generarTexto: (pregunta) => `En relación a "${pregunta}", estás experimentando un despertar interno crucial. El Juicio te pide evaluar tu pasado con madurez para perdonar y renacer a una nueva etapa.` },
    { nombre: "XXI. El Mundo", generarTexto: (pregunta) => `Para cerrar tu consulta sobre "${pregunta}", El Mundo corona tus esfuerzos con realización total. Se completa un ciclo de aprendizaje hermoso y alcanzas la plenitud.` }
];

const tarotForm = document.getElementById('tarot-form');
const consultSection = document.getElementById('consult-section');
const modalConcentracion = document.getElementById('modal-concentracion');
const resultSection = document.getElementById('result-section');
const cardsContainer = document.getElementById('cards-container');
const saludoUsuario = document.getElementById('saludo-usuario');
const preguntaUsuario = document.getElementById('pregunta-usuario');
const respuestaSino = document.getElementById('respuesta-sino');
const btnReiniciar = document.getElementById('btn-reiniciar');

// Control de reproductor de YouTube oficial sin publicidad
let player;
let reproduciendo = false;
const btnAudio = document.getElementById('btn-audio');
const audioIcon = document.getElementById('audio-icon');
const audioText = document.getElementById('audio-text');

// Esta función es llamada automáticamente por la API de YouTube al iniciar
function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
        height: '0',
        width: '0',
        videoId: 'Ttaf1IYt6F4',
        playerVars: {
            'autoplay': 0,
            'loop': 1,
            'playlist': 'Ttaf1IYt6F4',
            'controls': 0
        },
        events: {
            'onReady': () => {
                console.log("Audio de Handpan y Cuencos listo.");
            }
        }
    });
}

btnAudio.addEventListener('click', () => {
    if (!player || typeof player.playVideo !== 'function') {
        alert("El reproductor se está conectando, espera un segundo y vuelve a hacer clic.");
        return;
    }

    if (reproduciendo) {
        player.pauseVideo();
        audioIcon.textContent = '🔇';
        audioText.textContent = 'Cuencos & Handpan';
        btnAudio.style.borderColor = 'var(--accent-purple)';
        reproduciendo = false;
    } else {
        player.playVideo();
        audioIcon.textContent = '🎶';
        audioText.textContent = 'Música Activa';
        btnAudio.style.borderColor = 'var(--accent-gold)';
        reproduciendo = true;
    }
});

tarotForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const pregunta = document.getElementById('pregunta').value;

    // 1. Mostrar cartel de concentración
    modalConcentracion.classList.remove('hidden');

    // 2. Esperar 3 segundos
    setTimeout(() => {
        modalConcentracion.classList.add('hidden');
        consultSection.classList.add('hidden');
        resultSection.classList.remove('hidden');

        mostrarResultados(nombre, pregunta);
    }, 3000);
});

function mostrarResultados(nombre, pregunta) {
    saludoUsuario.textContent = `Consulta para: ${nombre}`;
    preguntaUsuario.textContent = `"${pregunta}"`;

    // Veredicto Sí / No aleatorio
    const respuestasPosibles = ["Sí, absolutamente", "No por ahora", "Es muy probable", "El universo dice: No", "Sí, confía en el proceso"];
    respuestaSino.textContent = respuestasPosibles[Math.floor(Math.random() * respuestasPosibles.length)];

    // Seleccionar 3 cartas aleatorias sin repetir
    const arcanosMezclados = [...arcanosMayores].sort(() => 0.5 - Math.random());
    const cartasSeleccionadas = arcanosMezclados.slice(0, 3);

    cardsContainer.innerHTML = '';

    // Generar cartas con explicaciones únicas conectadas a la pregunta
    cartasSeleccionadas.forEach((arcano, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('tarot-card');

        // Cada arcano ejecuta su propia función única de texto
        const textoInterpretacion = arcano.generarTexto(pregunta);

        cardDiv.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <span>🔮</span>
                    <p>Arcano 0${index + 1}</p>
                </div>
                <div class="card-back">
                    <h5>${arcano.nombre}</h5>
                    <p>${textoInterpretacion}</p>
                </div>
            </div>
        `;

        cardsContainer.appendChild(cardDiv);
    });
}

// Botón para reiniciar
btnReiniciar.addEventListener('click', function() {
    tarotForm.reset();
    resultSection.classList.add('hidden');
    consultSection.classList.remove('hidden');
});