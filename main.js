var APP_LOG_LIFECYCLE_EVENTS = false;

const articles = [
	{
		title: '¿Por dónde comenzar?',
		description: 'Una guía breve, para que sepas por dónde comenzar a aprender francés, y qué herramientas tienes a tu disposición.',
		content: `<p>El francés es el idioma de la estética, de la elegancia. Al igual que el español, es una lengua romance, familiaridad que es un gran beneficio para los hispanoparlantes dispuestos a aprender francés. Es por ello que personalmente recomiendo a todo aquel que se quiera iniciar en el idioma que aprenda francés, claro está, a su propio ritmo, siguiendo los pasos que listaré a continuación: </p>
		<h3>Paso 1: La familiaridad</h3>
		<p>Es una buena idea comenzar a aprender desde 0 familiarizándonos con las palabras que ya conocemos, esto es, las palabras que se parecen en francés y español, y tienen significados similares.<br/>Debido a que ambas son lenguas romance, hay muchísimos casos así. De hecho, puedes tomar cualquier texto en francés y comprobar por ti mismo cuantas se te hacen similares. En caso de que sepas inglés, tendrás aún más palabras que comparar, ya que el inglés ha incluido en su propio lenguaje numerosos vocablos franceses. Puedes encontrar una lista con estas palabras <a href="/palabras_homonimas">haciendo click en este enlace</a>.</p>
		<h3>Paso 2: Las reglas gramaticales básicas</h3>
		<p>Es usual que la gente se asuste al escuchar la palabra "gramática", pero ya te digo yo que, por el momento, con el francés no tenemos nada de que temer.</br>Comenzaremos aprendiendo sus reglas más esenciales, de las cuales muchas son similares al español. Puedes aprenderlas <a href="">haciendo click aquí</a>, donde las explico para que las asimiles con rapidez.</p>
		<h3>Paso 3: Pronunciación</h3>
		<p>En el alfabeto francés hay 26 letras, de las cuales la gran mayoría se pronuncian de forma similar al español u al inglés. Sin embargo, están las expeciones de ciertas consonantes y de las vocales, que son la clave para una buena pronunciación en el idioma. En <a href="">este enlace</a> hay una guía muy útil para las pronunciaciones.</p>
		<h3>Paso 4: Las frases más útiles</h3>
		<p>A la hora de aprender un idioma, es un incentivo primordial poder expresar, aunque sea las cosas más básicas, en esa lengua. Por eso recomiendo aprender ciertas frases de uso cotidiano, no muchas, sólo las que más te gusten o más suelas usar. Puedes ver un listado con las palabras y frases más comunes y básicas del francés <a>aquí</a></p>
		<h3>Paso 5: Vocabulario</h3>
		<p>Lo sé, el paso anterior también se refería a vocabulario, pero esta vez hablo de vocabulario puro y duro. En este punto se vuelve importante aprender los verbos, sustantivos y adverbios más usados, así como los números (al menos del 1 al 100), las fechas, las estaciones, etc. <a href="">En este enlace</a> encontrarás tablas de palabras, así como técnicas para memorizarlas rápidamente (aunque, dicho sea de paso, no hay mejor forma de memorizarlas que haciendo uso de ellas).</p>
		<h3>Paso 6: El aprendizaje en lo cotidiano</h3>
		<p>Aquí es donde comienzas a expresarte con más entendimiento sobre lo que dices, y por lo tanto, es preciso que aprendamos a fluir con naturalidad en las situaciones más cotidianas. En este punto es donde aprendemos a dar la hora, a dar direcciones, hacer preguntas, hablar en el supermercado... ya sabes, esa clase de cosas. <a>Haz click aquí</a> para entrar a un artículo dedicado exclusivamente a este tópico.</p>
		<h3>Paso 7: Verbos irregulares</h3>
		<p>Seguramente en este punto ya hayas estudiado los verbos irregulares más comunes. Sin embargo, este es un muy buen momento para darles la importancia que se merecen, y dedicarse a estudiarlos con mucha paciencia. <a>En este enlace</a> encontrarás los verbos irregulares y sus conjugaciones.</p>
		<h3>Paso 8: Gramática más elaborada</h3>
		<p>Es momento de aprender a expresarse con mucha más decencia y capacidad. Aunque no es cosa fácil <a>haciendo click acá</a> encuentras un artículo que resume los puntos gramáticales más importantes del francés para un hablante que desee pasar al siguiente nivel.</p>
		<h3>Paso 9: L'independance</h3>
		<p>Así es... Si ya has llegado este punto, tendrás una comprensión algo más que básica del francés y, dado que desde acá el camino de cada quien es diferente, te toca escoger la senda que seguirás a partir de aquí, individualmente. Sin embargo, no pienso dejarte desamparado, y <a>en este enlace</a> hallarás libros en francés con los que puedes continuar tu estudio.</p>
		` 
	},
	{
		title: 'Frases esenciales',
		description: 'Frases fundamentales para la supervivencia del viajero ocasional, o el aspirante a dominar el idioma.',
		content: ``
	},
	{
		title: 'Los números',
		description: 'Explicación, lista y mnemotecnia de los números en francés.',
		content: ``
	},
	{
		title: 'Palabras homófonas',
		description: 'Un listado con palabras que se parecen en francés y español, aunque algunas veces no significan lo mismo.',
		content: `<p>El francés y el español comparten muchas similitudes, tanto en su origen como a nivel cultural. En las siguientes tablas puedes observar palabras homófonas: que se escuchan igual, o de forma muy parecida, y que algunas veces también comparten significado con su pariente en español.</p><br/>
			<dynam-table :tcontent="vocabulary["Homonyms"]"></dynam-table>
			<dynam-table :tcontent="vocabulary["Homophones"]"></dynam-table>
		`
	},
	{
		title: 'El "passé compossé"',
		description: "Te enseñamos la forma más común en el francés de referirte al pasado.",
		content: `<p></p>`
	},
	{
		title: 'Gramática básica',
		description: 'Quieres aprender las reglas gramaticales más básicas del francés? Es aquí.',
		content: `<p>Créeme, si te aterras al escuchar la palabra "gramática", no eres el único al que le pasa. Sin embargo, estudiada con perseverancia y paciencia, la gramática deja de ser nuestra peor enemiga para convertirse en la mejor herramienta que tenemos para adentrarnos propiamente a cualquier idioma. Así pues, te presento, en orden, las reglas gramaticales esenciales para que comiences a hablar francés. No te preocupes si te lleva tu tiempo aprenderlas, tómate el necesario para comprenderlas bien.</p>
			<h3>1.- Los artículos</h3>
			<p>Lo más básico son los artículos ("el", "la", "los", "las" en español), los cuales son tres en el francés: <i>le</i>, <i>la</i> y <i>les</i>. De vez en cuando, <i>le</i> y <i>la</i> se abrevian usando <i>l'</i> (como en <i>l'ami</i>).</p>
			<p>En el francés, al igual que en el español, los sustantivos siempre son masculinos o femeninos. Para los masculinos se utiliza <i>le</i>, y para los femeninos se utiliza <i>la</i> (Por ejemplo, <i>la droite</i> o <i>le chat</i>). En el caso de los plurales, siempre se utiliza <i>les</i> (como en <i>les enfants</i>), sin importar el género. Ya hablaremos luego de cómo saber si un sustantivo es masculino o femenino.</p>
			<p><i>Les</i> y <i>las</i> se abrevian en <i>l'</i> siempre que la próxima palabra comience con una vocal o una h muda. Por ejemplo, en <i>l'océan</i> o <i>l'eau</i>.</p>
			<p>¿Captas hasta acá? <i>le</i>, <i>la</i>, <i>les</i>, masculino, femenino, bla bla. Estos son los artículos definidos, sencillo. Pues bien, porque ahora vienen los, igualmente sencillos, <b>artículos indefinidos</b>.</p>
			<p>Los indefinidos, en español un, una, unos y unas; son los que usamos cuando mencionamos cantidades que son, o unitarias, o no específicas. En el francés existen tres: <i>un</i>, <i>une</i> para el singular, y <i>unes</i> para el plural.</p>
			<p>Y listo, no tienen más los indefinidos. <i>Un</i> para el masculino, <i>une</i> para el femenino y <i>unes</i> para el plural. Por ejemplo, <i>une colline</i>, <i>un chat</i> o <i>unes routes</i>.</p>
			<p>Los que sí tienen cosas que asimilar son los que vienen: los <b>artículos partitivos</b>.</p>
			<p>Los artículos partitivos son los que usamos cuando la cantidad exacta de algo es desconocida, así que pueden considerarse una extensión de los indefinidos. No existen en el español, pero en el francés sí, y se usan siempre. En español algo parecido a cuando decimos, por ejemplo, "voy a comprar <b>algo de</b> pan" o "Tengo <b>algunos</b> autos". Ese "algo de", o "algunos", cumple la misma función que el partitivo en el francés.</p>
			<p>El partitivo se crea juntando <i>de</i> y el artículo definido, del siguiente modo: </p>
			<p>de + le = <i>du</i>. Como en <i>Je voudrais du chocolat</i> (Quiero chocolate).</p>
			<p>de + la = <i>de la</i>. Como en <i>Tu manges de la viande</i> (Comes carne).</p>
			<p>de + l' = <i>de l'</i>. Como en <i>Nous buvons de l'eau</i> (Bebemos agua).</p>
			<p>de + les = <i>des</i>. Como en <i>Nous avons des amis</i> (Nosotros tenemos amigos).</p>
			<p>Cuando el partitivo se usa en una frase negativa, este cambia, y se utiliza solamente el <i>de</i>:</p>
			<p><i>Il a <b>des</b> pommes</i>. Él tiene manzanas.</p>
			<p><i>Il n'a pas <b>de</b> pommes</i>. Él no tiene manzanas.</p>
			<p><i>Nous mangeons <b>du</b> pain</i>. Nosotros comemos pan.</p>
			<p><i>Nous ne mangeons pas <b>de</b> pain</i>. Nosotros no comemos pan.</p>
			<p><i>Il a <b>des</b> amis</i>. Él tiene amigos.</p>
			<p><i>Il n'a pas <b>d'</b>amis</i>. Él no tiene amigos. Nota que en las vocales y la h muda, también se abrevia <i>de</i> como <i>d'</i>.</p>
			<p>Hay una excepción a esta regla, y es el verbo <b>être</b> (ser, estar). Cuando se utiliza ese verbo en frases negativas, el partitivo <b>no</b> cambia a <i>de</i>, sino que se mantiene. Es decir, que si decimos, por ejemplo, <i>C'est <b>de la</b> viande</i> (Es carne), la negación no es <i>Ce n'est pas <b>de</b> viande</i>, sino <i>Ce n'est pas <b>de la</b> viande</i> (No es carne), manteniendo el mismo partitivo que en la afirmación.</p>
			<p>Es muy normal sentirse incómodo usando el partitivo al principio. Después de todo, uno no va por la calle diciendo cosas como "Voy a echarle algo de gasolina al carro" muy seguido. Acostumbrarse es cuestión de práctica y de tiempo.</p>
			<h3>2.- Los géneros: Masculino y femenino</h3>
			<p>Quizá en la sección anterior te hayas preguntado "Bueno pero ¿cómo sé cuando una palabra está en masculino o en femenino?" bueno, te enseñaré las reglas para identificar qué palabras son femeninas, ya que, obviamente, las que no sean femeninas son masculinas.</p>
			<p></p>
		`
	}
];

const vocabulary = {
	'Essentials': {
		name: "Frases esenciales en francés",
		columns: ['Francés','Español'],
		rows: [
			{'fr': 'Parlez-vous francais?', 'sp': '¿Usted habla francés?'},
			{'fr': 'Comment ça va?', 'sp': '¿Cómo estás? (informal)'},
			{'fr': 'Comment allez-vous?', 'sp': '¿Cómo estás?'},
			{'fr': "Pouvez-vous m\'aider, s\'il vous plait?", 'sp': '¿Puede usted ayudarme, por favor?'},
			{'fr': "Comment vous appelez-vous?", 'sp': "¿Cómo se llama usted?"},
			{'fr': "Quelle heure est-il?", 'sp': "¿Qué hora es?"},
			{'fr': "Quel temps fait-il?", 'sp': "¿Cómo está el clima?"},
			{'fr': "Combien coute?", 'sp': "¿Cuanto cuesta?"},
			{'fr': "Ou est?", 'sp': "¿Dónde está?"},
			{'fr': "Ou sont le toillet?", 'sp': "¿Dónde está el baño?"},
			{'fr': "Quand?", 'sp': "¿Cuando?"},
			{'fr': "Pourquoi?", 'sp': "¿Por qué?"},
			{'fr': "Bonjour", 'sp': "Buenos días / buenas tardes"},
			{'fr': "Bonsoir", 'sp': "Buenas noches"},
			{'fr': "Salut", 'sp': "Hola / hasta luego (informal)"},
			{'fr': "Au revoir", 'sp': "Hasta luego"},
			{'fr': "Bonne nuit", 'sp': "Buenas noches"},
			{'fr': "À bientôt", 'sp': "hasta pronto"},
			{'fr': "À tout à l’heure", 'sp': "nos vemos luego"},
			{'fr': "À demain", 'sp': "hasta mañana"},
			{'fr': "Bonne journée", 'sp': "Que tenga un buen día"},
			{'fr': "Ça va", 'sp': "Estoy bien (informal)"},
			{'fr': "très bien, merci, et vous?", 'sp': "Estoy muy bien señor ¿Y usted?"}
		]
	},
	'Months':{
		name: "Los meses del año",
		columns: ['Francés','Español'],
		rows: [
			{'fr': "Mois", 'sp': "Mes"},
			{'fr': "Janvier", 'sp': "Enero"},
			{'fr': "Février", 'sp': "Febrero"},
			{'fr': "Mars", 'sp': "Marzo"},
			{'fr': "Avril", 'sp': "Abril"},
			{'fr': "Mai", 'sp': "Mayo"},
			{'fr': "Juin", 'sp': "Junio"},
			{'fr': "Juillet", 'sp': "Julio"},
			{'fr': "Août", 'sp': "Agosto"},
			{'fr': "Septembre", 'sp': "Septiembre"},
			{'fr': "Octobre", 'sp': "Octubre"},
			{'fr': "Novembre", 'sp': "Noviembre"},
			{'fr': "Décembre", 'sp': "Diciembre"}
		]
	},
	'Days': {
		name: "Los días de la semana",
		columns: ['Francés','Español'],
		rows: [
			{'fr': "Jour", 'sp': "Día"},
			{'fr': "Semaine", 'sp': "Semana"},
			{'fr': "Lundi", 'sp': "Lunes"},
			{'fr': "Mardi", 'sp': "martes"},
			{'fr': "Mercredi", 'sp': "miércoles"},
			{'fr': "Jeudi", 'sp': "jueves"},
			{'fr': "Vendredi", 'sp': "viernes"},
			{'fr': "Samedi", 'sp': "sábado"},
			{'fr': "Dimanche", 'sp': "domingo"}
		]
	},
	'Homonyms': {
		name: "Palabras homónimas",
		columns: ["Francés","Español"],
		rows: [
			{'fr': "boulevard", 'sp': "bulevar"},
			{'fr': "brocoli", 'sp': "brócoli"},
			{'fr': "classe", 'sp': "clase"},
			{'fr': "chèque", 'sp': "cheque"},
			{'fr': "condition", 'sp': "condición"},
			{'fr': "docile", 'sp': "dócil"},
			{'fr': "garage", 'sp': "garaje"},
			{'fr': "gaz", 'sp': "gas"},
			{'fr': "genial", 'sp': "genial"},
			{'fr': "fiscal", 'sp': "fiscal"},
			{'fr': "hôtel", 'sp': "hotel"},
			{'fr': "mal", 'sp': "mal"},
			{'fr': "miel", 'sp': "miel"},
			{'fr': "morale", 'sp': "moral"},
			{'fr': "mourir", 'sp': "morir"},
			{'fr': "possible", 'sp': "posible"},
			{'fr': "reproche", 'sp': "reproche"},
			{'fr': "social", 'sp': "social"},
			{'fr': "stérile", 'sp': "estéril"},
			{'fr': "taxi", 'sp': "taxi"},
			{'fr': "total", 'sp': "total"},
			{'fr': "vil", 'sp': "vil"},
			{'fr': "goutte", 'sp': "gota"},
			{'fr': "hôpital", 'sp': "hospital"},
			{'fr': "voyage", 'sp': "viaje"},
			{'fr': "résidu", 'sp': "residuo"},
			{'fr': "célèbre", 'sp': "célebre"},
			{'fr': "optimisme", 'sp': "optimismo"}
		]
	},
	'Homophones': {
		name: "Palabras homófonas",
		columns: ['Francés','Español'],
		rows: [
			{'fr': "affamé", 'sp': "hambriento"},
			{'fr': "cadenas", 'sp': "candado"},
			{'fr': "carte", 'sp': "tarjeta, mapa"},
			{'fr': "nombre", 'sp': "número"},
			{'fr': "quitter", 'sp': "dejar"},
			{'fr': "livre", 'sp': "libro"},
			{'fr': "rester", 'sp': "quedarse"},
			{'fr': "lettre", 'sp': "carta"}
		]
	},
	'Numbers': {
		name: "Números",
		columns: ['Francés','Español'],
		rows: [
			{'fr': "un", 'sp': "Uno"},
			{'fr': "deux", 'sp': "dos"},
			{'fr': "trois", 'sp': "tres"},
			{'fr': "quatre", 'sp': "cuatro"},
			{'fr': "cinq", 'sp': "cinco"},
			{'fr': "six", 'sp': "seis"},
			{'fr': "sept", 'sp': "siete"},
			{'fr': "huit", 'sp': "ocho"},
			{'fr': "neuf", 'sp': "nueve"},
			{'fr': "dix", 'sp': "diez"},
			{'fr': "onze", 'sp': "once"},
			{'fr': "douze", 'sp': "doce"},
			{'fr': "treize", 'sp': "trece"},
			{'fr': "quatorze", 'sp': "catorce"},
			{'fr': "quinze", 'sp': "quince"},
			{'fr': "seize", 'sp': "dieciséis"},
			{'fr': "dix-sept", 'sp': "diecisiete"},
			{'fr': "dix-huit", 'sp': "dieciocho"},
			{'fr': "dix-neuf", 'sp': "diecinueve"},
			{'fr': "vingt", 'sp': "veinte"},
			{'fr': "vingt-et-un", 'sp': "veintiuno"},
			{'fr': "vingt-deux", 'sp': "veintidós"},
			{'fr': "vingt-trois", 'sp': "veintitrés"},
			{'fr': "Trente", 'sp': "treinta"},
			{'fr': "Trent-et-un", 'sp': "treinta y uno"},
			{'fr': "Quarante", 'sp': "cuarente"},
			{'fr': "Cinquante", 'sp': "cincuenta"},
			{'fr': "Soixante", 'sp': "sesenta"},
			{'fr': "Soixante-dix", 'sp': "setenta"},
			{'fr': "Quatre-vingts", 'sp': "ochenta"},
			{'fr': "Quatre-vingt-dix", 'sp': "noventa"},
			{'fr': "Cent", 'sp': "cien"},
			{'fr': "Mille", 'sp': "mil"},
			{'fr': "Un million", 'sp': "un millón"},
			{'fr': "Un milliard", 'sp': "mil millones"}
		]
	}
};

const prevComponent = {
	template: `
	<figure class="try">
	<img src="assets/images/france3.jpg">
	<figcaption>
	<h3 class="title tx-iii nomp">{{title}}</h3>
	<p class="description tx-ii nomp">{{description}}</p>
	</figcaption>
	</figure>
	`,
	props: {
		image: {
			type: String
		},
		title: {
			type: String,
			default: "Error, no title retrieved."
		},
		description: {
			type: String,
			default: "Error, no description retrieved."
		},
		extrasclass: {
			type: String
		}
	}
};

const circleComponent = {
	template: `
	<span class="circleExpand" :style="'left: ' + posx + 'px; top: ' + posy + 'px'"></span>
	`,
	props: {
		posx: {
			type: Number,
			default: 100
		},
		posy: {
			type: Number,
			default: 100
		}
	}
};

const complexHeaderComponent = {
	template: `
	<header class="header full-width anim-geometric">
		<div class="central-img">
		<img src="img1"/>
		</div>
		<img src="img2"/>
		<img src="img3"/>
		<h1 class="tx giant clean"> {{title}} </h1>
		<h3> {{subtitle}} </h3>
	</header>
	`,
	props: {
		title: {
			type: String,
			default: "Error. No title retrieved"
		},
		subtitle: {
			type: String
		},
		img1: {
			type: String,
		},
		img2: {
			type: String
		},
		img3: {
			type: String
		}
	}
};

const inProgressComponent = {
	template: `<main class="narcissist">
	<p class="tx-v tx-strong centered">Esta página está en desarrollo ¡No pierdas la esperanza!</p>
	</main>`
};

const articleFormat1Component = {
	template: `
	<article class="bg-gray-grad2 mar-left full-padd full-shdw mid-rnd">
	<header>
	<h2 class="tx-elegant tx-iv"> {{title}} </h2>
	<h3 class="tx-strong tx-ii"> {{subtitle}} </h3>
	</header>
	<slot name="article-content"></slot>
	</article>
	`,
	props: {
		title: {
			type: String,
			default: "Artículo"
		},
		subtitle: {
			type: String,
			default: "En el baúl francés"
		}
	} 
};

const tableComponent = {
	template: `
	<table>
		<caption>{{tcontent.name}}</caption>
		<tr><th v-for="th in tcontent.columns"> {{th}} </th></tr>
		<tr v-for="tr in tcontent.rows"><td v-for="td in tr">{{td}}</td></tr>
	</table>
	`,
	props: {
		tcontent: {
			type: Object
		}
	}
};

var webInstance = new Vue({
	el: '#App',
	data() {
		return {
		sitename: "El Baúl Francés",
		navOptions: ['Inicio','Artículos','Learner','Referencias','Acerca de'],
		currentPage: {
			index: -1,
			name: "Main Page"
		},
		randomPhrase: "Frase random acá",
		currentEffect: undefined,
		phrases: ["El tiempo mismo os dirá las razones que me impulsan a obrar así. Las cosas que un día le parecen a uno oscuras, al siguiente están claras como el agua. - Alexandre Dumas.","No hay ventura ni desgracia en el mundo, sino la comparación de un estado con otro, he ahí todo. - Alexandre Dumas.", "Es preciso haber querido morir, amigo mío, para saber cuán buena y hermosa es la vida. - Alexandre Dumas.", "Toda la sabiduría humana estará resumida en dos palabras: ¡Confiar y esperar! - Alexandre Dumas.", "Es mucho más difícil juzgarse a sí mismo, que juzgar a los otros. Si eres capaz de juzgarte rectamente eres un verdadero sabio. - Antoine de Saint Exupéry.", "Es muy diferente poseer que reinar. - Antoine de Saint Exupéry"],
		articles: [
		{
		title: '¿Por dónde comenzar?',
		description: 'Una guía breve, para que sepas por dónde comenzar a aprender francés, y qué herramientas tienes a tu disposición.',
		content: `<p>El francés es el idioma de la estética, de la elegancia. Al igual que el español, es una lengua romance, familiaridad que es un gran beneficio para los hispanoparlantes dispuestos a aprender francés. Es por ello que personalmente recomiendo a todo aquel que se quiera iniciar en el idioma que aprenda francés, claro está, a su propio ritmo, siguiendo los pasos que listaré a continuación: </p>
		<h3>Paso 1: La familiaridad</h3>
		<p>Es una buena idea comenzar a aprender desde 0 familiarizándonos con las palabras que ya conocemos, esto es, las palabras que se parecen en francés y español, y tienen significados similares.<br/>Debido a que ambas son lenguas romance, hay muchísimos casos así. De hecho, puedes tomar cualquier texto en francés y comprobar por ti mismo cuantas se te hacen similares. En caso de que sepas inglés, tendrás aún más palabras que comparar, ya que el inglés ha incluido en su propio lenguaje numerosos vocablos franceses. Puedes encontrar una lista con estas palabras <a href="/palabras_homonimas">haciendo click en este enlace</a>.</p>
		<h3>Paso 2: Las reglas gramaticales básicas</h3>
		<p>Es usual que la gente se asuste al escuchar la palabra "gramática", pero ya te digo yo que, por el momento, con el francés no tenemos nada de que temer.</br>Comenzaremos aprendiendo sus reglas más esenciales, de las cuales muchas son similares al español. Puedes aprenderlas <a href="">haciendo click aquí</a>, donde las explico para que las asimiles con rapidez.</p>
		<h3>Paso 3: Pronunciación</h3>
		<p>En el alfabeto francés hay 26 letras, de las cuales la gran mayoría se pronuncian de forma similar al español u al inglés. Sin embargo, están las expeciones de ciertas consonantes y de las vocales, que son la clave para una buena pronunciación en el idioma. En <a href="">este enlace</a> hay una guía muy útil para las pronunciaciones.</p>
		<h3>Paso 4: Las frases más útiles</h3>
		<p>A la hora de aprender un idioma, es un incentivo primordial poder expresar, aunque sea las cosas más básicas, en esa lengua. Por eso recomiendo aprender ciertas frases de uso cotidiano, no muchas, sólo las que más te gusten o más suelas usar. Puedes ver un listado con las palabras y frases más comunes y básicas del francés <a>aquí</a></p>
		<h3>Paso 5: Vocabulario</h3>
		<p>Lo sé, el paso anterior también se refería a vocabulario, pero esta vez hablo de vocabulario puro y duro. En este punto se vuelve importante aprender los verbos, sustantivos y adverbios más usados, así como los números (al menos del 1 al 100), las fechas, las estaciones, etc. <a href="">En este enlace</a> encontrarás tablas de palabras, así como técnicas para memorizarlas rápidamente (aunque, dicho sea de paso, no hay mejor forma de memorizarlas que haciendo uso de ellas).</p>
		<h3>Paso 6: El aprendizaje en lo cotidiano</h3>
		<p>Aquí es donde comienzas a expresarte con más entendimiento sobre lo que dices, y por lo tanto, es preciso que aprendamos a fluir con naturalidad en las situaciones más cotidianas. En este punto es donde aprendemos a dar la hora, a dar direcciones, hacer preguntas, hablar en el supermercado... ya sabes, esa clase de cosas. <a>Haz click aquí</a> para entrar a un artículo dedicado exclusivamente a este tópico.</p>
		<h3>Paso 7: Verbos irregulares</h3>
		<p>Seguramente en este punto ya hayas estudiado los verbos irregulares más comunes. Sin embargo, este es un muy buen momento para darles la importancia que se merecen, y dedicarse a estudiarlos con mucha paciencia. <a>En este enlace</a> encontrarás los verbos irregulares y sus conjugaciones.</p>
		<h3>Paso 8: Gramática más elaborada</h3>
		<p>Es momento de aprender a expresarse con mucha más decencia y capacidad. Aunque no es cosa fácil <a>haciendo click acá</a> encuentras un artículo que resume los puntos gramáticales más importantes del francés para un hablante que desee pasar al siguiente nivel.</p>
		<h3>Paso 9: L'independance</h3>
		<p>Así es... Si ya has llegado este punto, tendrás una comprensión algo más que básica del francés y, dado que desde acá el camino de cada quien es diferente, te toca escoger la senda que seguirás a partir de aquí, individualmente. Sin embargo, no pienso dejarte desamparado, y <a>en este enlace</a> hallarás libros en francés con los que puedes continuar tu estudio.</p>
		` 
	},
	{
		title: 'Frases esenciales',
		description: 'Frases fundamentales para la supervivencia del viajero ocasional, o el aspirante a dominar el idioma.',
		content: ``
	},
	{
		title: 'Los números',
		description: 'Explicación, lista y mnemotecnia de los números en francés.',
		content: ``
	},
	{
		title: 'Palabras homófonas',
		description: 'Un listado con palabras que se parecen en francés y español, aunque algunas veces no significan lo mismo.',
		content: `<p>El francés y el español comparten muchas similitudes, tanto en su origen como a nivel cultural. En las siguientes tablas puedes observar palabras homófonas: que se escuchan igual, o de forma muy parecida, y que algunas veces también comparten significado con su pariente en español.</p><br/>
			<dynam-table :tcontent="vocabulary["Homonyms"]"></dynam-table>
			<dynam-table :tcontent="vocabulary["Homophones"]"></dynam-table>
		`
	},
	{
		title: 'El "passé compossé"',
		description: "Te enseñamos la forma más común en el francés de referirte al pasado.",
		content: `<p></p>`
	},
	{
		title: 'Gramática básica',
		description: '¿Quieres aprender las reglas gramaticales más básicas del francés? Es aquí.',
		content: `<p>Créeme, si te aterras al escuchar la palabra "gramática", no eres el único al que le pasa. Sin embargo, estudiada con perseverancia y paciencia, la gramática deja de ser nuestra peor enemiga para convertirse en la mejor herramienta que tenemos para adentrarnos propiamente a cualquier idioma. Así pues, te presento, en orden, las reglas gramaticales esenciales para que comiences a hablar francés. No te preocupes si te lleva tu tiempo aprenderlas, tómate el necesario para comprenderlas bien.</p>
			<h3>1.- Los artículos</h3>
			<p>Lo más básico son los artículos ("el", "la", "los", "las" en español), los cuales son tres en el francés: <i>le</i>, <i>la</i> y <i>les</i>. De vez en cuando, <i>le</i> y <i>la</i> se abrevian usando <i>l'</i> (como en <i>l'ami</i>).</p>
			<p>En el francés, al igual que en el español, los sustantivos siempre son masculinos o femeninos. Para los masculinos se utiliza <i>le</i>, y para los femeninos se utiliza <i>la</i> (Por ejemplo, <i>la droite</i> o <i>le chat</i>). En el caso de los plurales, siempre se utiliza <i>les</i> (como en <i>les enfants</i>), sin importar el género. Ya hablaremos luego de cómo saber si un sustantivo es masculino o femenino.</p>
			<p><i>Les</i> y <i>las</i> se abrevian en <i>l'</i> siempre que la próxima palabra comience con una vocal o una h muda. Por ejemplo, en <i>l'océan</i> o <i>l'eau</i>.</p>
			<p>¿Captas hasta acá? <i>le</i>, <i>la</i>, <i>les</i>, masculino, femenino, bla bla. Estos son los artículos definidos, sencillo. Pues bien, porque ahora vienen los, igualmente sencillos, <b>artículos indefinidos</b>.</p>
			<p>Los indefinidos, en español un, una, unos y unas; son los que usamos cuando mencionamos cantidades que son, o unitarias, o no específicas. En el francés existen tres: <i>un</i>, <i>une</i> para el singular, y <i>unes</i> para el plural.</p>
			<p>Y listo, no tienen más los indefinidos. <i>Un</i> para el masculino, <i>une</i> para el femenino y <i>unes</i> para el plural. Por ejemplo, <i>une colline</i>, <i>un chat</i> o <i>unes routes</i>.</p>
			<p>Los que sí tienen cosas que asimilar son los que vienen: los <b>artículos partitivos</b>.</p>
			<p>Los artículos partitivos son los que usamos cuando la cantidad exacta de algo es desconocida, así que pueden considerarse una extensión de los indefinidos. No existen en el español, pero en el francés sí, y se usan siempre. En español algo parecido a cuando decimos, por ejemplo, "voy a comprar <b>algo de</b> pan" o "Tengo <b>algunos</b> autos". Ese "algo de", o "algunos", cumple la misma función que el partitivo en el francés.</p>
			<p>El partitivo se crea juntando <i>de</i> y el artículo definido, del siguiente modo: </p>
			<p>de + le = <i>du</i>. Como en <i>Je voudrais du chocolat</i> (Quiero chocolate).</p>
			<p>de + la = <i>de la</i>. Como en <i>Tu manges de la viande</i> (Comes carne).</p>
			<p>de + l' = <i>de l'</i>. Como en <i>Nous buvons de l'eau</i> (Bebemos agua).</p>
			<p>de + les = <i>des</i>. Como en <i>Nous avons des amis</i> (Nosotros tenemos amigos).</p>
			<p>Cuando el partitivo se usa en una frase negativa, este cambia, y se utiliza solamente el <i>de</i>:</p>
			<p><i>Il a <b>des</b> pommes</i>. Él tiene manzanas.</p>
			<p><i>Il n'a pas <b>de</b> pommes</i>. Él no tiene manzanas.</p>
			<p><i>Nous mangeons <b>du</b> pain</i>. Nosotros comemos pan.</p>
			<p><i>Nous ne mangeons pas <b>de</b> pain</i>. Nosotros no comemos pan.</p>
			<p><i>Il a <b>des</b> amis</i>. Él tiene amigos.</p>
			<p><i>Il n'a pas <b>d'</b>amis</i>. Él no tiene amigos. Nota que en las vocales y la h muda, también se abrevia <i>de</i> como <i>d'</i>.</p>
			<p>Hay una excepción a esta regla, y es el verbo <b>être</b> (ser, estar). Cuando se utiliza ese verbo en frases negativas, el partitivo <b>no</b> cambia a <i>de</i>, sino que se mantiene. Es decir, que si decimos, por ejemplo, <i>C'est <b>de la</b> viande</i> (Es carne), la negación no es <i>Ce n'est pas <b>de</b> viande</i>, sino <i>Ce n'est pas <b>de la</b> viande</i> (No es carne), manteniendo el mismo partitivo que en la afirmación.</p>
			<p>Es muy normal sentirse incómodo usando el partitivo al principio. Después de todo, uno no va por la calle diciendo cosas como "Voy a echarle algo de gasolina al carro" muy seguido. Acostumbrarse es cuestión de práctica y de tiempo.</p>
			<h3>2.- Los géneros: Masculino y femenino</h3>
			<p>Quizá en la sección anterior te hayas preguntado "Bueno pero ¿cómo sé cuando una palabra está en masculino o en femenino?" bueno, te enseñaré las reglas para identificar qué palabras son femeninas, ya que, obviamente, las que no sean femeninas son masculinas.</p>
			<p></p>
		`
		}
		]
		}
	},
	computed: {
		/*
		phraseJoint: function() {
			var arr = [];
			for (let i = 0; i < this.packagesSelected.length; i++) {
				arr = arr.concat(this.content[this.packagesSelected[i]].content);
			}
		return arr;
		},*/
		articleContent: function() {
			if (this.currentPage.index >= 10){
				return {
					t: this.articles[this.currentPage.index-10].title,
					d: this.articles[this.currentPage.index-10].description,
					c: this.articles[this.currentPage.index-10].content
				}
			}
		}
	},
	components: {
		'article-preview': prevComponent,
		'complex-header': complexHeaderComponent,
		'article-f1': articleFormat1Component,
		'dynam-table': tableComponent,
		'circle-expand': circleComponent,
		'in-progress': inProgressComponent
	},
	methods: {
		handlePageChange(e,q,qn) {
			if (this.currentPage.index === -1 && q === 1)
				this.circleTransition(e.pageX, e.pageY);
			this.generateRandomPhrase();
			this.currentPage.index=q;
			this.currentPage.name=qn;

		},
		generateRandomPhrase(){
			var r = Math.floor(Math.random() * this.phrases.length);
			this.randomPhrase = this.phrases[r];
		},
		addPhrasePackage(package) {
			this.packagesSelected.push(package);
		},
		removePhrasePackage(package) {
			this.packagesSelected.splice(this.packagesSelected.indexOf(package),1);
		},
		circleTransition(x,y){
			this.effectComponent = circleComponent;
		}
	},
	beforeCreate: function() {
		if (APP_LOG_LIFECYCLE_EVENTS)
			console.log("Before creation...");
	},
	created: function() {
		if (APP_LOG_LIFECYCLE_EVENTS)
			console.log("Created");
	},
	beforeMount: function() {
		if (APP_LOG_LIFECYCLE_EVENTS)
			console.log("Before mount...");
	},
	mounted: function() {
		if (APP_LOG_LIFECYCLE_EVENTS)
			console.log("mounted...");
	},
	beforeUpdate: function() {
		if (APP_LOG_LIFECYCLE_EVENTS)
			console.log("Before update...");
	},
	updated: function() {
		if (APP_LOG_LIFECYCLE_EVENTS)
			console.log("Updated");
	},
	beforeDestroy: function() {
		if (APP_LOG_LIFECYCLE_EVENTS)
			console.log("Before destroy...");
	},
	destroyed: function() {
		if (APP_LOG_LIFECYCLE_EVENTS)
			console.log("Destroyed...");
	}
});
