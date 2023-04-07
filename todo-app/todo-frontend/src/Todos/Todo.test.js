import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Todo from './Todo'


it('Todo is rendered correctly', () => {
    render(
        <Todo text='testTodo' done={false} doneInfo='done' notDOneInfo='notDone'/>
    )
    expect(screen.getByTestId('hello')).toHaveTextContent('testTodo')
})