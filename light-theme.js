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
        newContent = newContent.replace(/text-white\/80/g, 'text-gray-800');
        newContent = newContent.replace(/text-white\/70/g, 'text-gray-700');
        newContent = newContent.replace(/text-white\/60/g, 'text-gray-600');
        newContent = newContent.replace(/text-white\/50/g, 'text-gray-500');
        newContent = newContent.replace(/text-white\/40/g, 'text-gray-400');
        newContent = newContent.replace(/text-white/g, 'text-gray-900');

        // Borders
        newContent = newContent.replace(/border-white\/5/g, 'border-gray-200');

        // Invert backgrounds
        newContent = newContent.replace(/bg-night\/80/g, 'bg-white/80');
        newContent = newContent.replace(/bg-night\/50/g, 'bg-white/50');
        newContent = newContent.replace(/bg-night-light/g, 'bg-gray-50');
        newContent = newContent.replace(/bg-night-lighter/g, 'bg-gray-100');
        newContent = newContent.replace(/bg-night/g, 'bg-white');

        // Shadow / gradients
        newContent = newContent.replace(/from-night/g, 'from-white');
        newContent = newContent.replace(/via-night/g, 'via-white');
        newContent = newContent.replace(/to-night/g, 'to-white');

        // Special case button text (was text-night, now needs to be white)
        newContent = newContent.replace(/text-night/g, 'text-white');

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Fixed', filePath);
        }
    }
});
