import { Checkbox, Card, Input, Image } from 'antd';
import Example from './Components/navBar';
import FooterTab from './Components/footer';
const { TextArea } = Input;
import React from "react";
import { useState } from 'react';

let all = [];

export default function userMag() {
    const [allchecked, setAllChecked] = React.useState([]);
    let sum = 0;
    function handleChange(e) {
        if (e.target.checked) {
            setAllChecked([allchecked + ',' + e.target.value]);
            return all.push(parseInt(e.target.value, 10));
        } else {
            setAllChecked(allchecked.filter((item) => item !== e.target.value));
            return all.push(parseInt(-e.target.value, 10));
        }
    }
    for (let i = 0; i < all.length; i++) {
        sum += all[i];
    }
    console.log(sum)
    console.log(all)

    const [message, setMessage] = useState('');

    const handleChange2 = (event) => {
        // 👇 Get input value from "event"
        setMessage(event.target.value);
    };

    return (
        <>
            <header className="shadow sticky" style={{ backgroundColor: '#600c0c' }}>
                <Example className=" top-10" />
            </header>
            <main>
                <div className='justify-items-center bg-left-bottom bg-gradient-to-b pb-24 from-red-900 via-red-500 to-yellow-50 min-h-full'>
                    <div className='text-center bg-gray-950 py-20 bg-opacity-20'>
                        <p className='text-3xl text-white'>เลือกรายการบุฟเฟต์</p>
                        <p className=' text-slate-200'>คำนวณราคาตามจำนวนคนและรายการอาหาร</p>
                    </div>
                    <div className='mx-auto max-w-3xl grid grid-cols-2 gap-2 lg:gap-12 my-20 container justify-items-center '>
                        <div className='text-white col-span-2 border-b w-full text-center pb-5 text-lg '>ส่วนที่ 1 เลือกรายการบุฟเฟต์</div>
                        <Card className='w-full col-span-1 rounded-3xl ' >
                            <div className=' text-lg mb-3 py-3'>
                                <p className='text-center rounded-full text-white bg-red-700 shadow-lg mx-auto lg:mx-20'>เมนูยำ</p>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ยำหมูยอหนัง</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ยำรวมมิตร</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ยำเห็ดหอมกุ้งสด</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ยำใหญ่</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ยำโป๊ยเซียน</Checkbox>
                            </div>
                        </Card>
                        {/* <Card className='w-full md:col-span-1 col-span-2 rounded-3xl'>
                            <div className=' text-lg bg mb-3 py-3'>
                                <p className='text-center rounded-full text-white bg-red-700 shadow-lg mx-20'>เมนูออเดริฟ</p>
                            </div>
                            <div>
                                <Checkbox className='px-3 py-1' onChange={handleChange} value={50}>ออเดริฟจีน</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-3 py-1' onChange={handleChange} value={50}>ออเดริฟทะเล</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-3 py-1' onChange={handleChange} value={50}>ออเดริฟทะเล</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-3 py-1' onChange={handleChange} value={50}>ข้าวเกรียบ</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-3 py-1' onChange={handleChange} value={50}>หมั่นโถว</Checkbox>
                            </div>
                        </Card> */}
                        <Card className='w-full col-span-1 rounded-3xl'>
                            <div className=' text-lg bg mb-3 py-3'>
                                <p className='text-center rounded-full text-white bg-red-700 shadow-lg mx-auto lg:mx-20'>เมนูข้าวและเส้น</p>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ข้าวผัดรวม</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ข้าวผัดเกลือ</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ข้าวผัดปู</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ข้าวผัดกุนเชียง</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>หมี่ซั่ว</Checkbox>
                            </div>
                        </Card>
                        <Card className='w-full col-span-1 rounded-3xl'>
                            <div className=' text-lg bg mb-3 py-3'>
                                <p className='text-center rounded-full text-white bg-red-700 shadow-lg mx-auto lg:mx-20'>เมนูซุปและต้ม</p>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ต้มจืดเต้าหู้ไข่</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ต้มจืดเต้าหู้สาหร่ายทะเล</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ต้มแซ่บซี่โครงหมู</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ต้มยำปลาน้ำโขง</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>กระเพาะปลาน้ำแดง</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>กระเพาะปลาเนื้อปู</Checkbox>
                            </div>
                        </Card>
                        <Card className='w-full col-span-1 rounded-3xl '>
                            <div className=' text-lg bg mb-3 py-3'>
                                <p className='text-center rounded-full text-white bg-red-700 shadow-lg mx-auto lg:mx-20'>เมนูของคาว</p>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ปลานึ่งมะนาว</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ปลานึ่งซีอิ๊ว</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ไก่พะโล้ยอดผัก</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ปลาสามรส</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ปลาลุยสวน</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>แปะซะปลาช่อน</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>แปะซะปลานิล</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>พะโล้ขาหมูยอดผัก</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ตุ๋นน่องไก่มะนาวดอง</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ตุ๋นซี่โครงหมูเยื่อไผ่</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ปลาช่อนลุยสวน</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-0 md:px-3 py-1' onChange={handleChange} value={50}>ตุ๋นซี่โครงหมูเยื่อไผ่</Checkbox>
                            </div>
                        </Card>
                        <Card className='w-full col-span-full max-w-sm rounded-3xl'>
                            <div className=' text-lg bg mb-3 py-3'>
                                <p className='text-center rounded-full text-white bg-red-700 shadow-lg mx-auto lg:mx-20'>เมนูของหวาน</p>
                            </div>
                            <div>
                                <Checkbox className='px-3 py-1' onChange={handleChange} value={30}>ผลไม้รวม</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-3 py-1' onChange={handleChange} value={30}>รวมมิตรกะทิสด</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-3 py-1' onChange={handleChange} value={30}>ผลไม้กระป๋อง</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-3 py-1' onChange={handleChange} value={30}>ทับทิมกรอบมะพร้าวอ่อน</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-3 py-1' onChange={handleChange} value={30}>บัวลอยมะพร้าวอ่อน</Checkbox>
                            </div>
                            <div>
                                <Checkbox className='px-3 py-1' onChange={handleChange} value={30}>โอนี่แปะก๊วย</Checkbox>
                            </div>
                        </Card>
                        <div className='col-span-2 w-full text-base justify-self-center text-slate-700 bg-red-100 grid grid-cols-10 px-10 py-4 md:mt-0 mt-12 rounded-3xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
                            <div className='col-span-9 text-center'>ราคานี้รวมค่าใช้จ่าย ข้าวสวย+ ถ้วย จาน + ช้อนส้อม+ อุปกรณ์ต่างๆ +น้ำดื่มในรูปแบบกดดื่มได้</div>
                            <p className='text-center text-red-800 text-md col-span-full'>(ไม่รวมโต๊ะเก้าอี้)</p>
                        </div>
                        <div className='col-span-2 text-center md:mt-10 mt-12'>
                            <p className='mx-auto w-full text-2xl bg-red-100 -mt-8 px-12 py-5 rounded-t-full text-red-800'>รวมราคา <input disabled className='text-center mx-auto w-1/4' value={sum * message} /> บาท</p>
                        </div>
                        <Card className='col-span-2 w-full md:-mt-10 -mt-0 rounded-3xl'>
                            <div className=' grid grid-cols-3 max-w-xs mx-auto'>
                                <p className='text-lg col-span-2 mt-1'>ระบุจำนวนคน</p>
                                <Input onChange={handleChange2} type='number' className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </Card>
                        <div className='text-white col-span-2 border-b w-full text-center pb-5 text-lg  md:mt-0 mt-12'>ส่วนที่ 2 กรอกข้อมูลเพื่อรอตอบกลับ</div>
                        <Card className='col-span-2 w-full rounded-3xl md:mt-0 mt-12' title="ข้อมูลติดต่อ">
                            <div className=' grid grid-cols-4 gap-5 max-w-xl mx-auto w-full'>
                                <p>ชื่อ - นามสกุล</p>
                                <Input type='string' className="col-span-3 text-start bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                <p>ที่อยู่</p>
                                <TextArea
                                    className='col-span-3  rounded-3xl'
                                    name="message"
                                    id="message"
                                    rows={4}
                                    defaultValue={''}
                                />
                                <p>เบอร์โทรติดต่อ</p>
                                <Input type='number' rows={4} className="col-span-3 text-start bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                <div className='col-span-4 justify-self-end'>
                                    <button type="submit" className=' bg-red-700 border-x-yellow-300 border-4 shadow text-white hover:bg-green-400 hover:text-white hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 px-6 py-2 rounded-3xl'>
                                        ยืนยัน
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                {/* <div className='items-center border-0 mx-auto w-full py-6 h-full' style={{ backgroundColor: '#c01c1c' }}>
                    <div className='grid grid-cols-2 justify-items-center align-middle'>
                        <div className='text-white col-span2 md:col-span-1 text-2xl font-mono'>
                            <p>ครูติ้งโต๊ะจีน</p>
                            <p className='text-sm'>รับจัดโต๊ะจีนและบุฟเฟต์ในจังหวัดเลย</p>
                        </div>
                        <div className='col-span2 md:col-span-1'>Proident anim occaecat do veniam do sunt.</div>
                    </div>
                </div> */}
                <div className=' bg-red-700 '>
                    <div className='text-white col-span2 md:col-span-1 text-2xl py-10 max-w-5xl mx-10 md:mx-auto font-mono '>
                        <p>ครูติ้งโต๊ะจีน</p>
                        <p className='text-sm'>รับจัดโต๊ะจีนและบุฟเฟต์ในจังหวัดเลย</p>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-4 mt-10 max-w-5xl mx-auto mb-24">
                    <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/344352898_945978666748506_5952695480782225878_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHjx8eBpbZB_-ivIZ5aMBbTJDWTBZsB0xckNZMFmwHTF0skBK5YPXCbTD_dtgxGew7TMzKxG3tjiT1_eLdnsV9Q&_nc_ohc=zNnE6EvbIgIAX9nqdO_&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfBFyw0QNtRDlZkLfITV3yU-cOMkbXlMSeL3c8Hrnb436w&oe=64D2011E' />
                    <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/327719951_676961500779179_8976187200272693738_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGjUPr6sAncv8gTs0llUAWu97ZmOa3reAv3tmY5ret4C1xBVY7bv59Uau-PGMHKn1cWR1HFOtVIy8M1hn5h8c4k&_nc_ohc=oPSmrFvbdiYAX9mpHVH&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfBYu11uzYMafHhtEd3I9VrIGoDNl-CGgC8KbZVyM_XY0Q&oe=64D1570B' />
                    <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/310975988_527307292735650_244570387955422631_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeESyUlkKiyOk-lutRnGZxhGqQ8IGKUv5F6pDwgYpS_kXqqELjOn3g8TemFJknwjJQ-epmhg69-0pzN-5MRhrndM&_nc_ohc=FJOrgh4VAcYAX-NHF1q&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfCLffXaaH_KaG0IjwlYYEb8oyI-YkaufhJGYMib3H3AmA&oe=64D22269' />
                    <div className='col-span-3 gap-4 grid grid-cols-3'>
                        <div className='grid'>
                            <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t1.6435-9/132379178_3926110087420585_7781216223625521373_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGHOQUCrilqdFrMQTpi48GQsfBYRWEE7Yqx8FhFYQTtihklziELHK3cSq766jtLgiR9d6sRHiyPfAy9o3UuxjX5&_nc_ohc=tAWHS0VarZwAX8NT3MK&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfBF3VwJP1O6oNHT1_e8dZ0IcFe3ViBflmyWAvwe2hiGdQ&oe=64F46C1B' />
                            <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t1.6435-9/129853917_3874770582554536_2942357514614465405_n.jpg?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH1UGHqWllEemg-ceJRadLM05FYv0feaX_TkVi_R95pf8BkAZoF1nVbLPZ_7Jr6EO1jlD1_X8spWbDqbzqLd_Jc&_nc_ohc=QG-CMBZ4Rg0AX9o5m6_&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfCzi0B_dS-ROhpXn9aHGY4c_1CQ7yDCMamiW1tNkwLBiQ&oe=64F44D6F' />
                        </div>
                        <Image class="col-span-2" src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/249394248_4867983333233251_324323422271603565_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGND2lTd6o4l_NukIaYYRN_NEXfQD98-hI0Rd9AP3z6Eu8GE8SmCqBwM5lCDUbiX5QKSgVWGopWLJuM77sTSSpE&_nc_ohc=QvRsDnQy-CIAX8DZjXg&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfB7KuvgiPgF7v38N9bLIxGRGBbaOODeycHPNYiy-t1HuQ&oe=64D2687E' />
                    </div>
                </div>

                {/* <div className='grid grid-cols-2 justify-items-center align-middle py-10'>
                    <div className=' border-e-2 text-center w-full border-stone-200'>
                        <p className='text-black text-2xl'>บุฟเฟต์</p>
                    </div>
                    <div className='text-black text-2xl'>โต๊ะจีน</div>
                </div> */}
                <FooterTab />
            </main>
        </>

    )
}
