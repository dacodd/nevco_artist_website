import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Artwork {
    id: ID!
    title: String!
    imageUrl: String!
    imageUrls: [String!]!
    year: String
    technique: String
    dimensions: String
    description: String
  }

  type ArtworksConnection {
    artworks: [Artwork!]!
    total: Int!
    page: Int!
    limit: Int!
    totalPages: Int!
  }

  type Expo {
    description: String!
  }

  type Bio {
    name: String!
    description: String!
    imageUrl: String!
  }

  type Contact {
    description: String!
  }

  type Query {
    artworks(page: Int, limit: Int): ArtworksConnection
    artwork(id: ID!): Artwork
    bio: Bio
    expo_intro: Expo
    contact: Contact
  }

  input ContactInput {
    firstName: String!
    lastName: String!
    email: String!
    message: String!
  }

  input UpdateArtworkInput {
    id: ID!
    title: String
    imageUrl: String
    year: String
    technique: String
    dimensions: String
    description: String
  }

  type Mutation {
    sendContact(input: ContactInput!): Boolean
    updateArtwork(input: UpdateArtworkInput!): Artwork
  }

  
`;

const artworks = [
  { id: '1', title: 'Artwork 1', imageUrl: 'IMG_6695.jpg', year: '2022', technique: 'Mixed Media', dimensions: '29,7 x 42 cm', description: 'Abstract composition.' },
  { id: '2', title: 'Artwork 2', imageUrl: 'IMG_6802.jpg', year: '2023', technique: 'Mixed Media', dimensions: '29,7 x 42 cm', description: 'Abstract composition.' },
  { id: '3', title: 'Artwork 3', imageUrl: 'IMG_0440.jpg', year: '2016', technique: 'Mixed Media', dimensions: '29,7 x 42 cm', description: 'Layered textures.' },
  { id: '4', title: 'Artwork 4', imageUrl: 'IMG_8117.JPG', year: '2019', technique: 'Mixed Media', dimensions: '29,7 x 42 cm', description: 'Abstract composition on cardboard.'  },
  { id: '5', title: 'Artwork 5', imageUrl: 'IMG_0958.jpeg', imageUrls: ['IMG_0958.jpeg', 'IMG_7819.jpg'], year: '2022', technique: 'Mixed Media, Acrylic on paper', dimensions: '72,5 x 108 cm', description: 'Abstract composition.'  },
  { id: '6', title: 'Artwork 6', imageUrl: 'IMG_6704.jpeg', year: '2022', technique: 'Mixed Media', dimensions: '29,7 x 42 cm', description: 'Abstract composition.'},
  { id: '7', title: 'Artwork 7', imageUrl: 'IMG_1081.jpeg', year: '2023', technique: 'Mixed Media', dimensions: '72,5 x 108 cm', description: 'Abstract composition.' }, 
  { id: '8', title: 'Artwork 8', imageUrl: 'IMG_1119.jpeg', year: '2022', technique: 'Mixed Media', dimensions: '29,7 x 42 cm', description: 'Abstract composition with bold colors.' },
  { id: '9', title: 'Artwork 9', imageUrl: 'IMG_1288.jpeg', year: '2016', technique: 'Mixed Media', dimensions: '29,7 x 42 cm', description: 'Abstract composition.' },
  { id: '10', title: 'Artwork 10', imageUrl: 'FullSizeRender (1).jpeg', year: '2019', technique: 'Mixed Media', dimensions: '29,7 x 42 cm', description: 'Abstract composition.' },
  { id: '11', title: 'Artwork 11', imageUrl: 'FullSizeRender.jpeg', imageUrls: ['FullSizeRender.jpeg', 'IMG_7816.jpg'], year: '2023', technique: 'Mixed Media', dimensions: '72,5 x 108 cm', description: 'Abstract composition.' }, 
  { id: '12', title: 'Artwork 12', imageUrl: 'IMG_1121.jpg', year: '2022', technique: 'Mixed Media', dimensions: '29,7 x 42 cm', description: 'Abstract composition.' },
  { id: '13', title: 'Artwork 13', imageUrl: 'IMG_7826.jpeg', imageUrls: ['IMG_7826.jpeg', 'IMG_7825.jpg'], year: '2022', technique: 'Mixed Media', dimensions: '50 x 70 cm', description: 'Modern composition.' },
  { id: '14', title: 'Artwork 14', imageUrl: 'IMG_1148.jpg', imageUrls: ['IMG_1148.jpg', 'IMG_7817.jpg'], year: '2023', technique: 'Mixed Media', dimensions: '72,5 x 108 cm', description: 'Abstract composition.' },
  { id: '15', title: 'Artwork 27', imageUrl: 'image50.png', year: '2023', technique: 'Mixed Media', dimensions: '50 x 70 cm', description: 'Abstract composition.' },
  { id: '16', title: 'Artwork 28', imageUrl: 'image51.png', year: '2023', technique: 'Mixed Media', dimensions: '50 x 70 cm', description: 'Abstract composition.' },
  { id: '17', title: 'Artwork 29', imageUrl: 'image52.png', year: '2023', technique: 'Mixed Media', dimensions: '50 x 70 cm', description: 'Abstract composition.' },
  { id: '18', title: 'Artwork 30', imageUrl: 'image53.png', year: '2023', technique: 'Mixed Media', dimensions: '50 x 70 cm', description: 'Abstract composition.' },
  { id: '19', title: 'Artwork 31', imageUrl: 'image54.png', year: '2023', technique: 'Mixed Media', dimensions: '50 x 70 cm', description: 'Abstract composition.' },
  { id: '20', title: 'Artwork 15', imageUrl: 'IMG_7810.jpg', year: '2022', technique: 'Acrylic on Canvas', dimensions: '90 x 110 cm', description: 'Abstract composition.' },
  { id: '21', title: 'Artwork 16', imageUrl: 'IMG_7814.jpg', year: '2022', technique: 'Mixed Media', dimensions: '29,7 x 42 cm', description: 'Abstract composition on carboard.' },
  { id: '22', title: 'Artwork 19', imageUrl: 'IMG_7818.jpg', year: '2023', technique: 'Acrylic', dimensions: '50 x 70 cm', description: 'Color study.' },
  { id: '23', title: 'Artwork 21', imageUrl: 'IMG_7820.jpg', year: '2022', technique: 'Oil on Canvas', dimensions: '70 x 90 cm', description: 'Bold expression.' },
  { id: '24', title: 'Artwork 22', imageUrl: 'IMG_7821.jpg', year: '2023', technique: 'Acrylic', dimensions: '55 x 75 cm', description: 'Minimalist approach.' },
  { id: '25', title: 'Artwork 23', imageUrl: 'IMG_7823.jpg', year: '2023', technique: 'Oil on Canvas', dimensions: '50 x 70 cm', description: 'Gestural work.' },
  { id: '26', title: 'Artwork 25', imageUrl: 'IMG_7806.jpg', year: '2023', technique: 'Acrylic', dimensions: '30 x 45 cm', description: 'Small scale study.' },
  { id: '27', title: 'Artwork 26', imageUrl: 'IMG_7812.jpg', year: '2023', technique: 'Oil on Canvas', dimensions: '35 x 50 cm', description: 'Intimate composition.' },
];

const expo_intro = {
  description : `Depuis le début de sa carrière, Nevzat Çopur présente régulièrement son travail en Belgique et à l'étranger. 
                À travers de nombreuses expositions personnelles et collectives, il partage un univers artistique où peinture, dessin et céramique dialoguent autour de thèmes liés à l'humanité, à la mémoire et à la diversité culturelle. 
                Cette sélection d'expositions témoigne de l'évolution de son parcours artistique et de la reconnaissance de son œuvre au fil des années.`,
};

const bio = {
  name: 'NEVZAT ÇOPUR',
  description: `Qui est Nevzat Çopur ?

Arrivé en Belgique à l'âge de 18 ans pour poursuivre ses études supérieures, Nevzat Çopur étudie de 1982 à 1990 à l'Académie royale des Beaux-Arts de Bruxelles, en dessin et peinture. Il complète ensuite sa formation par une pédagogie à l'Institut technique de Namur (1995-1996), puis en céramique à l'Académie des Beaux-Arts de Saint-Josse.

Depuis 1987, il réalise de nombreuses expositions personnelles et participe à des expositions collectives en Belgique et à l'étranger. En 1990, il reçoit le prix d'excellence de la Ville de Bruxelles en peinture, ainsi qu'un prix avec mention de la société Talens et le premier prix de la fondation Dutrolon De Try. En 1996, il obtient également le prix Van Cutsem pour ses travaux de céramique.

Très engagé dans la vie associative, il anime des ateliers d'initiation à l'art pour les enfants au sein de l'association Bouillon de Cultures de 1988 à 1994. Entre 1996 et 1998, il organise des activités socioculturelles pour les enfants de 6 à 12 ans à la Mission locale d'Anderlecht.

Titulaire d'un diplôme de guide touristique délivré par l'EFP, Nevzat Çopur organise depuis 2017 des excursions et visites guidées dans les principales villes de Belgique.`,
  imageUrl: 'BioPage.jpg',
};

const contact = {
  description: 'Pour des collaborations créatives axées sur l\'art ou plus d\'informations sur une oeuvre, vous pouvez nous contacter par e-mail.'
};

const resolvers = {
  Artwork: {
    imageUrls: (artwork) => artwork.imageUrls || [artwork.imageUrl],
  },
  Query: {
    artworks: (_, { page = 1, limit = 12 }) => {
      const offset = (page - 1) * limit;
      const total = artworks.length;
      const paginatedArtworks = artworks.slice(offset, offset + limit);
      const totalPages = Math.ceil(total / limit);
      
      return {
        artworks: paginatedArtworks,
        total,
        page,
        limit,
        totalPages,
      };
    },
    artwork: (_, { id }) => artworks.find(a => a.id === id),
    bio: () => bio,
    expo_intro: () => expo_intro,
    contact: () => contact,
  },
  Mutation: {
    sendContact: (_, { input }) => {
      console.log('Contact form submitted:', input);
      return true;
    },
    updateArtwork: (_, { input }) => {
      const artwork = artworks.find((a) => a.id === input.id);
      if (!artwork) return null;
      Object.assign(artwork, input);
      return artwork;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });


console.log(`🚀 Server listening at: ${url}`);