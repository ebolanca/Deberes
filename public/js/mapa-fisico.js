// Base de datos de Geografía Física de España - 5º Primaria
const MAPA_DATA = {
    relieve: [
        {
            id: 'meseta-central',
            tipo: 'meseta',
            nombre: 'Meseta Central',
            categoria: 'Interior',
            pico: 'Altitud media: 650 m',
            curiosidad: 'Es una gran llanura elevada en el centro de España, dividida por el Sistema Central en Submeseta Norte y Submeseta Sur.',
            cx: 420, cy: 300, rx: 110, ry: 75,
            svgType: 'ellipse'
        },
        {
            id: 'sistema-central',
            tipo: 'montana',
            nombre: 'Sistema Central',
            categoria: 'Interior de la Meseta',
            pico: 'Pico Almanzor (2.592 m) en la Sierra de Gredos',
            curiosidad: 'Divide la Meseta en dos partes: Submeseta Norte (río Duero) y Submeseta Sur (ríos Tajo y Guadiana). Incluye Gredos y Guadarrama.',
            d: 'M 290 280 Q 380 270 480 250',
            cx: 385, cy: 265,
            svgType: 'path'
        },
        {
            id: 'montes-toledo',
            tipo: 'montana',
            nombre: 'Montes de Toledo',
            categoria: 'Interior de la Meseta',
            pico: 'Pico Villuercas (1.603 m)',
            curiosidad: 'Se encuentran en la Submeseta Sur y separan las cuencas de los ríos Tajo y Guadiana.',
            d: 'M 320 330 Q 380 335 440 330',
            cx: 380, cy: 332,
            svgType: 'path'
        },
        {
            id: 'cordillera-cantabrica',
            tipo: 'montana',
            nombre: 'Cordillera Cantábrica',
            categoria: 'Borde de la Meseta (Norte)',
            pico: 'Torre Cerredo (2.648 m) en los Picos de Europa',
            curiosidad: 'Separa la Meseta del Mar Cantábrico. Muy escarpada y con nieve abundante en invierno.',
            d: 'M 240 100 Q 350 95 470 115',
            cx: 350, cy: 105,
            svgType: 'path'
        },
        {
            id: 'montes-leon',
            tipo: 'montana',
            nombre: 'Montes de León',
            categoria: 'Borde de la Meseta (Noroeste)',
            pico: 'Pico Teleno (2.188 m)',
            curiosidad: 'Unen la Cordillera Cantábrica con el Macizo Galaico en el noroeste.',
            d: 'M 220 120 L 250 160',
            cx: 235, cy: 140,
            svgType: 'path'
        },
        {
            id: 'sistema-iberico',
            tipo: 'montana',
            nombre: 'Sistema Ibérico',
            categoria: 'Borde de la Meseta (Este)',
            pico: 'Pico Moncayo (2.314 m)',
            curiosidad: 'Bordea la Meseta por el este y separa las cuencas del Duero/Tajo de la del Ebro.',
            d: 'M 460 140 Q 510 220 540 310',
            cx: 505, cy: 220,
            svgType: 'path'
        },
        {
            id: 'sierra-morena',
            tipo: 'montana',
            nombre: 'Sierra Morena',
            categoria: 'Borde de la Meseta (Sur)',
            pico: 'Pico Bañuela (1.332 m)',
            curiosidad: 'Borde sur de la Meseta. El famoso paso natural de Despeñaperros conecta Madrid con Andalucía.',
            d: 'M 280 400 Q 370 395 470 410',
            cx: 380, cy: 402,
            svgType: 'path'
        },
        {
            id: 'pirineos',
            tipo: 'montana',
            nombre: 'Pirineos',
            categoria: 'Exterior a la Meseta (Norte)',
            pico: 'Pico Aneto (3.404 m)',
            curiosidad: 'Frontera natural entre España y Francia. Cordillera muy alta con glaciares y valles profundos.',
            d: 'M 520 100 Q 640 90 730 115',
            cx: 630, cy: 102,
            svgType: 'path'
        },
        {
            id: 'sistemas-beticos',
            tipo: 'montana',
            nombre: 'Sistemas Béticos (Sierra Nevada)',
            categoria: 'Exterior a la Meseta (Sureste)',
            pico: 'Pico Mulhacén (3.479 m) - ¡El más alto de la Península!',
            curiosidad: 'Formados por la Cordillera Subbética y la Cordillera Penibética. En Sierra Nevada está el Mulhacén.',
            d: 'M 350 480 Q 450 470 560 420',
            cx: 460, cy: 465,
            svgType: 'path'
        },
        {
            id: 'macizo-galaico',
            tipo: 'montana',
            nombre: 'Macizo Galaico',
            categoria: 'Exterior a la Meseta (Noroeste)',
            pico: 'Cabeza de Manzaneda (1.778 m)',
            curiosidad: 'Montañas redondeadas y no muy altas en Galicia.',
            d: 'M 160 105 Q 180 135 190 160',
            cx: 175, cy: 130,
            svgType: 'path'
        },
        {
            id: 'cordilleras-costero-catalanas',
            tipo: 'montana',
            nombre: 'Cordilleras Costero-Catalanas',
            categoria: 'Exterior a la Meseta (Noreste)',
            pico: 'Turó de l\'Home (1.706 m)',
            curiosidad: 'Corren paralelas a la costa de Cataluña, cerrando la Depresión del Ebro por el este.',
            d: 'M 680 140 Q 720 180 710 230',
            cx: 700, cy: 185,
            svgType: 'path'
        },
        {
            id: 'depresion-ebro',
            tipo: 'depresion',
            nombre: 'Depresión del Ebro',
            categoria: 'Depresión exterior',
            pico: 'Altitud media: 200 m',
            curiosidad: 'Gran llanura triangular entre los Pirineos, el Sistema Ibérico y las Costero-Catalanas por donde corre el río Ebro.',
            d: 'M 510 130 L 660 150 L 590 230 Z',
            cx: 580, cy: 170,
            svgType: 'polygon'
        },
        {
            id: 'depresion-guadalquivir',
            tipo: 'depresion',
            nombre: 'Depresión del Guadalquivir',
            categoria: 'Depresión exterior',
            pico: 'Altitud media: 100 m',
            curiosidad: 'Llanura triangular en Andalucía entre Sierra Morena y los Sistemas Béticos abierta al Océano Atlántico.',
            d: 'M 300 420 L 440 430 L 330 480 Z',
            cx: 350, cy: 445,
            svgType: 'polygon'
        },
        {
            id: 'islas-baleares',
            tipo: 'islas',
            nombre: 'Islas Baleares (Puig Major)',
            categoria: 'Relieve Insular',
            pico: 'Puig Major (1.445 m) en la Sierra de Tramuntana (Mallorca)',
            curiosidad: 'Archipiélago formado por Mallorca, Menorca, Ibiza, Formentera y Cabrera.',
            cx: 760, cy: 280,
            svgType: 'islas'
        },
        {
            id: 'islas-canarias',
            tipo: 'islas',
            nombre: 'Islas Canarias (El Teide)',
            categoria: 'Relieve Insular',
            pico: 'El Teide (3.715 m) en Tenerife - ¡El más alto de toda España!',
            curiosidad: 'Archipiélago de origen volcánico en el Océano Atlántico: Tenerife, Gran Canaria, Lanzarote, Fuerteventura, La Palma, La Gomera y El Hierro.',
            cx: 170, cy: 530,
            svgType: 'islas'
        }
    ],

    rios: [
        {
            id: 'rio-tajo',
            nombre: 'Río Tajo',
            vertiente: 'Atlántica',
            longitud: '1.007 km (¡El más largo de la Península Ibérica!)',
            desembocadura: 'Océano Atlántico (Lisboa, Portugal)',
            afluentes: 'Jarama, Alberche, Tiétar, Alagón',
            curiosidad: 'Nace en los Montes Universales (Sistema Ibérico), cruza Toledo y desemboca en Lisboa.',
            d: 'M 520 270 Q 440 290 380 295 T 260 305 L 180 330',
            cx: 360, cy: 295
        },
        {
            id: 'rio-ebro',
            nombre: 'Río Ebro',
            vertiente: 'Mediterránea',
            longitud: '910 km (¡El más caudaloso de España!)',
            desembocadura: 'Mar Mediterráneo (Delta del Ebro)',
            afluentes: 'Aragón, Gállego, Segre, Jalón',
            curiosidad: 'Nace en Fontibre (Cantabria) y recorre toda su depresión pasando por Logroño y Zaragoza hasta su gran delta.',
            d: 'M 400 95 Q 490 140 570 190 T 670 230',
            cx: 530, cy: 165
        },
        {
            id: 'rio-duero',
            nombre: 'Río Duero',
            vertiente: 'Atlántica',
            longitud: '897 km (El río más caudaloso de la vertiente atlántica)',
            desembocadura: 'Océano Atlántico (Oporto, Portugal)',
            afluentes: 'Pisuerga, Esla, Tormes, Adaja',
            curiosidad: 'Nace en los Picos de Urbión (Sistema Ibérico) y riega toda la Submeseta Norte.',
            d: 'M 480 160 Q 400 190 310 195 T 190 205',
            cx: 350, cy: 195
        },
        {
            id: 'rio-guadiana',
            nombre: 'Río Guadiana',
            vertiente: 'Atlántica',
            longitud: '818 km',
            desembocadura: 'Océano Atlántico (Ayamonte, frontera con Portugal)',
            afluentes: 'Záncara, Cigüela, Zújar, Jabalón',
            curiosidad: 'Nace en las Lagunas de Ruidera, "desaparece" bajo tierra en algunos tramos y reaparece en los Ojos del Guadiana.',
            d: 'M 490 350 Q 400 360 320 365 T 240 370 L 220 460',
            cx: 330, cy: 365
        },
        {
            id: 'rio-guadalquivir',
            nombre: 'Río Guadalquivir',
            vertiente: 'Atlántica',
            longitud: '657 km',
            desembocadura: 'Océano Atlántico (Sanlúcar de Barrameda / Doñana)',
            afluentes: 'Genil (nace en Sierra Nevada), Guadalimar',
            curiosidad: 'Nace en la Sierra de Cazorla y es navegable desde Sevilla hasta el mar.',
            d: 'M 480 435 Q 400 450 330 470 L 275 490',
            cx: 380, cy: 455
        },
        {
            id: 'rio-mino',
            nombre: 'Río Miño',
            vertiente: 'Atlántica',
            longitud: '310 km',
            desembocadura: 'Océano Atlántico (frontera Galicia - Portugal)',
            afluentes: 'Sil (¡"El Sil lleva el agua y el Miño la fama"!)',
            curiosidad: 'Río caudaloso de Galicia que nace en Meira (Lugo).',
            d: 'M 180 85 Q 170 120 150 155',
            cx: 165, cy: 120
        },
        {
            id: 'rio-jucar',
            nombre: 'Río Júcar',
            vertiente: 'Mediterránea',
            longitud: '498 km',
            desembocadura: 'Mar Mediterráneo (Cullera, Valencia)',
            afluentes: 'Cabriel, Magro',
            curiosidad: 'Nace en los Montes Universales y forma las famosas hoces de Cuenca.',
            d: 'M 490 300 Q 550 340 620 330',
            cx: 560, cy: 325
        },
        {
            id: 'rio-segura',
            nombre: 'Río Segura',
            vertiente: 'Mediterránea',
            longitud: '325 km',
            desembocadura: 'Mar Mediterráneo (Guardamar del Segura, Alicante)',
            afluentes: 'Mundo',
            curiosidad: 'Nace en la Sierra de Segura y riega la fértil huerta murciana.',
            d: 'M 470 410 Q 530 420 585 410',
            cx: 535, cy: 415
        },
        {
            id: 'rio-nervion',
            nombre: 'Río Nervión',
            vertiente: 'Cantábrica',
            longitud: '72 km (Corto y de gran caudal)',
            desembocadura: 'Mar Cantábrico (Ría de Bilbao)',
            afluentes: 'Ibaizabal',
            curiosidad: 'Famoso por el salto del Nervión (más de 220 m de caída libre).',
            d: 'M 430 115 L 440 85',
            cx: 435, cy: 100
        }
    ],

    costas: [
        {
            id: 'cabo-finisterre',
            nombre: 'Cabo Finisterre',
            tipo: 'cabo',
            costa: 'Costa Atlántica Gallega',
            curiosidad: 'Los romanos creían que aquí terminaba el mundo conocido (Finis Terrae).',
            cx: 130, cy: 110
        },
        {
            id: 'punta-estaca-de-bares',
            nombre: 'Estaca de Bares',
            tipo: 'cabo',
            costa: 'Costa Cantábrica / Atlántica',
            curiosidad: '¡El punto geográfico más al norte de toda España y de la Península Ibérica!',
            cx: 175, cy: 62
        },
        {
            id: 'cabo-de-penas',
            nombre: 'Cabo de Peñas',
            tipo: 'cabo',
            costa: 'Costa Cantábrica (Asturias)',
            curiosidad: 'El cabo más septentrional del Principado de Asturias con acantilados de más de 100 m.',
            cx: 295, cy: 75
        },
        {
            id: 'cabo-de-ajo',
            nombre: 'Cabo de Ajo',
            tipo: 'cabo',
            costa: 'Costa Cantábrica (Cantabria)',
            curiosidad: 'El cabo más sobresaliente de la costa de Cantabria.',
            cx: 410, cy: 75
        },
        {
            id: 'golfo-de-vizcaya',
            nombre: 'Golfo de Vizcaya',
            tipo: 'golfo',
            costa: 'Costa Cantábrica',
            curiosidad: 'Gran entrante del Océano Atlántico entre el norte de España y el oeste de Francia.',
            cx: 490, cy: 60
        },
        {
            id: 'cabo-de-creus',
            nombre: 'Cabo de Creus',
            tipo: 'cabo',
            costa: 'Costa Mediterránea (Girona)',
            curiosidad: '¡El punto más oriental (más al este) de la Península Ibérica!',
            cx: 742, cy: 115
        },
        {
            id: 'delta-del-ebro',
            nombre: 'Delta del Ebro',
            tipo: 'costa',
            costa: 'Costa Mediterránea (Tarragona)',
            curiosidad: 'Segunda zona húmeda más importante de España, formada por los sedimentos del río Ebro.',
            cx: 672, cy: 232
        },
        {
            id: 'cabo-de-la-nao',
            nombre: 'Cabo de la Nao',
            tipo: 'cabo',
            costa: 'Costa Mediterránea (Alicante)',
            curiosidad: 'Marca el punto más oriental de la Comunidad Valenciana hacia las Islas Baleares.',
            cx: 638, cy: 345
        },
        {
            id: 'cabo-de-palos',
            nombre: 'Cabo de Palos',
            tipo: 'cabo',
            costa: 'Costa Mediterránea (Murcia)',
            curiosidad: 'Famoso cabo rocoso con faro que separa el Mar Menor del Mar Mediterráneo.',
            cx: 588, cy: 425
        },
        {
            id: 'cabo-de-gata',
            nombre: 'Cabo de Gata',
            tipo: 'cabo',
            costa: 'Costa Mediterránea (Almería)',
            curiosidad: 'Cabo de origen volcánico en la esquina sureste de la Península Ibérica.',
            cx: 508, cy: 495
        },
        {
            id: 'punta-de-tarifa',
            nombre: 'Punta de Tarifa',
            tipo: 'cabo',
            costa: 'Estrecho de Gibraltar',
            curiosidad: '¡El punto más al sur de España y de toda Europa continental! Separa el Atlántico del Mediterráneo.',
            cx: 320, cy: 528
        },
        {
            id: 'golfo-de-cadiz',
            nombre: 'Golfo de Cádiz',
            tipo: 'golfo',
            costa: 'Costa Atlántica Andaluza',
            curiosidad: 'Amplio golfo atlántico donde desembocan los ríos Guadiana y Guadalquivir.',
            cx: 240, cy: 490
        }
    ]
};

// Controlador de Sonidos Web Audio
class SoundController {
    constructor() {
        this.enabled = true;
        this.ctx = null;
    }
    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }
    playSuccess() {
        if (!this.enabled) return;
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
        osc.frequency.setValueAtTime(1046.50, now + 0.3); // C6
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc.start(now);
        osc.stop(now + 0.5);
    }
    playError() {
        if (!this.enabled) return;
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(140, now + 0.25);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    }
}

const sounds = new SoundController();

// Gestor del Mapa Físico
class MapaManager {
    constructor() {
        this.activeFilter = 'relieve'; // 'relieve', 'rios', 'costas'
        this.activeMode = 'explorar'; // 'explorar', 'quiz'
        this.currentTarget = null;
        this.score = 0;
        this.streak = 0;
        this.solvedTargets = new Set();
        this.init();
    }

    init() {
        this.renderMapElements();
        this.attachEventListeners();
        this.updateStatsUI();
    }

    renderMapElements() {
        const reliefGroup = document.getElementById('reliefGroup');
        const riversGroup = document.getElementById('riversGroup');
        const coastsGroup = document.getElementById('coastsGroup');

        if (!reliefGroup) return;

        // Renderizar Relieve
        reliefGroup.innerHTML = '';
        MAPA_DATA.relieve.forEach(item => {
            if (item.svgType === 'ellipse') {
                const el = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
                el.setAttribute('cx', item.cx);
                el.setAttribute('cy', item.cy);
                el.setAttribute('rx', item.rx);
                el.setAttribute('ry', item.ry);
                el.setAttribute('class', 'meseta-zone interactive-item');
                el.setAttribute('data-id', item.id);
                el.setAttribute('data-category', 'relieve');
                reliefGroup.appendChild(el);
            } else if (item.svgType === 'polygon') {
                const el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                el.setAttribute('d', item.d);
                el.setAttribute('class', 'depression-zone interactive-item');
                el.setAttribute('data-id', item.id);
                el.setAttribute('data-category', 'relieve');
                reliefGroup.appendChild(el);
            } else if (item.svgType === 'islas') {
                const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                g.setAttribute('class', 'mountain-zone interactive-item');
                g.setAttribute('data-id', item.id);
                g.setAttribute('data-category', 'relieve');
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', item.cx);
                circle.setAttribute('cy', item.cy);
                circle.setAttribute('r', '22');
                circle.setAttribute('fill', 'rgba(245, 158, 11, 0.3)');
                circle.setAttribute('stroke', '#f59e0b');
                circle.setAttribute('stroke-width', '2');
                g.appendChild(circle);
                reliefGroup.appendChild(g);
            } else {
                const el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                el.setAttribute('d', item.d);
                el.setAttribute('class', 'mountain-zone interactive-item');
                el.setAttribute('data-id', item.id);
                el.setAttribute('data-category', 'relieve');
                el.setAttribute('stroke-width', '18');
                el.setAttribute('stroke-linecap', 'round');
                reliefGroup.appendChild(el);
            }

            // Marcador y etiqueta visible
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', item.cx);
            text.setAttribute('y', item.cy + 4);
            text.setAttribute('class', 'map-label');
            text.setAttribute('text-anchor', 'middle');
            text.textContent = item.nombre;
            reliefGroup.appendChild(text);
        });

        // Renderizar Ríos
        riversGroup.innerHTML = '';
        MAPA_DATA.rios.forEach(item => {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', item.d);
            path.setAttribute('class', 'river-path interactive-item');
            path.setAttribute('data-id', item.id);
            path.setAttribute('data-category', 'rios');
            riversGroup.appendChild(path);

            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', item.cx);
            text.setAttribute('y', item.cy - 6);
            text.setAttribute('class', 'map-label');
            text.setAttribute('fill', '#7dd3fc');
            text.setAttribute('text-anchor', 'middle');
            text.textContent = item.nombre;
            riversGroup.appendChild(text);
        });

        // Renderizar Costas y Cabos
        coastsGroup.innerHTML = '';
        MAPA_DATA.costas.forEach(item => {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', item.cx);
            circle.setAttribute('cy', item.cy);
            circle.setAttribute('r', '7');
            circle.setAttribute('class', 'coast-point interactive-item');
            circle.setAttribute('data-id', item.id);
            circle.setAttribute('data-category', 'costas');
            coastsGroup.appendChild(circle);

            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', item.cx);
            text.setAttribute('y', item.cy + 16);
            text.setAttribute('class', 'map-label');
            text.setAttribute('fill', '#fda4af');
            text.setAttribute('text-anchor', 'middle');
            text.textContent = item.nombre;
            coastsGroup.appendChild(text);
        });

        this.applyFilterVisibility();
    }

    applyFilterVisibility() {
        const reliefGroup = document.getElementById('reliefGroup');
        const riversGroup = document.getElementById('riversGroup');
        const coastsGroup = document.getElementById('coastsGroup');

        if (reliefGroup) reliefGroup.style.display = this.activeFilter === 'relieve' ? 'block' : 'none';
        if (riversGroup) riversGroup.style.display = this.activeFilter === 'rios' ? 'block' : 'none';
        if (coastsGroup) coastsGroup.style.display = this.activeFilter === 'costas' ? 'block' : 'none';
    }

    attachEventListeners() {
        // Filtros de categoría (Relieve, Ríos, Costas)
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.activeFilter = btn.dataset.filter;
                this.applyFilterVisibility();
                if (this.activeMode === 'quiz') {
                    this.pickNextQuizTarget();
                }
            });
        });

        // Modo selector (Explorar vs Quiz)
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.activeMode = btn.dataset.mode;
                this.updateModeUI();
            });
        });

        // Clics en el mapa
        document.getElementById('spainSvg').addEventListener('click', (e) => {
            const item = e.target.closest('.interactive-item');
            if (item) {
                const id = item.getAttribute('data-id');
                const cat = item.getAttribute('data-category');
                this.handleItemClick(id, cat);
            }
        });
    }

    handleItemClick(id, category) {
        const dataList = category === 'relieve' ? MAPA_DATA.relieve : (category === 'rios' ? MAPA_DATA.rios : MAPA_DATA.costas);
        const itemData = dataList.find(x => x.id === id);
        if (!itemData) return;

        if (this.activeMode === 'explorar') {
            this.showDetailCard(itemData, category);
            sounds.playSuccess();
        } else if (this.activeMode === 'quiz') {
            this.handleQuizAttempt(itemData);
        }
    }

    showDetailCard(item, category) {
        const detailCard = document.getElementById('itemDetailCard');
        const targetBox = document.getElementById('targetChallengeBox');
        if (targetBox) targetBox.style.display = 'none';
        if (!detailCard) return;

        detailCard.style.display = 'block';

        let rows = '';
        if (category === 'relieve') {
            rows = `
                <div class="detail-row"><span class="detail-label">Categoría:</span><span class="detail-val">${item.categoria}</span></div>
                <div class="detail-row"><span class="detail-label">Pico / Altitud:</span><span class="detail-val">${item.pico}</span></div>
            `;
        } else if (category === 'rios') {
            rows = `
                <div class="detail-row"><span class="detail-label">Vertiente:</span><span class="detail-val">${item.vertiente}</span></div>
                <div class="detail-row"><span class="detail-label">Longitud:</span><span class="detail-val">${item.longitud}</span></div>
                <div class="detail-row"><span class="detail-label">Desembocadura:</span><span class="detail-val">${item.desembocadura}</span></div>
                <div class="detail-row"><span class="detail-label">Afluentes clave:</span><span class="detail-val">${item.afluentes}</span></div>
            `;
        } else {
            rows = `
                <div class="detail-row"><span class="detail-label">Tipo:</span><span class="detail-val">${item.tipo.toUpperCase()}</span></div>
                <div class="detail-row"><span class="detail-label">Costa:</span><span class="detail-val">${item.costa}</span></div>
            `;
        }

        detailCard.innerHTML = `
            <h3>${item.nombre}</h3>
            ${rows}
            <div class="detail-curiosity">💡 <strong>Clave examen:</strong> ${item.curiosidad}</div>
        `;
    }

    updateModeUI() {
        const targetBox = document.getElementById('targetChallengeBox');
        const detailCard = document.getElementById('itemDetailCard');
        const feedback = document.getElementById('feedbackBox');

        if (feedback) feedback.style.display = 'none';

        if (this.activeMode === 'quiz') {
            if (detailCard) detailCard.style.display = 'none';
            if (targetBox) targetBox.style.display = 'block';
            this.pickNextQuizTarget();
        } else {
            if (targetBox) targetBox.style.display = 'none';
            if (detailCard) {
                detailCard.style.display = 'block';
                detailCard.innerHTML = `
                    <div style="text-align: center; color: var(--text-muted); padding: 20px 0;">
                        <i class="fa-solid fa-hand-pointer" style="font-size: 2rem; margin-bottom: 12px; color: var(--accent);"></i>
                        <p><strong>Modo Exploración activo</strong></p>
                        <p style="font-size: 0.85rem; margin-top: 6px;">Pulsa sobre cualquier elemento del mapa (cordillera, río o cabo) para ver su información de examen.</p>
                    </div>
                `;
            }
        }
    }

    pickNextQuizTarget() {
        const list = this.activeFilter === 'relieve' ? MAPA_DATA.relieve : (this.activeFilter === 'rios' ? MAPA_DATA.rios : MAPA_DATA.costas);
        const candidates = list.filter(item => !this.solvedTargets.has(item.id));

        if (candidates.length === 0) {
            this.solvedTargets.clear(); // Reiniciar si ya completó todos
            return this.pickNextQuizTarget();
        }

        const picked = candidates[Math.floor(Math.random() * candidates.length)];
        this.currentTarget = picked;

        const targetBox = document.getElementById('targetChallengeBox');
        if (targetBox) {
            targetBox.innerHTML = `
                <div class="prompt">Localiza en el mapa:</div>
                <div class="target-name">${picked.nombre}</div>
                <div class="hint">🔍 Pista: ${picked.categoria || picked.vertiente || picked.costa}</div>
            `;
        }
    }

    handleQuizAttempt(clickedItem) {
        const feedback = document.getElementById('feedbackBox');
        if (!feedback || !this.currentTarget) return;

        if (clickedItem.id === this.currentTarget.id) {
            // ¡Acierto!
            sounds.playSuccess();
            this.score += 100;
            this.streak += 1;
            this.solvedTargets.add(this.currentTarget.id);
            this.updateStatsUI();

            feedback.className = 'feedback-box correct';
            feedback.innerHTML = `🎉 ¡Correcto! +100 pts<br><small>${this.currentTarget.curiosidad}</small>`;
            feedback.style.display = 'block';

            setTimeout(() => {
                this.pickNextQuizTarget();
            }, 2200);
        } else {
            // Fallo
            sounds.playError();
            this.streak = 0;
            this.updateStatsUI();

            feedback.className = 'feedback-box wrong';
            feedback.innerHTML = `❌ Has pulsado <strong>${clickedItem.nombre}</strong>.<br><small>Inténtalo de nuevo: busca ${this.currentTarget.nombre}</small>`;
            feedback.style.display = 'block';
        }
    }

    updateStatsUI() {
        const scoreEl = document.getElementById('userScore');
        const streakEl = document.getElementById('userStreak');
        if (scoreEl) scoreEl.textContent = this.score;
        if (streakEl) streakEl.textContent = this.streak;
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.mapaApp = new MapaManager();

    const soundBtn = document.getElementById('soundToggleBtn');
    if (soundBtn) {
        soundBtn.addEventListener('click', () => {
            sounds.enabled = !sounds.enabled;
            soundBtn.classList.toggle('active', sounds.enabled);
            soundBtn.innerHTML = sounds.enabled ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark"></i>';
        });
    }
});
