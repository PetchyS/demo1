import { Carousel, Card, Image } from 'antd';
import Example from './Components/navBar';
import FooterTab from './Components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function userMag() {
    return (
        <>
            <header className="shadow" style={{ backgroundColor: '#600c0c' }}>
                <Example className=" top-10" />
            </header>
            <main>
                <div style={{ backgroundColor: '#600c0c' }}>
                    <div className='pt-10 px-5 lg:max-w-7xl mx-auto h-full align-middle justify-center'>
                        <Carousel
                            autoplay
                            dotPosition={'top'}
                            className='shadow-xl'
                        >
                            <Image className='rounded-2xl' alt='image1' src="https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/363341137_1344616363104228_3061851958069331034_n.jpg?_nc_cat=110&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEeSsuvAmCM6JG2ITqcqbYsL_ubyYi2C08v-5vJiLYLT15Q_MO9ubRGWnt-Xb2NFyKvqYsdaZHWwpu_u9G4orhA&_nc_ohc=JnMQmhjnDjIAX8nqxAQ&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfDBzxl58BpyIZ6CO7SgRvzEJzVvC_YeRjJQbIaUMn_2OA&oe=64D25C02" />
                            <Image className='rounded-2xl' alt='image2' src="https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/363332909_1344616336437564_2114311396288368427_n.jpg?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHkEuLtzvPIN7quRDCK1WVhtMGaUlwGZw-0wZpSXAZnD-3zWPTYLcaqfv9wuwwBjctYGPGOEaULG43pSQyYGaZ-&_nc_ohc=gyAG5mmS87cAX-G3klH&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfCWt5jSJvKy_acBelloLQB8mXuUgSV3csEgNO0WvVW9_Q&oe=64D16B7A" />
                            <Image className='rounded-2xl' alt='image3' src="https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/365557652_1350609942504870_2883575434933010762_n.jpg?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEzlFIXWdDwHJrbb8ZKa89aMcXlXn3BN5gxxeVefcE3mCuCckv7r5DNeOQDrEu_qPaAFsHOVsaHKrPQUVlV7mwj&_nc_ohc=Ke1DCoaizFMAX9tzQQd&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfC6qX_Wt1xyicrt2ZMnUKxx6ew1rckwwbdblAdxkNiQeg&oe=64D409E3" />

                        </Carousel>
                    </div>
                    <div className='my-8 mx-10 max-w-xl lg:mx-auto bg-red-900 p-2 px-8 rounded-full'>
                        <hr class="h-px lg:mx-auto max-w-2xl border-slate-300 border-2 dark:bg-gray-700"></hr>
                    </div>
                    <div className=' rounded-ss-full items-center border-0 mx-auto pb-7 lg:pb-16 w-full mt-10  py-6 pt-10 sm:px-6 lg:px-8 h-full' style={{ backgroundColor: '#c01c1c' }}></div>

                </div>
                <Card className=' justify-center py-14 md:flex hidden'>
                    <p className=' text-2xl text-center'>เลือกดูแพ็คเกจสุดคุ้มที่โดนใจ</p>
                    <p className=' text-3xl'>ครูติ้งจัดให้อร่อยคุ้มทุกเมนู</p>
                </Card>
                <div className='grid grid-cols-2 justify-items-center bg-white align-middle py-10'>
                    <a href='#' className=' border-e-2 text-center w-full border-neutral-300'>
                        <p className='text-red-900 text-2xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-150 animate-pulse'>โต๊ะจีน</p>
                    </a>
                    <a href='./buffet#' className='text-red-900 text-2xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-150 animate-pulse'>บุฟเฟต์</a>
                </div>
                <div class="grid grid-cols-3 gap-4 mt-10 max-w-5xl mx-auto mb-24">
                    <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/344352898_945978666748506_5952695480782225878_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHjx8eBpbZB_-ivIZ5aMBbTJDWTBZsB0xckNZMFmwHTF0skBK5YPXCbTD_dtgxGew7TMzKxG3tjiT1_eLdnsV9Q&_nc_ohc=zNnE6EvbIgIAX9nqdO_&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfBFyw0QNtRDlZkLfITV3yU-cOMkbXlMSeL3c8Hrnb436w&oe=64D2011E'/>
                    <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/327719951_676961500779179_8976187200272693738_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGjUPr6sAncv8gTs0llUAWu97ZmOa3reAv3tmY5ret4C1xBVY7bv59Uau-PGMHKn1cWR1HFOtVIy8M1hn5h8c4k&_nc_ohc=oPSmrFvbdiYAX9mpHVH&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfBYu11uzYMafHhtEd3I9VrIGoDNl-CGgC8KbZVyM_XY0Q&oe=64D1570B'/>
                    <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/310975988_527307292735650_244570387955422631_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeESyUlkKiyOk-lutRnGZxhGqQ8IGKUv5F6pDwgYpS_kXqqELjOn3g8TemFJknwjJQ-epmhg69-0pzN-5MRhrndM&_nc_ohc=FJOrgh4VAcYAX-NHF1q&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfCLffXaaH_KaG0IjwlYYEb8oyI-YkaufhJGYMib3H3AmA&oe=64D22269'/>
                    <div className='col-span-3 gap-4 grid grid-cols-3'>
                        <div className='grid'>
                    <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t1.6435-9/132379178_3926110087420585_7781216223625521373_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGHOQUCrilqdFrMQTpi48GQsfBYRWEE7Yqx8FhFYQTtihklziELHK3cSq766jtLgiR9d6sRHiyPfAy9o3UuxjX5&_nc_ohc=tAWHS0VarZwAX8NT3MK&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfBF3VwJP1O6oNHT1_e8dZ0IcFe3ViBflmyWAvwe2hiGdQ&oe=64F46C1B'/>
                    <Image src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t1.6435-9/129853917_3874770582554536_2942357514614465405_n.jpg?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH1UGHqWllEemg-ceJRadLM05FYv0feaX_TkVi_R95pf8BkAZoF1nVbLPZ_7Jr6EO1jlD1_X8spWbDqbzqLd_Jc&_nc_ohc=QG-CMBZ4Rg0AX9o5m6_&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfCzi0B_dS-ROhpXn9aHGY4c_1CQ7yDCMamiW1tNkwLBiQ&oe=64F44D6F'/>
                        </div>
                    <Image class="col-span-2" src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/249394248_4867983333233251_324323422271603565_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGND2lTd6o4l_NukIaYYRN_NEXfQD98-hI0Rd9AP3z6Eu8GE8SmCqBwM5lCDUbiX5QKSgVWGopWLJuM77sTSSpE&_nc_ohc=QvRsDnQy-CIAX8DZjXg&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfB7KuvgiPgF7v38N9bLIxGRGBbaOODeycHPNYiy-t1HuQ&oe=64D2687E'/>
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <div className=' scale-75 md:scale-75 xl:mt-0 mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 rounded-2xl shadow-lg shadow-black bg-red-900 '>
                        <div className='text-white text-2xl p-5 mt-5 justify-self-center'>
                            <p>ครูติ้งโต๊ะจีน</p>
                            <p className='text-sm'>รับจัดโต๊ะจีนและบุฟเฟต์ในจังหวัดเลย</p>
                            <img className='w-auto lg:w-60 mt-8 rounded-xl' src='https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/363305974_1344616423104222_8123171467612240550_n.jpg?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFenEKNjVm8BJCVwlTJY3_ZzvBrFQt9bz7O8GsVC31vPkYvVakHrR7WkE6iYz7Ee1R1a7yegyQMT8rzJwmQcpQQ&_nc_ohc=M05wGtgVboQAX91rTgs&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfDJ20flgaMyoGNZ8W8miB-VoBhdq8WTMrJkHixxeTuu7g&oe=64C46ABA' />
                        </div>
                    </div>
                    <div className='flex justify-center h-full align-middle'>
                        <div className=' grid-rows-3 self-center '>
                            <p className=' text-3xl '>อร่อย สะอาด ถูกปากแน่นอน</p>
                            <p className=' w-full text-2xl text-center md:scale-100 scale-75'>จะบุฟเฟต์หรือโต๊ะจีนก็คุ้ม ลองเลือกคำนวณรายการได้เลย</p>
                        </div>
                    </div>
                </div>
                <FooterTab />
            </main>
        </>

    )
}
