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

        // Invert text colors
        newContent = newContent.replace(/text-gray-900/g, 'text-brand-950');
        newContent = newContent.replace(/text-gray-800/g, 'text-brand-900');
        newContent = newContent.replace(/text-gray-700/g, 'text-brand-800');
        newContent = newContent.replace(/text-gray-600/g, 'text-brand-700');
        newContent = newContent.replace(/text-gray-500/g, 'text-brand-600');
        newContent = newContent.replace(/text-gray-400/g, 'text-brand-600/60');

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Fixed text colors', filePath);
        }
    }
});
