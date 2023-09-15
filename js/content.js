const quotediv =document.createElement("div");
quotediv.innerHTML=`
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>`;
const quotesvg = quotediv.childNodes[1];
console.log(typeof(quotesvg))       //object 나왔음


const addQuoteBtn = function () {
    const articles = document.querySelectorAll("article");
    console.log(articles.length);
    articles.forEach((e) => {
        let linklist = e.querySelectorAll("a")
        linklist.forEach(
            function (f, index) {
                if (f.querySelector("time")) {
                    console.log(f.getAttribute('href'));
                }
            }
        )
        //버튼 추가
        let group = e.querySelectorAll(`[role="group"] > div`)
        const rtbtn=group[1];   //리트윗버튼div
        const clonertbtn=rtbtn.cloneNode(true);
        const newsvg = clonertbtn.querySelector('svg')
        const svgparent=newsvg.parentNode;     
        rtbtn.insertAdjacentElement("afterend",clonertbtn);
        svgparent.replaceChild(quotesvg,newsvg);
      
    })
}
setInterval(addQuoteBtn, 5000);