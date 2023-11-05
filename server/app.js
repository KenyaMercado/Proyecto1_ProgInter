const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));

// ------------------ Datos de las Terrazas ---------------------
let terrazas = [
  {
    nombre: 'Salón del Sol',
    capacidad: 3000,
    imagen: 'src/terraza1.jpg',
    imagen2: 'src/terraza1_2.jpg',
    imagen3: 'src/terraza1_3.jpg',
    ubicacion: 'Zapopan, Jal',
    tipo: 'salon',
    servicio: 'ninguno',
    pagina: 1,
    telefono: 3314762333,
    contenido: 'Cuenta con amplios y variados espacios para que usted realice su evento social o empresarial; bodas, convenciones, juntas de trabajo, congresos, etc.',
  },
  {
    nombre: 'La Pitaya',
    capacidad: 2000,
    imagen: 'src/terraza2.jpg',
    imagen2: 'src/terraza2_2.jpg',
    imagen3: 'src/terraza2_3.jpg',
    telefono: 331548545,
    contenido: 'Se especializa en la organización de todo tipo de eventos, ofreciendo diversos ambientes, así como una arquitectura colonial entrelazada con hermosa vegetación del semi-desierto. Además, te ofrece gran variedad de de menús para sus desayunos, comidas, cenas o fiestas tema.',
    ubicacion: 'Tlaquepaque, Jal',
    tipo: 'hacienda',
    servicio: 'ninguno',
    pagina: 2,
  },
  {
    nombre: 'Brisa Marina',
    capacidad: 240,
    imagen: 'src/terraza3.jpg',
    imagen2: 'src/terraza3_2.jpg',
    imagen3: 'src/terraza3_3.jpg',
    telefono: 331847956,
    contenido:'Es el escenario ideal para ese evento tan especial. Haz una cita y conoce los espacios que te podemos ofrecer. En el marco del bello jardín se realizan bodas hasta para 240 personas.',
    ubicacion: 'Zapopan, Jal',
    tipo: 'salon',
    servicio: 'ninguno',
    pagina: 3,
  },
  {
    nombre: 'Hacienda Tovares',
    capacidad: 500,
    imagen: 'src/terraza4.jpg',
    imagen2: 'src/terraza4_2.jpg',
    imagen3: 'src/terraza4_3.jpg',
    telefono: 3316785495,
    contenido: 'Hacienda Tovares dará a tus celebraciones un toque único y mágico que no encontrarás en ningún otro lugar ya que cuenta con hermosos jardines con vista al casco de la hacienda, donde podrás planear banquetes, seminarios, talleres, etc. Cuenta con servicio de hospedaje.',
    ubicacion: 'Guadalajara, Jal',
    tipo: 'hacienda',
    servicio: 'hospedaje',
    pagina: 4,
  },
  {
    nombre: 'Mucal Eventos',
    capacidad: 100,
    imagen: 'src/terraza5.jpg',
    imagen2: 'src/terraza5_2.jpg',
    imagen3: 'src/terraza5_3.jpg',
    telefono: 3314789586,
    contenido: 'Si deseas realizar ese evento especial en el corazón del Centro Histórico,  en el Jardín de una hermosa y antigua Casona …ya no tienes que buscar más. Bautizos, primeras comuniones, bodas o cualquier evento social o empresarial hasta para 100 personas.',
    ubicacion: 'Tlaquepaque, Jal',
    tipo: 'hacienda',
    servicio: 'ninguno',
    pagina: 5,
  },
  {
    nombre: 'Hacienda Jurica',
    capacidad: 720,
    imagen: 'src/terraza6.jpg',
    imagen2: 'src/terraza6_2.jpg',
    imagen3: 'src/terraza6_3.jpg',
    telefono: 3318795874,
    contenido:'Hacienda Jurica cuenta con magníficos salones de convenciones y espacios al aire libre para reuniones de trabajo, seminarios, convenciones o eventos sociales.',
    ubicacion: 'Zapopan, Jal',
    tipo: 'hacienda',
    servicio: 'ninguno',
    pagina: 6,
  },
  {
    nombre: 'Atongo Eventos',
    capacidad: 5000,
    imagen: 'src/terraza7.jpg',
    imagen2: 'src/terraza7_2.jpg',
    imagen3: 'src/terraza7_3.jpg',
    telefono: 3318795874,
    contenido:'Emilia te ofrece una hermosa casona estilo italiano que cuenta con salones y jardines ideales para celebrar bodas y todo tipo de eventos sociales y empresariales, en la exclusividad de sus espacios que se ubican en la zona residencial de Jurica.',
    ubicacion: 'Guadalajara, Jal',
    tipo: 'hacienda',
    servicio: 'ninguno',
    pagina: 7,
  },
  {
    nombre: 'Mesón de la Merced',
    capacidad: 180,
    imagen: 'src/terraza8.jpg',
    imagen2: 'src/terraza8_2.jpg',
    imagen3: 'src/terraza8_3.jpg',
    telefono: 3313145842,
    contenido:'Si de eventos se trata, ya sean bodas, eventos empresariales o sociales, Hacienda Atongo es el marco perfecto para que tu gran celebración sea inolvidable. El casco de la hacienda que terminó de edificarse en 1651, posee amplios jardines, fuentes y manantial natural',
    ubicacion: 'Tlaquepaque, Jal',
    tipo: 'salon',
    servicio: 'ninguno',
    pagina: 8,
  },
  {
    nombre: 'Casa de la Marquesa',
    capacidad: 350,
    imagen: 'src/terraza9.jpg',
    imagen2: 'src/terraza9_2.jpg',
    imagen3: 'src/terraza9_3.jpg',
    contenido: 'Te obsequia un espacio mágico con múltiples atmósferas para que puedas celebrar un gran acontecimiento: imagina ese día tan importante como tu boda en un marco excepcional, eventos y presentaciones empresariales, cocteles y todo lo que puedas imaginar. Cuenta con servicio de hospedaje.',
    telefono: 331748579,
    ubicacion: 'Tlaquepaque, Jal',
    tipo: 'salon',
    servicio: 'hospedaje',
    pagina: 9,
  },
  {
    nombre: 'Emilia Eventos',
    capacidad: 40,
    imagen: 'src/terraza10.jpg',
    imagen2: 'src/terraza10_2.jpg',
    imagen3: 'src/terraza10_3.jpg',
    telefono: 3317485589,
    contenido: 'Contamos con: Alberca, jacuzzi, comedor y barra, bocina, hielera, cochera, wifi.',
    ubicacion: 'Tonalá, Jal',
    tipo: 'terraza',
    servicio: 'alberca',
    pagina: 10,
    
  },
  {
    nombre: 'Terraza Arosu',
    capacidad: 50,
    imagen: 'src/terraza11.jpg',
    imagen2: 'src/terraza11_2.jpg',
    imagen3: 'src/terraza11_3.jpg',
    telefono: 3317485578,
    contenido:'Ven y celebra tu día especial con nosotros, contamos con servicio de alberca, asador y un ambiente muy agradable para ti y todos tus invitados',
    ubicacion: 'Tonalá, Jal',
    tipo: 'terraza',
    servicio: 'alberca',
    pagina: 11,
  },
  {
    nombre: 'Terraza de las Estaciones',
    capacidad: 50,
    imagen: 'src/terraza12.jpg',
    imagen2: 'src/terraza12_2.jpg',
    imagen3: 'src/terraza12_3.jpg',
    telefono: 3317485524,
    contenido: 'Encontrarás un espacio perfecto para relajarte y disfrutar al máximo tu evento. Comienza a planear con nosotros, contamos con servicio de alberca, música y barra.',
    ubicacion: 'Guadalajara, Jal',
    tipo: 'terraza',
    servicio: 'alberca',
    pagina: 12,
  },
];


app.get('/inicio', (req, res) => {
    res.render('Inicio', { terrazas: terrazas });
});

app.get('/eventos/:pagina', function (req, res) {
    const pagina = req.params.pagina;
    const terraza = terrazas.find(terraza => terraza.pagina == pagina);
    if (terraza) {
        res.render('terraza', { terraza: terraza });
    } else {
        // Manejar el caso en el que la terraza no se encuentre
        res.status(404).send('Terraza no encontrada');
    }
});

// --------------------- Email -----------------------------

// Configurar body-parser para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));


const transporter = nodemailer.createTransport({
  service: "Outlook", // O el servicio de correo que desees
  auth: {
    user: "kenyasanmer@outlook.com",
    pass: "mc3316907082",
  },
});

app.post("/enviar-correo", (req, res) => {
  const { nombre, whatsapp, correo, evento, asistentes, diaEvento, comentarios, contactar } = req.body;

  const mailOptions = {
    from: "kenyasanmer@outlook.com", // Tu correo
    to: "kenyasanmer@outlook.com", // El destinatario del correo
    subject: `Nuevo contacto de ${nombre}`,
    text: `
    Nombre: ${nombre}
    WhatsApp: ${whatsapp}
    Correo: ${correo}
    Evento: ${evento}
    Asistentes: ${asistentes}
    Día del Evento: ${diaEvento}
    Comentarios: ${comentarios}
    Contactar por: ${contactar}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Error al enviar el correo" });
    } else {
      console.log("Correo enviado: " + info.response);
      res.status(200).json({ message: "Correo enviado con éxito" });
    }
  });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor Express en ejecución en el puerto ${port}`);
});
