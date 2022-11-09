document.addEventListener('DOMContentLoaded', ifLoaded);
function ifLoaded(evt) {
  console.log('log', evt);
  console.log(document.location.pathname);

  const refHeader = document.querySelector('.header');
  const refHeaderMenu = document.querySelector('.navigation');
  const refLibraryBtn = document.querySelector('.my-library-buttons');
  const refSearchForm = document.querySelector('.form-box');

  const activeClass = refHeaderMenu.querySelector('.is-active');

  refHeaderMenu.addEventListener('click', onClickHeaderMenu);

  if (activeClass) {
    activeClass.classList.remove('is-active');
  }

  switch ('/' + document.location.pathname.split('/').pop()) {
    case '/':
      refHeaderMenu
        .querySelector("[data-menu='home']")
        .classList.add('is-active');
      refLibraryBtn.classList.add('is-hidden');
      if (refHeader.classList.contains('library')) {
        refHeader.remove('library');
      }
      if (refSearchForm.classList.contains('is-hidden')) {
        refSearchForm.remove('is-hidden');
      }
      break;

    case '/myLibrary.html':
      refHeaderMenu
        .querySelector("[data-menu='my-library']")
        .classList.add('is-active');
      if (refLibraryBtn.classList.contains('is-hidden')) {
        refLibraryBtn.remove('is-hidden');
      }
      refHeader.classList.add('library');
      refSearchForm.classList.add('is-hidden');
      break;
  }
}

function onClickHeaderMenu(evt) {
  if (
    (evt.target.dataset.menu === 'logo' &&
      document.location.pathname === '/') ||
    (evt.target.dataset.menu === 'logo' &&
      document.location.pathname === '/index.html') ||
    (evt.target.dataset.menu === 'home' &&
      document.location.pathname === '/') ||
    (evt.target.dataset.menu === 'home' &&
      document.location.pathname === '/index.html') ||
    (evt.target.dataset.menu === 'my-library' &&
      document.location.pathname === '/myLibrary.html')
  ) {
    evt.preventDefault();
    return;
  }
  evt.currentTarget.removeEventListener('click', onClickHeaderMenu);
}

//=============================================

// const paths = {
//   home: '/',
//   library: '/myLibrary.html',
// };

// document.addEventListener('DOMContentLoaded', ifLoaded);
// function ifLoaded(evt) {
//   document
//     .querySelector('.navigation')
//     .addEventListener('click', onClickNavigation);

//   setOnPage();
// }

// function onClickNavigation(evt) {
//   evt.preventDefault();

//   console.log(paths.home);
//   const locationPath = document.location.pathname;
//   console.log(locationPath);

//   if (
//     (evt.target.dataset.menu === 'logo' ||
//       evt.target.dataset.menu === 'home') &&
//     locationPath !== '/' &&
//     locationPath !== '/index.html'
//   ) {
//     goToPage(paths.home);
//   }

//   if (
//     evt.target.dataset.menu === 'my-library' &&
//     locationPath !== '/myLibrary.html'
//   ) {
//     goToPage(paths.library);
//   }
// }

// function setOnPage() {
//   document.removeEventListener('DOMContentLoaded', ifLoaded);
//   const activeClass = document.querySelector('.is-active');

//   if (activeClass) {
//     activeClass.classList.remove('is-active');
//   }
//   switch (document.location.pathname) {
//     case paths.home:
//       document.querySelector("[data-menu='home']").classList.add('is-active');
//       // refLibraryBtn.classList.add('is-hidden');
//       // if (refHeader.classList.contains('library')) {
//       //   refHeader.remove('library');
//       // }
//       break;

//     case paths.library:
//       refHeaderMenu
//         .querySelector("[data-menu='my-library']")
//         .classList.add('is-active');
//       // if (refLibraryBtn.classList.contains('is-hidden')) {
//       //   refLibraryBtn.remove('is-hidden');
//       // }
//       // refHeader.classList.add('library');

//       break;
//   }

//   console.log('setOnPage');
// }

// function goToPage(page) {
//   console.log('go to ', page);
//   history.pushState(null, null, page);
//   document.location.reload();
// }

////==================================================
