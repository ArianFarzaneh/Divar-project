import El from "../../library/El";


const Navbar = () => {
    return ( 
        El({
        element:'nav',
        className:"md:w-12/12 md:h-16 md:bg-white md:flex md:border-b-[1px] md:border-gray-200",
        child:[
            El({
                element:"div",
                className:"md:w-[32%] pt-2 pl-2 flex w-0",
                child:[
                    El({
                        element:"button",
                        className:"md:w-4/12 md:bg-red-800 md:text-white md:h-10 md:rounded-md md:mr-2 md:font-bold md:hover:bg-red-700 md:block hidden",
                        child:"ثبت آگهی"
                        
                    }
                    ),

                    El({
                        element:"button",
                        className:"w-3/12 bg-white pt-1 text-gray-500 h-10 rounded-md mr-2 text-[80%] hover:bg-[#F5F5F5] md:block hidden",
                        child:"پشتیبانی"
                        
                    }
                    ),

                    El({
                        element:"button",
                        className:"md:w-2/12 md:bg-white md:flex md:text-gray-500 md:h-10 md:rounded-md md:mr-2 md:pl-4 md:pt-2 md:hover:bg-[#F5F5F5] md:block hidden",
                        child:[
                            "چت",
                            El({
                                element:"img",
                                className:"w-3/12 ml-2 mt-1",
                                src:"../../../images/chatbubble-outline.svg",
                                child:""
                            })
                        ]
                        
                    }
                    ),

                    El({
                        element:"button",
                        className:"md:w-3/12 md:bg-white md:flex md:text-gray-500 md:h-10 md:rounded-md md:mr-2 md:pl-4 md:pt-3 md:text-[80%] md:hover:bg-[#F5F5F5] md:block hidden",
                        child:[
                            "دیوار من",
                            El({
                                element:"img",
                                className:"w-2/12 ml-2",
                                src:"../../../images/person-outline.svg",
                                child:""
                            })
                        ]
                        
                    }
                    )
                ]
            }
            ),

            El({
                element:"div",
                className:"md:w-[68%] md:pl-40 md:pt-3 md:flex w-[100%]",
                child:[
                    El({
                        element:"input",
                        className:"h-10 md:w-7/12 rounded-sm bg-[#F5F5F5] w-[100%]",
                        dir:"rtl",
                        placeholder:"          جستجو در همه آگهی ها"
                    }),

                    El({
                        element:"img",
                        className:"md:absolute md:w-4 md:right-[24%] md:top-6 md:block hidden w-0",
                        src:"../../../images/search-outline.svg",
                        child:""
                    }),

                    El({
                        element:"button",
                        className:"md:w-[13%] md:bg-white md:flex md:text-gray-500 md:h-10 md:rounded-md md:ml-1 md:mr-2 md:pl-4 md:pt-2 md:text-[80%] md:hover:bg-[#F5F5F5] hidden w-0",
                        child:[
                            El({
                                element:"img",
                                className:"w-2/12 ml-1 mr-1 mt-1",
                                src:"../../../images/chevron-down-outline.svg",
                                child:""
                            }),
                            "دسته ها"
                        ]
                        
                    }
                    ),

                    El({
                        element:"button",
                        className:"md:w-[11%] bg-white md:flex text-gray-500 h-10 rounded-md pl-4 pt-2 text-[80%] hover:bg-[#F5F5F5] hidden w-0",
                        child:[
                            "تهران",
                            El({
                                element:"img",
                                className:"w-4/12 ml-2  ",
                                src:"../../../images/location-outline.svg",
                                child:""
                            })
                        ]
                        
                    }
                    ),
                    El({
                        element:'img',
                        className:"md:ml-16 md:block hidden",
                        src:"../../../images/download.svg"
                    })
                    
                    

                    

                ]
            }
            ),

            
        ]
    }) 
    );
}


 
export default Navbar;
