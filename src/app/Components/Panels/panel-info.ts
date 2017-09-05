import {Panel} from './panel';

export const PANELS: Panel[] = [
    {name: 'Profile',   description: 'Enter Information About Yourself',
    inputText: '', wellOn: 'close', progress: 0, isText: false},
    {name: 'Education', description: 'Tell Us About Where You Studied',
    inputText: '', wellOn: 'close', progress: 0, isText: false},
    {name: 'Experience', description: 'Tell Us About Where You Have Worked',
    inputText: '', wellOn: 'close', progress: 0, isText: false},
    {name: 'Interests', description: 'Tell Us About What You Do In Your Free Time',
    inputText: '', wellOn: 'close', progress: 0, isText: false}
];
