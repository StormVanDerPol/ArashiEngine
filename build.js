const fs = require('fs');

const noRegrets = (listPath, listName, jsonPath) => {

    const readStream = fs.createReadStream(listPath);

    var list = [];

    readStream.on('data', (data) => {

        const _data = data + '';
        const _items = _data.split('\n');

        for (let item of _items) {
            if (item.length > 0) {
                list.push(item);
            }
        }
    });

    readStream.on('end', async () => {

        fs.writeFileSync(jsonPath, JSON.stringify(
            { [listName]: list }, null, '\t'
        ));

    });

}


(() => {

    const cats = [
        {
            listName: 'actorList',
            listPath: './source/actorlist',
            jsonPath: './source/actor-list.json'
        },
        {
            listName: 'sceneList',
            listPath: './source/scenelist',
            jsonPath: './source/scene-list.json'
        },
    ];

    for (let cat of cats) {
        noRegrets(cat.listPath, cat.listName, cat.jsonPath);
    }

})();

