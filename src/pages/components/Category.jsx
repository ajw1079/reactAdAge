import React from "react";
import {useParams} from "react-router-dom";
const Category = () => {
    const {brand} = useParams();
    console.log(brand);
    //url 라우터에 의해 전달되는 값 http://localhost:3000/category/:brand
    const bannerUrl = `src/asset/images/${brand}_banner.jpg`;

    return (
        <>
            <section className="cate_banner" style={{ backgroundImage:`url(${bannerUrl})` }}></section>
            <section className="cate_content-space wrap-1">
                <div className="title">
                    <h1>{brand}</h1>
                </div>

                <div className="cont">
                    <div></div>
                </div>


            </section>


        </>


    );



}
export default Category;