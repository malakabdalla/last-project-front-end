export default function Message({ role, message }) {

    return (
        <div className={role}>
            <span>{role === 'assistant' ? 'Teacher' : role === 'user' ? 'Learner' : '' }</span>
            <p>{message}</p>
        </div>
    )
}