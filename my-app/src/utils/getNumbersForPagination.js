const getNumbersForPagination = (length,postPerPage,currrentPage)=>{
    const pages = [];
    console.log(length);
    console.log(postPerPage);
    const numberOfPages = Math.ceil(length/postPerPage);
    console.log(numberOfPages);
    for(let i=1;i<numberOfPages+1;i++){
        console.log(i);
        pages.push(i);
    }
    console.log(pages);
    console.log(currrentPage);
    // console.log(length);
    if(currrentPage <4 && pages.length<4){
        console.log("аааааааааааааааааааааааа");
        return [pages[0],pages[1],pages[2]]
    }
    else if(currrentPage<3 && pages.length>3){
        return [pages[0],pages[1],pages[2],"...",pages[pages.length-1]];
    }
    else if(currrentPage<pages[pages.length-2]){
        return [pages[0],"...",pages[currrentPage-2],pages[currrentPage-1],pages[currrentPage],"...",pages[pages.length-1]];
    }
    else{
        return [pages[0],"...",pages[currrentPage-2],pages[currrentPage-1],pages[currrentPage]];
    }
}

export default getNumbersForPagination;