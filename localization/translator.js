import i18n from 'i18n-js';
import { en,srb } from './languages';

i18n.locale = 'srb'

export function translate(key) {

    i18n.fallbacks = true;
    i18n.translations = { en, srb};
    return i18n.t(key)
}

export function changeLang(language){
    i18n.locale = language
}
