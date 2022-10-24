import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom';

import nike_01 from "../../asset/images/nike_01.jpg";
import nike_02 from "../../asset/images/nike_02.jpg";
import nike_03 from "../../asset/images/nike_03.jpg";
import nike_04 from "../../asset/images/nike_04.jpg";
import adidas_01 from "../../asset/images/adidas_01.jpg";
import adidas_02 from "../../asset/images/adidas_02.jpg";
import adidas_03 from "../../asset/images/adidas_03.jpg";
import adidas_04 from "../../asset/images/adidas_04.jpg";
import puma_01 from "../../asset/images/puma_01.jpg";
import puma_02 from "../../asset/images/puma_02.jpg";
import puma_03 from "../../asset/images/puma_03.jpg";
import puma_04 from "../../asset/images/puma_04.jpg";


const Detail = () => {

    //2차 배열의 패턴 : ["이미지", "타이틀", "내용"]
    const detailContext = [
        [
            [nike_01, "nike_title_ad_1", "nike_text_ad_1"],
            [nike_02, "nike_title_ad_2", "nike_text_ad_2"],
            [nike_03, "nike_title_ad_3", "nike_text_ad_3"],
            [nike_04, "nike_title_ad_4", "nike_text_ad_4"],
        ],
        [
            [adidas_01, "adidas_title_ad_1", "adidas_text_ad_1"],
            [adidas_02, "adidas_title_ad_2", "adidas_text_ad_2"],
            [adidas_03, "adidas_title_ad_3", "adidas_text_ad_3"],
            [adidas_04, "adidas_title_ad_4", "adidas_text_ad_4"],
        ],
        [
            [puma_01, "puma_title_ad_1", "puma_text_ad_1"],
            [puma_02, "puma_title_ad_2", "puma_text_ad_2"],
            [puma_03, "puma_title_ad_3", "puma_text_ad_3"],
            [puma_04, "puma_title_ad_4", "puma_text_ad_4"],
        ]
    ]
    
    const [brandIndex, setBrandIndex] = useState();
    const [detailIndex, setDetailIndex] = useState();


    const itemId = useParams();
    console.log(itemId);  //{index: '1-2'}


    useEffect(() => {
        // const url = document.location.href;
        // const splitUrl = url.split('/');
        // const location = splitUrl[splitUrl.length - 1];
        const pd_code = itemId.index;
        console.log(pd_code);  //{'1-2'}
        const pd_code_Arr = pd_code.split('-');
        console.log(pd_code_Arr);  //['1', '2']

        setBrandIndex(pd_code_Arr[0]);
        setDetailIndex(pd_code_Arr[1]);
    });

    console.log(brandIndex);
    console.log(detailIndex);


    return (
        <>
            <section className="detail-cont">
                <div className="wrap">
                    <div className="ad_img">
                        {/* <img src={detailContext[brandIndex][detailIndex][0]} alt=""/> */}
                    </div>
                    {/* <h3>{detailContext[brandIndex][detailIndex][1]}</h3> */}
                    {/* <p>{detailContext[brandIndex][detailIndex][2]}용</p> */}
                </div>
            </section>
        </>
    );
}
export default Detail;