/* error and sipiner */
document.getElementById('error-massage').style.display = 'none';
document.getElementById('spinner').style.display = 'none';

const loadBook = () => {
    const seachInput = document.getElementById('search-input');
    const searchText = seachInput.value;
    /* clear data  */
    seachInput.value = '';

    /* empty search handle  */
    if(searchText === ''){
        displayError();
    }
    else{
        /* erroe massage  */
        document.getElementById('error-massage').style.display = 'none';
        /* sipnner */
        document.getElementById('spinner').style.display = 'block';

        document.getElementById('search-result').textContent = '';

        /* load data */
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayBook(data))
    }
}

const displayError = () => {
    document.getElementById('error-massage').style.display = 'block';
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('total-book').style.display = '';
}

// display book 
const displayBook = books => {
    document.getElementById('total-book').textContent = '';
    const searchDiv = document.getElementById('search-result');
    searchDiv.textContent = '';

    const booklist = books.docs;
    // console.log(booklist[0].author_name[0])
    if(booklist === null){
        displayError();
    }
    else{
        /* error handle */
        document.getElementById('error-massage').style.display = 'none';
        document.getElementById('spinner').style.display = 'none';
        document.getElementById('total-book').innerText = `Books Found ${booklist.length}`;

        /* displayBook data */
    booklist.forEach(book => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card">
    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Title: ${book.title}</h5>
        <h5 class="card-title">Publisher: ${book.publisher}</h5>
        <h5 class="card-title">Author: ${book.author_name}</h5>
        <h5 class="card-title">First-Publish-Year: ${book.first_publish_year}</h5>
    </div>
    </div>
    `;
    searchDiv.appendChild(div);
    });
    }
}
