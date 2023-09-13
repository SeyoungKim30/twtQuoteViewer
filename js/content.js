

setInterval(
    function () {
        const articles = document.querySelectorAll("article");
        console.log(articles.length);
        articles.forEach((e) => {
            let linklist = e.querySelectorAll("a")
            //console.log(linklist[3].getAttribute('href'));
            //console.log(linklist[4].getAttribute('href'));
            linklist.forEach(
                function (f, index) {
                    if (f.querySelector("time")) {
                        console.log(f.getAttribute('href'));
                    }
                }
            )
        })

    }, 10000
)
