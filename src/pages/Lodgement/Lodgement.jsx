import Navigator from '../../components/Navigator'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import Host from '../../components/Host'
import StarRating from '../../components/StarRating'
import {useParams} from 'react-router-dom';
import lodgements from '../../data/lodgements';
import Tag from '../../components/Tag'
import Footer from '../../components/Footer'
import '../../styles/Lodgement.css'

export default function Lodgements() {
    const urlParam  = useParams()
    const lodgementId = urlParam['*']
    const currentLodgement = lodgements.filter(lodgement => lodgement.id === lodgementId)['0']
    // console.log(currentLodgement['equipments'])

    return (
       
        <div>
            < Navigator />
            <div className='slideshow'>
                < Slideshow 
                    slides={currentLodgement['pictures']}
                />
            </div>
            <div className='under-slideshow-group'>
                <div className="title-city-tag-group">
                    <div className='container-title-city'>
                        <h1>{currentLodgement['title']}</h1>
                        <h2>{currentLodgement['location']}</h2>
                    </div>
                    <Tag
                        key={currentLodgement['id']}
                        tags={currentLodgement['tags']}
                    />
                </div>
                <div className='stars-host-container'>
                    <StarRating score={currentLodgement['rating']} />
                        <div className='host-info-group'>
                            <div className="hostRating-container">
                                <Host 
                                    key={currentLodgement['id']}
                                    name={currentLodgement['host']['name']}
                                    picture={currentLodgement['host']['picture']}
                                />
                            </div>
                        </div>
                </div>
            </div>
            <div className='collapsable-container'>
                < Collapse 
                    title= "Description"
                    description= {currentLodgement['description']}
                        />
                < Collapse 
                    title= "Equipments"
                    equipments= {currentLodgement['equipments']}
                        /> 
            </div>
            <div className='spaceBetween'></div>
            <Footer/>
        </div>
    )
    
};
