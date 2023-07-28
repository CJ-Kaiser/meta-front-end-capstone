import starEmpty from '../images/star-empty.png';
import starFull from '../images/star-full.png';


function Stars({ rating }) {
    const elements=[];
    for (let i = 1; i <= 5; i++) {

        elements.push(<img src={
            i > rating ? starEmpty : starFull
        }/>);

        /*
        if(i > {rating})
            elements.push(<img src={starEmpty}/>);
        else
            elements.push(<img src={starFull}/>);
            */
    }
    return (
        <div className="stars">
            {elements}
        </div>
    );
}

export default Stars;
