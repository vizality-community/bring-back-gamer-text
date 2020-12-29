import { Messages } from '@vizality/i18n';
import { Plugin } from '@vizality/core';
import api from '@vizality/api';

import * as i18n from './i18n';

export default class BringBackGamerTexts extends Plugin {
  onStart () {
    api.i18n.injectAllStrings(i18n);

    // Strings that are the same in every language
    Messages.VERIFICATION_LEVEL_HIGH = '(╯°□°）╯︵ ┻━┻';
    Messages.VERIFICATION_LEVEL_VERY_HIGH = '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻';
  }
}
