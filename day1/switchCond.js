function switchCondtion(values)

{

    switch (values) {
        case "Browser":

        console.log("The case is Browser");
        
            break;
    
            case "Shiva" : 
            console.log("The case is Shiva");
            break;

        default:
            console.log("The default one");
            break;
    }

}

switchCondtion("Shiva")
switchCondtion("Browser")
switchCondtion("TESTTTTTt")
switchCondtion("shiva")


//Consulsion : use switch since it is faster than 1f else 

    // if the break is missed under case ,then default is also executed.