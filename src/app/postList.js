const postsList = document.querySelector(".posts");

export const setupPosts = (data, info) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const post = doc.data();
      const li = `
        <li class="list-group-item list-group-item-action list-group-item-dark">
            <h5>${post.title}</h5>
            <p>${post.content}</p>
        </li>
        `;
      html += li;
    });
    postsList.innerHTML = html;
  } else {
    postsList.innerHTML = info ? `<h1>${info}</h1>` : `<h1>Login to see posts</h1>`;
  }
};
