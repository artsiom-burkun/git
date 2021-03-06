﻿Ext.define('UserApp.store.User', {
    extend: 'Ext.data.Store',
    model: 'UserApp.model.User',
    autoLoad: true,
	autoSync: true,
    pageSize: 50, // numero de registros por Grid
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/readUser.php',
            update: 'data/updateUser.php',
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            root: 'data',
            encode: true
        }
    }
});