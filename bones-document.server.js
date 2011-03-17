var fs = require('fs'),
    path = require('path'),
    Bones = require('bones'),
    templates = ['AdminDocument'];

// Load templates. Blocking at require time.
templates.forEach(function(template) {
    Bones.templates[template] = Bones.templates[template] ||
        fs.readFileSync(path.join(__dirname, 'templates', template + '.hbs'), 'utf-8');
});

// Pass through require of bones-admin.
module.exports = require('./bones-document');

