var stealTools = require("steal-tools");

var buildPromise = stealTools.build({
    config: __dirname + "/package.json!npm"
}, {
    sourceMaps: true,
    sourceMapsContent: true,
    dest: __dirname + "/target"
});

buildPromise.then(() => {
    process.exit(0);
}).catch((e) => {
    console.error(e);
    process.exit(1);
});
