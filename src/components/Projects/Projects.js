import React, { Component,useState,useRef,useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';
import one from "../../Images/1.jpg"; 
import two from "../../Images/2.jpg";
import three from "../../Images/3.jpg";

function Projects() {
    const [images, setimages] = useState([
        {
            "itemImageSrc": one,
            "thumbnailImageSrc": "showcase/demo/images/galleria/galleria1s.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": two,
            "thumbnailImageSrc": "showcase/demo/images/galleria/galleria2s.jpg",
            "alt": "Description for Image 2",
            "title": "Title 2"
        },
        {
            "itemImageSrc": three,
            "thumbnailImageSrc": "showcase/demo/images/galleria/galleria3s.jpg",
            "alt": "Description for Image 3",
            "title": "Title 3"
        },])

        const [activeIndex, setActiveIndex] = useState(0)
        const responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
        const responsiveOptions2 = [
            {
                breakpoint: '1500px',
                numVisible: 5
            },
            {
                breakpoint: '1024px',
                numVisible: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
    const onItemChange=(event) =>{
        setActiveIndex({ activeIndex: event.index });
    }

    const itemTemplate=(item) =>{
        console.log(item)
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate=(item) =>{
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }
    //const [galleria3, setGalleria3] = useState(null)
    const galleria3 = useRef()
    const [galleria1, setGalleria1] = useState(false)
    useEffect(() => {
        setGalleria1(galleria3.current);
        console.log(); // logs <div>I'm an element</div>
      }, []);
    console.log(galleria1)
    const handleClick = (e,index)=>{
        setActiveIndex({ activeIndex: index }) 
        setGalleria1(true)
        galleria1.show()
        console.log()
    }
    return (
        <div>
                <div className="card">
                    <h5>Custom Content</h5>
                    <Galleria ref={galleria3}  value={images} onHide={()=>setGalleria1(false)} responsiveOptions={responsiveOptions} numVisible={7} style={{ maxWidth: '850px' }}
                        activeIndex={activeIndex} onItemChange={(e) => setActiveIndex({ activeIndex: e.index })}
                        circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} />

                    <div className="p-grid" style={{ maxWidth: '400px' }}>
                        {
                            images && images.map((image, index) => {
                                let imgEl = <img src={image.itemImageSrc} alt={image.alt} style={{ cursor: 'pointer' }} onClick={(e,i)=>handleClick(e,i)} />

                                return (
                                    <div className="p-col-3" key={index}>
                                        {imgEl}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
    )
}

export default Projects
