let tabula=[
    {
    vards:'tenis',
    vecums:24,
    'sapņo': true
    },
    {
    vards:'elza',
    vecums:27,
    'sapņo': false
    },
    {
    vards:'ilga',
    vecums:31,
    'sapņo': true
    }
    ];
    let rindas=document.querySelector('.rindas');
    rindas.innerHTML=tabula[1]['vards'];