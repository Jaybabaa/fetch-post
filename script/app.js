function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => {
        // console.log(data)
        let postCard = document.getElementById('post-card')
        let html = "";
        data.forEach (e => {
            // console.log(element)
            html += `
            <div class="row" id="post-card">
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                             <div class="d-flex justify-content-center">
                                <h4 id="id-posts" class="text-danger">Post ${e.id}</h4>
                            </div>
                            <div>
                                <h4 class="posts-title mb-4 text-center" id="title-posts">${e.title}</h4>
                                <p class="posts-body text-center" id="body-posts">${e.body}r</p>
                            </div>
                            <div>
                                <a href="#" class="text-decoration-none d-flex justify-content-center"><button type="submit" class=" btn-primary" onclick="window.location.href='reg.html'">Click me!</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
            console.log (e)
            postCard.innerHTML = html
        });
    })
}

getPost();

