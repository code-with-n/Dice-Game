const Pages =({val})=>{
    return<>
        if (val==1) {
            console.log("first page will be printed")
        }else if( val==2){
            console.log("second page print")
        }else if(val==3){
           console.log("third page will be prinnted")
        }else if (val==4) {
            console.log("fourth page will be printed")
        }else if (val ==5) {
            console.log("6tb page will be printed")
        }
    </>
}

export default Pages;