import fs            from 'fs';

import { assert }    from 'chai';

import PackageUtil   from '../../src/index.js';

const packageObj = JSON.parse(fs.readFileSync(`./package.json`, 'utf8'));

const s_VERIFY_DATA = '{"name":"@typhonjs-node-utils/package-util","type":"module","description":"Provides several utility methods for working with `package.json`.","author":"typhonrt","homepage":"https://github.com/typhonjs-node-utils/package-util","license":"MPL-2.0","main":"src/index.js","repository":{"type":"github","url":"https://github.com/typhonjs-node-utils/package-util"},"bugs":{"url":"https://github.com/typhonjs-node-utils/package-util/issues"},"formattedMessage":"name: @typhonjs-node-utils/package-util (0.0.0)\\ndescription: Provides several utility methods for working with `package.json`.\\nbugs / issues: https://github.com/typhonjs-node-utils/package-util/issues\\nrepository: https://github.com/typhonjs-node-utils/package-util\\nhomepage: https://github.com/typhonjs-node-utils/package-util"}';

describe('PackageUtil:', () =>
{
   it('format:', () =>
   {
      const data = PackageUtil.format(packageObj);

      delete data.version;

      assert.strictEqual(JSON.stringify(data), s_VERIFY_DATA);
   });
});
