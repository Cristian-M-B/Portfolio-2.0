import elChef from '../assets/images/projects/elChef.png';
import amadeus from '../assets/images/projects/amadeus.png';
import pokeMania from '../assets/images/projects/pokeMania.png';
import tecnocommerce from '../assets/images/projects/tecnocommerce.png';

const projects = [
    {
        name: 'TecnoCommerce',
        image: tecnocommerce,
        description: 'E-commerce de electrodomésticos y tecnología. La app consta con tres niveles de ingreso (invitado, usuario y administrador), cada una con sus funcionalidades características. Por ejemplo el usuario puede seleccionar productos como favoritos, ver y modificar su perfil y dejar una calificación del producto que compro. Mientras que el administrador puede gestionar los productos, las ordenes de compras y los usuarios registrados. La app incluye pasarela de pago mediante Mercado Pago.',
        link: 'https://tecnocommerce.vercel.app'
    },
    // {
    //     name: 'AmadeuS',
    //     image: amadeus,
    //     description: 'E-commerce con temática de instrumentos musicales. La app consta con tres niveles de ingreso (invitado, usuario y administrador), cada uno con funcionalidades adicionales. Por ejemplo el usuario puede seleccionar productos como favoritos, ver y modificar su perfil y dejar una calificación del instrumento que compro. Mientras que el administrador además puede gestionar los productos, las ordenes de compras y los usuarios registrados. La app incluye autentificación mediante Auth0 y pasarela de pago mediante Mercado Pago.',
    //     link: 'https://amadeus.vercel.app'
    // },
    {
        name: 'El Chef',
        image: elChef,
        description: 'Single Page Application (SPA) sobre recetas de cocina que trae información desde una API externa (Spoonacular) y permite la creación de nuevas recetas que se guardan en una base de datos local. Cuenta con visualización de las recetas y sus respectivos detalles, búsqueda por nombre, filtrado por tipo de dieta, ordenamiento por nombre y puntuación, paginado y un formulario controlado para la validación de los datos al crear una nueva receta.',
        link: 'https://elchef.vercel.app'
    },
    {
        name: 'PokeMania',
        image: pokeMania,
        description: 'Se trata de una Pokédex. La misma trae la información de una API externa (PokéApi) permitiendo la visualización de los pokemons y sus respectivas caracteristicas. La app cuenta con búsqueda de pokemons ya sea por nombre o por número (ID), ordenamiento por nombre y número, filtrado por tipo de pokemon y paginado. Adicionalmente puedes seleccionar a tus pokemons favoritos y armar tu equipo pokemon ideal.',
        link: 'https://poke-mania.vercel.app'
    }
]

export default projects;