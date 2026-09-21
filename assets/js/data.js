/* Contenido de la presentación */
const PRODUCTOS = [
  {
    n: 1, img: "01", tag: "Deporte",
    titulo: "Aletas de buceo",
    sub: "SUBEA · Decathlon",
    que: "Dos aletas de caucho y plástico. Se ponen en los pies y empujan más agua, así uno avanza más rápido y se cansa menos. Son cortas, de las que se usan para snorkel.",
    para: "Tenía un viaje a Cartagena y quería bucear en una de las islas. Compré mis propias aletas para no alquilar nada allá.",
    porque: "Antes del viaje estaba tomando clases de natación, porque no sé nadar. Me lesioné el hombro izquierdo, suspendí las clases y quedé a medias. Sin saber nadar bien, no me sentí seguro. Viajé sin ellas y se quedaron en el armario."
  },
  {
    n: 2, img: "02", tag: "Moda",
    titulo: "Tenis Adidas blancos",
    sub: "Talla 7½ · comprados en línea",
    que: "Un par de tenis blancos, sencillos, todavía dentro de su caja original. Nunca han tocado la calle.",
    para: "Quería estrenar tenis blancos en un viaje. Los pedí por internet, me medí el pie y calculé la entrega para que llegaran justo antes de salir.",
    porque: "Llegaron pequeños. Dije «los cambio cuando vuelva». El viaje se alargó, al regresar me quedé un tiempo con mi familia en Sabaneta, y cuando por fin llegué a Bogotá el plazo de cambio ya se había vencido. Los cordones ya se pusieron amarillos sin haberlos usado."
  },
  {
    n: 3, img: "03", tag: "Hogar",
    titulo: "Juego de toallas",
    sub: "Brisa · Feria del Hogar",
    que: "Un juego de toallas de algodón, color gris azulado. Todavía tiene puesto el lazo con el que salió de la tienda.",
    para: "Las vi en la Feria del Hogar, me gustaron y las compré para renovar las toallas del apartamento. Soy cositero: en esas ferias me enamoro de las cosas.",
    porque: "Al llegar me acordé de que ya tenía un juego azul esperando turno. Las guardé arriba «para después». Luego mi suegra me regaló otro juego y empecé a usar ese. Se me olvidó por completo que estas estaban empacadas."
  },
  {
    n: 4, img: "04", tag: "Universidad",
    titulo: "Paquete de clips",
    sub: "200 unidades · $5.000",
    que: "Una bolsa con 200 clips de colores para sujetar hojas. Sigue sellada, ni siquiera la he abierto.",
    para: "Eran para un proyecto de Arte y Estética: un diario de fotografía en blanco y negro, hecho a mano, con las fotos impresas en formato Polaroid. Los clips de color iban a sostener cada foto y serían lo único con color en todo el diario. Ese era el golpe.",
    porque: "El profesor me dio una retroalimentación clara: meter color en una pieza pensada toda en blanco y negro rompía la idea en vez de reforzarla. Me convenció. Cambié el concepto y los clips se quedaron sin estrenar."
  },
  {
    n: 5, img: "05", tag: "Universidad",
    titulo: "Marcadores acuarela",
    sub: "Arcoíris Neón · 6 unidades · $14.000",
    que: "Seis marcadores de punta fina con tinta neón. Se dibuja con ellos y al pasarles agua el trazo se difumina como una acuarela. La caja sigue cerrada.",
    para: "Los compré en primer semestre para la asignatura Taller Creativo, pensando en usarlos en los trabajos de clase.",
    porque: "Mis trabajos se fueron por otro camino: relieves y texturas, no color. Nunca hicieron falta. Quedaron en el clóset del estudio, junto a otras cosas de arte que tampoco he destapado. Voy en tercer semestre y siguen igual."
  },
  {
    n: 6, img: "06", tag: "Lectura",
    titulo: "Julio Verne · Obras maestras",
    sub: "3 obras en un solo tomo",
    que: "Un libro de tapa dura que reúne tres obras de Julio Verne: Cinco semanas en globo, Viaje al centro de la Tierra y El maestro Zacarías. Todavía tiene el plástico de fábrica.",
    para: "Me prestaron Viaje al centro de la Tierra, lo leí y me gustó. Tuve que devolverlo. Me gusta coleccionar los libros que ya leí, y esta edición traía ese más dos obras nuevas.",
    porque: "Solo leo en el transporte público, camino a la universidad o a la oficina. Este libro es grande y pesado: no me veo abriéndolo en un bus. Y llego muy cansado a la casa como para leer. Mientras tanto leí otros que sí puedo cargar: Lo que no tiene nombre, Satanás y Crónica de una muerte anunciada."
  },
  {
    n: 7, img: "07", tag: "Cocina",
    titulo: "Exprimidor de limones",
    sub: "Manual · metálico",
    que: "Un exprimidor de mano. Se pone medio limón adentro, se aprieta la palanca y sale el jugo sin pepas.",
    para: "En enero de 2025 me fui a vivir solo y compré varias cosas para el apartamento. Esta entró en la lista por antojo, como buen cositero.",
    porque: "Siempre terminé comprando zumo de limón en botella, nunca limones. Después pensé usarlo para canastas de patacón, pero tampoco: trabajo desde la casa y mi novia vive a pocas cuadras, así que desayuno y almuerzo allá. En el apartamento casi no cocino."
  },
  {
    n: 8, img: "08", tag: "Cocina",
    titulo: "Juego de coladores",
    sub: "2 tamaños · malla metálica",
    que: "Dos coladores de malla metálica, uno grande y uno pequeño, con mango y gancho para colgar. Sirven para separar lo sólido del líquido: pasta, arroz, caldos, jugos.",
    para: "Misma tanda de la cocina nueva. Los compré «por si algún día toca colar algo».",
    porque: "Ese «algún día» nunca llegó. Otras cosas de la cocina sí las uso, pero cocinar en serio en el apartamento nunca se volvió costumbre. Estos siguen colgados, nuevos."
  },
  {
    n: 9, img: "09", tag: "Juegos",
    titulo: "Sling Hockey de mesa",
    sub: "MONTOY · Dollarcity",
    que: "Un juego de madera para dos personas. Cada uno dispara sus fichas con un elástico y gana el primero que deje su lado vacío. La caja está sellada.",
    para: "En un restaurante mexicano ponen juegos en las mesas mientras llega la comida, y este fue el que más nos divirtió. Después lo vi de casualidad en Dollarcity y lo compré para cuando tuviera visitas en el apartamento.",
    porque: "Han venido pocas visitas. Y cuando vienen, siempre terminamos en el Jenga, en el Uno, o simplemente hablando. La caja nunca se abrió."
  },
  {
    n: 10, img: "10", tag: "Cocina",
    titulo: "Portahuevos",
    sub: "Home Sentry · 4 piezas: 2 copas + 2 cucharas",
    que: "Dos copitas de cerámica con sus cucharas. Sostienen el huevo tibio de pie para comerlo en su propia cáscara, destapándolo por arriba.",
    para: "Mi novia tiene unos iguales en su apartamento. Un día fui a Home Sentry de Titán a buscar un perchero que no tocara taladrar la pared, porque no me gusta taladrar. Entre todo lo que me puse a mirar aparecieron estos, y además traían cucharita: los de mi novia no la traen. Me gustaron y los compré.",
    porque: "Las veces que intenté hacer huevo tibio me quedaron duros. Y un huevo duro no necesita portahuevos: se pela y ya. Nunca volví a intentarlo, así que nunca los usé. Quedaron guardados y los volví a ver haciendo este trabajo."
  }
];
