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
    let rinda=document.querySelector('.rinda');
    for (let i=0;i<tabula.length;i++)
    {
        rinda.innerHTML+=`
        <tr>
            <td>${tabula[i]['vards']}</td>
            <td>${tabula[i]['vecums']}</td>
          </tr>
        
        `;      
    }
