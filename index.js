const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const container = document.getElementById("container");
let section = "";
for (let i = 0; i < posts.length; i++) {
    section += `<section>
                        <div class="avatar-info">
                            <img class="circle" src=${posts[i].avatar} alt="avatar">
                            <div>
                                <h2>${posts[i].name}</h2>
                                <p>${posts[i].location}</p>
                            </div>
                        </div>
                        <img class="post" src=${posts[i].post} alt="post">
                        <div class="post-info">
                            <div class="icons-container">
                                <img class="icons" src="images/icon-heart.png" alt="like icon">
                                <img class="icons" src="images/icon-comment.png" alt="comment icon">
                                <img class="icons" src="images/icon-dm.png" alt="dm icon">
                            </div>
                            <p class="dark">${posts[i].likes} likes</p>
                            <p><span class="dark">${posts[i].username}</span> ${posts[i].comment}</p>
                        </div>
                        <div class="space"></div>
                   </section>`
}

container.innerHTML += section