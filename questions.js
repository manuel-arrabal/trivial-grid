// Base de datos de preguntas del Trivial Grid
// Cada categoría contiene un array de preguntas con 4 opciones

const trivialQuestions = {
    'Geografía': [
        {
            q: '¿Cuál es la capital de España?',
            options: ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'],
            correct: 1
        },
        {
            q: '¿Qué río pasa por Zaragoza?',
            options: ['Tajo', 'Duero', 'Ebro', 'Guadalquivir'],
            correct: 2
        },
        {
            q: '¿Cuántas comunidades autónomas tiene España?',
            options: ['15', '17', '19', '21'],
            correct: 1
        },
        {
            q: '¿En qué ciudad española se encuentra la Alhambra?',
            options: ['Córdoba', 'Sevilla', 'Granada', 'Toledo'],
            correct: 2
        },
        {
            q: '¿Qué mar baña las costas de Barcelona?',
            options: ['Mar Cantábrico', 'Mar Mediterráneo', 'Océano Atlántico', 'Mar de Alborán'],
            correct: 1
        },
        {
            q: '¿Cuál es la montaña más alta de España?',
            options: ['Mulhacén', 'Aneto', 'Teide', 'Peñalara'],
            correct: 2
        },
        {
            q: '¿En qué comunidad autónoma está Santiago de Compostela?',
            options: ['Asturias', 'Galicia', 'Cantabria', 'Castilla y León'],
            correct: 1
        },
        {
            q: '¿Qué islas forman parte de España?',
            options: ['Madeira', 'Baleares', 'Azores', 'Creta'],
            correct: 1
        }
    ],

    'Entretenimiento': [
        {
            q: '¿Quién dirigió la película "El Laberinto del Fauno"?',
            options: ['Pedro Almodóvar', 'Alejandro Amenábar', 'Guillermo del Toro', 'Fernando León'],
            correct: 2
        },
        {
            q: '¿Qué cantante español popularizó "Mediterráneo"?',
            options: ['Joaquín Sabina', 'Joan Manuel Serrat', 'Julio Iglesias', 'Raphael'],
            correct: 1
        },
        {
            q: '¿En qué ciudad se celebra el Festival de Cine de San Sebastián?',
            options: ['Bilbao', 'San Sebastián', 'Pamplona', 'Vitoria'],
            correct: 1
        },
        {
            q: '¿Quién es el actor protagonista de "No Country for Old Men"?',
            options: ['Antonio Banderas', 'Javier Bardem', 'Penélope Cruz', 'Sergi López'],
            correct: 1
        },
        {
            q: '¿Qué serie española ganó un Emmy Internacional en 2018?',
            options: ['La Casa de Papel', 'Vis a Vis', 'El Ministerio del Tiempo', 'Élite'],
            correct: 0
        },
        {
            q: '¿Quién compuso la banda sonora de "El Padrino"?',
            options: ['Ennio Morricone', 'John Williams', 'Hans Zimmer', 'Nino Rota'],
            correct: 3
        },
        {
            q: '¿En qué año se estrenó la primera película de "Star Wars"?',
            options: ['1975', '1977', '1979', '1980'],
            correct: 1
        },
        {
            q: '¿Qué grupo español cantó "Héroes del Silencio"?',
            options: ['Hombres G', 'Mecano', 'Héroes del Silencio', 'Duncan Dhu'],
            correct: 2
        }
    ],

    'Historia': [
        {
            q: '¿En qué año se descubrió América?',
            options: ['1492', '1500', '1488', '1502'],
            correct: 0
        },
        {
            q: '¿Quién fue el primer presidente del Gobierno de la democracia española?',
            options: ['Adolfo Suárez', 'Felipe González', 'Leopoldo Calvo-Sotelo', 'Santiago Carrillo'],
            correct: 0
        },
        {
            q: '¿Cuándo terminó la Guerra Civil Española?',
            options: ['1936', '1939', '1945', '1940'],
            correct: 1
        },
        {
            q: '¿Qué reyes católicos unificaron España?',
            options: ['Carlos I y Juana', 'Felipe II y María', 'Fernando e Isabel', 'Alfonso y Victoria'],
            correct: 2
        },
        {
            q: '¿En qué año entró España en la Unión Europea?',
            options: ['1981', '1986', '1990', '1995'],
            correct: 1
        },
        {
            q: '¿Quién fue el último rey de la dinastía de los Austrias en España?',
            options: ['Felipe IV', 'Carlos II', 'Felipe V', 'Carlos I'],
            correct: 1
        },
        {
            q: '¿En qué batalla se enfrentaron romanos y cartagineses en España?',
            options: ['Batalla de Salamina', 'Batalla de Zama', 'Batalla de las Navas de Tolosa', 'Batalla de Cannas'],
            correct: 1
        },
        {
            q: '¿Cuántos años duró la Reconquista en España?',
            options: ['Aproximadamente 500 años', 'Aproximadamente 800 años', 'Aproximadamente 300 años', 'Aproximadamente 1000 años'],
            correct: 1
        }
    ],

    'Arte y Literatura': [
        {
            q: '¿Quién escribió "Don Quijote de la Mancha"?',
            options: ['Lope de Vega', 'Miguel de Cervantes', 'Calderón de la Barca', 'Tirso de Molina'],
            correct: 1
        },
        {
            q: '¿Qué pintor español es famoso por "Las Meninas"?',
            options: ['Goya', 'Velázquez', 'El Greco', 'Murillo'],
            correct: 1
        },
        {
            q: '¿Dónde se encuentra el museo del Prado?',
            options: ['Barcelona', 'Madrid', 'Sevilla', 'Valencia'],
            correct: 1
        },
        {
            q: '¿Quién pintó el Guernica?',
            options: ['Salvador Dalí', 'Joan Miró', 'Pablo Picasso', 'Francisco de Goya'],
            correct: 2
        },
        {
            q: '¿Qué poeta español escribió "Veinte poemas de amor y una canción desesperada"?',
            options: ['Federico García Lorca', 'Pablo Neruda', 'Antonio Machado', 'Rafael Alberti'],
            correct: 1
        },
        {
            q: '¿Quién escribió "La Celestina"?',
            options: ['Fernando de Rojas', 'Jorge Manrique', 'Juan Ruiz', 'Gonzalo de Berceo'],
            correct: 0
        },
        {
            q: '¿Qué arquitecto diseñó la Sagrada Familia?',
            options: ['Santiago Calatrava', 'Antoni Gaudí', 'Ricardo Bofill', 'Rafael Moneo'],
            correct: 1
        },
        {
            q: '¿Quién escribió "Cien años de soledad"?',
            options: ['Mario Vargas Llosa', 'Gabriel García Márquez', 'Jorge Luis Borges', 'Julio Cortázar'],
            correct: 1
        }
    ],

    'Ciencias y Naturaleza': [
        {
            q: '¿Cuál es el planeta más grande del sistema solar?',
            options: ['Saturno', 'Neptuno', 'Júpiter', 'Urano'],
            correct: 2
        },
        {
            q: '¿Cuántos huesos tiene el cuerpo humano adulto?',
            options: ['186', '206', '216', '196'],
            correct: 1
        },
        {
            q: '¿Qué gas respiran las plantas durante la fotosíntesis?',
            options: ['Oxígeno', 'Nitrógeno', 'Dióxido de carbono', 'Hidrógeno'],
            correct: 2
        },
        {
            q: '¿Cuál es el metal más abundante en la corteza terrestre?',
            options: ['Hierro', 'Aluminio', 'Cobre', 'Oro'],
            correct: 1
        },
        {
            q: '¿Qué animal es el más rápido del mundo?',
            options: ['Guepardo', 'León', 'Halcón peregrino', 'Gacela'],
            correct: 2
        },
        {
            q: '¿Cuántos continentes hay en la Tierra?',
            options: ['5', '6', '7', '8'],
            correct: 2
        },
        {
            q: '¿Qué científico propuso la teoría de la relatividad?',
            options: ['Isaac Newton', 'Albert Einstein', 'Stephen Hawking', 'Galileo Galilei'],
            correct: 1
        },
        {
            q: '¿Cuál es el órgano más grande del cuerpo humano?',
            options: ['El hígado', 'El cerebro', 'La piel', 'Los pulmones'],
            correct: 2
        }
    ],

    'Deportes y Pasatiempos': [
        {
            q: '¿En qué año ganó España su primer Mundial de Fútbol?',
            options: ['2006', '2008', '2010', '2012'],
            correct: 2
        },
        {
            q: '¿Quién es el tenista español con más Grand Slams?',
            options: ['Carlos Alcaraz', 'Rafael Nadal', 'David Ferrer', 'Juan Carlos Ferrero'],
            correct: 1
        },
        {
            q: '¿Cuántos jugadores hay en un equipo de baloncesto en la pista?',
            options: ['4', '5', '6', '7'],
            correct: 1
        },
        {
            q: '¿En qué deporte destaca Mireia Belmonte?',
            options: ['Atletismo', 'Gimnasia', 'Natación', 'Ciclismo'],
            correct: 2
        },
        {
            q: '¿Qué equipo de fútbol español tiene más Champions League?',
            options: ['FC Barcelona', 'Real Madrid', 'Atlético de Madrid', 'Valencia CF'],
            correct: 1
        },
        {
            q: '¿En qué ciudad se celebraron los Juegos Olímpicos de 1992?',
            options: ['Madrid', 'Sevilla', 'Barcelona', 'Valencia'],
            correct: 2
        },
        {
            q: '¿Cuántos sets se juegan en un partido de tenis masculino en Grand Slam?',
            options: ['Al mejor de 3', 'Al mejor de 5', 'Al mejor de 7', 'Siempre 3 sets'],
            correct: 1
        },
        {
            q: '¿Qué piloto español ganó dos campeonatos de Fórmula 1?',
            options: ['Carlos Sainz Jr.', 'Fernando Alonso', 'Marc Márquez', 'Jorge Lorenzo'],
            correct: 1
        }
    ]
};
