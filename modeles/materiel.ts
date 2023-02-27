

import * as Sequelize from 'sequelize';

export const Materiel = sequelize.define('materiel', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: Sequelize.STRING
    },
    marque: {
        type: Sequelize.STRING
    },
    modèle: {
        type: Sequelize.STRING
    },
    dateAchat: {
        type: Sequelize.DATE
    },
    fournisseur: {
        type: Sequelize.STRING
    }
}, );
// }, {
//     freezeTableName: true,
//     timestamps: false
// });
