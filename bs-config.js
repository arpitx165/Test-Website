module.exports = {
    port: Number.parseInt(process.env.PORT) || 8000,
    files: ['./**/*.{html,htm,css,js}'],
    server:{
        baseDir: "./"
    }
};
