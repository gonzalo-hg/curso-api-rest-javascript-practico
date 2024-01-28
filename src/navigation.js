searchFormBtn.addEventListener('click', () =>{
    location.hash = '#search=';
});

trendingBtn.addEventListener('click', () =>{
    location.hash = '#trends=';
});

arrowBtn.addEventListener('click', () => {
    location.hash = '#home';
})
window.addEventListener('hashchange', navigator, false);
window.addEventListener('DOMContentLoaded', navigator, false);

function navigator() {
    console.log({ location });

    if (location.hash.startsWith('#trends')) {
        trendsPage();
    } else if (location.hash.startsWith('#search=')) {
        searchPage();
    } else if (location.hash.startsWith('#movie=')) {
        movieDetailsPage();
    } else if (location.hash.startsWith('#category=')) {
        categoriesPage();
    } else {
        homePage();
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // location.hash;
}

function homePage() {
    console.log('Home!!!');
    headerSection.classList.remove('header-container--long');
    headerSection.style.brackground = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerCategoryTitle.classList.add('inactive');
    headerTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('remove');
    categoriesPreviewSection.classList.remove('remove');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    getTrendingMoviesPreview();
    getCategoriesPreview();
}

function searchPage() {
    console.log('Search!');
    headerSection.classList.remove('header-container--long');
    headerSection.style.brackground = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('remove');
    categoriesPreviewSection.classList.add('remove');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
}

function movieDetailsPage() {
    console.log('Movie!');
    headerSection.classList.add('header-container--long');
    // headerSection.style.brackground = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('remove');
    categoriesPreviewSection.classList.add('remove');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
}

function trendsPage() {
    console.log('Estamos en trends');
    headerSection.classList.remove('header-container--long');
    headerSection.style.brackground = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('remove');
    categoriesPreviewSection.classList.add('remove');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
}

function categoriesPage() {
    console.log('Categories!');
    headerSection.classList.add('header-container--long');
    headerSection.style.brackground = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    const [_,categoryData] = location.hash.split('=');
    const [categodyId,categoryName] = categoryData.split('-');

    headerCategoryTitle.innerHTML = categoryName;

    getMoviesByCategory(categodyId);
}