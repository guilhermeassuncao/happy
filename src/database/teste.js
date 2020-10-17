const Database = require('./db')  

Database.then(async db => {
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-18.7271333",
            "-39.8666417",
            "Lar dos Meninos",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "(27) 9 9697-8448",
            "https://images.unsplash.com/photo-1469406396016-013bfae5d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas Das 18h até 8h",
            "1"
        );
    `)

    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages);
})
