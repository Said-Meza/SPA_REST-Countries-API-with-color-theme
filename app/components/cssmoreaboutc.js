export function CssaboutCountries(props){
     
    return`
/*main botton*/
.botton{
    /* outline: auto; */
    display: block;
    width: 5rem;
    margin: 2rem;
    padding: .3rem ;
    text-align: center;
    font-size: .8rem;
    text-decoration: none;
    box-shadow: 0px 0px 6px  rgba(0, 0, 0, .1) ;
    border-radius: 5px;
    background-color:var(--White--Dark-Mode-Text-and-Light-Mode-Elements) ;
    
}

.content_container{
    
    display: flex;
    flex-direction: column;
    gap: 2rem;
}


.container{
    width: 90%;
    margin: 2rem auto;

}
.content__figure{
    margin: 0 auto;
}
.content__img{
    width: 100%;
    display: block;
}
.card__texts{
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

}

.content{
    display: flex;
    flex-direction: column;
    gap: .7rem;
}
.card{
    background-color: var(--Very--Light-Gray-Light-Mode-Background);
    font-weight: 600;
}
.card__bold{
    font-weight: 300;
}

.other__container{
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
}
.botton--modifi{
    
    margin: unset;
}

@media (width > 767px) {
        
    .main{
        max-width: 1000px;
        margin: 0 auto;
    }
    .content_container{
        display: grid;
        gap: .5rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        
    }

    .content__figure{
        width: 100%;
    }
    
    .card__texts{
        
        font-size: .8rem;
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(auto-fit,minmax(1fr,100px));
    }
    /*----*/
    .card__title{
        grid-column: 1/3;
        grid-row: 1/2;
    }
    .content1{
        grid-column: 1/3;
        grid-row: 2/3;
    }

   .content2{
        grid-column: 2/3;
        grid-row: 2/3;
    }
    
    .content3{
        /* outline: auto; */
        grid-column: 1/3;
        grid-row: 3/4;

        display:flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
    }
    .other__container{
        /* outline: auto; */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        align-content: center;
        gap: .3rem;
        margin: 1rem 0;
    }
    .botton--modifi{
        width: 4rem;
    }
   
}

@media (width > 1023px) {
        
    .main{
        max-width: 1200px;
    }
    
    
    .content_container{
        gap: 4rem;
    }
    .card__title{
        font-size: 1.9rem;
    }
    .card__texts{
        padding: 1rem;
    }
    .other__container{
        width: 60%;
    }
    
}
.dark-mode-background{
    background-color: var(--Very--Dark-Blue-Dark-Mode-Background);
    color: var(--White--Dark-Mode-Text-and-Light-Mode-Elements);
}
.dark-mode-element{
    background-color: var(--Dark--Blue-Dark-Mode-Elements);
    color: var(--White--Dark-Mode-Text-and-Light-Mode-Elements);
}
                              
    `;
}