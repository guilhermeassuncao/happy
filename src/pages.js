const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage");

module.exports = {
    index(req, res) {
        return res.render("index");
    },
    async orphanage(req, res) {
        const id = req.query.id;

        try {
            const db = await Database;
            const result = await db.all(`SELECT * FROM orphanages where id="${id}"`);
            const orphanage = result[0];

            orphanage.images = orphanage.images.split(",");
            orphanage.firstImage = orphanage.images[0];

            orphanage.open_on_weekends == "0" ? (orphanage.open_on_weekends = false) : (orphanage.open_on_weekends = true);

            return res.render("orphanage", { orphanage });
        } catch (error) {
            return res.send("Erro no Banco de Dados");
        }
    },
    async orphanages(req, res) {
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages");
            return res.render("orphanages", { orphanages });
        } catch (error) {
            return res.send("Erro no Banco de Dados");
        }
    },
    createOrphanage(req, res) {
        return res.render("create-orphanage");
    },
    async saveOrphanage(req, res) {
        const fields = req.body;

        try {
            const db = await Database;
            await saveOrphanage(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_week,
            });

            return res.redirect("/orphanages");
        } catch (error) {
            return res.send("Erro no Banco de Dados");
        }
    },
};