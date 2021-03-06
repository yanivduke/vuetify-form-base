const fs = require('fs');

var dir = '../dist/src';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
// destination.txt will be created or overwritten by default.
fs.copyFile('./src/components/vFormBase.vue', '../dist/src/vFormBase.vue', (err) => {
  if (err) throw err;
  console.log('vFormBase.vue was copied to /src/vFormBase.vue');
});
