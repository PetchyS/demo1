import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquareFacebook,
    faLine
} from "@fortawesome/free-brands-svg-icons";

export default function FooterTab() {
    return (
        <>
            <div className="bg-gray-900 py-20">
                <div className="max-w-5xl mx-auto self-center justify-self-center w-full text-center gap-4 grid grid-cols-6">
                    <div className="col-span-full md:col-span-1 md:text-start w-full">
                        <img className="mx-auto w-1/3 md:w-32 -mt-5 rounded-full" src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/363308504_1344617566437441_5932084388408334453_n.jpg?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHhhGl7fjztQfNWJzCNBQKY_l8gNiP3Dfj-XyA2I_cN-NLNVJHUQcudpvjq9UluMYG0S71AAn9ifw9mfoukSiYe&_nc_ohc=wO1GVKwHLj0AX-fhszz&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfCnPtC1qR1MLCn8CRSYHu9DFjMGEYogFDXmbhxRAAeHlQ&oe=64C422BC' />
                    </div>
                    <div className="text-white col-span-full md:col-span-5 grid grid-cols-6 gap-y-5 md:mt-0 mt-10">
                        <a className="col-span-3 md:col-span-1 text-lg md:text-xl">โต๊ะจีน</a>
                        <a href="./buffet#" className="col-span-3 md:col-span-1 text-lg md:text-xl">บุฟเฟต์</a>
                        <a href="./exam" className="col-span-6 md:col-span-1 text-lg md:text-xl border-b-2 pb-10 md:pb-0 md:border-b-0">ผลงานโต๊ะจีน</a>
                        <div className=" col-span-6 md:col-span-2 ms-5 text-start">
                            <div className="text-xl" style={{ color: '#ecac04' }}>ช่องทางการติดต่อ</div>
                            <a href="https://www.facebook.com/Krutingfood" className="w-full"><div className=" text-md mt-10 text-white"><FontAwesomeIcon icon={faSquareFacebook} bounce size="2xl" style={{ color: "#ecac04", }} /> : ครูติ้งโต๊ะจีน จ.เลย</div></a>
                            <a href="#"><div className=" text-md mt-3"><FontAwesomeIcon icon={faLine} bounce size="2xl" style={{ color: "#ecac04", }} /> : @----------</div></a>
                            <a href="#"><div className=" text-md mt-3 grid-cols-6 grid"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 col-span-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg><p className="col-span-5 -ms-1">: 087-8587665</p></div></a>

                        </div>
                        <div className="text-3xl col-span-6 justify-between md:text-end md:col-span-1">
                            <img className="mx-auto mt-5 lg:mt-0 lg:w-auto w-1/3 rounded-lg" src="https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/363305974_1344616423104222_8123171467612240550_n.jpg?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFenEKNjVm8BJCVwlTJY3_ZzvBrFQt9bz7O8GsVC31vPkYvVakHrR7WkE6iYz7Ee1R1a7yegyQMT8rzJwmQcpQQ&_nc_ohc=M05wGtgVboQAX91rTgs&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfDJ20flgaMyoGNZ8W8miB-VoBhdq8WTMrJkHixxeTuu7g&oe=64C46ABA" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}