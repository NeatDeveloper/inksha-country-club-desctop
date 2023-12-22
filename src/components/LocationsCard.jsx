import React from "react";
import { v4 as uuid4 } from 'uuid';
import { m } from "framer-motion";
import LocationArrow from './icons/LocationArrow';
import { Link } from "react-router-dom";

const heading = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const LocationsCard = ({ arrayData }) => {

    return (
        <m.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={heading}
            className="flex flex-wrap justify-center gap-x-8 items-center md:gap-y-20 gap-y-8 3xl:pr-[90px] mt-6">
            {
                arrayData.map((el, i) => (
                    <Link key={uuid4()} to={el.link}>
                        <m.div variants={el.variant} className="3xl:w-[830px] md:w-[620px] w-[380px] relative group cursor-pointer">
                            {/*<picture>*/}
                            {/*    <source srcSet={`${el.imgAvif} 1x`} type="image/avif" />*/}
                            {/*    <img className="absolute 3xl:h-auto md:h-[260px] h-[170px] left-0 bottom-0" src={el.imgWebp} alt={el.imgAltText} />*/}
                            {/*</picture>*/}
                            <img loading='lazy' className="absolute 3xl:h-auto md:h-[260px] h-[170px] left-0 bottom-0" src={el.imgWebp} alt={el.imgAltText} />
                            <div className="3xl:h-[300px] md:h-[235px] h-[155px] w-full bg-[#221C1C] flex flex-col justify-between border border-[#AB8E67] rounded-[30px] 3xl:pl-[360px] md:pl-[270px] pl-[165px] md:py-6 py-5">
                                <h4 className="text-[#AB8E67] 3xl:text-[38px] md:text-[32px] text-[1.25rem] font-bold">
                                    {el.title}
                                </h4>
                                <div className="flex items-center md:gap-3">
                                    <div className="flex flex-col md:gap-6">
                                        <p className="text-white 3xl:text-[32px] md:text-[26px] font-semibold">До 30 чел</p>
                                        <p className="text-white 3xl:text-[32px] md:text-[26px] font-semibold">от 15 000 руб</p>
                                    </div>
                                    <div className="group-hover:translate-x-4 duration-500 md:w-auto w-[65px]">
                                        <LocationArrow />
                                    </div>
                                </div>
                            </div>
                        </m.div>
                    </Link>
                ))
            }
        </m.div>
    );
}

export default LocationsCard;
