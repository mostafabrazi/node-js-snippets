var fs = require('fs');

fs.readFile('csv.csv', 'utf8', function(err, data) {
    if (err) throw err;
    const rows = data.split('\n');
    // Header -> get keys
    const header = rows[0];
    const keys = header.split(',');

    // Body -> get key-values
    var json = [];
    for (var i=1; i<rows.length; i++) {
        const row = rows[i];
        const values = row.split(',');
        var jsonObject = {};
        for (var j=0; j<keys.length; j++) {
            const key = keys[j];
            jsonObject[key] = values[j];
        }
        json.push(jsonObject);
    }
    fs.writeFile('myjsonfile.json', JSON.stringify(json), 'utf8', (err)=>{console.log('error: ---- ', err);});
});
