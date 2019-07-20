const fs = require('fs');
const execSync = require('child_process').execSync;

module.exports = function(context) {
    console.log('Prpearing deploy...');
    console.log('Building Angular 2 application into "./www" directory.');
    const basePath = context.opts.projectRoot;
    const baseWWW = basePath + '/www';
    try{
	    console.log(execSync(
	      "ng build --prod --output-path ../wrapper/www/ --base-href .",
	      {
	        maxBuffer: 1024*1024,
	        cwd: basePath + '/../capitalflight-frontend'
	      }).toString('utf8')
	    );
    } catch(ex) {
    	console.log('Error, remaking www');
	    if (!fs.existsSync(basePath)){
	        fs.mkdirSync(basePath);
	    }
    }
    console.log('Clearing .gz files');
    var files = fs.readdirSync(baseWWW);
    for (var i = 0; i < files.length; i++) {
      if (files[i].endsWith('.gz')) {
        fs.unlinkSync(baseWWW + '/' + files[i]);
      }
    }
    console.log('Build ready for deploy');
};
