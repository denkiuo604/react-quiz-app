import { Checkbox, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import { useState } from "react";

/**
 * クイズテンプレートQuizBoardにて使用するチェックボックスのリスト。
 * @param {object} props
 * propsのプロパティ一覧:
 * - style: object スタイル
 * - choices: array 選択肢
 * @returns JSX
 */
const QBCheckboxList = (props) => {
    // チェックボックスの状態を管理するフック
    const initialState = props.choices.map(choice => {
        return {
            value: choice.value,
            checked: false,
        }
    });
    const [checkboxState, setCheckboxState] = useState(initialState);

    // 回答が変更されたときに、回答欄の値を状態関数にセットする処理
    const onChangeEvent = (event) => {
        const newCheckboxState = [...checkboxState].map(choice => {
            if (choice.value === event.target.value) {
                return {
                    value: choice.value,
                    checked: event.target.checked,
                };
            } else {
                return choice;
            }
        });

        setCheckboxState(newCheckboxState);
        props.setInputAnswer(newCheckboxState.filter(choice => choice.checked).map(choice => choice.value));
    };

    return (
        <div style={props.style}>
            <FormLabel>答え</FormLabel>
            <FormGroup
                aria-label="choices"
                name="choices"
                onChange={onChangeEvent}
            >
                {props.choices.map(choice => 
                    <FormControlLabel key={choice.value} value={choice.value} control={<Checkbox />} label={choice.label} />    
                )}
            </FormGroup>
        </div>
    );
};

export default QBCheckboxList;
