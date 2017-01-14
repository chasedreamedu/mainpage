
import * as jade from 'jade';
import * as bb from 'bluebird';
import * as path from 'path';
import * as fs from 'fs';
import * as mkdirp from 'mkdirp';

bb.resolve()
    .then(() => writeFile('./static/index.html', jade.compileFile('./src/index.jade', { pretty: true })({})))
    .then(() => console.log(`index.jade compiled`))
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
