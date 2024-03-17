const handlerBarsContext = {
    "/index.html": {
        "title": "Home",
    },
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;