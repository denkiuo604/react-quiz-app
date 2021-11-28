import { Button, Paper } from '@mui/material';
import { useState } from 'react';
import { buttonStyle, textFieldStyle } from '../style';
import QBCheckboxList from './qbcheckboxlist';
import QBRadioList from './qbradiolist';
import QBTextField from './qbtextfield';

/**
 * クイズテンプレート
 * @param {object} props クイズの内容
 * propsのプロパティ一覧:
 * - id: number クイズ番号
 * - statement: String 問題文
 * - type: String 回答方法
 * - choices: array 選択肢（回答方法が 'radio', 'checkbox' の場合は必要）
 * - answer: String 正答
 * @returns JSX
 */
const QuizBoard = (props) => {
    // 子コンポーネントから入力された回答を取得するための状態フック
    const [inputAnswer, setInputAnswer] = useState();
    
    // 回答欄エラー時処理
    const onAnswerAreaError = (message) => {
        answerArea = <p className='error'>{message}</p>;
        buttonDisabled = true;
    }

    // 回答未入力時の動作
    const answerNotFound = () => {
        alert('回答を入力してください！');
    };

    // 正解時の動作
    const answerIsCorrect = () => {
        alert('正解です！　素晴らしい！！');
    }

    // 正解時の動作
    const answerIsIncorrect = () => {
        alert('残念！　不正解です。');
    }

    // 答え合わせ処理
    const onAnswerCheck = () => {
        switch (props.type) {
            // number, text, radioは同じ処理を行う
            case 'number':
            case 'text':
            case 'radio':
                if (inputAnswer == null || inputAnswer === '') {
                    // 回答未入力
                    answerNotFound();
                } else if (inputAnswer === props.answer) {
                    // 正解
                    answerIsCorrect();
                } else {
                    // 不正解
                    answerIsIncorrect();
                }
                break;
            case 'checkbox':
                // checkboxの場合、inputAnswerは配列
                if (inputAnswer == null || inputAnswer.length === 0) {
                    // 回答未入力
                    answerNotFound();
                } else if (inputAnswer.length === props.answer.length && inputAnswer.every(answer => props.answer.includes(answer))) {
                    // 正解
                    answerIsCorrect();
                } else {
                    // 不正解
                    answerIsIncorrect();
                }
                break;
            default:
        }
    };

    // 回答方法の設定    
    let answerArea;
    let buttonDisabled = false;     // 答え合わせボタンの制御に使用
    switch (props.type) {
        case 'number':
            // 整数値回答欄
            answerArea = <QBTextField style={textFieldStyle} type='number' setInputAnswer={setInputAnswer} />;
            break;
        case 'text':
            // テキスト式回答欄
            answerArea = <QBTextField style={textFieldStyle} setInputAnswer={setInputAnswer} />;
            break;
        case 'radio':
            // ラジオボタン式回答欄
            if (!Array.isArray(props.choices)) {
                // 選択肢が配列で指定されていない場合
                onAnswerAreaError('選択肢を配列で指定してください。');
            } else if (props.choices.length === 0) {
                // 選択肢の配列が空の場合
                onAnswerAreaError('選択肢を1つ以上指定してください。');
            } else {
                answerArea = <QBRadioList style={textFieldStyle} choices={props.choices} setInputAnswer={setInputAnswer} />;
            }
            break;
        case 'checkbox':
            // チェックボックス式回答欄
            if (!Array.isArray(props.choices)) {
                // 選択肢が配列で指定されていない場合
                onAnswerAreaError('選択肢を配列で指定してください。');
            } else if (props.choices.length === 0) {
                // 選択肢の配列が空の場合
                onAnswerAreaError('選択肢を1つ以上指定してください。');
            } else if (!Array.isArray(props.answer)) {
                // 正答が配列で指定されていない場合
                onAnswerAreaError('正答を配列で指定してください。');
            } else if (props.answer.length === 0) {
                // 正答の配列が空の場合
                onAnswerAreaError('正答を1つ以上指定してください。');
            } else {
                answerArea = <QBCheckboxList style={textFieldStyle} choices={props.choices} setInputAnswer={setInputAnswer} />;
            }
            break;
        default:
            // 回答方法が未指定の場合
            onAnswerAreaError('回答方法を指定してください。');
    }

    return (
        <Paper className='QuizBoard' elevation={3}>
            <h2>第{props.id}問</h2>
            <p>{props.statement}</p>
            {answerArea}
            <Button
                variant='contained'
                style={buttonStyle}
                disabled={buttonDisabled}
                onClick={onAnswerCheck}
            >
                答え合わせをする
            </Button>
        </Paper>
    );
};

export default QuizBoard;
