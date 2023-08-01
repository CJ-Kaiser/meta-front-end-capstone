import starEmpty from '../images/star-empty.png';
import starFull from '../images/star-full.png';


function Stars({ rating }) {
    const elements=[];
    for (let i = 1; i <= 5; i++) {

        elements.push(<img key={i} src={
            i > rating ? starEmpty : starFull
        }/>);
    }
    return (
        <div className="stars">
            {elements}
        </div>
    );
}

export default Stars;
