var cards = [
    {
        image:'assets/images/download.jpg',
        title: 'HSC ICT',
    },
    {
        image:'assets/images/download.jpg',
        title: 'HSC ICT',
    },
    {
        image:'assets/images/download.jpg',
        title: 'HSC ICT',
    },
    {
        image:'assets/images/download.jpg',
        title: 'HSC ICT',
    },
    {
        image:'assets/images/download.jpg',
        title: 'HSC ICT',
    },
    {
        image:'assets/images/download.jpg',
        title: 'HSC ICT',
    },
    {
        image:'assets/images/download.jpg',
        title: 'HSC ICT',
    },
    {
        image:'assets/images/download.jpg',
        title: 'HSC ICT',
    }

]

cards.forEach(function(card,index){

    let cardHtml = `
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card mb-5 ">
                            <img class="card-img-top" src="${card.image}" alt="img" height="150" width="80">
                        <div class="card-body text-center">
                            <h3 class="card-title font-weight-bolder">${card.title}</h3>
                            <a href="#" class="stretched-link"></a>

                        </div>

                    </div>

                </div>


                





            `;

     document.querySelector('.load-data').innerHTML += cardHtml;

});


