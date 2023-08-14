import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className=" mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal border-r"
      >
        <a href="../#" className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          หน้าหลัก
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          โต๊ะจีน
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="../buffet#" className="flex items-center">
          บุฟเฟต์
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="./exam#" className="flex items-center">
          ผลงานโต๊ะจีน
        </a>
      </Typography>
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          จองล่วงหน้า
        </a>
      </Typography> */}
    </ul>
  );

  return (
    <>
      <Navbar style={{ backgroundColor: '#881414' }} className=" sticky lg:h-20 h-max border-0 top z-10 max-w-full rounded-none py-2 px-4 lg:px-40 lg:py-4 shadow-lg">
        <div className=" flex items-center justify-between text-blue-gray-900 ">
          <Typography
            as="a"
            href="#"
            className=" mr-4 cursor-pointer font-medium  first:"
          >
            <div className="lg:-mt-3 px-4 p-1 lg:py-7 bg-red-700 shadow-xl rounded-full">
              <img className=" rounded-full w-16 lg:w-16 lg:absolute lg:-mt-5 lg:-my-7 " src="https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/363308504_1344617566437441_5932084388408334453_n.jpg?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHhhGl7fjztQfNWJzCNBQKY_l8gNiP3Dfj-XyA2I_cN-NLNVJHUQcudpvjq9UluMYG0S71AAn9ifw9mfoukSiYe&_nc_ohc=wO1GVKwHLj0AX-fhszz&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfCnPtC1qR1MLCn8CRSYHu9DFjMGEYogFDXmbhxRAAeHlQ&oe=64C422BC" />
              <div className="ml-20 text-white -mt-7 lg:-mt-0"><p className="lg:-mt-0 -mt-10 lg:pb-0 pb-5" >ครูติ้งโต๊ะจีน</p></div>
            </div>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {/* <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Buy Now</span>
            </Button> */}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-white"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          {/* <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button> */}
        </MobileNav>
      </Navbar>
      <div className=" w-full bg-red-950 h-4 rounded-b-full"></div>
    </>
  );
}