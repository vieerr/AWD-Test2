import { Injectable, signal } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts = signal<Post[]>([]);
  public postsList = this.posts.asReadonly();

  constructor() {
    this.initializePosts();
  }

  private initializePosts(): void {
    const initialPosts: Post[] = [
      {
        id: 1,
        title: 'Avances en Inteligencia Artificial',
        summary:
          'Los últimos desarrollos en IA prometen transformar la industria tecnológica y la vida cotidiana.',
        content:
          'Investigadores de la Universidad de Stanford han presentado un nuevo modelo de lenguaje con capacidades de procesamiento y generación de texto sin precedentes, prometiendo revolucionar campos como la medicina y la educación. Este avance marca un hito en la búsqueda de una IA más adaptable y consciente.',
        imageUrl: 'https://picsum.photos/600/400?random=1',
        date: '2023-05-15',
        category: 'Tecnología',
        author: 'Juan Pérez',
      },
      {
        id: 2,
        title: 'Debate Clave sobre la Reforma Fiscal',
        summary:
          'El parlamento discute nuevas políticas económicas que impactarán a empresas y ciudadanos.',
        content:
          'El Ministerio de Economía ha revelado un paquete de medidas que incluyen incentivos fiscales para pequeñas y medianas empresas, una reducción temporal del IVA en sectores clave y un fondo de inversión para infraestructura. Se espera que estas políticas impulsen la creación de empleo y la recuperación económica post-pandemia.',
        imageUrl: 'https://picsum.photos/600/400?random=2',
        date: '2023-05-10',
        category: 'Política',
        author: 'María Gómez',
      },
      {
        id: 3,
        title: 'Sorpresiva Victoria en el Campeonato de Baloncesto',
        summary:
          'El equipo local se corona campeón tras un partido vibrante y lleno de emociones.',
        content:
          'El equipo "Los Rayos" se alzó con la copa del campeonato nacional de baloncesto tras una emocionante final que se decidió en los últimos segundos con una canasta decisiva de su estrella, Carlos "El Muro" Sánchez. Es la primera vez en una década que el club logra este título, desatando la euforia en la ciudad.',
        imageUrl: 'https://picsum.photos/600/400?random=3',
        date: '2023-05-05',
        category: 'Deportes',
        author: 'Carlos Ruiz',
      },
      {
        id: 4,
        title: 'El Futuro de la Robótica Colaborativa',
        summary:
          'Nuevos robots diseñados para trabajar codo a codo con humanos en entornos industriales.',
        content:
          'Empresas líderes en tecnología están invirtiendo fuertemente en el desarrollo de cobots (robots colaborativos) que pueden interactuar de forma segura y eficiente con los trabajadores humanos, optimizando la producción y mejorando las condiciones laborales en diversas fábricas a nivel global.',
        imageUrl: 'https://picsum.photos/600/400?random=4',
        date: '2023-06-01',
        category: 'Tecnología',
        author: 'Ana Beltrán',
      },
      {
        id: 5,
        title: 'Negociaciones Climáticas Internacionales',
        summary:
          'Líderes mundiales se reúnen para abordar la crisis climática y establecer nuevos objetivos.',
        content:
          'La cumbre de emergencia sobre el cambio climático ha iniciado con intensas negociaciones entre las principales potencias. Se busca llegar a acuerdos vinculantes para reducir las emisiones de carbono y movilizar fondos para la adaptación en países en desarrollo, ante la creciente urgencia de los fenómenos meteorológicos extremos.',
        imageUrl: 'https://picsum.photos/600/400?random=5',
        date: '2023-06-10',
        category: 'Política',
        author: 'Diego Navarro',
      },
      {
        id: 6,
        title: 'Record Histórico en el Maratón de la Ciudad',
        summary:
          'Un atleta rompe la marca anterior en una competencia que reunió a miles de corredores.',
        content:
          'El maratonista keniano Eliud Kipchoge Jr. no solo ganó el prestigioso Maratón de la Ciudad, sino que también estableció un nuevo récord de recorrido, superando su propia marca personal por un minuto. La multitud ovacionó su impresionante desempeño en una jornada soleada y de gran entusiasmo deportivo.',
        imageUrl: 'https://picsum.photos/600/400?random=6',
        date: '2023-06-18',
        category: 'Deportes',
        author: 'Laura Fernández',
      },
      {
        id: 7,
        title: 'Ciberseguridad: Desafíos y Soluciones Innovadoras',
        summary:
          'Expertos discuten las amenazas emergentes y las estrategias para proteger los datos en la era digital.',
        content:
          'Con el aumento de los ciberataques, la industria de la ciberseguridad está desarrollando nuevas herramientas basadas en inteligencia artificial y aprendizaje automático para detectar y neutralizar amenazas antes de que causen daños significativos. La protección de infraestructuras críticas es una prioridad global.',
        imageUrl: 'https://picsum.photos/600/400?random=7',
        date: '2023-06-25',
        category: 'Tecnología',
        author: 'Roberto Sánchez',
      },
      {
        id: 8,
        title: 'Tensiones Geopolíticas en el Este de Europa',
        summary:
          'La diplomacia internacional busca mediar en un conflicto que amenaza la estabilidad regional.',
        content:
          'Tras el reciente incidente fronterizo, las cancillerías de varios países han intensificado sus esfuerzos diplomáticos para evitar una escalada. Se espera una reunión de alto nivel en Bruselas para discutir un camino hacia la desescalada y el respeto del derecho internacional, en un momento de alta incertidumbre.',
        imageUrl: 'https://picsum.photos/600/400?random=8',
        date: '2023-07-01',
        category: 'Política',
        author: 'Elena Morales',
      },
      {
        id: 9,
        title: 'Próximos Juegos Olímpicos: Expectativas y Novedades',
        summary:
          'A pocos meses del evento, los preparativos avanzan y se anuncian nuevas disciplinas.',
        content:
          'Con la cuenta regresiva en marcha, la ciudad anfitriona de los próximos Juegos Olímpicos ha presentado los avances en la construcción de las villas olímpicas y los estadios. Además, se han confirmado dos nuevas disciplinas deportivas que debutarán en esta edición, prometiendo un espectáculo aún más diverso.',
        imageUrl: 'https://picsum.photos/600/400?random=9',
        date: '2023-07-08',
        category: 'Deportes',
        author: 'Fernando Castro',
      },
      {
        id: 10,
        title: 'Lanzamiento de Nuevo Sistema Operativo Móvil',
        summary:
          'Una importante compañía tecnológica presenta la próxima generación de su software para smartphones.',
        content:
          'La conferencia anual de desarrolladores ha sido el escenario para el tan esperado anuncio del nuevo sistema operativo móvil. Entre sus características destacadas se incluyen mejoras en privacidad, una interfaz de usuario rediseñada y una mayor integración con dispositivos de realidad aumentada, prometiendo una experiencia más fluida y segura para los usuarios.',
        imageUrl: 'https://picsum.photos/600/400?random=10',
        date: '2023-07-15',
        category: 'Tecnología',
        author: 'Sofía Herrera',
      },
    ];
    this.posts.set(initialPosts);
  }

  getPostById(id: number): Post | undefined {
    return this.posts().find((post) => post.id === id);
  }

  getFeaturedPosts(): Post[] {
    return this.posts().slice(0, 3);
  }

  getPostsByCategory(category: string): Post[] {
    return this.posts().filter((post) => post.category === category);
  }
}
