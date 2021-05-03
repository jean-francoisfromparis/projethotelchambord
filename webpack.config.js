const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        main: path.join(__dirname, "src/index.js"),
        acces: path.join(__dirname, "src/pages/acces/acces.js"),
        actualite: path.join(__dirname, "src/pages/actualite/actualite.js"),
        avis: path.join(__dirname, "src/pages/avis/avis.js"),
        chambre: path.join(__dirname, "src/pages/chambre/chambre.js"),
        cgv: path.join(__dirname, "src/pages/cgv/cgv.js"),
        contact: path.join(__dirname, "src/pages/contact/contact.js"),
        evenements: path.join(__dirname, "src/pages/evenements/evenements.js"),
        hotel: path.join(__dirname, "src/pages/hotel/hotel.js"),
        mentionsLegales: path.join(__dirname, "src/pages/mentions-legales/mentions-legales.js"),
        planDuSite: path.join(__dirname, "src/pages/plan-du-site/plan-du-site.js"),
        presse: path.join(__dirname, "src/pages/presse/presse.js"),
        quiSommesNous: path.join(__dirname, "src/pages/qui-sommes-nous/qui-sommes-nous.js"),
        reservation: path.join(__dirname, "src/pages/reservation/reservation.js"),
        restaurant: path.join(__dirname, "src/pages/restaurant/restaurant.js"),
        spaSoins: path.join(__dirname, "src/pages/spa-soins/spa-soins.js"),
        // Component
        footer: path.join(__dirname, "src/asset/component/footer/footer.js"),
        navbarLeft: path.join(__dirname, "src/asset/component/navbar-left/navbar-left.js"),
        navbarTop: path.join(__dirname, "src/asset/component/navbar-top/navbar-top.js"),
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /(node_modules)/,
                use: ["babel-loader"],
            },
            {
                test: /\.scss$/i,
                use: [{
                    // inject CSS to page
                    loader: 'style-loader'
                }, {
                    // translates CSS into CommonJS modules
                    loader: 'css-loader'
                }, {
                    // Run postcss actions
                    loader: 'postcss-loader',
                    options: {
                        // `postcssOptions` is needed for postcss 8.x;
                        // if you use postcss 7.x skip the key
                        postcssOptions: {
                            // postcss plugins, can be exported to postcss.config.js
                            plugins: function () {
                                return [
                                    require('autoprefixer'),
                                    require('postcss-nested')
                                ];
                            }
                        }
                    }
                }, {
                    // compiles Sass to CSS
                    loader: 'sass-loader'
                }],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/asset/images/*",
                    to: 'asset/images/[name][ext]',
                },
                {
                    from: "./src/asset/images/accueil/*",
                    to: 'asset/images/accueil/[name][ext]',
                },
                {
                    from: "./src/asset/images/hotel/*",
                    to: 'asset/images/hotel/[name][ext]',
                },
                {
                    from: "./src/asset/images/restaurant/*",
                    to: 'asset/images/restaurant/[name][ext]',
                },
                {
                    from: "./src/asset/images/spa/*",
                    to: 'asset/images/spa/[name][ext]',
                },
                {
                    from: "./src/asset/images/presse/*",
                    to: 'asset/images/presse/[name][ext]',
                },
            ],
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: "Accueil | Hôtel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France ",
            meta: {title: "Hôtel Palace CHAMBORD ***** 1 Avenue Montaigne - Paris, France",
                    description: `Le CHAMBORD Hôtel Palace ***** a toujours représenté la quintessence de Luxe parisien
                    dans un style Art Déco depuis 1919. Au centre du Triangle d'Or au 1er de l'avenue Montaigne, nous
                    vous offrons avec notre équipe les plus belles aventures pour profiter de la capitale et 
                    faire de votre séjour parisien un moment inoubliable`,
                    keywords:`Authenticité, Luxe, arts deco, adresse, Triangle d'Or, Hôtel Palace, 5, étoiles, 5 étoiles
                    étoile, exception, bien-être, expérience d'exception, amazing`,
            },
            template: path.join(__dirname, "./src/index.html"),
            chunks: ["main", "footer", "navbarLeft", "navbarTop"]
        }),
        new HtmlWebpackPlugin({
            filename: "acces.html",
            title: "Accès | Hôtel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "Hôtel Palace CHAMBORD ***** 1 Avenue Montaigne - Paris, France",
                    description: ` Au centre du Triangle d'Or au 1er de l'avenue Montaigne,
                    nous vous offrons de découvrir le coeur de la capitale, a proximité des 
                    lieux iconiques que sont la Tour Eiffel, l'Arc de Triomphe les Champs Elysées
                    et le musée du Louvre.      `,
                    keywords:`Authenticité, Luxe, arts deco, adresse, Triangle d'Or, Hôtel Palace, 5, étoiles, 5 étoiles
                    étoile, exception, bien-être, expérience d'exception, amazing, Tour Eiffel, Avenue Montaigne
                    , Champs Elysées, Arc de Triomphe, Musée du Louvre`,
            },
            template: path.join(__dirname, "./src/pages/acces/acces.html"),
            chunks: ["acces", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "actualite.html",
            title: "Actualité | Hôtel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "Suivez toute l'actualité ave Hôtel Palace ***** 1 Avenue Montaigne - Paris, France",
                    description: ` L'actualité du luxe à la française et de l'exclusivité se lit sur notre fil. `,
                    keywords:`Authenticité, Luxe, arts deco, adresse, Triangle d'Or, Hôtel Palace, 5, étoiles, 5 étoiles
                    étoile, exception, bien-être, expérience d'exception, amazing, Tour Eiffel, Avenue Montaigne, 
                    Champs Elysées, Arc de Triomphe, Musée du Louvre`,
            },
            template: path.join(__dirname, "./src/pages/actualite/actualite.html"),
            chunks: ["actualite", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "avis.html",
            title: "Avis | Hôtel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "Hôtel Palace CHAMBORD ***** 1 Avenue Montaigne - Paris, France",
                   description: ` Venez partager votre expérience de l'excellence sur notre mur d'avis.`,
                   keywords:`Authenticité, Luxe, arts deco, adresse, Triangle d'Or, Hôtel Palace, 5, étoiles, 5 étoiles
                    étoile, exception, bien-être, expérience d'exception, amazing, Tour Eiffel, Avenue Montaigne, 
                    Champs Elysées, Arc de Triomphe, Musée du Louvre, Avis`,
            },
            template: path.join(__dirname, "./src/pages/avis/avis.html"),
            chunks: ["avis", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "chambre.html",
            title: "Chambres | Hôtel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "Découvrez nos chambres - Hôtel Palace ***** 1 Avenue Montaigne - Paris, France",
                description: ` Elégance, chic, patrimoine ; tout ce qui rend Paris spécial se reflète dans nos chambres 
                    et suites. Faites l'expérience d'un luxe contemporain exceptionnel dans l'un des hôtels les plus historiques 
                    de la ville, où la tradition se fond harmonieusement avec la technologie moderne et le confort.  `,
                keywords:`Authenticité, Luxe, arts deco, adresse, Triangle d'Or, Hôtel Palace, 5, étoiles, 5 étoiles
                    étoile, exception, bien-être, expérience d'exception, amazing, Chambre, classique, confort, Deluxe, suite`,
            },
            template: path.join(__dirname, "./src/pages/chambre/chambre.html"),
            chunks: ["chambre", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "cgv.html",
            title: "CGV | Hôtel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "Condition des vente - Hôtel Palace ***** 1 Avenue Montaigne - Paris, France",
                    description: ` Description des services, parcours de réservation, Prix et paiement,
                        Enregistrement en ligne, Annulation, Engagement et responsabilité du client, 
                        Engagement et responsabilité de l'Hôtel CHAMBORD, Force majeur et délogement, Contact, Service Client et réclamations,
                        Données à caractère personnelle, Loi applicable et réglement des litiges,`,
                    keywords:`Description des services, Prix et paiement, Annulation, responsabilité du client, Loi applicable et réglement des litiges`,
            },
            template: path.join(__dirname, "./src/pages/cgv/cgv.html"),
            chunks: ["cgv", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "contact.html",
            title: "Contact | Hôtel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "Contact | Hôtel Palace CHAMBORD ***** 1 Avenue Montaigne - Paris, France",
                description: ` 
                contact : 
                tel : +33 5555 5555 5555,
                fax : +33 5555 5555 5555,
                email : serviceclient@HotelChambord.com,
                adresse : 1 Avenue Montaigne - Paris, France`,
                keywords:`Telephone, fax:, email, serviceclient@HotelChambord.com, 1 Avenue Montaigne, Paris, Champs Elysées `,
            },
            template: path.join(__dirname, "./src/pages/contact/contact.html"),
            chunks: ["contact", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "evenements.html",
            title: "Evènement| Hôtel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "Evénement - Hôtel Palace CHAMBORD ***** 1 Avenue Montaigne - Paris, France",
                description: ` Mariage, baptème, anniversaire, séminaire, festival`,
                keywords:`Mariage, baptème, anniversaire, séminaire, festival, Authenticité, Luxe, arts deco, adresse, Triangle d'Or, Hôtel Palace, 5, étoiles, 5 étoiles
            étoile, exception, bien-être, expérience d'exception, amazing, Chambre, classique, confort, Deluxe, suite`,
            },          template: path.join(__dirname, "./src/pages/evenements/evenements.html"),
            chunks: ["evenements", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "hotel.html",
            title: "Hôtel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "Hôtel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France| Accueil",
                description: `Histoire de l'Hôtel`,
                keywords:`Authenticité, Luxe, arts deco, adresse, Triangle d'Or, Hôtel Palace, 5, étoiles, 5 étoiles
                    étoile, exception, bien-être, expérience d'exception, amazing`,
            },
            template: path.join(__dirname, "./src/pages/hotel/hotel.html"),
            chunks: ["hotel", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "mentions-legales.html",
            title: "Mentions-Legales | Hôtel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "Mentions-Legales - Hôtel Palace CHAMBORD ***** 1 Avenue Montaigne - Paris, France",
                    description: ` Description des services, parcours de réservation, Prix et paiement,
                            Enregistrement en ligne, Annulation, Engagement et responsabilité du client, 
                            Engagement et responsabilité de l'Hôtel CHAMBORD, Force majeur et délogement, 
                            Contact, Service Client et réclamations,
                            Données à caractère personnelle, Loi applicable et réglement des litiges,`,
                    keywords:`Mention légales, Description des services, Prix et paiement, Annulation, responsabilité du client, Loi applicable et réglement des litiges`,
            },
            template: path.join(__dirname, "./src/pages/mentions-legales/mentions-legales.html"),
            chunks: ["mentionsLegales", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "plan-du-site.html",
            title: "Plan du site | Hôtel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "sitemap - plan du site",
                description: `tout les liens de notre sites est ici`,
                keywords:`sitemap, plan du site, Luxe, arts deco, adresse, Triangle d'Or, Hôtel Palace, 5, étoiles, 5 étoiles
                    étoile, exception, bien-être, expérience d'exception, amazing, Tour Eiffel, Avenue Montaigne, 
                    Champs Elysées, Arc de Triomphe, Musée du Louvre`,
            },
            template: path.join(__dirname, "./src/pages/plan-du-site/plan-du-site.html"),
            chunks: ["planDuSite", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "presse.html",
            title: "Presse | Hôtel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "What's news ? Hôtel Palace CHAMBORD ***** 1 Avenue Montaigne - Paris, France",
                description: `L'actualité du luxe à la française et de l'exclusivité se lit sur notre fil.`,
                keywords:`Authenticité, Luxe, arts deco, adresse, Triangle d'Or, Hôtel Palace, 5, étoiles, 5 étoiles
                    étoile, exception, bien-être, expérience d'exception, amazing, Tour Eiffel, Avenue Montaigne, 
                    Champs Elysées, Arc de Triomphe, Musée du Louvre`,
            },
            template: path.join(__dirname, "./src/pages/presse/presse.html"),
            chunks: ["presse", "footer", "navbarLeft","navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "qui-sommes-nous.html",
            title: "Qui-sommes-nous ? | Hôtel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "Qui-sommes-nous ? - Hôtel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France| Accueil",
                description: `Le style Art Déco de l'Hôtel CHAMBORD a été dessiné par l'architecte star des années d'après-guerre Jean Duchauzel  du style Art Déco`,
                keywords:`Authenticité, Luxe, arts deco, adresse, Triangle d'Or, Hôtel Palace, 5, étoiles, 5 étoiles
                    étoile, exception, bien-être, expérience d'exception, amazing`,
            },
            template: path.join(__dirname, "./src/pages/qui-sommes-nous/qui-sommes-nous.html"),
            chunks: ["quiSommesNous", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "reservation.html",
            title: "Reservation | Hôtel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "Reservez votre séjour a l'Hôtel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France| Accueil",
                description: `Faites les reservations de vortre séjour dès aujourd'hui avec notre espace de reservation en ligne`,
                keywords:`Réservation, réserver, reserve, book, booking, Authenticité, Luxe, arts deco, adresse, Triangle d'Or, Hôtel Palace, 5, étoiles, 5 étoiles
                    étoile, exception, bien-être, expérience d'exception, amazing`,
            },
            template: path.join(__dirname, "./src/pages/reservation/reservation.html"),
            chunks: ["reservation", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "restaurant.html",
            title: "Restaurant | Hôtel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: `Restaurant Gastronomique Le CHAMBORD - Brasserie Art Déco - Salon de Thé Dégustation Plaîsir`,
                description: `L’établissement, lieu cher aux Parisiens et aux voyageurs depuis plus de 100 ans, 
                    propose une expérience d’exception au cœur de la Ville Lumière. 
                    L’hôtel Palace CHAMBORD présente une offre de restauration raffinée, riche de l’héritage culinaire 
                    de l’établissement qui a vu officier les plus grands chefs héritiers de la tradition du Maître Auguste Escoffier. 
                    Au cœur de la célèbre Brasserie Art-Déco, vous pourrez profiter du savoir-faire exceptionnel de nos équipes. 
                    Le CHAMBORD accueille ses convives sous son décor unique pour les dîners gastronomique. 
                    Et le Salon sert les petits-déjeuners et les dégustations d’après-midi durant la semaine ainsi qu’un brunch 
                    gourmet le weekend. `,
                keywords:`Authenticité, Luxe, arts deco, adresse, Triangle d'Or, restauration, Master class, premium, unique, exception, bien-être, expérience d'exception, amazing`,
            },
            template: path.join(__dirname, "./src/pages/restaurant/restaurant.html"),
            chunks: ["restaurant", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "spa-soins.html",
            title: "Soins et SPA | Hôtel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: `Le SPA "Le Jardin des Hespérides"`,
                description: `Le Spa de l'Hôtel Palace CHAMBORD "Le Jardin de Hespérides" luxueux écrin de 700 m2, 
                    dévoile son approche unique basée sur les quatre éléments : air, terre, eau et feu. Le Spa s’est entouré 
                    de marques expertes pour faire du lieu une référence de qualité et offrir une sélection de soins et 
                    de programmes issus des dernières avancées dans les domaines du bien-être, de la beauté, de la nutrition 
                    et de la forme. Se basant sur une prise en charge totale du corps et de l’esprit.  `,
                keywords:`Authenticité, Luxe, arts deco, bien-être, soin, beauté, coiffure, Fitness, coach fitness, Triangle d'Or, Master class, premium, unique, exception, expérience émotionnelle, 
                    effet whaoo, whaoo effect,amazing`,},
            template: path.join(__dirname, "./src/pages/spa-soins/spa-soins.html"),
            chunks: ["spaSoins", "footer", "navbarLeft", "navbarTop"],
        }),
    ],
    stats: "minimal",
    devtool: "source-map",
    mode: "development",
    devServer: {
        open: false,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        inline: true,
        port: 9000,
    },
};