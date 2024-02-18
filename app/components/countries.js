export function Countries(props){
     
    return`
    <article  class="card">

    <a  class="card__link" href="#/query=${props.name.common}">
        
    <figure class="card__figure">
        <img class="card__img" src="${props.flags.svg}" alt="flag__country">
    </figure>

    <section class="card__texts">

        <h3 class="card__title">${props.name.common}</h3>
        
        <h4 class="card__bold ">Populacion:
            <span class="card__populacion card__result">${props.population}</span>   
        </h4>
        <h4 class="card__bold ">Region:
            <span class="card__Region card__result">${props.region}</span>   
        </h4>
        <h4 class="card__bold ">Capital:
            <span class="card__capital card__result">${props.capital}</span>   
        </h4>
       
    </section>
    </a>
</article>
    `;
}