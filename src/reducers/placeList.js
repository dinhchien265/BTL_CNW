import * as types from '../constants/ActionType';

let initialState = [
    {
        name: 'Bali',
        link: '',
        image: 'https://triip.imgix.net/triipme/favourite_place/image/1/Bali.jpg'
    },
    {
        name: 'BangKok',
        link: '',
        image: 'https://triip.imgix.net/triipme/favourite_place/image/1/Bali.jpg'
    },
    {
        name: 'Da Nang',
        link: '',
        image: 'https://triip.imgix.net/triipme/favourite_place/image/1/Bali.jpg'
    },
    {
        name: 'Ha noi',
        link: '',
        image: 'https://triip.imgix.net/triipme/favourite_place/image/1/Bali.jpg'
    },
    {
        name: 'Hoi an',
        link: '',
        image: 'https://triip.imgix.net/triipme/favourite_place/image/1/Bali.jpg'
    },
];
const placeList = (state = initialState, action) => {
    switch (action.type) {

        default: return state;
    }
};
export default placeList;