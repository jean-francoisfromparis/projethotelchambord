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
        footer: path.join(__dirname, "src/assets/component/footer/footer.js"),
        navbarLeft: path.join(__dirname, "src/assets/component/navbar-left/navbar-left.js"),
        navbarTop: path.join(__dirname, "src/assets/component/navbar-top/navbar-top.js"),
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
                                    require('autoprefixer')
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
                type: 'assets/images',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'assets/resource',
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/assets/images/*",
                    to: 'assets/images/[name].[ext]',
                },
            ],
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: "Hôtel | Accueil",
            meta: {title: "Hôtel | Accueil"},
            template: path.join(__dirname, "./src/index.html"),
            chunks: ["main", "footer", "navbarLeft", "navbarTop"]
        }),
        new HtmlWebpackPlugin({
            filename: "acces.html",
            template: path.join(__dirname, "./src/pages/acces/acces.html"),
            chunks: ["acces", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "actualite.html",
            template: path.join(__dirname, "./src/pages/actualite/actualite.html"),
            chunks: ["actualite", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "avis.html",
            template: path.join(__dirname, "./src/pages/avis/avis.html"),
            chunks: ["avis", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "chambre.html",
            template: path.join(__dirname, "./src/pages/chambre/chambre.html"),
            chunks: ["chambre", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "cgv.html",
            template: path.join(__dirname, "./src/pages/cgv/cgv.html"),
            chunks: ["cgv", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "contact.html",
            template: path.join(__dirname, "./src/pages/contact/contact.html"),
            chunks: ["contact", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "evenements.html",
            template: path.join(__dirname, "./src/pages/evenements/evenements.html"),
            chunks: ["evenements", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "hotel.html",
            template: path.join(__dirname, "./src/pages/hotel/hotel.html"),
            chunks: ["hotel", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "mentions-legales.html",
            template: path.join(__dirname, "./src/pages/mentions-legales/mentions-legales.html"),
            chunks: ["mentionsLegales", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "plan-du-site.html",
            template: path.join(__dirname, "./src/pages/plan-du-site/plan-du-site.html"),
            chunks: ["planDuSite", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "presse.html",
            template: path.join(__dirname, "./src/pages/presse/presse.html"),
            chunks: ["presse", "footer", "navbarLeft","navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "qui-sommes-nous.html",
            template: path.join(__dirname, "./src/pages/qui-sommes-nous/qui-sommes-nous.html"),
            chunks: ["quiSommesNous", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "reservation.html",
            template: path.join(__dirname, "./src/pages/reservation/reservation.html"),
            chunks: ["reservation", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "restaurant.html",
            template: path.join(__dirname, "./src/pages/restaurant/restaurant.html"),
            chunks: ["restaurant", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            filename: "spa-soins.html",
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