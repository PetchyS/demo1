import { Checkbox, Card, Input, Image } from 'antd';
import Example from './Components/navBar';
import FooterTab from './Components/footer';
const { TextArea } = Input;
import React from "react";


export default function userMag() {
    return (
        <>
            <header className="shadow sticky" style={{ backgroundColor: '#600c0c' }}>
                <Example className=" top-10" />
            </header>
            <main>
                <div className=' justify-items-center pb-24 bg-red-800 min-h-full'>

                    <div className=''>
                        <div className='mx-auto max-w-3xl py-20 '>
                            {/* <p className='text-3xl text-white mx-8 md:mx-0'>ผลงาน</p> */}
                            <div className=' text-slate-200 text-lg mx-8 md:mx-0'>เมนูอาหาร<hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr></div>
                            <div class="grid grid-cols-3 gap-4 mt-10 mb-16">
                                <div className="col-span-3">
                                    <Image className=' shadow-lg' src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/366357244_1350696399162891_1616728300734249506_n.jpg?_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGdmCl-NHWpg-n8d4nQKsjWj_Cd3Thz7syP8J3dOHPuzOCLbw1eSqXjL_YJI1zLt-HHo_7jG6XZ3OYqY3FdNQbx&_nc_ohc=DBG6_VmEdXUAX8sTQ6O&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfBNWcASyXUHHEy2ltBQCBNbWxZNA-GF96z9IevJf_OgSw&oe=64D4B833' />
                                </div>
                                <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/249394248_4867983333233251_324323422271603565_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGND2lTd6o4l_NukIaYYRN_NEXfQD98-hI0Rd9AP3z6Eu8GE8SmCqBwM5lCDUbiX5QKSgVWGopWLJuM77sTSSpE&_nc_ohc=QvRsDnQy-CIAX8DZjXg&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfB7KuvgiPgF7v38N9bLIxGRGBbaOODeycHPNYiy-t1HuQ&oe=64D2687E' />
                                <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/327719951_676961500779179_8976187200272693738_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGjUPr6sAncv8gTs0llUAWu97ZmOa3reAv3tmY5ret4C1xBVY7bv59Uau-PGMHKn1cWR1HFOtVIy8M1hn5h8c4k&_nc_ohc=oPSmrFvbdiYAX9mpHVH&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfBYu11uzYMafHhtEd3I9VrIGoDNl-CGgC8KbZVyM_XY0Q&oe=64D1570B' />
                                <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/310975988_527307292735650_244570387955422631_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeESyUlkKiyOk-lutRnGZxhGqQ8IGKUv5F6pDwgYpS_kXqqELjOn3g8TemFJknwjJQ-epmhg69-0pzN-5MRhrndM&_nc_ohc=FJOrgh4VAcYAX-NHF1q&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfCLffXaaH_KaG0IjwlYYEb8oyI-YkaufhJGYMib3H3AmA&oe=64D22269' />
                                <div className='col-span-3 gap-4 grid grid-cols-3'>
                                    <div className='grid'>
                                        <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/324587535_2130230074033535_5171029391552026430_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE_spYCUKSH8A_ifd-1yXTcyuN0bN9PXBjK43Rs309cGMxWIhX116vqnP0238K6x2973R0K3uJaDZrGzd7TebqD&_nc_ohc=yjzuiWATwlQAX84iSeF&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfCsDQS_CckyafKm8d5KneueDSwv_7wIxHeYxXQAboSxyQ&oe=64D2D317' />
                                        <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/316261573_577554201044292_4240144751186613837_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFduFpYHHNf18IRNQ0MEhuKxvHRq5yQJCbG8dGrnJAkJrXnbELWDkChUkcJFjUiRbXGlr6YEbgiOS3YMEq3B_oL&_nc_ohc=xegvAxjuzcUAX88YyRQ&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfA_Yzn9QJ8CrE3hIeT8FfW9IEN2Z4cGnLeFK917eXLyyw&oe=64D2312B' />
                                    </div>
                                    <Image class="col-span-2" src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/248779950_4867983099899941_7244938182699428357_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFyfGlE9MZFXc1RxjkoZuvQjdpIY-GlPnaN2khj4aU-dp2qjzvMTHx8m__ilqMoa1WqWDY9ANy5yg8mSG9FYcPE&_nc_ohc=amx8EF0yxXUAX8nUaTm&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfB6Cwf1-b1VpgSEDoxpE5AZpcsazd2UDYI7laWJac4pVA&oe=64D28C0A' />
                                </div>
                                <Image className='w-10/12' src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/327371276_900491611295371_470134274470825594_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHB6BXxC3pee4GAm973-QYnSucewQPG5xFK5x7BA8bnET8ktkrO18Jhwr58Llc_oF45unV5U-OoZFIRlWp4Muy0&_nc_ohc=DIKbTl1DDp0AX-jy6WO&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfBunU-Wt4Xx0F0oXj_zN4CHVKVN80M8G5yDVmw6E8A-4g&oe=64D18EC3' />
                                <Image className='w-10/12' src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/311247376_527306849402361_4374112329527526651_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGrjpVwOFgRXqwIe8_phTmozGTFWa_u7HLMZMVZr-7scjcO4S5mBmaewAZRvSBijYWk3DP5Se5sAHwMNUg9Hg8D&_nc_ohc=us6pU_hScBEAX__QE7B&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfDUl6Oq6gbuh3zTqmsHo7beE1rYiPhW1ipnMFRI5stvtg&oe=64D2E6B6' />
                                <Image className='w-10/12' src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t1.6435-9/151348914_4088209071210685_2956041398004250294_n.jpg?_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHJKAmPMpGTqi4C-zGkcTXzDEh5uxkQBWoMSHm7GRAFal3OyyxV3J4dKyURIOxq4IoJ7RHAAJsp8bDh54Ys36C8&_nc_ohc=pvc30k-pFp0AX-J6dog&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfBCwzeZTSnTzf7EyHy4fj5Hk8ibdEi2rE2J80yNVvz7XQ&oe=64F47F59' />
                            </div>
                        </div>
                    </div>

                    <div className='bg-opacity-20 bg-gray-950 '>
                        <div className='mx-auto max-w-3xl py-20 '>
                            {/* <p className='text-3xl text-end text-white mx-8 md:mx-0'>ผลงาน</p> */}
                            <div className=' text-slate-200 text-end text-lg mx-8 md:mx-0'>โต๊ะจีน<hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr></div>
                            <div class="grid grid-cols-3 gap-4 mt-10 mb-16">
                                <div className='col-span-3 gap-4 grid grid-cols-3'>
                                    <div className='grid'>
                                        <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/316266642_577554117710967_8160766806110484777_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEnQYAYTW-eoTb7Jrgw-eEp623ZQ8aMC1XrbdlDxowLVbJuHIf7CqX1DuMo7lHQpH2ZOgA-s1I5WoNwj_JTTSFr&_nc_ohc=mDWQwqCFbNgAX-Bzy5l&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfC5CEBzctHu2PM-VsXuprGohdUhpxpucv9_6lKMuIqwbA&oe=64D1B6BD' />
                                        <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/319995898_1493185844524036_8590066041786191701_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE68xsHRIDwJU7HUWUr0lkfxyg5fU5L793HKDl9Tkvv3S9b2XDaF7MKNy8k7DWvXgZHzwSCf2fXF9LLWTsoXj04&_nc_ohc=4ruEuVkUU5kAX-bEyy0&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfDf7p_hydLdhJefgxTEmm5mGiST_3AgiiL_c7AeiZP_9g&oe=64D29183' />
                                    </div>
                                    <Image class="col-span-2" src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t1.6435-9/160600333_4177049642326627_3906479683818612050_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHddKB0k_XZW7KYqoMmGtqPscokndZTxSaxyiSd1lPFJttJhhGUONEL5bHVXmBgj7Y3P_24xwj9nV9j6GZ7UIsW&_nc_ohc=vnpcR-HZgxsAX9bVFmt&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfAtbpnKSO4z0YsbSMnGR5DppmNBkM3HR8IqV6dIw9v4tw&oe=64F4C608' />
                                </div>
                                <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t1.6435-9/71671858_2708841392480800_1361064136691154944_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFKSc1IG0lAYjTJ_SEHsMLBzzYySejQsyXPNjJJ6NCzJccuYBQhbMlkrfQc8X9idxKCwkQM5a4crUFBjMAP-YPw&_nc_ohc=boSYIPrVxG4AX_lpyeg&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfBlwS6m3Sqnk2124BdoQmJD9vwa4WJ6Nw2iyJSNJqxGQw&oe=64F4AAA6' />
                                <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t1.6435-9/132379178_3926110087420585_7781216223625521373_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGHOQUCrilqdFrMQTpi48GQsfBYRWEE7Yqx8FhFYQTtihklziELHK3cSq766jtLgiR9d6sRHiyPfAy9o3UuxjX5&_nc_ohc=tAWHS0VarZwAX8NT3MK&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfBF3VwJP1O6oNHT1_e8dZ0IcFe3ViBflmyWAvwe2hiGdQ&oe=64F46C1B' />
                                <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/344352898_945978666748506_5952695480782225878_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHjx8eBpbZB_-ivIZ5aMBbTJDWTBZsB0xckNZMFmwHTF0skBK5YPXCbTD_dtgxGew7TMzKxG3tjiT1_eLdnsV9Q&_nc_ohc=i610W53hmHgAX9xgV48&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfBTQAp4F542dyF8FxgSWR1o9_4neGTQiY1XhC0UCnNE7w&oe=64D3FB5E' />
                                <div className="col-span-3">
                                    <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t1.6435-9/129761434_3874770562554538_7036390333162665258_n.jpg?_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHvYaExEWR3sPdldwVCeA2XjDFLj3KuwAiMMUuPcq7ACBUTUnqCWtT1LwJluLatalQsirjoSwOOu6siTzVztgEf&_nc_ohc=yhFkIm-fzi0AX9WUq9i&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfDwcxWsD9t4tqLcIPySZYUAGXHb3NaW7PaYyJI5TrO-_g&oe=64F44D36' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mx-auto max-w-2xl py-20 '>
                        <div className='gap-4 grid grid-cols-2 justify-items-center'>
                            <div className='grid bg-opacity-10 bg-black w-full'>
                                <p className=' self-center w-full text-white text-xl text-center'>อาหารเลี้ยงพระ</p>
                            </div>
                            <div className='grid gap-4'>
                                <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t1.6435-9/146141324_4053391534692439_3668679367398325018_n.jpg?_nc_cat=110&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFS_Zb6HGGfil2GRT1deeUx3yqIcz5NnzrfKohzPk2fOg5wRrsi2oMEWN6p2evXvdJWzj7alrGt8bMfBMAbXC4l&_nc_ohc=WPAFbBPOJDIAX8WaDZB&_nc_oc=AQmCTjpvldpTSGCG0HfSAEtZFiSvw5SmfnwM-Lz166BVtZ6zyVMv4jy2gy4hQt7ZJndGGYEhZdsmPIE-wn02Nstt&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfA8LZmObf4XqfV27f7laPvcosXTKcNGnefRjQSzbfLWEQ&oe=64F70624' />
                                <Image className='h-0.5' src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/313404506_550085150457864_2807184038954719755_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG18F4q3pUbqVbboXIa5ECpzzLvZsY5FebPMu9mxjkV5gfH-o7GDU81xFzRefYW_y23QhKB67JQI7c_q2zEzDRF&_nc_ohc=u6mWNSRiV4EAX8bPyq4&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfBXj43zUnVqfGc7L-03WyuedzXag9TG5OkSRXgAO5GXhQ&oe=64D3F297' />
                            </div>
                        </div>
                    </div>

                    <div className='bg-opacity-20 bg-gray-950'>
                        <div className='mx-auto max-w-2xl py-20 '>
                            <div className='gap-4 grid grid-cols-2 justify-items-center'>
                                <div className='grid gap-4'>
                                    <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t31.18172-8/26678419_1753089618055987_7622973342080901164_o.jpg?_nc_cat=110&cb=99be929b-3346023f&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeFGf9ZIoBt7MWpk5YBg_zfvfiwAwElfDt5-LADASV8O3la0fjX99kIY2aHrWcjaAtHpQhumDuGuM-r0FFUoLJdI&_nc_ohc=C2lv5-D0BF0AX8svx2l&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfDRr_8rHst3y0kiZ5rNAVYxpFD4zjo1mWPdZ_7RBJXLXg&oe=64F71262' />
                                    <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t1.6435-9/151253282_4088209471210645_5835683219001251246_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGa4RgFNlXWozX3bFVVLislreN_vhZ0hR6t43--FnSFHrlKHjwtP9KZlmUg9QJEvnS18QJ439ibsY9oA7Q-ZBLA&_nc_ohc=9bAx5xBSXaYAX8nHS0k&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfBUT0DFd0EzRjM_XNEkCQKtugaXkIRGM5TDqWxhxlcf0g&oe=64F71037' />
                                </div>
                                <div className='grid bg-opacity-10 bg-black w-full'>
                                    <p className=' self-center w-full text-white text-xl text-center'>ของหวาน</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=' bg-red-700 '>
                    <div className='text-white col-span2 md:col-span-1 text-2xl py-10 max-w-5xl mx-10 md:mx-auto font-mono'>
                        <p>ครูติ้งโต๊ะจีน</p>
                        <p className='text-sm'>รับจัดโต๊ะจีนและบุฟเฟต์ในจังหวัดเลย</p>
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
