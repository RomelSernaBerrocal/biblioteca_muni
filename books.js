// Sample book data
const sampleBooks = [
    {
        id: 1,
        title: "Cien años de soledad",
        author: "Gabriel García Márquez",
        cover: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747581622/100-a%C3%B1os-soledad_al5klk.jpg", 
        category: "Novela",
        year: 1967,
        pages: 417,
        language: "Español",
        description: "Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra del realismo mágico y una de las más influyentes de la literatura hispanoamericana.",
        pdfUrl: "libros/Cien-Años-de-Soledad.pdf" 
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        cover: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747581621/1984_rhbzww.jpg",
        category: "Novela distópica",
        year: 1949,
        pages: 328,
        language: "Español",
        description: "1984 es una novela distópica escrita por George Orwell. Ambientada en una sociedad totalitaria vigilada por el Gran Hermano, explora temas como la censura, el control social y la manipulación de la verdad.",
        pdfUrl: "libros/1984.pdf" 
    },
    {
        id: 3,
        title: "Drácula",
        author: "Bram Stoker",
        cover: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747581623/dracula_sybgtt.jpg", 
        category: "Novela de terror",
        year: 1897,
        pages: 418,
        language: "Español",
        description: "Drácula es una novela gótica escrita por Bram Stoker. Narra la historia del conde Drácula y su intento de trasladarse de Transilvania a Inglaterra, donde enfrenta a un grupo de personas decididas a detenerlo.",
        pdfUrl: "libros/Drácula.pdf" 
    },
    {
        id: 4,
        title: "El principito",
        author: "Antoine de Saint-Exupéry",
        cover: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747581621/principito_pfqhek.jpg", 
        category: "Novela corta / Fábula",
        year: 1943,
        pages: 96,
        language: "Español",
        description: "El principito es una obra poética y filosófica escrita por Antoine de Saint-Exupéry. A través de la historia de un pequeño príncipe que viaja por distintos planetas, explora temas como la amistad, el amor y el sentido de la vida.",
        pdfUrl: "libros/El-Principito.pdf" 
    },
    {
        id: 5,
        title: "El viejo y el mar",
        author: "Ernest Hemingway",
        cover: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747581626/el-viejo-y-el-mar_vaghoi.jpg", 
        category: "Novela",
        year: 1952,
        pages: 127,
        language: "Español",
        description: "El viejo y el mar es una novela corta de Ernest Hemingway. Relata la lucha épica de un viejo pescador cubano contra un gran pez marlín en alta mar, simbolizando la perseverancia y la dignidad ante la adversidad.",
        pdfUrl: "libros/El-Viejo-y-El-Mar.pdf" 
    },
    {
        id: 6,
        title: "La divina comedia",
        author: "Dante Alighieri",
        cover: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747581620/divina-comedia_ekmfmi.jpg", 
        category: "Poema épico",
        year: 1320,
        pages: 432,
        language: "Español",
        description: "La divina comedia es un poema épico escrito por Dante Alighieri. Describe el viaje alegórico de Dante a través del Infierno, el Purgatorio y el Paraíso, guiado por Virgilio y Beatriz, simbolizando la redención y la búsqueda espiritual.",
        pdfUrl: "libros/La-Divina-Comedia.pdf" 
    },
    
    {
        id: 7,
        title: "ORGULLO Y PREJUICIO",
        author: "Jane Austen",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQszoRODVrBIx83TBliPD7kk7no6g3p9j1sG-kKSba7twlyS6usuEFqfhc4USATHg5rXnI&usqp=CAU", 
        category: "Novela romántica",
        year: 1813,
        pages: 432,
        language: "Español",
        description: "Orgullo y prejuicio narra la historia de Elizabeth Bennet, una joven con carácter fuerte y juicio agudo, y su compleja relación con el señor Darcy, un hombre orgulloso. A través de malentendidos, diferencias sociales y conflictos internos.",
        pdfUrl: "libros/Orgullo-y-Prejuicio-Autor-Jane-Austen.pdf" 
    },
    {
        id: 8,
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        cover: "https://img.perlego.com/book-covers/2501215/9782379260780.jpg", 
        category: "Novela gótica",
        year: 1847,
        pages: 829,
        language: "Español",
        description: "Jane Eyre cuenta la vida de una joven huérfana que, a pesar de sufrir abusos y rechazos, mantiene su independencia y dignidad moral. La historia sigue su crecimiento personal y emocional, especialmente en su compleja relación con el señor Rochester, su empleador. Es una obra que combina romance, crítica social y elementos sobrenaturales.",
        pdfUrl: "libros/Jane-Eyre.pdf" 
    },
    {
        id: 9,
        title: "PIENSE Y HÁGASE RICO",
        author: "Napoleon Hill",
        cover: "https://libreriakronos.com/cdn/shop/products/71-a4pWvhML_600x600_crop_center.jpg?v=1595451901", 
        category: "Desarrollo personal",
        year: 1937,
        pages: 425,
        language: "Español",
        description: "Piense y hágase rico es un clásico del desarrollo personal y la mentalidad financiera. Napoleon Hill presenta 13 principios para alcanzar el éxito, basados en las experiencias de empresarios exitosos como Andrew Carnegie. La obra enseña cómo el pensamiento positivo, la fe, la planificación y la perseverancia pueden conducir a la riqueza y la autorrealización.",
        pdfUrl: "libros/Piense-y-Hágase-Rico.pdf" 
    },
    {
        id: 10,
        title: "Alicia en el País de las Maravillas",
        author: "Lewis Carroll ",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsMfTQZhGIqPJ2WJPtKev64bmJuMdURDL0fw&s", 
        category: "Literatura infantil",
        year: 1865,
        pages: 82,
        language: "Español",
        description: "Alicia en el País de las Maravillas relata la historia de una niña llamada Alicia que cae por una madriguera de conejo y entra en un mundo fantástico lleno de personajes excéntricos y situaciones absurdas. La obra es una exploración lúdica del lenguaje, la lógica y la imaginación, y se ha convertido en un clásico de la literatura infantil y universal.",
        pdfUrl: "libros/Alicia-en-el-País-de-las-Maravillas.pdf" 
    },
    {
        id: 11,
        title: "La República",
        author: "Lewis Carroll",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAdMO5UZtMyczg4Vi33g9cfiAf1wVyitaNQ&s", 
        category: "Filosofía",
        year: 1380 ,
        pages: 323,
        language: "Español",
        description: "La República es una de las obras filosóficas más influyentes de la historia. Escrita en forma de diálogo, plantea conceptos fundamentales sobre la justicia, el alma humana, la educación y la estructura de una sociedad ideal. A través de la voz de Sócrates, Platón introduce ideas como la teoría de las ideas, el mito de la caverna y el gobierno de los filósofos.",
        pdfUrl: "libros/La-República.pdf" 
    },
    {
        id: 12,
        title: "DRÁCULA",
        author: "Bram Stoker",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM5IFg_fVEkhmNePynw4iex8xeav3-1j2Qzg&s", 
        category: "Novela gótica",
        year: 1897 ,
        pages: 743,
        language: "Español",
        description: "Drácula es una novela epistolar que narra la lucha de un grupo de personas contra el conde Drácula, un vampiro que viaja desde Transilvania a Inglaterra para expandir su mal. La obra mezcla elementos sobrenaturales, suspenso y crítica social, convirtiéndose en el pilar de la literatura de vampiros y una figura icónica del terror gótico.",
        pdfUrl: "libros/Drácula.pdf" 
    },
    {
        id: 13,
        title: "Leviatán",
        author: "Thomas Hobbes",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Y3wG9UCYcheNNG0jO_Lm9zK6HEK5jisG5BH_EiHRu8HEkwezglMWJlQmxwQEJgfOm1w&usqp=CAU", 
        category: "Filosofía política",
        year: 1651 ,
        pages: 225,
        language: "Español",
        description: "Leviatán es una obra fundamental de la filosofía política moderna en la que Hobbes defiende la necesidad de un poder soberano absoluto para evitar el caos y la guerra civil. Parte de una visión pesimista del ser humano en estado natural —“el hombre es el lobo del hombre”— y propone un contrato social mediante el cual los individuos ceden sus derechos a un soberano a cambio de seguridad y orden.",
        pdfUrl: "libros/Drácula.pdf" 
    },
    {
        id: 14,
        title: "El Gran Gatsby",
        author: "F. Scott Fitzgerald",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_76TdBDbe5nNhAAScet3taAT5tfQkjIWXUx85kUnPOXW0_kZdeIImXadT2XNFf70IeY&usqp=CAU", 
        category: "Novela moderna",
        year: 1925 ,
        pages: 242,
        language: "Español",
        description: "El Gran Gatsby retrata el sueño americano y su decadencia en la década de 1920. La historia es narrada por Nick Carraway, un joven que se muda a Long Island y se ve envuelto en la vida del enigmático millonario Jay Gatsby, cuyo amor por Daisy Buchanan lo lleva a un trágico destino. La novela destaca por su estilo lírico y crítica a la superficialidad de la alta sociedad.",
        pdfUrl: "libros/El-Gran-Gatsby.pdf" 
    },
    {
        id: 15,
        title: "El Amor en Tiempo de Cólera",
        author: "Gabriel García Márquez",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSubGktAWVYyp3GS5NQ0n4zP3KQs0EOLktE7AlXbMk1lU7Ds12qU05nJxTCvPF7TyimIwY&usqp=CAU", 
        category: "Novela romántica",
        year: 1985 ,
        pages: 622,
        language: "Español",
        description: "Esta novela cuenta la historia de amor entre Florentino Ariza y Fermina Daza, quienes, tras décadas de separación, se reencuentran en la vejez. Ambientada en el Caribe colombiano, la obra es una meditación sobre el amor, el tiempo y la persistencia del deseo, con el estilo poético y simbólico característico de García Márquez.",
        pdfUrl: "libros/El Amor-en-Tiempo-de-Cólera.pdf" 
    }
];

if (!localStorage.getItem('books')) {
    localStorage.setItem('books', JSON.stringify(sampleBooks));
}

function getBooks() {
    return JSON.parse(localStorage.getItem('books')) || [];
}

function saveBooks(books) {
    localStorage.setItem('books', JSON.stringify(books));
}