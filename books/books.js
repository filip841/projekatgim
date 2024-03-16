import books from './books.json' assert { type: 'json' }

const items = document.getElementById('items')

let itemsHtml = ``

books.forEach(book => {
    itemsHtml += `
    <article>
      <img src="https://placehold.co/400" alt="cover">
      <h3>${ book.name }</h3>
      <p>(${ book.year })</p>
      <p>${ book.writter }</p>
    </article>
    `
})

items.innerHTML = itemsHtml