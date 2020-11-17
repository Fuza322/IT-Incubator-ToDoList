import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

export type AddItemFormType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormType) {

    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const onTitileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }

    const onKeyPressAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === 'Enter') {
            addItem()
        }
    }

    const addItem = () => {
        if (title.trim() !== '') {
            props.addItem(title.trim())
            setTitle('')
        } else {
            setError('Title is required')
        }
    }

    return (
        <div>
            <input value={title}
                   onChange={onTitileChangeHandler}
                   onKeyPress={onKeyPressAddItem}
                   className={error ? 'error' : ''}
            />
            <button onClick={addItem}>+</button>
            {error && <div className='error-message'>{error}</div>}
        </div>
    )
}