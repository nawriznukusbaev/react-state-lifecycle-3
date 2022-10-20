export default function App() {
    const [text, setText] = React.useState('');
    const [num, setNum] = React.useState(1);
    const [luckyNum, setLuckynum] = React.useState(1);
    React.useEffect(() => {
        window.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.textContent === 'Change name') {
                setText((prev) => prev + 'y');
                setNum((prev) => prev + 1);
            } else if (e.target.textContent === 'Get new lucky number!') {
                setLuckynum((prev) => (prev += Math.random * 100));
                console.log(luckyNum);
            }
        });
    }, []);
    return (
        <div className="container">
            <p>Welcome Cool Guy{text}! </p>
            <p>You lucky number{luckyNum} </p>
            <p>Name has changed times {num}</p>
            <button>Change name</button>
            <button>Get new lucky number!</button>
        </div>
    );