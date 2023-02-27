const express = require('express');
const router = express.Router();
const connexion = require('../db/materiels');


// Récupération de la liste des matériels
router.get('/', (req, res) => {
    connexion.query('SELECT * FROM materiels', (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });

});

// Récupération d'un matériel par son id
router.get('/:id', (req, res) => {
    connexion.query('SELECT * FROM materiels WHERE id = ?', [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
});

// Ajout d'un matériel
router.post('/', (req, res) => {
    let matériel = req.body;
    connexion.query('INSERT INTO materiels SET ?', matériel, (err, result) => {
        if (err) {
            throw err;
        }
        res.send('Matériel ajouté avec succès.');
    });
});

// Mise à jour d'un matériel
router.put('/:id', (req, res) => {
    let matériel = req.body;
    let id = req.params.id;
    connexion.query('UPDATE materiels SET ? WHERE id = ?', [matériel, id], (err, result) => {
        if (err) {
            throw err;
        }
        res.send('Matériel mis à jour avec succès.');
    });
});

// Suppression d'un matériel
router.delete('/:id', (req, res) => {
    connexion.query('DELETE FROM materiels WHERE id = ?', [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }
        res.send('Matériel supprimé avec succès.');
    });
}
);




