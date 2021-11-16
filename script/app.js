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
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-body" style="height: 300px;">
                        <div class="d-flex justify-content-end">
                             <h5 class="mx-2 text-danger">Post ${e.id}</h5>
                        </div>
                            <h5 class="post-title mb-4">${e.title}</h5>
                            <p class="post-body">${e.body}</p>
                        </div>
                     <div class="text-center py-2">
                        <a href="#" class="text-decoration-none d-flex justify-content-center"><button type="submit" class="btn-primary p-1" onclick="pages(${e.id})">Click me!</button></a>
                    </div>
                </div>
            </div>
            `
            // console.log (e)
            postCard.innerHTML = html
        });
    })
}

getPost();


function pages(id) {
    localStorage.setItem("postid", id);
    postId = localStorage.getItem("postid");
    console.log(postId);

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then((e) => {
        // console.log(data)
        let postCard = document.getElementById('post-card')
        // userPost = data
        let html = "";
        // data.forEach( e=> {
            // console.log (element)
            html = `
                <div class="card-deck row cool" id="post-card">
                    <div class="col col-lg-5 col-md-4 mb-3">
                        <div class="card h-100" onclick="pages()">
                            <div class="card-body">
                                <div class="d-flex justify-content-end">
                                    <h4 id="id-posts" class="text-danger">Post ${e.id}</h4>
                                </div>
                                <div>
                                    <h4 class="posts-title mb-4 text-center" id="title-posts"> ${e.title}</h4>
                                    <p class="posts-body text-center" id="body-posts"> ${e.body}</p>
                                </div>
                                <div>
                                    <a href="index.html" class="text-decoration-none d-flex justify-content-center"><button type="submit" class="btn-primary p-1" onclick="pages()">Go Back</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            `
            // console.log(e)
            postCard.innerHTML = html
        });
//     })
}

passvalues(id);