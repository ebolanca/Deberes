// ==========================================
// MÓDULOS DE OTRAS ASIGNATURAS (5º PRIMARIA)
// ==========================================

// CIENCIAS DE LA NATURALEZA
const NATURALES_QUIZ = [
    {
        q: '¿Qué aparato del cuerpo humano se encarga de transportar el oxígeno y los nutrientes a todas las células?',
        opts: ['Aparato Circulatorio', 'Aparato Digestivo', 'Aparato Excretor', 'Aparato Locomotor'],
        correct: 0,
        exp: 'El corazón y los vasos sanguíneos (arterias, venas y capilares) forman el aparato circulatorio.'
    },
    {
        q: 'En un ecosistema, ¿qué seres vivos son capaces de fabricar su propio alimento mediante la fotosíntesis?',
        opts: ['Los descomponedores', 'Los consumidores primarios', 'Los productores (plantas y algas)', 'Los carnívoros'],
        correct: 2,
        exp: 'Las plantas y las algas son los productores: usan luz solar, agua y sales minerales.'
    },
    {
        q: '¿Cuál de los siguientes animales es un invertebrado del grupo de los artrópodos?',
        opts: ['La rana común', 'El cangrejo de río', 'La trucha', 'El murciélago'],
        correct: 1,
        exp: 'Los cangrejos son artrópodos (crustáceos) con esqueleto externo y patas articuladas.'
    },
    {
        q: '¿Dónde se realiza el intercambio de gases (oxígeno y dióxido de carbono) en el aparato respiratorio?',
        opts: ['En la tráquea', 'En la laringe', 'En los alvéolos pulmonares', 'En los bronquios'],
        correct: 2,
        exp: 'En los alvéolos pulmonares la sangre toma el oxígeno y expulsa el dióxido de carbono.'
    }
];

// MATEMÁTICAS: CÁLCULO MENTAL Y FRACCIONES
class MathModule {
    constructor() {
        this.currentOp = null;
        this.init();
    }
    init() {
        this.generateCalculation();
        const submitBtn = document.getElementById('calcSubmitBtn');
        const input = document.getElementById('calcInput');
        if (submitBtn && input) {
            submitBtn.addEventListener('click', () => this.checkCalculation());
            input.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') this.checkCalculation();
            });
        }
    }
    generateCalculation() {
        const types = ['+', '-', '*', '/'];
        const type = types[Math.floor(Math.random() * types.length)];
        let a, b, res;

        if (type === '+') {
            a = Math.floor(Math.random() * 80) + 20;
            b = Math.floor(Math.random() * 80) + 15;
            res = a + b;
        } else if (type === '-') {
            a = Math.floor(Math.random() * 90) + 30;
            b = Math.floor(Math.random() * a) + 10;
            res = a - b;
        } else if (type === '*') {
            a = Math.floor(Math.random() * 12) + 2;
            b = Math.floor(Math.random() * 12) + 2;
            res = a * b;
        } else {
            b = Math.floor(Math.random() * 9) + 2;
            res = Math.floor(Math.random() * 10) + 2;
            a = b * res;
        }

        this.currentOp = { a, b, type, res };
        const display = document.getElementById('calcDisplay');
        const input = document.getElementById('calcInput');
        const feedback = document.getElementById('calcFeedback');
        if (display) display.textContent = `${a} ${type === '*' ? '×' : (type === '/' ? '÷' : type)} ${b} = ?`;
        if (input) { input.value = ''; input.focus(); }
        if (feedback) feedback.style.display = 'none';
    }
    checkCalculation() {
        const input = document.getElementById('calcInput');
        const feedback = document.getElementById('calcFeedback');
        if (!input || !feedback) return;

        const val = parseInt(input.value.trim(), 10);
        if (val === this.currentOp.res) {
            if (window.mapaApp) {
                window.mapaApp.score += 50;
                window.mapaApp.streak += 1;
                window.mapaApp.updateStatsUI();
            }
            if (sounds) sounds.playSuccess();
            feedback.className = 'feedback-box correct';
            feedback.innerHTML = `🌟 ¡Excelente! ${this.currentOp.res} es correcto (+50 pts)`;
            feedback.style.display = 'block';
            setTimeout(() => this.generateCalculation(), 1200);
        } else {
            if (sounds) sounds.playError();
            feedback.className = 'feedback-box wrong';
            feedback.innerHTML = `❌ Casi... La respuesta correcta era <strong>${this.currentOp.res}</strong>`;
            feedback.style.display = 'block';
            setTimeout(() => this.generateCalculation(), 2200);
        }
    }
}

// LENGUA: AGUDAS, LLANAS Y ESDRÚJULAS
const PALABRAS_LENGUA = [
    { word: 'Árbol', tipo: 'llana', silaba: 'Ár-bol', regla: 'Llana terminada en consonante distinta de n o s (lleva tilde)' },
    { word: 'Camión', tipo: 'aguda', silaba: 'Ca-mión', regla: 'Aguda terminada en -n (lleva tilde)' },
    { word: 'Teléfono', tipo: 'esdrujula', silaba: 'Te-lé-fo-no', regla: 'Esdrújula (siempre llevan tilde)' },
    { word: 'Pared', tipo: 'aguda', silaba: 'Pa-red', regla: 'Aguda terminada en consonante distinta de n o s (no lleva tilde)' },
    { word: 'Mesa', tipo: 'llana', silaba: 'Me-sa', regla: 'Llana terminada en vocal (no lleva tilde)' },
    { word: 'Música', tipo: 'esdrujula', silaba: 'Mú-si-ca', regla: 'Esdrújula (siempre llevan tilde)' },
    { word: 'Balón', tipo: 'aguda', silaba: 'Ba-lón', regla: 'Aguda terminada en -n (lleva tilde)' },
    { word: 'Difícil', tipo: 'llana', silaba: 'Di-fí-cil', regla: 'Llana terminada en -l (lleva tilde)' },
    { word: 'Lámpara', tipo: 'esdrujula', silaba: 'Lám-pa-ra', regla: 'Esdrújula (siempre llevan tilde)' },
    { word: 'Reloj', tipo: 'aguda', silaba: 'Re-loj', regla: 'Aguda con fuerza en la última sílaba (sin tilde al acabar en -j)' },
    { word: 'Plátano', tipo: 'esdrujula', silaba: 'Plá-ta-no', regla: 'Esdrújula con tilde en la antepenúltima sílaba' }
];

class LenguaModule {
    constructor() {
        this.currentWord = null;
        this.init();
    }
    init() {
        this.pickWord();
        document.querySelectorAll('.lengua-type-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.checkType(btn.dataset.type));
        });
    }
    pickWord() {
        const picked = PALABRAS_LENGUA[Math.floor(Math.random() * PALABRAS_LENGUA.length)];
        this.currentWord = picked;
        const box = document.getElementById('lenguaWordBox');
        const feedback = document.getElementById('lenguaFeedback');
        if (box) box.textContent = picked.word;
        if (feedback) feedback.style.display = 'none';
    }
    checkType(chosenType) {
        const feedback = document.getElementById('lenguaFeedback');
        if (!feedback || !this.currentWord) return;

        if (chosenType === this.currentWord.tipo) {
            if (sounds) sounds.playSuccess();
            if (window.mapaApp) {
                window.mapaApp.score += 50;
                window.mapaApp.streak += 1;
                window.mapaApp.updateStatsUI();
            }
            feedback.className = 'feedback-box correct';
            feedback.innerHTML = `🎉 ¡Correcto! Es una palabra <strong>${chosenType.toUpperCase()}</strong>.<br><small>${this.currentWord.regla}</small>`;
            feedback.style.display = 'block';
            setTimeout(() => this.pickWord(), 2000);
        } else {
            if (sounds) sounds.playError();
            feedback.className = 'feedback-box wrong';
            feedback.innerHTML = `❌ No es ${chosenType}. Es <strong>${this.currentWord.tipo.toUpperCase()}</strong> (${this.currentWord.silaba}).<br><small>${this.currentWord.regla}</small>`;
            feedback.style.display = 'block';
            setTimeout(() => this.pickWord(), 3000);
        }
    }
}

// INGLÉS: FLASHCARDS Y VOCABULARIO
const INGLES_VOCAB = [
    { en: 'Mountain range', es: 'Cordillera / Sierra' },
    { en: 'River mouth', es: 'Desembocadura de un río' },
    { en: 'Tributary', es: 'Afluente' },
    { en: 'Source / Headwaters', es: 'Nacimiento de un río' },
    { en: 'Plateau', es: 'Meseta' },
    { en: 'Cape', es: 'Cabo' },
    { en: 'Gulf / Bay', es: 'Golfo / Bahía' },
    { en: 'Highest peak', es: 'Pico más alto' },
    { en: 'Ecosystem', es: 'Ecosistema' },
    { en: 'Heartbeat', es: 'Latido del corazón' }
];

class InglesModule {
    constructor() {
        this.index = 0;
        this.flipped = false;
        this.init();
    }
    init() {
        this.renderCard();
        const card = document.getElementById('englishCard');
        const nextBtn = document.getElementById('englishNextBtn');
        if (card) {
            card.addEventListener('click', () => {
                this.flipped = !this.flipped;
                this.renderCard();
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.index = (this.index + 1) % INGLES_VOCAB.length;
                this.flipped = false;
                this.renderCard();
            });
        }
    }
    renderCard() {
        const item = INGLES_VOCAB[this.index];
        const card = document.getElementById('englishCard');
        if (!card) return;
        card.innerHTML = `
            <div style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">
                ${this.flipped ? '🇪🇸 Español (Toca para girar)' : '🇬🇧 English (Toca para girar)'}
            </div>
            <div style="font-size: 1.8rem; font-weight: 800; color: ${this.flipped ? '#10b981' : '#38bdf8'};">
                ${this.flipped ? item.es : item.en}
            </div>
        `;
    }
}

// Inicializar resto de módulos
document.addEventListener('DOMContentLoaded', () => {
    window.mathModule = new MathModule();
    window.lenguaModule = new LenguaModule();
    window.inglesModule = new InglesModule();

    // Renderizar Quiz de Naturales
    const natContainer = document.getElementById('naturalesQuizContainer');
    if (natContainer) {
        let currentNatIdx = 0;
        function renderNatQuestion(idx) {
            const item = NATURALES_QUIZ[idx];
            natContainer.innerHTML = `
                <div class="quiz-question">${idx + 1}. ${item.q}</div>
                <div class="quiz-options">
                    ${item.opts.map((opt, i) => `
                        <button class="quiz-opt-btn" data-index="${i}">${opt}</button>
                    `).join('')}
                </div>
                <div id="natFeedback" class="feedback-box" style="margin-top: 14px;"></div>
            `;

            natContainer.querySelectorAll('.quiz-opt-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const optIdx = parseInt(btn.dataset.index, 10);
                    const feedback = document.getElementById('natFeedback');
                    if (optIdx === item.correct) {
                        btn.classList.add('correct');
                        if (sounds) sounds.playSuccess();
                        if (window.mapaApp) {
                            window.mapaApp.score += 50;
                            window.mapaApp.streak += 1;
                            window.mapaApp.updateStatsUI();
                        }
                        feedback.className = 'feedback-box correct';
                        feedback.innerHTML = `🎉 ¡Muy bien! ${item.exp}`;
                        feedback.style.display = 'block';
                        setTimeout(() => {
                            currentNatIdx = (currentNatIdx + 1) % NATURALES_QUIZ.length;
                            renderNatQuestion(currentNatIdx);
                        }, 2200);
                    } else {
                        btn.classList.add('wrong');
                        if (sounds) sounds.playError();
                        feedback.className = 'feedback-box wrong';
                        feedback.innerHTML = `❌ No es correcto. Pista: ${item.exp}`;
                        feedback.style.display = 'block';
                    }
                });
            });
        }
        renderNatQuestion(0);
    }

    // Pestañas principales de navegación
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetId = tab.dataset.tab;
            const targetPane = document.getElementById(targetId);
            if (targetPane) targetPane.classList.add('active');
        });
    });
});
