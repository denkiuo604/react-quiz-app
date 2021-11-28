import { TextField } from "@mui/material";

/**
 * クイズテンプレートQuizBoardにて使用するテキストボックス。
 * @param {object} props
 * propsのプロパティ一覧:
 * - style: object スタイル
 * - type: String 入力値の種類（numberなど）
 * - setInputAnswer: 入力された回答を親コンポーネントに渡すための状態関数
 * @returns JSX
 */
 const QBTextField = (props) => {
    // 回答が変更されたときに、回答欄の値を状態関数にセットする処理
    const onChangeEvent = (event) => props.setInputAnswer(event.target.value);

    return (
        <div>
            <TextField variant='standard' style={props.style} label='答え' type={props.type} onChange={onChangeEvent} />
        </div>
    );
};

export default QBTextField;
