import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Faq from "react-faq-component";


const data = {
    title: <h2 className="pl-4 pt-3 mb-3">Frequently asked questions (How it works)</h2>,
    rows: [
        {
            title: <h5 className='font-weight-normal pl-4'>Why do we use it?</h5>,
            content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). <a href="/">Register </a>`,
        },
        {
            title: <h5 className='font-weight-normal pl-4'>What is Lorem Ipsum?</h5>,
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            title: <h5 className='font-weight-normal pl-4'>Where can I get some?</h5>,
            content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
        },
        {
            title: <h5 className='font-weight-normal pl-4'>Where does it come from?</h5>,
            content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
        },
        {
            title: <h5 className="pl-4 font-weight-normal">We’re Here to Help! Contact us</h5>,
            content: <p className="pl-3">current version is 1.0.1 <br /> <Link to="/ourpartners"> Know more about us. </Link></p>,
        },
    ],
};

const styles = {
    bgColor: 'white',
    titleTextColor: "green",
    rowTitleColor: "black",
    rowContentColor: 'grey',
    arrowColor: "green",
    rowTitleTextSize: 'large',
    // rowTitlePaddingLeft: '50px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '20px',
    rowContentPaddingRight: '60px',
    transitionDuration: "0.6s",
    timingFunc: "ease"
};

const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true,
};


function faq() {
    
    return (
        <div>
            <section>
                <div className=" container">
                    <div className="row">
                        <Link to="/"><img src="imgs/logo.png" alt="" className="text-left float-left" style={{height:"86px", width:"200px"}}/></Link>
                    </div>
                </div>
                <div className="container text-dark my-5 p-3">
                    <Faq
                        data={data}
                        styles={styles}
                        // config={config}
                        className="text-dark"
                    />
                </div>
            </section>
        </div>
    )
}

export default faq
