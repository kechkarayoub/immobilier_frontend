
import common_fr from "./translations/fr/common.json";
import common_en from "./translations/en/common.json";
import store from 'store';
export const i18next_params = {
    interpolation: { escapeValue: false },  // React already does escaping
    lng: store.get('current_langue') || "en",
    resources: {
        en: {
            common: common_en    // 'common' is our custom namespace
        },
        fr: {
            common: common_fr    // 'common' is our custom namespace
        },
    },
};

export const findByTestAttribute = (component, attr) => {
    return component.find(`[data-test='${attr}']`);
}
