<script setup>
  const lstMovies = ['Inception', 'The Matrix', 'Interstellar', 'The Godfather', 'Pulp Fiction']

  const movies = [
    { title: 'Inception', year: 2010, director: 'Christopher Nolan' },
    { title: 'The Matrix', year: 1999, director: 'Lana Wachowski, Lilly Wachowski' },
    { title: 'Interstellar', year: 2014, director: 'Christopher Nolan' },
    { title: 'The Godfather', year: 1972, director: 'Francis Ford Coppola' },
    { title: 'Pulp Fiction', year: 1994, director: 'Quentin Tarantino' }
  ];

  const animals = [
    {
      id: 1,
      name: "dog",
      img: "https://nypost.com/wp-content/uploads/sites/2/2022/12/worlds-cutest-dog-comp-1.jpg",
    },
    {
      id: 2,
      name: "cat",
      img: "https://img.freepik.com/foto-gratis/lindo-gatito-domestico-sienta-ventana-mirando-fuera-ia-generativa_188544-12519.jpg",
    },
    {
      id: 3,
      name: "bird",
      img: "https://media.cnn.com/api/v1/images/stellar/prod/190414090035-01-cassowary.jpg",
    },
  ];
</script>

<template>
  <h1>Renderizado de listas | v-for</h1>
  
  <div>
    <p v-for="(movie, index) in lstMovies" :key="movie">
      {{ index + 1 }} - {{ movie }}
    </p>
  </div>


  <br />
  <br />
  <hr />
  <br />
  <br />


  <div>
    <p v-for="movie in movies" :key="movie.year">
      Título: {{ movie.title }}
      <br />
      Año: {{ movie.year }}
      <br />
      Director: {{ movie.director }}
      <br />
      <span v-if="movie.year >= 2000">Película moderna</span>
      <span v-else-if="movie.year < 2000">Película antígua</span>
      <span v-else>No tiene fecha de lanzamiento</span>
    </p>
  </div>


  <br />
  <br />
  <hr />
  <br />
  <br />


  <ul>
    <li v-for="animal in animals" :key="animal.id">
      {{ animal.name }}
      <img :src="animal.img" :alt="animal.name" width="200">
    </li>
  </ul>
</template>

<style></style>