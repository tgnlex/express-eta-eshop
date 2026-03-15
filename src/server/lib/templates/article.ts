

function article(data) {
  return `
    <article class="post">
      <section class="post--head">
        <h2 class="post--title">${data.title}</h2>
        <p class="post--date">${data.date}</p>
        <p class="post--author">${data.author}</p>
      </section
      <section class="post--main">
        <p class="post--body">${data.body}</p>
      </section>
    </article>

  `;
}

export { article }
