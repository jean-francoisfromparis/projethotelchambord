module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                useBuiltIns: "usage",
                // debug: true,
                corejs: 3,
                targets: "> 2.5%, not dead"
            }
        ]
    ]
};