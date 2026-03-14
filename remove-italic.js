const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('./src', function (filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content;

        // Remove italic classes
        newContent = newContent.replace(/className="(.*)italic(.*)"/g, 'className="$1$2"');
        newContent = newContent.replace(/ className="italic"/g, '');
        newContent = newContent.replace(/className="text-brand-500 italic"/g, 'className="text-brand-500"');

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Fixed italic fonts', filePath);
        }
    }
});
