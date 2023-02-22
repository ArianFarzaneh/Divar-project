import El from "../../library/El";
// import Button from "../Button";

const Navbar = () => {
    return ( 
        El({
        element:'nav',
        className:"w-12/12 h-16 bg-white flex border-b-2 border-black",
        child:[
            El({
                element:"div",
                className:"w-[32%] pt-2 pl-2 flex",
                child:[
                    El({
                        element:"button",
                        className:"w-4/12 bg-red-800 text-white h-10 rounded-md mr-2 font-bold hover:bg-red-700",
                        child:"ثبت آگهی"
                        
                    }
                    ),

                    El({
                        element:"button",
                        className:"w-3/12 bg-white pt-1 text-gray-500 h-10 rounded-md mr-2 text-[80%] hover:bg-[#F5F5F5]",
                        child:"پشتیبانی"
                        
                    }
                    ),

                    El({
                        element:"button",
                        className:"w-3/12 bg-white flex text-gray-500 h-10 rounded-md mr-2 pl-4 pt-2 hover:bg-[#F5F5F5]",
                        child:[
                            "چت",
                            El({
                                element:"img",
                                className:"w-4/12 ml-2",
                                src:"../../../images/chatbubble-outline.svg",
                                child:""
                            })
                        ]
                        
                    }
                    ),

                    El({
                        element:"button",
                        className:"w-5/12 bg-white flex text-gray-500 h-10 rounded-md mr-2 pl-4 pt-3 text-[80%] hover:bg-[#F5F5F5]",
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
                className:"w-[68%] pl-40 pt-3 flex",
                child:[
                    El({
                        element:"input",
                        className:"h-10 w-7/12 rounded-sm bg-[#F5F5F5]",
                        dir:"rtl",
                        placeholder:"          جستجو در همه آگهی ها"
                    }),

                    El({
                        element:"img",
                        className:"absolute w-4 right-[24%] top-6",
                        src:"../../../images/search-outline.svg",
                        child:""
                    }),

                    El({
                        element:"button",
                        className:"w-[13%] bg-white flex text-gray-500 h-10 rounded-md ml-1 mr-2 pl-4 pt-2 text-[80%] hover:bg-[#F5F5F5]",
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
                        className:"w-[11%] bg-white flex text-gray-500 h-10 rounded-md pl-4 pt-2 text-[80%] hover:bg-[#F5F5F5]",
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
                        className:"ml-16",
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
