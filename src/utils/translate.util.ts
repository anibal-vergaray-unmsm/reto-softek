export const translateSwapiFields = (data) => {
  const result = {};

  for (const field in data) {
    if (translatedFields[field]) {
      result[translatedFields[field]] = data[field];
    } else {
      result[field] = data[field];
    }
  }

  return result;
};

const translatedFields = {
  name: 'nombre',
  birth_year: 'año_de_nacimiento',
  eye_color: 'color_de_ojos',
  gender: 'genero',
  hair_color: 'color_de_pelo',
  height: 'altura',
  mass: 'masa',
  skin_color: 'color_de_piel',
  homeworld: 'planeta_de_origen',
  films: 'peliculas',
  species: 'especies',
  starships: 'naves_espaciales',
  vehicles: 'vehiculos',
  url: 'url',
  created: 'fecha_de_creacion',
  edited: 'fecha_de_edicion',
  title: 'titulo',
  episode_id: 'numero_de_episodio',
  opening_crawl: 'parrafos_iniciales',
  director: 'director',
  producer: 'productor',
  release_date: 'fecha_de_lanzamiento',
  characters: 'personajes',
  planets: 'planetas',
  model: 'modelo',
  starship_class: 'clase_de_nave_espacial',
  manufacturer: 'fabricante',
  cost_in_credits: 'costo_en_creditos',
  length: 'longitud',
  crew: 'tripulacion',
  passengers: 'pasajeros',
  max_atmosphering_speed: 'velocidad_maxima_en_atmosfera',
  hyperdrive_rating: 'clasificacion_de_hiperimpulsor',
  mglt: 'max_megaluz',
  cargo_capacity: 'capacidad_de_carga',
  consumables: 'consumibles',
  pilots: 'pilotos',
  vehicle_class: 'clase_de_vehiculo',
  classification: 'clasificacion',
  designation: 'designacion',
  average_height: 'altura_promedio',
  average_lifespan: 'esperanza_de_vida_promedio',
  eye_colors: 'colores_de_ojos',
  hair_colors: 'colores_de_pelo',
  skin_colors: 'colores_de_piel',
  language: 'idioma',
  diameter: 'diametro',
  rotation_period: 'periodo_de_rotacion',
  orbital_period: 'periodo_de_orbita',
  gravity: 'gravedad',
  population: 'poblacion',
  climate: 'clima',
  terrain: 'terreno',
  surface_water: 'agua_en_superficie',
  residents: 'residentes',
};
