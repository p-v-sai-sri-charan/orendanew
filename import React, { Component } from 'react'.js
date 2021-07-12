import React, { Component } from 'react';
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';
import { useState } from 'react';

function Projects() {
    const [images, setimages] = useState([
        {
            "itemImageSrc": "showcase/demo/images/galleria/galleria1.jpg",
            "thumbnailImageSrc": "showcase/demo/images/galleria/galleria1s.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": "showcase/demo/images/galleria/galleria2.jpg",
            "thumbnailImageSrc": "showcase/demo/images/galleria/galleria2s.jpg",
            "alt": "Description for Image 2",
            "title": "Title 2"
        },
        {
            "itemImageSrc": "showcase/demo/images/galleria/galleria3.jpg",
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
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate=(item) =>{
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }
    return (
        <div>
                <div className="card">
                    <h5>Custom Content</h5>
                    <Galleria ref={(el) => galleria3 = el} value={images} responsiveOptions={responsiveOptions} numVisible={7} style={{ maxWidth: '850px' }}
                        activeIndex={activeIndex} onItemChange={(e) => setActiveIndex({ activeIndex: e.index })}
                        circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate}/>

                    <div className="p-grid" style={{ maxWidth: '400px' }}>
                        {
                            images && images.map((image, index) => {
                                let imgEl = <img src={image.thumbnailImageSrc} alt={image.alt} style={{ cursor: 'pointer' }} onClick={() => {
                                    setActiveIndex({ activeIndex: index }, () => galleria3.show());
                                }} />

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
