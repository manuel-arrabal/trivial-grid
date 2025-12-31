const trivialQuestions = {
  'GEOGRAFÍA': [
    { q: '¿Cuál es la capital de España?', options: ['Barcelona', 'Madrid', 'Valencia'], correct: 1 },
    { q: '¿Qué río pasa por Zaragoza?', options: ['Tajo', 'Ebro', 'Guadalquivir'], correct: 1 },
    { q: '¿Cuántas comunidades autónomas tiene España?', options: ['15', '17', '19'], correct: 1 },
    { q: '¿En qué ciudad española se encuentra la Alhambra?', options: ['Córdoba', 'Granada', 'Toledo'], correct: 1 },
    { q: '¿Qué mar baña las costas de Barcelona?', options: ['Mar Cantábrico', 'Mar Mediterráneo', 'Océano Atlántico'], correct: 1 },
    { q: '¿Cuál es la montaña más alta de España?', options: ['Mulhacén', 'Teide', 'Aneto'], correct: 1 },
    { q: '¿En qué comunidad autónoma está Santiago de Compostela?', options: ['Asturias', 'Galicia', 'Cantabria'], correct: 1 },
    { q: '¿Qué islas forman parte de España en el Mediterráneo?', options: ['Azores', 'Baleares', 'Madeira'], correct: 1 },
    { q: '¿Qué cordillera separa España de Francia?', options: ['Pirineos', 'Cordillera Cantábrica', 'Sierra Morena'], correct: 0 },
    { q: '¿Cuál es la capital de Andalucía?', options: ['Sevilla', 'Málaga', 'Granada'], correct: 0 },
    { q: '¿Qué río pasa por Sevilla?', options: ['Ebro', 'Duero', 'Guadalquivir'], correct: 2 },
    { q: '¿Cuál es la capital de la Comunidad Valenciana?', options: ['Valencia', 'Alicante', 'Castellón'], correct: 0 },
    { q: '¿En qué isla se encuentra el Teide?', options: ['Tenerife', 'Gran Canaria', 'Lanzarote'], correct: 0 },
    { q: '¿Cuál es la capital de Castilla y León?', options: ['Valladolid', 'León', 'Burgos'], correct: 0 },
    { q: '¿Qué mar baña la costa norte de España?', options: ['Mar Cantábrico', 'Mar de Alborán', 'Mar Negro'], correct: 0 }
    // ...añadir hasta 100 preguntas siguiendo el mismo formato
  ],

  'ENTRETENIMIENTO': [
    { q: '¿Quién dirigió la película "El Laberinto del Fauno"?', options: ['Pedro Almodóvar', 'Guillermo del Toro', 'Alejandro Amenábar'], correct: 1 },
    { q: '¿Qué cantante popularizó la canción "Mediterráneo"?', options: ['Joan Manuel Serrat', 'Joaquín Sabina', 'Luis Eduardo Aute'], correct: 0 },
    { q: '¿En qué ciudad se celebra el Festival de Cine de San Sebastián?', options: ['Bilbao', 'San Sebastián', 'Vitoria'], correct: 1 },
    { q: '¿Quién es el actor español protagonista de "No Country for Old Men"?', options: ['Javier Bardem', 'Antonio Banderas', 'Luis Tosar'], correct: 0 },
    { q: '¿Qué serie española ganó un Emmy Internacional en 2018?', options: ['La Casa de Papel', 'Vis a Vis', 'Élite'], correct: 0 },
    { q: '¿Quién compuso la banda sonora de "El Padrino"?', options: ['Nino Rota', 'Ennio Morricone', 'John Williams'], correct: 0 },
    { q: '¿En qué año se estrenó la primera película de "Star Wars"?', options: ['1975', '1977', '1980'], correct: 1 },
    { q: '¿Qué grupo español tiene como vocalista a Enrique Bunbury?', options: ['Héroes del Silencio', 'Mecano', 'Los Planetas'], correct: 0 },
    { q: '¿Qué director español ganó un Oscar por "Todo sobre mi madre"?', options: ['Pedro Almodóvar', 'Alejandro Amenábar', 'Juan Antonio Bayona'], correct: 0 },
    { q: '¿Qué actriz española ganó un Oscar por "Vicky Cristina Barcelona"?', options: ['Penélope Cruz', 'Paz Vega', 'Elena Anaya'], correct: 0 },
    { q: '¿Qué programa español popularizó el término "un, dos, tres"?', options: ['Un, dos, tres... responda otra vez', 'Sorpresa, sorpresa', 'Gran Prix'], correct: 0 },
    { q: '¿Qué cantante española interpretó "Malamente"?', options: ['Rosalía', 'Aitana', 'Lola Índigo'], correct: 0 },
    { q: '¿Qué grupo cantó "Devuélveme a mi chica"?', options: ['Hombres G', 'La Oreja de Van Gogh', 'El Canto del Loco'], correct: 0 },
    { q: '¿Qué plataforma estrenó la serie "La Casa de Papel" a nivel internacional?', options: ['Netflix', 'HBO Max', 'Disney+'], correct: 0 },
    { q: '¿Qué músico es conocido como "El Rey del Pop"?', options: ['Michael Jackson', 'Prince', 'Elton John'], correct: 0 }
    // ...añadir hasta 100
  ],

  'HISTORIA': [
    { q: '¿En qué año se descubrió América?', options: ['1492', '1512', '1488'], correct: 0 },
    { q: '¿Quién fue el primer presidente del Gobierno de la democracia española?', options: ['Adolfo Suárez', 'Felipe González', 'Leopoldo Calvo-Sotelo'], correct: 0 },
    { q: '¿Cuándo terminó la Guerra Civil Española?', options: ['1939', '1936', '1945'], correct: 0 },
    { q: '¿Qué reyes católicos unificaron España?', options: ['Fernando e Isabel', 'Carlos I y Juana', 'Felipe II y Ana'], correct: 0 },
    { q: '¿En qué año entró España en la Comunidad Económica Europea?', options: ['1986', '1981', '1992'], correct: 0 },
    { q: '¿Quién fue el último rey de la dinastía de los Austrias en España?', options: ['Carlos II', 'Felipe IV', 'Carlos I'], correct: 0 },
    { q: '¿Qué batalla frenó la expansión musulmana en la península en el siglo VIII?', options: ['Batalla de Covadonga', 'Batalla de Lepanto', 'Batalla de las Navas de Tolosa'], correct: 0 },
    { q: '¿Qué dictador gobernó España tras la Guerra Civil?', options: ['Francisco Franco', 'Miguel Primo de Rivera', 'Manuel Azaña'], correct: 0 },
    { q: '¿En qué año se aprobó la Constitución española vigente?', options: ['1978', '1975', '1981'], correct: 0 },
    { q: '¿Qué imperio construyó el acueducto de Segovia?', options: ['Imperio romano', 'Imperio visigodo', 'Imperio bizantino'], correct: 0 },
    { q: '¿Qué general francés invadió España en 1808?', options: ['Napoleón Bonaparte', 'Luis XIV', 'Richelieu'], correct: 0 },
    { q: '¿Qué reina española fue conocida como "la Loca"?', options: ['Juana I de Castilla', 'Isabel II', 'María Cristina'], correct: 0 },
    { q: '¿Qué ciudad fue capital del califato musulmán en la península?', options: ['Córdoba', 'Sevilla', 'Granada'], correct: 0 },
    { q: '¿Qué tratado reconoció la independencia de las colonias españolas en América?', options: ['Tratado de París de 1898', 'Tratado de Utrecht', 'Tratado de Tordesillas'], correct: 0 },
    { q: '¿Qué guerra enfrentó a carlistas y liberales en el siglo XIX?', options: ['Guerras carlistas', 'Guerra de Sucesión', 'Guerra de la Independencia'], correct: 0 }
    // ...añadir hasta 100
  ],

  'ARTE Y LITERATURA': [
    { q: '¿Quién escribió "Don Quijote de la Mancha"?', options: ['Miguel de Cervantes', 'Lope de Vega', 'Calderón de la Barca'], correct: 0 },
    { q: '¿Qué pintor español es famoso por "Las Meninas"?', options: ['Velázquez', 'Goya', 'El Greco'], correct: 0 },
    { q: '¿Dónde se encuentra el Museo del Prado?', options: ['Madrid', 'Barcelona', 'Sevilla'], correct: 0 },
    { q: '¿Quién pintó el "Guernica"?', options: ['Pablo Picasso', 'Salvador Dalí', 'Joan Miró'], correct: 0 },
    { q: '¿Quién escribió "La Celestina"?', options: ['Fernando de Rojas', 'Jorge Manrique', 'Juan Ruiz'], correct: 0 },
    { q: '¿Qué arquitecto diseñó la Sagrada Familia?', options: ['Antoni Gaudí', 'Santiago Calatrava', 'Rafael Moneo'], correct: 0 },
    { q: '¿Quién escribió "Cien años de soledad"?', options: ['Gabriel García Márquez', 'Mario Vargas Llosa', 'Julio Cortázar'], correct: 0 },
    { q: '¿Qué poeta español escribió "Campos de Castilla"?', options: ['Antonio Machado', 'Federico García Lorca', 'Juan Ramón Jiménez'], correct: 0 },
    { q: '¿De qué corriente artística es máximo exponente Salvador Dalí?', options: ['Surrealismo', 'Cubismo', 'Impresionismo'], correct: 0 },
    { q: '¿Quién escribió "La casa de Bernarda Alba"?', options: ['Federico García Lorca', 'Valle-Inclán', 'Jacinto Benavente'], correct: 0 },
    { q: '¿Qué escritor creó el personaje de Sherlock Holmes?', options: ['Arthur Conan Doyle', 'Agatha Christie', 'Edgar Allan Poe'], correct: 0 },
    { q: '¿Qué pintor es conocido por sus obras de fusilamientos del 3 de mayo?', options: ['Francisco de Goya', 'Velázquez', 'Zurbarán'], correct: 0 },
    { q: '¿Qué premio literario se concede en España cada 23 de abril?', options: ['Premio Cervantes', 'Premio Planeta', 'Premio Nadal'], correct: 0 },
    { q: '¿Qué poeta andaluz escribió "Romancero gitano"?', options: ['Federico García Lorca', 'Luis Cernuda', 'Rafael Alberti'], correct: 0 },
    { q: '¿Quién es el autor de "El nombre de la rosa"?', options: ['Umberto Eco', 'Italo Calvino', 'José Saramago'], correct: 0 }
    // ...añadir hasta 100
  ],

  'CIENCIAS Y NATURALEZA': [
    { q: '¿Cuál es el planeta más grande del sistema solar?', options: ['Júpiter', 'Saturno', 'Neptuno'], correct: 0 },
    { q: '¿Cuántos huesos tiene el cuerpo humano adulto aproximadamente?', options: ['206', '180', '230'], correct: 0 },
    { q: '¿Qué gas necesitan las plantas para la fotosíntesis?', options: ['Dióxido de carbono', 'Oxígeno', 'Nitrógeno'], correct: 0 },
    { q: '¿Cuál es el metal más abundante en la corteza terrestre?', options: ['Aluminio', 'Hierro', 'Cobre'], correct: 0 },
    { q: '¿Qué animal es el más rápido en tierra?', options: ['Guepardo', 'Gacela', 'Leopardo'], correct: 0 },
    { q: '¿Cuántos continentes hay en la Tierra según el modelo más extendido?', options: ['7', '6', '5'], correct: 0 },
    { q: '¿Qué científico propuso la teoría de la relatividad?', options: ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei'], correct: 0 },
    { q: '¿Cuál es el órgano más grande del cuerpo humano?', options: ['La piel', 'El hígado', 'El cerebro'], correct: 0 },
    { q: '¿Qué tipo de animal es la ballena azul?', options: ['Mamífero', 'Pez', 'Reptil'], correct: 0 },
    { q: '¿Cuál es el gas más abundante en la atmósfera terrestre?', options: ['Nitrógeno', 'Oxígeno', 'Argón'], correct: 0 },
    { q: '¿Qué vitamina se produce principalmente con la exposición al sol?', options: ['Vitamina D', 'Vitamina C', 'Vitamina B12'], correct: 0 },
    { q: '¿Cuál es el satélite natural de la Tierra?', options: ['La Luna', 'Fobos', 'Titán'], correct: 0 },
    { q: '¿Qué científico formuló las leyes del movimiento y la gravitación universal?', options: ['Isaac Newton', 'Kepler', 'Copérnico'], correct: 0 },
    { q: '¿Cómo se llama el proceso por el que el agua pasa de estado líquido a gaseoso?', options: ['Evaporación', 'Condensación', 'Sublimación'], correct: 0 },
    { q: '¿Qué nombre recibe el estudio de los seres vivos?', options: ['Biología', 'Geología', 'Física'], correct: 0 }
    // ...añadir hasta 100
  ],

  'DEPORTE Y PASATIEMPOS': [
    { q: '¿En qué año ganó España su primer Mundial de fútbol?', options: ['2010', '2006', '2014'], correct: 0 },
    { q: '¿Quién es el tenista español con más Grand Slams?', options: ['Rafael Nadal', 'Carlos Alcaraz', 'David Ferrer'], correct: 0 },
    { q: '¿Cuántos jugadores hay en pista por equipo en baloncesto?', options: ['5', '6', '4'], correct: 0 },
    { q: '¿En qué deporte destaca Mireia Belmonte?', options: ['Natación', 'Atletismo', 'Gimnasia'], correct: 0 },
    { q: '¿Qué equipo de fútbol español tiene más Champions League?', options: ['Real Madrid', 'FC Barcelona', 'Atlético de Madrid'], correct: 0 },
    { q: '¿En qué ciudad se celebraron los Juegos Olímpicos de 1992?', options: ['Barcelona', 'Madrid', 'Sevilla'], correct: 0 },
    { q: '¿Cuántos sets se juegan en un partido masculino de Grand Slam?', options: ['Al mejor de 5', 'Al mejor de 3', 'Siempre 3'], correct: 0 },
    { q: '¿Qué piloto español ganó dos campeonatos de Fórmula 1?', options: ['Fernando Alonso', 'Carlos Sainz Jr.', 'Pedro de la Rosa'], correct: 0 },
    { q: '¿Cuántos minutos dura un partido de fútbol reglamentario sin prórroga?', options: ['90 minutos', '80 minutos', '100 minutos'], correct: 0 },
    { q: '¿En qué deporte se utiliza un tablero de 64 casillas?', options: ['Ajedrez', 'Damas', 'Go'], correct: 0 },
    { q: '¿Qué selección de baloncesto se conoce como "La Familia"?', options: ['Selección española', 'Selección argentina', 'Selección francesa'], correct: 0 },
    { q: '¿Qué deporte practica el club Movistar Team?', options: ['Ciclismo', 'Balonmano', 'Voleibol'], correct: 0 },
    { q: '¿Qué jugador argentino es considerado uno de los mejores futbolistas de la historia?', options: ['Leo Messi', 'Diego Maradona', 'Gabriel Batistuta'], correct: 0 },
    { q: '¿Qué pieza de ajedrez solo se mueve en diagonal?', options: ['Alfil', 'Torre', 'Caballo'], correct: 0 },
    { q: '¿En qué deporte se compite por lograr un hoyo en el menor número de golpes?', options: ['Golf', 'Críquet', 'Béisbol'], correct: 0 }
    // ...añadir hasta 100
  ]
};
