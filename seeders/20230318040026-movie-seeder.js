'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addMovies = [
      {
        title: "Hunter X Hunter",
        url: "https://www.imdb.com/title/tt2098220/",
        image: "https://c4.wallpaperflare.com/wallpaper/410/178/349/anime-hunter-x-hunter-gon-css-killua-zoldyck-hd-wallpaper-preview.jpg",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Naruto Shippuden",
        url: "https://www.imdb.com/title/tt0988824/?ref_=fn_al_tt_2",
        image: "https://c4.wallpaperflare.com/wallpaper/414/432/59/uchiha-sasuke-naruto-shippuden-uchiha-itachi-1366x768-anime-naruto-hd-art-wallpaper-preview.jpg",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Yuyu Hakusho",
        url: "https://www.imdb.com/title/tt0988824/?ref_=fn_al_tt_2",
        image: "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2021/11/13/3756359373.jpg",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    return queryInterface.bulkInsert('Movies', addMovies, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
