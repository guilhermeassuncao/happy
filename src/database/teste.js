const Database = require('./db')  
const saveOrphanage = require('./saveOrphanage')  

Database.then(async db => {
  /*await saveOrphanage(db, {
        lat: "-18.7271333",
        lng: "-39.8666417",
        name: "Lar dos Meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "27996978448",
        images: [
            "https://images.unsplash.com/photo-1469406396016-013bfae5d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1530303053753-ed17bb09f08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
            "https://images.unsplash.com/photo-1485783522162-1dbb8ffcbe5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80",
            "https://images.unsplash.com/photo-1440288736878-766bd5839edb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
            "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
            "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1354&q=80"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })*/

    /*const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)*/

    // const orphanage = await db.all("SELECT * FROM orphanages where id='3'")
    // console.log(orphanage)
 
   console.log(await db.all("DELETE FROM orphanages where id='4'"))


})
