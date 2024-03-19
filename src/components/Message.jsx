export default function Message({ role, message }) {
    const bubbleColor = role === 'assistant' ? 'bg-blue-100' : 'bg-green-100';
    const textColor = role === 'assistant' ? 'text-blue-800' : 'text-green-800';

    return (
        <div className={`p-2 ${textColor}`}>
            <span className="text-xs font-medium uppercase">
                {role === 'assistant' ? 'Teacher' : role === 'user' ? 'Learner' : ''}
            </span>
            <div className={`mt-1 p-4 ${bubbleColor} rounded-lg shadow-sm`}>
                <p className="">{message}</p>
            </div>
        </div>
    )
}