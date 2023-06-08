
import mergedImage from '../images/MergedImages.png';
import naruto from '../images/naruto.png';
import elsaCake from '../images/elsa_cake.png';
import elsaCandles from '../images/elsa_candles.png';
import elsaSurpGift from '../images/elsa_supriseReturngift.png';
import elsaCakeTopper from '../images/elseCake_topper.png';


export const eventSelection = [
    { name: 'Birthday Party', selection: false, theme: 'birthday_party'},
    { name: 'Christmas Party', selection: false, theme: 'christmas_party'}
];


export const results = {
    birthday_party: [
        {
            theme: 'ELSA',
            id: 'ELSA_1',
            image: mergedImage
        },
        {
            theme: 'NARUTO',
            id: 'NARUTO_1',
            image: naruto

        },
        {
            theme: 'COOL',
            id: 'COOL_1',
            image: naruto

        }
    ]   
};

export const themeBasedProducts = {
    ELSA_1: [
        {
            cake: {image: elsaCake, count:1, name: 'ELSA THEME CAKE'},
            candles: {image: elsaCandles, count: 2, name: 'ELSA THEME CANDLES'},
            gift: {image: elsaSurpGift, count: 5, name: 'ELSA THEME RETURN GIFTS'},
            cakeTopper: {image: elsaCakeTopper, count: 1, name: 'ELSA THEME CAKE TOPPER'}
        }
    ]

}

