
import * as jade from 'jade';
import * as bb from 'bluebird';
import * as path from 'path';
import * as fs from 'fs';
import * as mkdirp from 'mkdirp';

const jadeList = [
    'index',
    'about',
    'contactus',
    'video',
    'program'
]

bb.all(jadeList.map(name=>writeFile(`./static/${name}.html`, jade.compileFile(`./src/${name}.jade`, { pretty: true })({}))))
    .then(() => console.log(`jade files compiled`))
    .catch(err => { console.error(err.stack); })
    .then(() => {
        process.exit(0);
    });

function writeFile(filename: string, content: string | Buffer): bb<void> {
    return new bb<void>((res, rej) => {
        mkdirp(path.dirname(filename), err => {
            if (err) rej(err);
            else {
                fs.writeFile(filename, content, err => {
                    if (err) rej(err);
                    else res();
                })
            }
        })
    })
}
