export function moreAboutCountry(props){

    // console.log(props.name.common)
    return `
    <section class="content_container container" >
         
    <figure class="content__figure">
        <img class="content__img" src="${props.flags.svg}" alt="flag__country">
    </figure>
    <section class="card__texts">
        
        <h2 class="card__title" id="country">${props.name.common}</h2> 

        <section class="content content1">
           
            <h4 class="card__bold">Native Name: <span class=" name">${props.name.official}</span></h4>
            <h4 class="card__bold">Populacion: <span class=" population">${props.population}</span></h4>
            <h4 class="card__bold">Region: <span class=" region">${props.region}</span> </h4>
            <h4 class="card__bold">Sub Region: <span class=" subregion">${props.subregion}</span> </h4>
            <h4 class="card__bold">Capital: <span class=" capital">${props.capital}</span></h4>
        </section>

        <section class="content content2">
            <h4 class="card__bold">Top Level Domain: <span class="card__fields__letter domain">${props.tld}</span></h4>
            <h4 class="card__bold">Currencies: <span class=" currencies"></span> </h4>
            <h4 class="card__bold">Languages: <span class=" languaje"></span> </h4>
        
        </section>

        <section class="content content3">

            <h3 class="card__bold">Border Contries: <span class="card__bold"> </span> </h3>

            <div  class="other__container">

                <h5 data-dark-element class="morepaises" >  </h5>
                   
            </div>
        </section>
    </section>
</section>
        `;
}