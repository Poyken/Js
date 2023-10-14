import { client } from "./client.js";
import { config } from "./config.js";

const { PAGE_LIMIT } = config;

const renderPaginate = (totalPages) => {
  // console.log(totalPages);
  const paginateNav = document.querySelector(".paginate-nav");
  const range = [...Array(totalPages).keys()];
  paginateNav.innerHTML = `
<ul class="pagination">
  <li class="page-item"><a class="page-link" href="#">Trước</a></li>
  ${range
    .map(
      (index) =>
        `<li class="page-item"><a class="page-link" href="#">${
          index + 1
        }</a></li>`
    )
    .join("")}

  <li class="page-item"><a class="page-link" href="#">Sau</a></li>
</ul>`;
};

const render = (posts) => {
  // console.log(posts);
  const stripHtmlTags = (html) => html.replace(/<[^>]*>?/gm, "");
  const postEL = document.querySelector(".posts");
  postEL.innerHTML = ` <div class="row g-3"> 
  ${posts
    .map(
      ({ title, excerpt }) => `
      <div class="col-6 col-lg-4">
      <div class="border p-3">
        <h2><a href="#" class="text-decoration-none">${stripHtmlTags(
          title
        )}</a></h2>
        <p>
          ${stripHtmlTags(excerpt)}
        </p>
      </div>
    </div>
`
    )
    .join("")}</div>`;
};

const getPosts = async (query = {}) => {
  //chuyen obj query thanh query string
  const queryString = new URLSearchParams(query).toString();
  const { data: posts, response } = await client.get(`/posts?${queryString}`);
  const { data: users } = await client.get("/users");
  // console.log(posts);
  // console.log(users);
  //tong so trang bang tong so bai viet chia cho so bai viet tren 1 trang
  const totalPosts = response.headers.get("x-total-count");
  // console.log(totalPosts);
  const totalPages = Math.ceil(totalPosts / PAGE_LIMIT);
  // console.log(totalPages);
  render(posts);
  renderPaginate(totalPages);
};

getPosts({
  _sort: "id",
  _order: "esc",
  _limit: PAGE_LIMIT,
  _page: 1,
});

const postUser = async () => {
  const { response } = await client.post("/users", {
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
  });
  console.log(response);
};

// postUser();
let result = "";
const searchForm = document.querySelector(".search");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const keywordEl = e.target.querySelector(".keyword");
  const keyword = keywordEl.value;
  result = keyword;
  // console.log(result);
  getPosts({
    q: keyword,
  });
  keywordEl.value = "";
});

const sortByEL = document.querySelector(".sort-by");
sortByEL.addEventListener("change", (e) => {
  const order = e.target.value;
  getPosts({
    _sort: "id",
    _order: order,
    q: result,
  });
});
// console.log(PAGE_LIMIT);
