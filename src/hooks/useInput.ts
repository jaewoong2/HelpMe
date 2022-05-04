import { ChangeEvent, useState } from "react"

export default (inititalValue: string): [string, React.Dispatch<React.SetStateAction<string>>, (e: ChangeEvent<HTMLInputElement>) => void] => {
    const [state, setState] = useState(inititalValue);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value);
    }

    return [state, setState, onChange]
}