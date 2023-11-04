const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));

// Ruta de la API para obtener información de las terrazas
app.get('/inicio', (req, res) => {
  // Aquí proporciona los datos de las terrazas en formato JSON
  let terrazas = [
    {
      nombre: 'Salón del Sol',
      capacidad: 3000,
      imagen: 'src/terraza1.jpg',
      ubicacion: 'Zapopan, Jal',
      tipo: 'salon',
      servicio: 'ninguno',
    },
    {
      nombre: 'La Pitaya',
      capacidad: 2000,
      imagen: 'src/terraza2.jpg',
      ubicacion: 'Tlaquepaque, Jal',
      tipo: 'hacienda',
      servicio: 'ninguno',
    },
    {
      nombre: 'Brisa Marina',
      capacidad: 240,
      imagen: 'src/terraza3.jpg',
      ubicacion: 'Zapopan, Jal',
      tipo: 'salon',
      servicio: 'ninguno',
    },
    {
      nombre: 'Hacienda Tovares',
      capacidad: 500,
      imagen: 'src/terraza4.jpg',
      ubicacion: 'Guadalajara, Jal',
      tipo: 'hacienda',
      servicio: 'hospedaje'
    },
    {
      nombre: 'Mucal Eventos',
      capacidad: 100,
      imagen: 'src/terraza5.jpg',
      ubicacion: 'Tlaquepaque, Jal',
      tipo: 'hacienda',
      servicio: 'ninguno',
    },
    {
      nombre: 'Hacienda Jurica',
      capacidad: 720,
      imagen: 'src/terraza6.jpg',
      ubicacion: 'Zapopan, Jal',
      tipo: 'hacienda',
      servicio: 'ninguno',
    },
    {
      nombre: 'Atongo Eventos',
      capacidad: 5000,
      imagen: 'src/terraza7.jpg',
      ubicacion: 'Guadalajara, Jal',
      tipo: 'hacienda',
      servicio: 'ninguno',
    },
    {
      nombre: 'Mesón de la Merced',
      capacidad: 180,
      imagen: 'src/terraza8.jpg',
      ubicacion: 'Tlaquepaque, Jal',
      tipo: 'salon',
      servicio: 'ninguno',
    },
    {
      nombre: 'Casa de la Marquesa',
      capacidad: 350,
      imagen: 'src/terraza9.jpg',
      ubicacion: 'Tlaquepaque, Jal',
      tipo: 'salon',
      servicio: 'hospedaje',
    },
    {
      nombre: 'Emilia Eventos',
      capacidad: 40,
      imagen: 'src/terraza10.jpg',
      ubicacion: 'Tonalá, Jal',
      tipo: 'terraza',
      servicio: 'alberca',
      
    },
    {
      nombre: 'Balcón Celestial',
      capacidad: 50,
      imagen: 'src/terraza11.jpg',
      ubicacion: 'Tonalá, Jal',
      tipo: 'terraza',
      servicio: 'alberca',
    },
    {
      nombre: 'Terraza de las Estaciones',
      capacidad: 50,
      imagen: 'src/terraza12.jpg',
      ubicacion: 'Guadalajara, Jal',
      tipo: 'terraza',
      servicio: 'alberca',
    },
    
  ];

  res.render('Inicio',  { terrazas: terrazas });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});