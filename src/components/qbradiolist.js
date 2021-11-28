import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

/**
 * クイズテンプレートQuizBoardにて使用するラジオボタンのリスト。
 * @param {object} props
 * propsのプロパティ一覧:
 * - style: object スタイル
 * - choices: array 選択肢
 * @returns JSX
 */
 const QBRadioList = (props) => {
    // 回答が変更されたときに、回答欄の値を状態関数にセットする処理
    const onChangeEvent = (event) => props.setInputAnswer(event.target.value);

    return (
        <div style={props.style}>
            <FormLabel>答え</FormLabel>
            <RadioGroup
                aria-label="choices"
                name="choices"
                onChange={onChangeEvent}
            >
                {props.choices.map(choice => 
                    <FormControlLabel key={choice.value} value={choice.value} control={<Radio />} label={choice.label} />    
                )}
            </RadioGroup>
        </div>
    );
};

export default QBRadioList;
