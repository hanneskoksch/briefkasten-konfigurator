import React from 'react'

interface CheckboxProps  {
    checked: boolean,
    setChecked: Function,
}

const Checkbox = ({checked, setChecked}: CheckboxProps) => {
    return (
        <div className={"h-8 w-8 rounded " + (checked ? "bg-gray-800" : "bg-gray-200")} onClick={() => setChecked(!checked)}>
            
        </div>
    )
}

export default Checkbox
