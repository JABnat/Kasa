import '../styles/Tag.css'
import '../data/lodgements'

export default function Tags({id,tags}) {

    return (
        <div className='tags'>
            {tags.map((tag) => (
                <div className="tags-container -container">
			        <div className="tag-container">{tag}</div>	
	         	</div>
            ))
            }
        </div>
    )
}
