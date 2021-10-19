let latestnews = document.getElementById('latestnews');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7e2cf1a3be044e9fb23e2fac2b952ace', true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        //console.log(json);
        let mainNews = "";
        articles.forEach(function(element) {
            let news = `<div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">
                                        ${element["title"]}
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                            data-parent="#accordionExample">
                                <div class="card-body">${element["description"]}. <a href="${element['url']}>Clich here to read more</a></div>
                            </div>
                        </div>`;
            mainNews += news;
        });
        latestnews.innerHTML = mainNews;
    }
    else {
        console.log("Some error occured")
    }
}
xhr.send()
/*console.log("this is index .js file");

//7e2cf1a3be044e9fb23e2fac2b952ace
//let apiKey = '7e2cf1a3be044e9fb23e2fac2b952ace';

//let country='in';
let = newscontainer = document.getElementById('newscontainer');

const xhr = new XMLHttpRequest(); //creating a get request

xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=7e2cf1a3be044e9fb23e2fac2b952ace', true);

xhr.onload = function () 
{
    if (this.status === 200) 
    {
        let json = JSON.parse(this.responseText);
        let articles=json.articles;
        console.log(articles);
       /* let newsHtml = "";
        articles.forEach(function(element, index)
        {
            
        }
    }
}

xhr.send();

let news = '<div style="min-height: 120px;"> 
<div class="collapse collapse-horizontal" id="newscontainer"> 
<div class="card card-body" style="width: 300px;">content </div>
</div>
</div>'
*/
