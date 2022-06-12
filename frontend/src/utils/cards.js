import ClubIcon from '../assets/icons/suits/club.svg';
import DiamondIcon from '../assets/icons/suits/diamond.svg';
import HeartIcon from '../assets/icons/suits/heart.svg';
import SpadeIcon from '../assets/icons/suits/spade.svg';

export const getSuitIconBySuitAlias = suitAlias => {
    let suitIcon;

    switch(suitAlias) {
        case 'C':
            suitIcon = ClubIcon;
            break;
        case 'D':
            suitIcon = DiamondIcon;
            break;
        case 'H':
            suitIcon = HeartIcon;
            break;
        case 'S':
            suitIcon = SpadeIcon;
            break;
        default:
            suitIcon = null;
            break;
    }

    return suitIcon;
}

export const getFaceImageBySuitAndValueAlias = (suitAlias, valueAlias) => {
    suitAlias = suitAlias.toLowerCase();
    valueAlias = valueAlias.toLowerCase();
    // @NOTE: URL is hardcoded :(
    return `https://kimmaravilla.com/tyrell-systems/exam/images/suit/faces/${suitAlias}${valueAlias}.gif`;
}

export const getIconsPerColumn = (numericValue = 0) => {
    let sideColumnIcons;
    let middleColumnIcons;

    switch (numericValue) {
        case 13: // King
        case 12: // Queen
        case 11: // Jack
            sideColumnIcons = 0;
            middleColumnIcons = 1;
            break;
        case 10:
        case 9:
            sideColumnIcons = 4;
            middleColumnIcons = numericValue % 4;
            break;
        case 8:
        case 7:
        case 6:
            sideColumnIcons = 3;
            middleColumnIcons = numericValue % 3;
            break;
        case 5:
        case 4:
            sideColumnIcons = 2;
            middleColumnIcons = numericValue % 2;
            break;
        case 3:
        case 2:
        case 1:
            sideColumnIcons = 0;
            middleColumnIcons = numericValue;
            break;
    }

    return {
        sideColumnIcons,
        middleColumnIcons,
    }
}