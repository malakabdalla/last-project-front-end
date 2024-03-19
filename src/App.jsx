import { AudioInput, Message } from './components';

export default function App() {

    // Mock data for the transcribed conversation between the user and the language model
    const mockConversation = [
        {
            role: 'system',
            message: "You are a helpful language tutor. Your job is to help the user learn Gujarati...",
        },
        {
            role: 'assistant',
            message: "Hello, welcome to our shared learning space. What brings you here today?",
        },
        {
            role: 'user',
            message: "I want to learn Gujarati. I am a beginner and I want to learn the basics.",
        },
        {
            role: 'assistant',
            message: "Great! I can help you with that. Let's start with the basics. Do you know how to say 'hello' in Gujarati?",
        },
    ];

    return (
        <main className="mt-20 flex flex-col items-center gap-10">
            {mockConversation
                .filter(item => item.role !== 'system') // Exclude 'system' messages
                .map((item, index) => (
                    <Message key={index} role={item.role} message={item.message} />
                ))}
            <AudioInput />
        </main>
    )
}
