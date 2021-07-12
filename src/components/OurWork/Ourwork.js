import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import "./Ourwork.css"
import one from "../../Images/1.jpg"; 
import two from "../../Images/2.jpg";
import three from "../../Images/3.jpg";
import four from "../../Images/4.jpg";
import five from "../../Images/5.jpeg";

function Ourwork() {
    const [work, setWork] = useState([ 
        {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: one,
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5,
    },{
        id: "2000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: one,
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5,
    },{
        id: "3000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: one,
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5,
    },{
        id: "4000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: four,
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5,
    }
     ]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    console.log(work)
    const productTemplate = (product) => {
        return (
            <div className="p-4">
                <div className="p-4 border-2 border-yellow-600">
                    <div className="">
                        <img src={product.image} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name} className="product-image" />
                    </div>
                    <div className="bg-gray-200 h-16 ">
                        <h4 className="text-center text-xl flex align-center justify-center pt-2">{product.name}</h4>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="">

            <div className="bg-white pt-12">
                <Carousel value={work} numVisible={3} numScroll={1} indicatorsContentClassName="hidden" responsiveOptions={responsiveOptions} className="custom-carousel pb-12" circular
                    autoplayInterval={1000} itemTemplate={productTemplate} header={<p className="flex align-center justify-center text-5xl pb-12">Our Work</p>} />
            </div>
            <div className="flex align-center justify-center bg-white">
            <Button label="See All Our Work" className=" w-64 p-button-outlined m-4 " />
            </div>
        </div>
    );
}
export default Ourwork
