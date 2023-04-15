//Code the <Score>component so that it renders the score object's date & score properties.

export default function Score(props) {
    return (
        <div>
            <h2 className="std-scores">Student's Scores</h2>
            <p className="date">Date: {props.scores.date}</p>
            <p className="score">Score: {props.scores.score}</p>
        </div>
    )
}
