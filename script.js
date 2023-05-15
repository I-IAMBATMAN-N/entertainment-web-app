"use strict";

const movies = [
  {
    title: "Beyond Earth",
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/beyond-earth/trending/small.jpg",
        large: "./assets/thumbnails/beyond-earth/trending/large.jpg",
      },
      regular: {
        small: "./assets/thumbnails/beyond-earth/regular/small.jpg",
        medium: "./assets/thumbnails/beyond-earth/regular/medium.jpg",
        large: "./assets/thumbnails/beyond-earth/regular/large.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Bottom Gear",
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/bottom-gear/trending/small.jpg",
        large: "./assets/thumbnails/bottom-gear/trending/large.jpg",
      },
      regular: {
        small: "./assets/thumbnails/bottom-gear/regular/small.jpg",
        medium: "./assets/thumbnails/bottom-gear/regular/medium.jpg",
        large: "./assets/thumbnails/bottom-gear/regular/large.jpg",
      },
    },
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Undiscovered Cities",
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/undiscovered-cities/trending/small.jpg",
        large: "./assets/thumbnails/undiscovered-cities/trending/large.jpg",
      },
      regular: {
        small: "./assets/thumbnails/undiscovered-cities/regular/small.jpg",
        medium: "./assets/thumbnails/undiscovered-cities/regular/medium.jpg",
        large: "./assets/thumbnails/undiscovered-cities/regular/large.jpg",
      },
    },
    year: 2019,
    category: "TV Series",
    rating: "E",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "1998",
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/1998/trending/small.jpg",
        large: "./assets/thumbnails/1998/trending/large.jpg",
      },
      regular: {
        small: "./assets/thumbnails/1998/regular/small.jpg",
        medium: "./assets/thumbnails/1998/regular/medium.jpg",
        large: "./assets/thumbnails/1998/regular/large.jpg",
      },
    },
    year: 2021,
    category: "Movie",
    rating: "18+",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Dark Side of the Moon",
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/dark-side-of-the-moon/trending/small.jpg",
        large: "./assets/thumbnails/dark-side-of-the-moon/trending/large.jpg",
      },
      regular: {
        small: "./assets/thumbnails/dark-side-of-the-moon/regular/small.jpg",
        medium: "./assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg",
        large: "./assets/thumbnails/dark-side-of-the-moon/regular/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: true,
    isTrending: true,
  },
  {
    title: "The Great Lands",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-great-lands/regular/small.jpg",
        medium: "./assets/thumbnails/the-great-lands/regular/medium.jpg",
        large: "./assets/thumbnails/the-great-lands/regular/large.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "The Diary",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-diary/regular/small.jpg",
        medium: "./assets/thumbnails/the-diary/regular/medium.jpg",
        large: "./assets/thumbnails/the-diary/regular/large.jpg",
      },
    },
    year: 2019,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Earth’s Untouched",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/earths-untouched/regular/small.jpg",
        medium: "./assets/thumbnails/earths-untouched/regular/medium.jpg",
        large: "./assets/thumbnails/earths-untouched/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false,
  },
  {
    title: "No Land Beyond",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/no-land-beyond/regular/small.jpg",
        medium: "./assets/thumbnails/no-land-beyond/regular/medium.jpg",
        large: "./assets/thumbnails/no-land-beyond/regular/large.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "During the Hunt",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/during-the-hunt/regular/small.jpg",
        medium: "./assets/thumbnails/during-the-hunt/regular/medium.jpg",
        large: "./assets/thumbnails/during-the-hunt/regular/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Autosport the Series",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/autosport-the-series/regular/small.jpg",
        medium: "./assets/thumbnails/autosport-the-series/regular/medium.jpg",
        large: "./assets/thumbnails/autosport-the-series/regular/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Same Answer II",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/same-answer-2/regular/small.jpg",
        medium: "./assets/thumbnails/same-answer-2/regular/medium.jpg",
        large: "./assets/thumbnails/same-answer-2/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Below Echo",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/below-echo/regular/small.jpg",
        medium: "./assets/thumbnails/below-echo/regular/medium.jpg",
        large: "./assets/thumbnails/below-echo/regular/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "The Rockies",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-rockies/regular/small.jpg",
        medium: "./assets/thumbnails/the-rockies/regular/medium.jpg",
        large: "./assets/thumbnails/the-rockies/regular/large.jpg",
      },
    },
    year: 2015,
    category: "TV Series",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    title: "Relentless",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/relentless/regular/small.jpg",
        medium: "./assets/thumbnails/relentless/regular/medium.jpg",
        large: "./assets/thumbnails/relentless/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
  },
  {
    title: "Community of Ours",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/community-of-ours/regular/small.jpg",
        medium: "./assets/thumbnails/community-of-ours/regular/medium.jpg",
        large: "./assets/thumbnails/community-of-ours/regular/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Van Life",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/van-life/regular/small.jpg",
        medium: "./assets/thumbnails/van-life/regular/medium.jpg",
        large: "./assets/thumbnails/van-life/regular/large.jpg",
      },
    },
    year: 2015,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "The Heiress",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-heiress/regular/small.jpg",
        medium: "./assets/thumbnails/the-heiress/regular/medium.jpg",
        large: "./assets/thumbnails/the-heiress/regular/large.jpg",
      },
    },
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
  },
  {
    title: "Off the Track",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/off-the-track/regular/small.jpg",
        medium: "./assets/thumbnails/off-the-track/regular/medium.jpg",
        large: "./assets/thumbnails/off-the-track/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false,
  },
  {
    title: "Whispering Hill",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/whispering-hill/regular/small.jpg",
        medium: "./assets/thumbnails/whispering-hill/regular/medium.jpg",
        large: "./assets/thumbnails/whispering-hill/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "112",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/112/regular/small.jpg",
        medium: "./assets/thumbnails/112/regular/medium.jpg",
        large: "./assets/thumbnails/112/regular/large.jpg",
      },
    },
    year: 2013,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Lone Heart",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/lone-heart/regular/small.jpg",
        medium: "./assets/thumbnails/lone-heart/regular/medium.jpg",
        large: "./assets/thumbnails/lone-heart/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    title: "Production Line",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/production-line/regular/small.jpg",
        medium: "./assets/thumbnails/production-line/regular/medium.jpg",
        large: "./assets/thumbnails/production-line/regular/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Dogs",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/dogs/regular/small.jpg",
        medium: "./assets/thumbnails/dogs/regular/medium.jpg",
        large: "./assets/thumbnails/dogs/regular/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    title: "Asia in 24 Days",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/asia-in-24-days/regular/small.jpg",
        medium: "./assets/thumbnails/asia-in-24-days/regular/medium.jpg",
        large: "./assets/thumbnails/asia-in-24-days/regular/large.jpg",
      },
    },
    year: 2020,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "The Tasty Tour",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-tasty-tour/regular/small.jpg",
        medium: "./assets/thumbnails/the-tasty-tour/regular/medium.jpg",
        large: "./assets/thumbnails/the-tasty-tour/regular/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Darker",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/darker/regular/small.jpg",
        medium: "./assets/thumbnails/darker/regular/medium.jpg",
        large: "./assets/thumbnails/darker/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false,
  },
  {
    title: "Unresolved Cases",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/unresolved-cases/regular/small.jpg",
        medium: "./assets/thumbnails/unresolved-cases/regular/medium.jpg",
        large: "./assets/thumbnails/unresolved-cases/regular/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Mission: Saturn",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/mission-saturn/regular/small.jpg",
        medium: "./assets/thumbnails/mission-saturn/regular/medium.jpg",
        large: "./assets/thumbnails/mission-saturn/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
  },
];

//Header items
// - nav items -
const navItems = document.querySelectorAll(".list-item");
// - user icon -
const userIcon = document.querySelectorAll(".user-icon");

//Page containers
const mainInput = document.getElementById("main-input");
const trending = document.querySelector(".trending-container");
const recommended = document.querySelector(".recommended-container");

function selectImg(movie) {
  let string = "";
  const breakpointSm = 375;
  const breakpointMd = 768;

  if (movie.isTrending) {
    if (window.innerWidth <= breakpointMd) {
      string = `${movie.thumbnail.trending.small}`;
    } else if (window.innerWidth > breakpointMd) {
      string = `${movie.thumbnail.trending.large}`;
    }
  } else {
    if (window.innerWidth <= breakpointSm) {
    } else if (window.innerWidth <= breakpointMd) {
      string = `${movie.thumbnail.regular.small}`;
    } else if (window.innerWidth <= breakpointMd) {
      string = `${movie.thumbnail.regular.medium}`;
    } else if (window.innerWidth > breakpointMd) {
      string = `${movie.thumbnail.regular.large}`;
    }
  }
  return string;
}

function fillRecommended() {
  movies.forEach((movie) => {
    if (!movie.isTrending) {
      recommended.innerHTML += `
      <figure class="movie-item sm">
      <div class="bookmark ${movie.isBookmarked ? "active" : ""}">
        <svg
          width="12"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
          class="bookmark-icon"
        >
          <path
            d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
          />
        </svg>
      </div>
      <img
        src="${selectImg(movie)}"
        alt=""
        class="movie-img"
      />
      <figcaption>
        <ul class="movie-properties">
          <li class="movie-property">
            <p>${movie.year}</p>
          </li>
          <li class="movie-property">
            <img src="assets/icon-category-movie.svg" alt="" />
            <p>${movie.category}</p>
          </li>
          <li class="movie-property">
            <p>${movie.rating}</p>
          </li>
        </ul>
        <h3 class="heading-medium">${movie.title}</h3>
      </figcaption>
    </figure>
      `;
    }
  });
}

fillRecommended();

function fillTrending() {
  movies.forEach((movie) => {
    if (movie.isTrending) {
      trending.innerHTML += `
      <figure class="movie-item">
      <div class="bookmark ${movie.isBookmarked ? "active" : ""}">
        <svg
          width="12"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
          class="bookmark-icon"
        >
          <path
            d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
          />
        </svg>
      </div>
      <img
        src="${selectImg(movie)}"
        alt=""
        class="movie-img background"
      />
      <figcaption>
        <ul class="movie-properties">
          <li class="movie-property">
            <p>${movie.year}</p>
          </li>
          <li class="movie-property">
            <img src="assets/icon-category-movie.svg" alt="" />
            <p>${movie.category}</p>
          </li>
          <li class="movie-property">
            <p>${movie.rating}</p>
          </li>
        </ul>
        <h3 class="heading-medium md">${movie.title}</h3>
      </figcaption> 
    </figure>
      `;
    }
  });
}
fillTrending();

const movieItems = document.querySelectorAll(".movie-item");
movieItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    //
    const movieTitle = this.children[2].children[1].innerText;
    //
    if (event.target.closest(".bookmark")) {
      //
      movies.forEach((movie) => {
        if (movie.title === movieTitle) {
          if (movie.isBookmarked) {
            movie.isBookmarked = false;
            event.target.closest(".bookmark").classList.remove("active");
          } else {
            movie.isBookmarked = true;
            event.target.closest(".bookmark").classList.add("active");
          }
          // console.log(movie.isBookmarked);
        }
      });
    }
  });
});

const homePage = document.querySelector(".home");
const moviesContainer = document.querySelector(".movies");
const tvShows = document.querySelector(".tv-shows");
const bookmarked = document.querySelector(".bookmarked");
const search = document.querySelector(".search");

const homePageSection = homePage.querySelector(".recommended-container");
const moviesContainerSection = moviesContainer.querySelector(
  ".recommended-container"
);
const tvShowsSection = tvShows.querySelector(".recommended-container");
const bookmarkedSectionMovies = bookmarked.children[0].querySelector(
  ".recommended-container"
);
const bookmarkedSectionTVShows = bookmarked.children[1].querySelector(
  ".recommended-container"
);
const searchSection = search.querySelector(".recommended-container");

const containers = [homePage, moviesContainer, tvShows, bookmarked, search];

console.log(containers.length);
navItems.forEach((navItem, index) => {
  navItem.addEventListener("click", function () {
    console.log(this.children[0].getAttribute("src"));
    containers.forEach((container) => {
      if (container.classList.contains("active")) {
        container.classList.remove("active");
      }
    });
    containers[index].classList.add("active");

    if (index === 0) {
      mainInput.setAttribute("placeholder", "Search for Movies or TV series");
    } else if (index === 1) {
      fillMovies();
      mainInput.setAttribute("placeholder", "Search for Movies");
    } else if (index === 2) {
      fillTVShows();
      mainInput.setAttribute("placeholder", "Search for TV series");
    } else if (index === 3) {
      fillBookmarked();
      mainInput.setAttribute("placeholder", "Search for bookmarked shows");
    }
  });
});
function fillMovies() {
  movies.forEach((movie) => {
    // console.log(movie.category);
    if (movie.category === "Movie") {
      // console.log(movie.category);
      moviesContainerSection.innerHTML += `
      <figure class="movie-item sm">
      <div class="bookmark ${movie.isBookmarked ? "active" : ""}">
        <svg
          width="12"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
          class="bookmark-icon"
        >
          <path
            d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
          />
        </svg>
      </div>
      <img
        src="${selectImg(movie)}"
        alt=""
        class="movie-img"
      />
      <figcaption>
        <ul class="movie-properties">
          <li class="movie-property">
            <p>${movie.year}</p>
          </li>
          <li class="movie-property">
            <img src="assets/icon-category-movie.svg" alt="" />
            <p>${movie.category}</p>
          </li>
          <li class="movie-property">
            <p>${movie.rating}</p>
          </li>
        </ul>
        <h3 class="heading-medium">${movie.title}</h3>
      </figcaption>
    </figure>
        `;
    }
  });
}
function fillTVShows() {
  movies.forEach((movie) => {
    // console.log(movie.category);
    if (movie.category === "TV Series") {
      // console.log(movie.category);
      tvShowsSection.innerHTML += `
      <figure class="movie-item sm">
      <div class="bookmark ${movie.isBookmarked ? "active" : ""}">
        <svg
          width="12"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
          class="bookmark-icon"
        >
          <path
            d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
          />
        </svg>
      </div>
      <img
        src="${selectImg(movie)}"
        alt=""
        class="movie-img"
      />
      <figcaption>
        <ul class="movie-properties">
          <li class="movie-property">
            <p>${movie.year}</p>
          </li>
          <li class="movie-property">
            <img src="assets/icon-category-movie.svg" alt="" />
            <p>${movie.category}</p>
          </li>
          <li class="movie-property">
            <p>${movie.rating}</p>
          </li>
        </ul>
        <h3 class="heading-medium">${movie.title}</h3>
      </figcaption>
    </figure>
        `;
    }
  });
}
function fillBookmarked() {
  movies.forEach((movie) => {
    // console.log(movie.category);
    if (movie.isBookmarked) {
      console.log(movie.isBookmarked);
      if (movie.category === "Movie") {
        // console.log(movie.category);
        bookmarkedSectionMovies.innerHTML += `
        <figure class="movie-item sm">
          <div class="bookmark ${movie.isBookmarked ? "active" : ""}">
            <svg
              width="12"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
              class="bookmark-icon"
            >
              <path
                d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
              />
            </svg>
          </div>
          <img
            src="${selectImg(movie)}"
            alt=""
            class="movie-img"
          />
          <figcaption>
            <ul class="movie-properties">
              <li class="movie-property">
                <p>${movie.year}</p>
              </li>
              <li class="movie-property">
                <img src="assets/icon-category-movie.svg" alt="" />
                <p>${movie.category}</p>
              </li>
              <li class="movie-property">
                <p>${movie.rating}</p>
              </li>
            </ul>
            <h3 class="heading-medium">${movie.title}</h3>
          </figcaption>
        </figure>
          `;
      } else if (movie.category === "TV Series") {
        bookmarkedSectionTVShows.innerHTML += `
      <figure class="movie-item sm">
        <div class="bookmark ${movie.isBookmarked ? "active" : ""}">
        <svg
          width="12"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
          class="bookmark-icon"
        >
          <path
            d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
          />
        </svg>
      </div>
      <img
        src="${selectImg(movie)}"
        alt=""
        class="movie-img"
      />
      <figcaption>
        <ul class="movie-properties">
          <li class="movie-property">
            <p>${movie.year}</p>
          </li>
          <li class="movie-property">
            <img src="assets/icon-category-movie.svg" alt="" />
            <p>${movie.category}</p>
          </li>
          <li class="movie-property">
            <p>${movie.rating}</p>
          </li>
        </ul>
        <h3 class="heading-medium">${movie.title}</h3>
      </figcaption>
    </figure>
        `;
      }
    }
  });
}
mainInput.addEventListener("input", function () {
  //
  containers.forEach((container) => {
    if (container.classList.contains("active")) {
      container.classList.remove("active");
    }
  });
  search.classList.add("active");
  //
  let counter = 0;
  searchSection.innerHTML = "";

  movies.forEach((movie) => {
    if (movie.title.toLowerCase().search(mainInput.value.toLowerCase()) >= 0) {
      counter++;
      searchSection.innerHTML += `
      <figure class="movie-item sm">
        <div class="bookmark ${movie.isBookmarked ? "active" : ""}">
        <svg
          width="12"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
          class="bookmark-icon"
        >
          <path
            d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
          />
        </svg>
      </div>
      <img
        src="${selectImg(movie)}"
        alt=""
        class="movie-img"
      />
      <figcaption>
        <ul class="movie-properties">
          <li class="movie-property">
            <p>${movie.year}</p>
          </li>
          <li class="movie-property">
            <img src="assets/icon-category-movie.svg" alt="" />
            <p>${movie.category}</p>
          </li>
          <li class="movie-property">
            <p>${movie.rating}</p>
          </li>
        </ul>
        <h3 class="heading-medium">${movie.title}</h3>
      </figcaption>
    </figure>
        `;
    }
    if (mainInput.value.length > 0) {
      searchSection.previousElementSibling.innerText = `Found '${counter}' result${
        counter > 1 ? "s" : ""
      } on '${mainInput.value}'`;
    } else {
      containers.forEach((container) => {
        if (container.classList.contains("active")) {
          container.classList.remove("active");
        }
      });
      homePage.classList.add("active");
    }
  });
  console.log(searchSection.children);
});
