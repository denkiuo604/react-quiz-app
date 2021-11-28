/**
 * この配列にクイズを用意します。
 * @param id 問題番号
 * @param statement 問題文
 * @param type 回答欄の種類 (text, number, radio, checkboxのいずれか)
 * @param choices 選択肢 (typeがradio, checkboxのとき、選択肢をオブジェクトの配列で指定する)
 * @param answer 正答 (checkboxの場合は配列で指定する)
 */
const quiz = [
    {
        id: 1,
        statement: '10000000の100000倍は1(　　)である。括弧にあてはまる漢字1字を答えよ。',
        type: 'text',
        answer: '兆',
    },
    {
        id: 2,
        statement: '4と6の最小公倍数はいくつか。',
        type: 'number',
        answer: '12',
    },
    {
        id: 3,
        statement: '次のうち、正しい主張はどれか。',
        type: 'radio',
        choices: [
            {
                value: 'choice1',
                label: '偶数と偶数の和は奇数である。',
            },
            {
                value: 'choice2',
                label: '偶数と奇数の和は偶数である。',
            },
            {
                value: 'choice3',
                label: '奇数と偶数の和は奇数である。',
            },
            {
                value: 'choice4',
                label: '奇数と奇数の和は奇数である。',
            },
        ],
        answer: 'choice3',
    },
    {
        id: 4,
        statement: '次のうち、素数であるものをすべて選べ。',
        type: 'checkbox',
        choices: [
            {
                value: 'choice1',
                label: '1',
            },
            {
                value: 'choice2',
                label: '2',
            },
            {
                value: 'choice3',
                label: '3',
            },
            {
                value: 'choice4',
                label: '4',
            },
        ],
        answer: [
            'choice2',
            'choice3',
        ],
    },
    {
        id: 5,
        statement: '回答方法が未指定、もしくは定義されていない回答方法の場合',
    },
    {
        id: 6,
        statement: '回答方法をラジオボタンまたはチェックボックスとし、選択肢を配列で与えていない場合',
        type: 'radio',
        choices: 'something',
        answer: 'something',
    },
    {
        id: 7,
        statement: '回答方法をラジオボタンまたはチェックボックスとし、選択肢の配列が空の場合',
        type: 'checkbox',
        choices: [],
        answer: 'nothing',
    },
    {
        id: 8,
        statement: '回答方法をチェックボックスとし、正答を配列で与えていない場合',
        type: 'checkbox',
        choices: [
            {
                value: 'choice1',
                label: '1',
            },
            {
                value: 'choice2',
                label: '2',
            },
            {
                value: 'choice3',
                label: '3',
            },
            {
                value: 'choice4',
                label: '4',
            },
        ],
        answer: 'choice3',
    },
    {
        id: 9,
        statement: '回答方法をチェックボックスとし、正答の配列が空の場合',
        type: 'checkbox',
        choices: [
            '起',
            '承',
            '転',
            '結',
        ],
        answer: [],
    },
];

export default quiz;
