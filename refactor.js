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
        let newContent = content
            .replace(/gold-500/g, 'brand-500')
            .replace(/gold-400/g, 'brand-400')
            .replace(/gold-600/g, 'brand-600')
            .replace(/gold-700/g, 'brand-700')
            .replace(/brown-900/g, 'night-lighter')
            .replace(/brown-800/g, 'night-light');

        // Also replace AXMAC text with logo in Header specifically if we match the header text exactly
        if (filePath.includes('Header.tsx')) {
            newContent = newContent.replace(
                '<div className="text-brand-500 font-serif text-2xl tracking-widest font-bold">\n          AXMAC\n        </div>',
                '<div className="flex items-center gap-3">\n          <img src="/AxMac.png" alt="AxMac Logo" className="h-10 w-auto" />\n          <span className="text-brand-500 font-serif text-2xl tracking-widest font-bold hidden sm:block">AXMAC</span>\n        </div>'
            );
            newContent = newContent.replace(
                '<div className="text-gold-500 font-serif text-2xl tracking-widest font-bold">\n          AXMAC\n        </div>',
                '<div className="flex items-center gap-3">\n          <img src="/AxMac.png" alt="AxMac Logo" className="h-10 w-auto" />\n          <span className="text-brand-500 font-serif text-2xl tracking-widest font-bold hidden sm:block">AXMAC</span>\n        </div>'
            );
        }

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Fixed', filePath);
        }
    }
});
