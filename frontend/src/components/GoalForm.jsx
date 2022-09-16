import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from '../features/goal/goalSlice'
const GoalForm = () => {

    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createGoal({ text }));
        setText('');
    }
    return (
        <section className="form">
            <form onSubmit={onSubmit} autoComplete="off">
                <div className="form-group">
                    <label htmlFor="text">Goal</label>
                    <input type="text"
                        name="text"
                        id="text"
                        placeholder="Enter Goal"
                        value={text}
                        onChange={(e) => setText(e.target.value)} />
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-block">Create</button>
                </div>
            </form>
        </section>
    )
}

export default GoalForm