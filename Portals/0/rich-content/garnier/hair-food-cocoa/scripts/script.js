(() => {
  const swiper = new Swiper('#es-rc .es-swiper1', {
    direction: 'horizontal',
    loop: false,

    pagination: {
      el: '#es-rc .es-swiper1-pagination',
    },

    navigation: {
      nextEl: '#es-rc .es-swiper1-button-next',
      prevEl: '#es-rc .es-swiper1-button-prev',
    },
  });

  const swiper2 = new Swiper('#es-rc .es-swiper2', {
    direction: 'horizontal',
    loop: false,

    pagination: {
      el: '#es-rc .es-swiper2-pagination',
    },

    navigation: {
      nextEl: '#es-rc .es-swiper2-button-next',
      prevEl: '#es-rc .es-swiper2-button-prev',
    },
  });
})();
