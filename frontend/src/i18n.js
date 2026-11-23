import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      artistName: 'NEVZAT ÇOPUR',
      home: 'Home',
      artworks: 'Artworks',
      bio: 'Bio',
      contact: 'Contact',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      description: 'Born in Eskisehir (Turkey) on March 26, 1961, after studying fine arts, he began training in education and social work. He has lived and worked in Belgium since 1979 in graphic design.',
      backToArtworks: '← Back to Artworks',
      homePage: {
        bioName: 'NEVZAT ÇOPUR',
        bioDescription: 'Nevzat Çopur arrived in Belgium at the age of 18 to pursue his higher education. From 1982 to 1990, he studied drawing and painting at the Royal Academy of Fine Arts in Brussels. He then completed his training with a course in art education at the Technical Institute of Namur (1995–1996), followed by a course in ceramics at the Academy of Fine Arts in Saint-Josse. Since 1987, he has held numerous solo exhibitions and participated in group exhibitions in Belgium and abroad. In 1990, he received the City of Brussels Award for Excellence in Painting, as well as an honorable mention from the Talens Society and first prize from the Dutrolon De Try Foundation. In 1996, he also received the Van Cutsem Prize for his ceramic work. Deeply involved in community life, he led introductory art workshops for children through the Bouillon de Cultures association from 1988 to 1994. Between 1996 and 1998, he organized sociocultural activities for children ages 6 to 12 at the Mission Locale d’Anderlecht. A certified tour guide, Nevzat Çopur has been organizing excursions and guided tours in Belgium’s major cities since 2017.',
        expoHeading: 'EXHIBITIONS',
        expoIntro: 'Since the beginning of his career, Nevzat Çopur has regularly exhibited his work in Belgium and abroad. Through numerous solo and group exhibitions, he shares an artistic universe in which painting, drawing, and ceramics engage in a dialogue around themes related to humanity, memory, and cultural diversity. This selection of exhibitions reflects the evolution of his artistic journey and the recognition his work has received over the years.',
      },
      exhibitions: {
        personal2023: { title: 'Personal Exhibition 2023', description: 'A captivating exploration of contemporary forms and textures, presenting a selection of major works from 2023.' },
        modernGallery: { title: 'ETCA', description: 'ETCA (European Turkish Contemporary Artists) is an independent art collective consisting of 41 professional artists working in a wide range of disciplines in Europe.' },
        contemporaryArt: { title: 'Contemporary Art', description: 'A journey into contemporary artistic worlds where mixed techniques and visual innovation are highlighted.' },
        internationalArtSalon: { title: 'International Art Salon', description: 'A major salon bringing together artists and art lovers from around the world.' },
        collectiveExhibition: { title: 'Collective Exhibition', description: 'A collaborative exhibition highlighting works from several artists through a visual dialogue of different perspectives.' },
        contemporaryGallery: { title: 'Contemporary Gallery', description: 'A space dedicated to the boldest contemporary creations, pushing the limits of traditional art.' },
      },
      exhibitionDetail: {
        notFound: 'Exhibition not found',
        backToHome: '← Back to home',
        backToExhibitions: 'Back to exhibitions',
        artworksHeading: 'Exhibited works',
      },
      artworkDetail: {
        labels: {
          year: 'Year:',
          technique: 'Technique:',
          dimensions: 'Dimensions:',
          description: 'Description:'
        },
        loading: 'Loading...',
        error: 'Error:'
      },
      artworkDetails: {
        '1': { title: 'Artwork 1', description: 'A contemporary piece exploring light and shadow.' },
        '2': { title: 'Artwork 2', description: 'An expressive study in color and form.' },
        '3': { title: 'Artwork 3', description: 'Layered textures and digital elements.' },
        '4': { title: 'Artwork 4', description: 'A large-scale work on identity.' },
        '5': { title: 'Artwork 5', description: 'Exploring the boundaries of perception.' },
        '6': { title: 'Artwork 6', description: 'A meditation on transition and change.' },
        '7': { title: 'Artwork 7', description: 'Contemporary digital expression.' },
        '8': { title: 'Artwork 8', description: 'Abstract composition with bold colors.' },
        '9': { title: 'Artwork 9', description: 'Intimate portrait study.' },
        '10': { title: 'Artwork 10', description: 'Conceptual exploration.' },
      },
      contactPage: {
        intro: 'For creative collaborations focused on art or for more information about a work, you can contact us by email.'
      }
    }
  },
  fr: {
    translation: {
      artistName: 'NEVZAT ÇOPUR',
      home: 'Accueil',
      artworks: 'Œuvres',
      bio: 'Bio',
      contact: 'Contact',
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'E-mail',
      message: 'Message',
      send: 'Envoyer',
      description: 'Né à Eskisehir (Turquie) le 26 mars 1961, Après des études en arts plastiques,\n il entame une formation pédagogique et sociale. Il vit et travaille en Belgique depuis 1979 dans le design graphique.',
      backToArtworks: '← Retour aux œuvres',
      homePage: {
        bioName: 'NEVZAT ÇOPUR',
        bioDescription: 'Arrivé en Belgique à l\'âge de 18 ans pour poursuivre ses études supérieures, Nevzat Çopur étudie de 1982 à 1990 à l\'Académie royale des Beaux-Arts de Bruxelles, en dessin et peinture. Il complète ensuite sa formation par une pédagogie à l\'Institut technique de Namur (1995-1996), puis en céramique à l\'Académie des Beaux-Arts de Saint-Josse. Depuis 1987, il réalise de nombreuses expositions personnelles et participe à des expositions collectives en Belgique et à l\'étranger. En 1990, il reçoit le prix d\'excellence de la Ville de Bruxelles en peinture, ainsi qu\'un prix avec mention de la société Talens et le premier prix de la fondation Dutrolon De Try. En 1996, il obtient également le prix Van Cutsem pour ses travaux de céramique. Très engagé dans la vie associative, il anime des ateliers d\'initiation à l\'art pour les enfants au sein de l\'association Bouillon de Cultures de 1988 à 1994. Entre 1996 et 1998, il organise des activités socioculturelles pour les enfants de 6 à 12 ans à la Mission locale d\'Anderlecht. Titulaire d\'un diplôme de guide touristique, Nevzat Çopur organise depuis 2017 des excursions et visites guidées dans les principales villes de Belgique.',
        expoHeading: 'EXPOSITIONS',
        expoIntro: 'Depuis le début de sa carrière, Nevzat Çopur présente régulièrement son travail en Belgique et à l\'étranger. À travers de nombreuses expositions personnelles et collectives, il partage un univers artistique où peinture, dessin et céramique dialoguent autour de thèmes liés à l\'humanité, à la mémoire et à la diversité culturelle. Cette sélection d\'expositions témoigne de l\'évolution de son parcours artistique et de la reconnaissance de son œuvre au fil des années.',
      },
      exhibitions: {
        personal2023: { title: 'Exposition Personnelle 2023', description: 'Une exploration captivante des formes et textures contemporaines, présentant une sélection d’œuvres majeures de 2023.' },
        modernGallery: { title: 'ETCA', description: 'ETCA (European Turkish Contemporary Artists) is an independent art collective consisting of 41 professional artists working in a wide range of disciplines in Europe.' },
        contemporaryArt: { title: 'Art Contemporain', description: 'Un voyage au cœur des mondes artistiques contemporains où les techniques mixtes et l’innovation visuelle sont mises en avant.' },
        internationalArtSalon: { title: 'Salon d’Art International', description: 'Un grand salon réunissant artistes et amateurs d’art du monde entier.' },
        collectiveExhibition: { title: 'Exposition Collective', description: 'Une exposition collaborative mettant en lumière des œuvres de plusieurs artistes à travers un dialogue visuel de perspectives différentes.' },
        contemporaryGallery: { title: 'Galerie Contemporaine', description: 'Un espace dédié aux créations contemporaines les plus audacieuses, repoussant les limites de l’art traditionnel.' },
      },
      exhibitionDetail: {
        notFound: 'Exposition non trouvée',
        backToHome: '← Retour à l’accueil',
        backToExhibitions: 'Retour aux expositions',
        artworksHeading: 'Œuvres exposées',
      },
      artworkDetail: {
        labels: {
          year: 'Année :',
          technique: 'Technique :',
          dimensions: 'Dimensions :',
          description: 'Description :'
        },
        loading: 'Chargement...',
        error: 'Erreur :'
      },
      artworkDetails: {
        '1': { title: 'Œuvre 1', description: 'Une œuvre contemporaine explorant la lumière et l’ombre.' },
        '2': { title: 'Œuvre 2', description: 'Une étude expressive de la couleur et de la forme.' },
        '3': { title: 'Œuvre 3', description: 'Des textures superposées et des éléments numériques.' },
        '4': { title: 'Œuvre 4', description: 'Un travail de grande envergure sur l’identité.' },
        '5': { title: 'Œuvre 5', description: 'Explorer les limites de la perception.' },
        '6': { title: 'Œuvre 6', description: 'Une méditation sur la transition et le changement.' },
        '7': { title: 'Œuvre 7', description: 'Expression numérique contemporaine.' },
        '8': { title: 'Œuvre 8', description: 'Composition abstraite aux couleurs vives.' },
        '9': { title: 'Œuvre 9', description: 'Étude de portrait intime.' },
        '10': { title: 'Œuvre 10', description: 'Exploration conceptuelle.' },
      },
      contactPage: {
        intro: 'Pour des collaborations créatives axées sur l’art ou pour plus d’informations sur une œuvre, vous pouvez nous contacter par e-mail.'
      }
    }
  },
  tr: {
    translation: {
      artistName: 'NEVZAT ÇOPUR',
      home: 'Ana Sayfa',
      artworks: 'Sanat Eserleri',
      bio: 'Biyografi',
      contact: 'İletişim',
      firstName: 'Ad',
      lastName: 'Soyad',
      email: 'E-posta',
      message: 'Mesaj',
      send: 'Gönder',
      description: '26 Mart 1961\'de Eskişehir\'de doğdu. Güzel sanatlar eğitimi aldıktan sonra, eğitim ve sosyal alanda çalışmaya başladı. 1979\'dan beri Belçika\'da yaşıyor ve grafik tasarım alanında çalışıyor.',
      backToArtworks: '← Sanat Eserlerine Geri Dön',
      homePage: {
        bioName: 'NEVZAT ÇOPUR',
        bioDescription: 'Yüksek öğrenimini sürdürmek üzere 18 yaşında Belçika’ya gelen Nevzat Çopur, 1982-1990 yılları arasında Brüksel Kraliyet Güzel Sanatlar Akademisi’nde çizim ve resim eğitimi aldı. Daha sonra Namur Teknik Enstitüsü’nde (1995-1996) pedagoji eğitimi aldı ve ardından Saint-Josse Güzel Sanatlar Akademisi’nde seramik eğitimi tamamladı. 1987’den bu yana, Belçika’da ve yurtdışında çok sayıda kişisel sergi açmış ve karma sergilere katılmıştır. 1990 yılında Brüksel Belediyesi’nden resim dalında mükemmellik ödülünü, Talens şirketinden özel mansiyon ödülünü ve Dutrolon De Try Vakfı’ndan birincilik ödülünü almıştır. 1996 yılında ise seramik çalışmalarıyla Van Cutsem ödülünü kazanmıştır. Dernek faaliyetlerine aktif olarak katılan sanatçı, 1988\'den 1994\'e kadar Bouillon de Cultures derneğinde çocuklar için sanat tanıtım atölyeleri düzenlemiştir. 1996 ile 1998 yılları arasında ise Anderlecht Yerel Misyonu\'nda 6 ila 12 yaş arası çocuklar için sosyokültürel etkinlikler organize etmiştir. Tur rehberliği diplomasına sahip olan Nevzat Çopur, 2017 yılından bu yana Belçika’nın başlıca şehirlerinde geziler ve rehberli turlar düzenlemektedir.',
        expoHeading: 'SERGİLER',
        expoIntro: 'Nevzat Çopur, kariyerinin başlangıcından bu yana çalışmalarını Belçika’da ve yurtdışında düzenli olarak sergiliyor. Çok sayıda kişisel ve karma sergi aracılığıyla, resim, çizim ve seramiğin insanlık, hafıza ve kültürel çeşitlilikle ilgili temalar etrafında diyalog kurduğu bir sanatsal evreni izleyicilerle paylaşıyor. Bu sergi seçkisi, sanatçının sanatsal yolculuğundaki gelişimi ve yıllar içinde eserlerinin kazandığı takdiri gözler önüne seriyor.',
      },
      exhibitions: {
        personal2023: { title: 'Kişisel Sergi 2023', description: '2023 yılına ait önemli eserlerin seçildiği, çağdaş biçim ve dokuların etkileyici bir keşfi.' },
        modernGallery: { title: 'ETCA', description: 'ETCA (European Turkish Contemporary Artists) is an independent art collective consisting of 41 professional artists working in a wide range of disciplines in Europe.' },
        contemporaryArt: { title: 'Çağdaş Sanat', description: 'Karışık tekniklerin ve görsel yeniliğin öne çıktığı çağdaş sanat dünyalarına yolculuk.' },
        internationalArtSalon: { title: 'Uluslararası Sanat Salonu', description: 'Dünyanın dört bir yanından sanatçıları ve sanatseverleri bir araya getiren büyük bir salon.' },
        collectiveExhibition: { title: 'Kolektif Sergi', description: 'Birbirinden farklı bakış açıları arasında görsel bir diyalog oluşturarak birkaç sanatçının eserlerini öne çıkaran ortak bir sergi.' },
        contemporaryGallery: { title: 'Çağdaş Galeri', description: 'Geleneksel sanatın sınırlarını zorlayan en cesur çağdaş yaratımlarına adanmış bir alan.' },
      },
      exhibitionDetail: {
        notFound: 'Sergi bulunamadı',
        backToHome: '← Ana sayfaya dön',
        backToExhibitions: 'Sergilere dön',
        artworksHeading: 'Sergilenen eserler',
      },
      artworkDetail: {
        labels: {
          year: 'Yıl:',
          technique: 'Teknik:',
          dimensions: 'Boyutlar:',
          description: 'Açıklama:'
        },
        loading: 'Yükleniyor...',
        error: 'Hata:'
      },
      artworkDetails: {
        '1': { title: 'Eser 1', description: 'Işık ve gölgenin keşfedildiği çağdaş bir eser.' },
        '2': { title: 'Eser 2', description: 'Renk ve form üzerine ifade dolu bir çalışma.' },
        '3': { title: 'Eser 3', description: 'Katmanlı dokular ve dijital unsurlar.' },
        '4': { title: 'Eser 4', description: 'Kimlik üzerine geniş ölçekli bir çalışma.' },
        '5': { title: 'Eser 5', description: 'Algının sınırlarını keşfetmek.' },
        '6': { title: 'Eser 6', description: 'Geçiş ve değişim üzerine bir meditasyon.' },
        '7': { title: 'Eser 7', description: 'Çağdaş dijital ifade.' },
        '8': { title: 'Eser 8', description: 'Canlı renklerle soyut kompozisyon.' },
        '9': { title: 'Eser 9', description: 'Samimi portre çalışması.' },
        '10': { title: 'Eser 10', description: 'Kavramsal keşif.' },
      },
      contactPage: {
        intro: 'Sanata odaklı yaratıcı iş birlikleri veya bir eser hakkında daha fazla bilgi için e-posta yoluyla bizimle iletişime geçebilirsiniz.'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Langue par défaut
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;